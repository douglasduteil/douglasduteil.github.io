//

const { resolve } = require('path');
const config = require('./webpack.config.base');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'eval',
  //
  serve: {
    add: async (app, middleware, options) => {
      // middleware _after_ the built-in webpack and content middleware.
      await middleware.webpack();
      await middleware.content();

      const ssrMiddleware = require(resolve(process.cwd(), 'server'));
      const ssr = await ssrMiddleware();

      // this example assumes router must be added last
      app.use(ssr);
    },
    dev: {
      stats: 'minimal'
    }
  }
};
