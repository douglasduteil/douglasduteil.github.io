//

exports.Menu = h => props =>
  h('nav', {
    'className': 'navbar'
  }, [
    `
    `,
    h('a', {
      'href': 'index.html',
      'className': 'f-1'
    }, [
      h('i', {
        'className': 'fa fa-user'
      })
    ]),
    `
    `,
    h('a', {
      'href': 'achievements.html',
      'className': 'f-1'
    }, [
      h('i', {
        'className': 'fa fa-trophy'
      })
    ]),
    `
    `,
    h('a', {
      'href': 'rocket.html',
      'className': 'f-1'
    }, [
      h('i', {
        'className': 'fa fa-rocket'
      })
    ]),
    `
    `,
    h('a', {
      'href': 'contact.html',
      'className': 'f-1'
    }, [
      h('i', {
        'className': 'fa fa-comments-o'
      })
    ])
  ])

exports.NavBarBack = h => props =>
  h('div', {className: 'achievements__nav-back'})
