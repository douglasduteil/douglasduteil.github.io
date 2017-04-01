'use strict'

const path = require('path')

const {
  LoaderOptionsPlugin,
  NamedModulesPlugin,
  ProgressPlugin
} = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig({production: true}), {
  devtool: 'source-map',

  module: {
    rules: [
    ]
  },

  plugins: [
    new LoaderOptionsPlugin({
      minimize: true
    })
  ],

  devServer: {
    stats: { chunks: false },
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
})
