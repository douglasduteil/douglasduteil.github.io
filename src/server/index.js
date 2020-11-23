//

import Debug from 'debug'
import fse from 'fs-extra'
import { runInContext, createContext } from 'vm'
import hyper from 'viperhtml'
import jss from '../jss'
import { app } from '../app/app'
import styles from '../ciritcal.scss'
import hyperhtmlHtmlViewsLoader from 'hyperhtml-html-views-loader'

//

app.hyper = hyper

const log = Debug('my:server:main')
const templatePath = 'src/template.html'

const sheet = jss.createStyleSheet(styles)

//

export const routes = [
  '/index.html',
  '/me.html',
  '/achievements.html',
  '/rockets.html',
  '/contact.html',
]

export const url = 'https://douglasduteil.github.io'

export default async () => {
  // log('loading template from', templatePath)

  const templateFileBuffer = await fse.readFile(templatePath)
  const htmlifyTemplate = hyperhtmlHtmlViewsLoader
    .call({}, templateFileBuffer.toString())
    .replace(/^module.exports = "/, '`')
    .replace(/";$/, '`')
  const sandbox = createContext({})
  const hyperTemplate = runInContext(
    `(render, model) => render${htmlifyTemplate}`,
    sandbox
  )

  return async (req, resp, next) => {
    const { url, method } = req

    if (/^(?!GET|HEAD).*$/.test(method)) {
      return next()
    }

    if (!['/', ...routes].includes(url)) {
      return next()
    }

    log({ url, method })
    const hyperResponse = await app.toString(url)
    // log({ hyperResponse })
    resp.send(
      hyperTemplate(hyper, {
        ...hyperResponse,
        criticalCss: `<style>${sheet.toString()}</style>`,
      }).toString()
    )
  }
}
