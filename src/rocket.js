//

const {h, Component} = require('dio.js')

const {Menu, NavBarBack} = require('./partials/menu.js')
const {Watermark} = require('./partials/watermark.js')

//

const rockets = [
  { name: 'Github', href: 'https://github.com/douglasduteil' },
  { name: 'Plunker', href: 'http://plnkr.co/users/douglasduteil' },
  { name: 'CSSDesk', href: 'http://cssdeck.com/user/DouglasDuteil' },
  { name: 'CodePen', href: 'http://codepen.io/douglasdutei' }
]

//

module.exports = class Rocket extends Component {
  render () {
    return [
      Menu,
      h('div', {className: 'h100 rocket'},
        h('div', {className: 'section__container'},
          h('h1', {className: 'section-title'}, 'Rockets'),

          h('div', {className: 'rocket__content'},
            h('ul', {className: 'rocket__list'},
              rockets.map(channelToLiLink)
            )
          )
        )
      ),
      h(Watermark, {icon: 'rocket'}),
      h('div', {className: 'rocket__nav-back'})
    ]
  }
}

//

function channelToLiLink ({href, name}) {
  return h('li', h('a', {href, target: '_blank'}, h('div', name)))
}
