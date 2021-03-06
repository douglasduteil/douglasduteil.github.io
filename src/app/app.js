//

import { HyperChoo } from '@hyperchoo/core'
import rootLayout from './layout'

export const app = new HyperChoo({ defaultRoute: '/me' })

app.route('/', () => app.router.emit('/me.html'))
app.route('/index.html', () => app.router.emit('/me.html'))

app.route('/me.html', async (state, emit) => {
  const { default: template } = await import('./me.js')
  const main = rootLayout(app.hyper.wire, state)
  return {
    title: 'Me',
    body: main({
      backgoundColor: 'transparent',
      children: template(app, state, emit),
    }),
  }
})

app.route('/achievements.html', async (state, emit) => {
  const { default: template, backgoundColor } = await import(
    './achievements.js'
  )

  const main = rootLayout(app.hyper.wire, state)
  return {
    title: 'Achievements of',
    body: main({
      backgoundColor,
      children: template(app, state, emit),
    }),
  }
})

app.route('/rockets.html', async (state, emit) => {
  const { default: template, backgoundColor } = await import('./rockets.js')

  const main = rootLayout(app.hyper.wire, state)
  return {
    title: 'Rockets of',
    body: main({
      backgoundColor,
      children: template(app, state, emit),
    }),
  }
})

app.route('/contact.html', async (state, emit) => {
  const { default: template, backgoundColor } = await import('./contact.js')

  const main = rootLayout(app.hyper.wire, state)
  return {
    title: 'Contacts of',
    body: main({
      backgoundColor,
      children: template(app, state, emit),
    }),
  }
})
