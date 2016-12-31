//

const {h, Component} = require('dio.js')

const {Menu, NavBarBack} = require('./partials/menu.js')
const {Watermark} = require('./partials/watermark.js')

//

const achievements = [
  year(2014),
  talk({
    where: 'Talk at the ngParis meetup',
    title: 'Waaa Again !?',
    link: {
      href: '//www.meetup.com/AngularJS-Paris/events/185603592/',
      name: 'Meetup AngularJS #13 @SFEIR'
    }
  }),
  talk({
    where: 'Talk at the ngParis meetup',
    title: 'Input[Range] over 9000',
    link: {
      href: '//www.meetup.com/AngularJS-Paris/events/185603592/',
      name: 'Meetup AngularJS #12 @BeMyApp'
    }
  }),
  talk({
    where: 'Talk at the ngParis meetup',
    title: 'We need to make UI.Utils util again ! ',
    link: {
      href: '//www.meetup.com/AngularJS-Paris/events/165733502/',
      name: 'Meetup AngularJS #8 @SFEIR'
    }
  }),
  year(2013),
  talk({
    where: 'Talk at the ngParis meetup',
    title: 'WaaaAnimation',
    link: {
      href: '//www.meetup.com/AngularJS-Paris/events/147070122/',
      name: 'Meetup #5 @Deezer'
    }
  }),
  item({
    body: 'Software development company',
    icon: 'suitcase',
    title: 'Join SFEIR Paris'
  }),
  item({
    body: 'MSc Human-Compute',
    icon: 'graduation-cap',
    title: ['Graduated from ', h('span', {className: 'no-wrap'}, 'Paris 8')]
  }),
  item({
    body: 'A open source organisation that buld widgets and directives for AngularJS',
    icon: 'github-alt',
    title: 'Join Angular UI'
  })
]

//

module.exports = class Achievements extends Component {
  render () {
    return [
      Menu,
      h('div', {className: 'h100 achievements'},
        h('div', {className: 'section__container'},
          h('h1', {className: 'section-title'}, 'Achievements'),

          h('div', {className: 'achievements__abs-content'},
            h('ul', {className: 'achievements-timeline'}, ...achievements)
          )
        )
      ),
      h(Watermark, {icon: 'trophy'}),
      NavBarBack
    ]
  }
}

//

function year (year) {
  return h('li',
    h('time', {
      className: 'achievements-timeline__year',
      datetime: `${year}-01-01T00:00`
    },
      year
    )
  )
}

function talk (event) {
  return item({
    icon: 'users',
    title: event.where,
    body: talkEventBody(event)
  })
}

function talkEventBody ({title, link: {href, name}}) {
  return [
    h('p',
      h('span', {innerHTML: '&laquo;'}),
      h('em', title),
      h('span', {innerHTML: '&raquo;'}),
      h('br'),
      h('br'),
      h('a', {href}, name)
    )
  ]
}

//

function item (event) {
  return h('li', {className: 'achievements-timeline__li'},
    h('i', {className: `fa fa-${event.icon}`}),
    h('div', {className: 'achievements-timeline__body'},
      h('h3', event.title),
      h('p', event.body)
    )
  )
}