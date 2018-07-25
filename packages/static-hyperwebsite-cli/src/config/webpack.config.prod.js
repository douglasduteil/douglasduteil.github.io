//

const { writeFile } = require('fs-extra');
const { resolve } = require('path');

module.exports = {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'hyperhtml-html-views-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        type: 'javascript/esm',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new SSRStaticRenderer()]
};

function SSRStaticRenderer() {
  this.apply = compiler => {
    let ssr = null;
    let routes = [];
    compiler.hooks.run.tapPromise('SSRStaticRenderer', async compiler => {
      const middleware = require(resolve(process.cwd(), 'server'));

      routes = middleware.routes;
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
            compiler.compiler.outputPath + context.request.url,
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
