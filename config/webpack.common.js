'use strict'

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const {RenderVDOMtoStringPlugin} = require('render-vdom-to-string-plugin')

const {
  LoaderOptionsPlugin,
  ProgressPlugin,

  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack')

//

module.exports = function (env) {

  const pp = (name) => name.replace('[.min]', env.production ? '.min' : '')
  const extractCriticalCss = new ExtractTextPlugin(pp('critical[.min].css'))
  const extractModernCss = new ExtractTextPlugin(pp('modern[.min].css'))
  const extractOldCss = new ExtractTextPlugin(pp('old[.min].css'))

  return {
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var'
    },

    entry: {
      'critical': './src/critical.js',
      'polyfill': './src/polyfill.js',
      'browser': './src/browser.js'
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCriticalCss.extract([
            'css-loader'
          ])
        },
        {
          test: /fonts\/.*$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[name].[ext]',
                outputPath: 'font/'
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new ProgressPlugin(),

      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.1.html'
      }),

      new CommonsChunkPlugin({
        name: 'vendor'
      }),

      new CommonsChunkPlugin({
        name: 'webpack__loader'
      }),

      new CopyWebpackPlugin([
        { from: './src/assets' }
      ]),

      /*
          new RenderVDOMtoStringPlugin({
            entries: './src/pages/*.js'
          }),*/
    ]
  }
}
