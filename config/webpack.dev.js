'use strict'

const path = require('path')

const {
  LoaderOptionsPlugin,
  NamedModulesPlugin
} = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig({}), {
  devtool: 'inline-source-map',

  entry: {
    // 'browser': [
      // 'webpack-dev-server/client?http://localhost:8080',
      // 'webpack/hot/only-dev-server',
      // commonConfig({}).entry.browser
    // ]
  },

  plugins: [
    new NamedModulesPlugin(),

    // new HotModuleReplacementPlugin(),

    new LoaderOptionsPlugin({
      debug: true
    })
  ],

  devServer: {
    // hot: true,
    // contentBase: 'dist',
    // publicPath: '/',

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
