'use strict'

const path = require('path')

const {
  ProgressPlugin,

  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//

module.exports = function (env) {
  const pp = (name) => name.replace('[.min]', env.production ? '.min' : '')
  const extractCriticalCss = new ExtractTextPlugin(pp('css/critical[.min].css'))
  const extractModernCss = new ExtractTextPlugin(pp('css/modern[.min].css'))
  const extractOldCss = new ExtractTextPlugin(pp('css/old[.min].css'))
  const extractTextLoaderOptions = {
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }]
  }

  //

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
      'critical': [
        'normalize.css/normalize.css',
        'font-awesome/css/font-awesome.css',
        './src/critical.js'
      ]
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /modern\.scss$/,
          use: extractModernCss.extract(extractTextLoaderOptions)
        },
        {
          test: /old\.scss$/,
          use: extractOldCss.extract(extractTextLoaderOptions)
        },
        {
          test: /\.css$/,
          use: extractCriticalCss.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
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
        }, {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
          loader: 'url-loader'
        }
      ]
    },

    plugins: [
      new ProgressPlugin(),

      extractCriticalCss,
      extractModernCss,
      extractOldCss,

      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.1.html'
      }),

      new CommonsChunkPlugin({
        name: 'webpack__loader'
      }),

      new CopyWebpackPlugin([
        { from: './src/assets' }
      ])
    ]

  }
}
/*
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
      ])
    ]
  }
}
*/
