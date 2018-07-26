//

const { resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  output: {},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
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
      },
      {
        // HACK(douglasduteil): Some files need "require" T-T
        //
        // It took me hours to figure this sh*t out...
        // The files that do require "require" can't exist in
        // the 'javascript/esm' world.
        // It have to be 'javascript/auto' or something...
        //
        test: /(me)\.js$/,
        type: 'javascript/auto',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
