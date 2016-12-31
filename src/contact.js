//

const {h, Component} = require('dio.js')

const {Menu, NavBarBack} = require('./partials/menu.js')
const {Watermark} = require('./partials/watermark.js')

//

const communicationChannel = [
  { name: 'Gmail', href: 'mailto:douglasduteil@gmail.com' },
  { name: 'Google +', href: 'https://google.com/+DouglasDuteil' },
  { name: 'Twitter', href: 'https://twitter.com/douglasduteil' },
  { name: 'Facebook', href: 'https://www.facebook.com/douglas.duteil' },
  { name: 'Outlook', href: 'mailto:douglasduteil@outlook.com' }
]

//

module.exports = class Contact extends Component {
  render () {
    return [
      Menu,
      h('div', {className: 'h100 contact'},
        h('div', {className: 'section__container'},
          h('h1', {className: 'section-title'}, 'Contact me'),

          h('div', {className: 'contact__list-container'},
            h('ul', {className: 'contact__list'},
              communicationChannel.map(channelToLiLink)
            )
          )
        )
      ),
      h(Watermark, {icon: 'comments-o'}),
      h('div', {className: 'contact__nav-back'})
    ]
  }
}

//

function channelToLiLink ({href, name}) {
  return h('li', h('a', {href, target: '_blank'}, name))
}
