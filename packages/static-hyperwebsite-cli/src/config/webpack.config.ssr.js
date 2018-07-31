//

const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')
const config = require('./webpack.config.base')

const ssrMiddleware = resolve(process.cwd(), 'src', 'server', 'index.js')

module.exports = (env, argv) => ({
  ...config({ ...env, mode: 'development' }, argv),
  entry: ssrMiddleware,
  mode: 'development',
  devtool: false,
  externals: [
    nodeExternals({
      whitelist: ['@hyperchoo/core', '@hyperchoo/devtools']
    })
  ],
  target: 'node',
  output: {
    path: resolve(process.cwd(), 'dist', 'server'),
    library: 'ssrMiddleware',
    libraryTarget: 'commonjs2'
  },

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
})
