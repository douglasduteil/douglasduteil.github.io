'use strict'

const {
  NamedModulesPlugin
} = require('webpack')

const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.common.js')

//

module.exports = webpackMerge(commonConfig({}), {

  plugins: [
    new NamedModulesPlugin()
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
  }

})
