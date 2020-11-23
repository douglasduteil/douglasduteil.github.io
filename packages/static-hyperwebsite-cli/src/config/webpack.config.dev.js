//

const { resolve } = require('path')
const debounce = require('lodash.debounce')

const config = require('./webpack.config.base')

module.exports = (env, argv) => ({
  ...config({ ...env, mode: 'development' }, argv),
  mode: 'development',
  devtool: 'eval',

  devServer: {
    before: (app) => {
      // this example assumes router must be added last
      app.use(async (...args) => {
        const ssrMiddleware = require(resolve(
          process.cwd(),
          'dist',
          'server',
          'main.js'
        ))
        const ssr = await ssrMiddleware.ssrMiddleware.default()
        await ssr(...args)
      })
      const chokidar = require('chokidar')
      const watcher = chokidar.watch('./dist/server')
      watcher.on('ready', () => {
        watcher.on(
          'all',
          debounce(() => {
            console.log('Clearing /dist/server/ module cache from server')
            Object.keys(require.cache).forEach((id) => {
              if (/[/\\]dist[/\\]server[/\\]/.test(id)) delete require.cache[id]
            })
          }),
          500
        )
      })
    },
    contentBase: resolve(process.cwd(), 'dist'),
    overlay: true,
    serveIndex: false,
    compress: true,
    stats: 'errors-only',
  },
})
