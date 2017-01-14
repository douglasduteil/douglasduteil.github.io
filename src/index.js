//

const {h, Component} = require('dio.js')

const {Menu} = require('./partials/menu.js')
const {FakeTyper} = require('./components/fake-typer.js')

const infos = [
  {
    iconName: 'map-marker',
    text: 'Paris, France'
  },
  {
    iconName: 'github-alt',
    text: 'AngularUI Member'
  },
  {
    iconName: 'suitcase',
    text: 'Front End Developer at SFEIR Paris'
  }
]

const words = [
  '==========',
  'Contributor',
  'Developer',
  'Musician',
  'Gamer',
  'Sleeper',
  'Jogger'
]

//

module.exports = class Me extends Component {
  render () {
    return [
      Menu,
      h('div', {className: 'h100 me'}, meList())
    ]
  }
}

//

function meList () {
  return h('div', {className: 'me__list-container h100'},
    h('ul', {className: 'f-col me__list'},
      h('li',
        h('h1',
          'Douglas Duteil',
          h(FakeTyper,
            {
              cursor: '|',
              prefix: '#',
              words
            }
          )
        )
      ),
      ...meMyInfos(),
      h('li', {className: 'old-browser'},
        h('i', {className: 'fa fa-thumbs-o-down'}),
        h('a', {href: 'http://whatbrowser.org/', rel: 'noopener', target: '_blank'},
          'Your browser sucks !'
        )
      )
    )
  )
}

function meMyInfos () {
  return infos.map(({iconName, text}) =>
    h('li', {className: 'f-1'},
      h('i', {className: `fa fa-${iconName}`}),
      h('div', text)
    )
  )
}
