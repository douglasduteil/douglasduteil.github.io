//

const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')

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
              BUILD_ENV: env.mode,
            },
          },
          'source-map-loader',
        ],
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'prejss-styles-loader',
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
                require('postcss-custom-media'),
              ],
            },
          },
          'source-map-loader',
        ],
      },

      {
        test: /\.(jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              sourceMap: true,
              includePaths: [resolve(process.cwd(), 'src')],
            },
          },
        ],
      },

      //
    ],
  },
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
    },
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_DEBUG: false,
    }),
    new CopyWebpackPlugin({
      patterns: [resolve(process.cwd(), 'src/assets')],
    }),
  ],
})
