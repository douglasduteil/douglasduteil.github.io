//

const { resolve } = require('path')
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default
const { GenerateSW } = require('workbox-webpack-plugin')
const { RawSource } = require('webpack-sources')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const config = require('./webpack.config.base')

const ssrMiddleware = require(resolve(
  process.cwd(),
  'dist',
  'server',
  'main.js'
))
const { default: middleware, url, routes } = ssrMiddleware.ssrMiddleware

module.exports = (env, argv) => {
  const baseConfig = config({ ...env, mode: 'production' }, argv)
  return {
    ...baseConfig,
    mode: 'production',
    devtool: false,
    plugins: [
      ...baseConfig.plugins,
      new SSRStaticRenderer({
        outputPath: resolve(process.cwd(), 'dist'),
      }),
      new GenerateSW({
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /https:\/\/google-analytics\.com\/analytics.js/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-analytics-cache',
            },
          },
          {
            urlPattern: /https:\/\/ajax\.googleapis\.com.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-ajax-cache',
            },
          },
          {
            urlPattern: /https:\/\/fonts\.(googleapis|gstatic)\.com.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-font-cache',
            },
          },
        ],
      }),
      new SitemapPlugin(url, routes),
    ],
  }
}

class SSRStaticRenderer {
  constructor({ outputPath } = {}) {
    this.outputPath = outputPath
    this.name = 'SSRStaticRenderer'
  }

  apply(compiler) {
    const { name } = this
    let ssr
    const next = () => {
      throw new Error('unexpected route to create')
    }
    compiler.hooks.beforeCompile.tapAsync(name, async (params, callback) => {
      ssr = await middleware()
      return callback()
    })

    compiler.hooks.thisCompilation.tap(name, (compilation) => {
      const logger = compilation.getLogger(name)
      compilation.hooks.additionalAssets.tapAsync(name, async (callback) => {
        logger.log('starting to add statc ssr rendering...')
        await Promise.all(
          routes.map(toContext).map(async (context) => {
            await ssr(context.request, context.response, next)
            const filename = context.request.url.replace('/', '')
            const source = context.response.body
            logger.log(`writing '${filename}' to compilation assets...`)
            const info = {}
            compilation.emitAsset(filename, new RawSource(source), info)
          })
        )
        return callback()
      })
    })
  }
}

function toContext(url) {
  return {
    response: {
      send(body) {
        this.body = body
      },
    },
    request: {
      url,
      method: 'GET',
    },
  }
}
