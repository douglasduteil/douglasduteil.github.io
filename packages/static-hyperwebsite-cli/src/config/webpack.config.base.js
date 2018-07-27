//

const { resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      //

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'prejss-styles-loader',
            options: {
              sourceMap: true,
              includePaths: [resolve(process.cwd(), 'src')]
            }
          }
        ]
      },

      {
        test: /\.(jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              sourceMap: true,
              includePaths: [resolve(process.cwd(), 'src')]
            }
          }
        ]
      }

      //
    ]
  }
};
