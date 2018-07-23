//import hyper from 'hyperhtml';
import nanobus from 'nanobus';
import nanotiming from 'nanotiming';
import nanorouter from 'nanorouter';
import nanolocation from 'nanolocation';
import nanoraf from 'nanoraf';
import onIdle from 'on-idle';

export class HyperChoo {
  constructor(hyper) {
    this.prefix = 'hyperchoo';
    this.emitter = nanobus(`${this.prefix}.emitter`);
    this.router = nanorouter({ curry: true });
    this.hyper = hyper;
    this.state = {};
    this.render = null;
  }

  destroy() {
    this.state = null;
    this.router = null;
    // Important to prevent memory leak due to hyper binding
    this.render = null;

    this.emitter.emit('destroy');
    this.emitter.removeAllListeners();
    this.emitter = null;
  }

  start() {
    this.state.href = nanolocation();

    this.emitter.prependListener('render', () => {
      const renderTiming = nanotiming(`${this.prefix}.render`);
      onIdle(() => {
        const tree = this.router.emit(this.state.href);

        nanoraf(() => {
          const hyperHtmlTiming = nanotiming(`${this.prefix}.hyperHtml`);
          this.render`${tree()}`;
          hyperHtmlTiming();
        })();
      });
      renderTiming();
    });
  }

  use(cb) {
    const msg = `${this.prefix}.use`;
    const cbName = cb.storeName || cb.name;
    const timingName = cbName ? msg + '(' + cbName + ')' : msg;
    const useTiming = nanotiming(timingName);
    cb(this.state, this.emitter, this);
    useTiming();
  }

  route(route, handler) {
    this.router.on(route, params => {
      return () => {
        this.state.params = params;
        this.state.route = route;
        const routeTiming = nanotiming(`${this.prefix}.route("${route}")`);
        var res = handler(this.state, this.emitter.emit.bind(this.emitter));
        routeTiming();
        return res;
      };
    });
  }

  mount(selector) {
    const mountTiming = nanotiming(`${this.prefix}.mount`);

    this.start();

    const hyperNodeTiming = nanotiming(`${this.prefix}.hyper(node)`);
    this.render = this.hyper(document.querySelector(selector));
    hyperNodeTiming();

    this.emitter.emit('render');
    mountTiming();
  }
}
