//

const { resolve } = require('path')
const debounce = require('lodash.debounce')

const config = require('./webpack.config.base')

module.exports = (env, argv) => ({
  ...config({ ...env, mode: 'development' }, argv),
  mode: 'development',
  devtool: 'eval',
  //
  devServer: {
    after: app => {
      // this example assumes router must be added last
      app.use(async (...args) => {
        const ssrMiddleware = require(resolve(
          process.cwd(),
          'dist',
          'server',
          'main.js'
        )).default
        const ssr = await ssrMiddleware()

        await ssr(...args)
      })

      var chokidar = require('chokidar')
      var watcher = chokidar.watch('./dist/server')
      watcher.on('ready', function() {
        watcher.on('all', debounce(function() {
          console.log('Clearing /dist/server/ module cache from server')
          Object.keys(require.cache).forEach(function(id) {
            if (/[/\\]dist[/\\]server[/\\]/.test(id)) delete require.cache[id]
          })
        }), 500)
      })
    },
    contentBase: resolve(process.cwd(), 'dist'),
    overlay: true,
    stats: 'errors-only'
  }
})
