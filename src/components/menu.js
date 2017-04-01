//

exports.Menu = function Menu (h) {
  const router = global.routerApi || {link: function () {}}

  const onClick = (fn) => {
    return function _onClick (e) {
      if (e.ctrlKey) {
        // allow ctrl click to open in tabs
        return
      }

      e.preventDefault()
      fn(e)
    }
  }

  return props =>
    h('nav', {
      className: 'navbar'
    }, [
      `
      `,
      h('a', {
        href: 'index.html',
        onClick: onClick(router.link('href')),
        className: 'f-1'
      }, [
        h('i', {
          className: 'fa fa-user'
        })
      ]),
      `
      `,
      h('a', {
        href: 'achievements.html',
        onClick: onClick(router.link('href')),
        className: 'f-1'
      }, [
        h('i', {
          className: 'fa fa-trophy'
        })
      ]),
      `
      `,
      h('a', {
        href: 'rocket.html',
        onClick: onClick(router.link('href')),
        className: 'f-1'
      }, [
        h('i', {
          className: 'fa fa-rocket'
        })
      ]),
      `
      `,
      h('a', {
        href: 'contact.html',
        onClick: onClick(router.link('href')),
        className: 'f-1'
      }, [
        h('i', {
          className: 'fa fa-comments-o'
        })
      ])
    ])
}
