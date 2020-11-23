// @ts-check

import nanobus from 'nanobus'
import nanotiming from 'nanotiming'
import nanorouter from 'nanorouter'
import nanolocation from 'nanolocation'
import nanoraf from 'nanoraf'
import nanohref from 'nanohref'
// import onIdle from 'on-idle'

const HISTORY_OBJECT = {}
export class HyperChoo {
  constructor({ defaultRoute } = { defaultRoute: '/404' }) {
    this.prefix = 'hyperchoo'
    this.emitter = nanobus(`${this.prefix}.emitter`)
    this.router = nanorouter({
      curry: true,
      default: defaultRoute,
    })
    this.hyper = null
    this.state = {}
    this.render = null
    this.stores = new WeakSet()
  }

  destroy() {
    this.state = null
    this.router = null
    this.stores = null

    // Important to prevent memory leak due to hyper binding
    this.render = null
    this.hyper = null

    this.emitter.emit('destroy')
    this.emitter.removeAllListeners()
    this.emitter = null
  }

  start() {
    this.state.href = nanolocation()

    this.emitter.prependListener('navigate', () => {
      this.state.href = window.location.pathname
      this.emitter.emit('render')
    })

    this.emitter.prependListener('popState', () => {
      this.emitter.emit('navigate')
    })

    this.emitter.prependListener('pushState', (href) => {
      window.history.pushState(HISTORY_OBJECT, null, href)
      this.emitter.emit('navigate')
    })

    this.emitter.prependListener('replaceState', (href) => {
      window.history.replaceState(HISTORY_OBJECT, null, href)
      this.emitter.emit('navigate')
    })

    window.onpopstate = () => this.emitter.emit('popState')

    nanohref((location) => {
      const href = location.href
      if (href === window.location.href) {
        // if (!hash) scrollToAnchor(hash)
        return
      }
      this.emitter.emit('pushState', href)
    })

    this.emitter.prependListener('render', () => {
      const renderTiming = nanotiming(`${this.prefix}.render`)
      const doRender = nanoraf(async () => {
        const tree = await this._prerender(this.state.href)
        this._render(tree)
        renderTiming()
      })

      doRender()
    })
  }

  /**
   *
   * @param { string } href
   */
  async _prerender(href) {
    const resolveTreeTiming = nanotiming(`${this.prefix}.prerender "${href}"`)
    const tree = await this.router.emit(href)
    resolveTreeTiming()
    return tree
  }

  _render(tree) {
    const hyperHtmlTiming = nanotiming(`${this.prefix}.render`)
    const dom = this.render`${tree.body}`
    hyperHtmlTiming()

    if (tree.title && typeof document === 'object') {
      document.title = this.renderTitle(tree.title)
    }

    return dom
  }

  renderTitle(title) {
    return title
  }

  use(cb) {
    if (this.stores.has(cb)) {
      return this
    }

    const msg = `${this.prefix}.use`
    const cbName = cb.storeName || cb.name
    const timingName = cbName ? msg + '(' + cbName + ')' : msg
    const useTiming = nanotiming(timingName)
    cb(this.state, this.emitter, this)
    this.stores.add(cb)
    useTiming()

    return this
  }

  route(route, handler) {
    this.router.on(route, (params) => {
      this.state.params = params
      this.state.route = route
      const routeTiming = nanotiming(`${this.prefix}.route("${route}")`)
      const res = handler(this.state, this.emitter.emit.bind(this.emitter))
      routeTiming()
      return res
    })
  }

  mount(selector) {
    const mountTiming = nanotiming(`${this.prefix}.mount`)

    this.start()

    const hyperNodeTiming = nanotiming(`${this.prefix}.hyper(node)`)
    this.render = this.hyper.bind(document.querySelector(selector))
    hyperNodeTiming()

    this.emitter.emit('render')
    mountTiming()
  }

  /**
   * @param {string} location
   * @param {object} state
   */
  async toString(location, state) {
    Object.assign(this.state, state, { href: location })
    const tree = await this._prerender(this.state.href)
    return tree
  }
}
