//

const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

const ssrMiddleware = resolve(process.cwd(), 'server', 'main.js');

module.exports = {
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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer')({ env: '> 1%, Last 2 versions, iOS 8' })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [resolve(process.cwd(), 'src')]
            }
          }
        ]
      }
    ]
  },

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
};
