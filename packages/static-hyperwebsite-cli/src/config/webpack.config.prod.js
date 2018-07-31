//

const { writeFile } = require('fs-extra');
const { resolve } = require('path');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
const { GenerateSW } = require('workbox-webpack-plugin');
const config = require('./webpack.config.base');

module.exports = (env, argv) => ({
  ...config({ ...env, mode: 'production' }, argv),
  mode: 'production',
  devtool: 'none',
  plugins: [
    // new PrepackWebpackPlugin({}),
    new SSRStaticRenderer({
      outputPath: resolve(process.cwd(), 'dist')
    }),
    new GenerateSW()
  ]
  /*
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
  */
});

function SSRStaticRenderer({ outputPath } = {}) {
  this.apply = compiler => {
    let ssr = null;

    const { default: middleware, routes } = require(resolve(
      process.cwd(),
      'dist',
      'server',
      'main.js'
    ));

    compiler.hooks.run.tapPromise('SSRStaticRenderer', async compiler => {
      ssr = await middleware();
    });

    compiler.hooks.emit.tapPromise('SSRStaticRenderer', async compiler => {
      const next = () => {
        throw new Error('unexpected route to create');
      };

      return Promise.all(
        routes.map(toContext).map(async context => {
          await ssr(context, next);

          await writeFile(
            (outputPath || compiler.compiler.outputPath) + context.request.url,
            context.body
          );
        })
      );
    });
  };
}

function toContext(url) {
  return {
    request: {
      url,
      method: 'GET'
    }
  };
}
