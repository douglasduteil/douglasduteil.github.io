//

const { resolve } = require('path')
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default
const { GenerateSW } = require('workbox-webpack-plugin')
const config = require('./webpack.config.base')

module.exports = (env, argv) => {
  const baseConfig = config({ ...env, mode: 'production' }, argv)
  return {
    ...baseConfig,
    mode: 'production',
    devtool: 'none',
    plugins: [
      ...baseConfig.plugins, // new PrepackWebpackPlugin({}),
      new SSRStaticRenderer({
        outputPath: resolve(process.cwd(), 'dist')
      }),
      new GenerateSW({
        runtimeCaching: [
          {
            urlPattern: /https:\/\/ajax\.googleapis\.com.*/,
            handler: 'cacheFirst',
            options: {
              cacheName: 'google-ajax-cache'
            }
          },
          {
            urlPattern: /https:\/\/fonts\.googleapis\.com.*/,
            handler: 'cacheFirst',
            options: {
              cacheName: 'google-font-cache'
            }
          }
        ]
      })
    ]
  }
  /*
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
  */
}

function SSRStaticRenderer({ outputPath } = {}) {
  this.apply = compiler => {
    let ssr = null

    const { default: middleware, routes } = require(resolve(
      process.cwd(),
      'dist',
      'server',
      'main.js'
    ))

    compiler.hooks.run.tapPromise('SSRStaticRenderer', async compiler => {
      ssr = await middleware()
    })

    compiler.hooks.emit.tapPromise('SSRStaticRenderer', async compiler => {
      const next = () => {
        throw new Error('unexpected route to create')
      }

      return Promise.all(
        routes.map(toContext).map(async context => {
          await ssr(context, next)
          compiler.assets[context.request.url.replace('/', '')] = {
            size: () => context.body.length,
            source: () => context.body
          }
        })
      )
    })
  }
}

function toContext(url) {
  return {
    request: {
      url,
      method: 'GET'
    }
  }
}
