//

const htmlLoader = require('html-loader')

module.exports = (context) => {
  const config = context.config || {}

  config.attrs = false
  config.exportAsEs6Default = true

  const htmlLoaderResult = htmlLoader(context)
  return htmlLoaderResult
}
