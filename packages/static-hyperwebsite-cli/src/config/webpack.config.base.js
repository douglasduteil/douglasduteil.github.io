//

const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//

module.exports = (env, argv) => ({
  module: {
    rules: [
      //

      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'preprocess-loader',
            options: {
              BUILD_ENV: env.mode
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'prejss-styles-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: require('postcss-scss'),
              plugins: [
                require('postcss-import'),
                require('postcss-sassy-mixins'),
                require('postcss-simple-vars'),
                require('postcss-calc')({ mediaQueries: true }),
                require('postcss-custom-media')
              ]
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
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/assets'
      }
    ])
  ]
});
