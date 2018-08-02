//

import hyper from 'hyperhtml'
// @if BUILD_ENV='development'
import { devtools } from '@hyperchoo/devtools'
// @endif

import { app } from './app/app'

//

// @if BUILD_ENV='development'
app.use(devtools)
// @endif

app.hyper = hyper

app.renderTitle = title => ` ${title ? `${title} ` : ''} Douglas Duteil`

const bootstrap = () => {
  app.mount('root')

  // @if BUILD_ENV='production'
  import(/* webpackChunkName: "stalker" */ './autotrack.js')
  // @endif
}

window.addEventListener('load', setTimeout.bind(null, bootstrap, 0))
