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

      // this example assumes router must be added last
      app.use(async (...args) => {
        const ssrMiddleware = require(resolve(
          process.cwd(),
          'dist',
          'server',
          'main.js'
        )).default;
        console.log(ssrMiddleware);
        const ssr = await ssrMiddleware();

        await ssr(...args);
      });

      var chokidar = require('chokidar');
      var watcher = chokidar.watch('./dist/server');
      watcher.on('ready', function() {
        watcher.on('all', function() {
          console.log('Clearing /dist/server/ module cache from server');
          Object.keys(require.cache).forEach(function(id) {
            if (/[\/\\]dist[\/\\]server[\/\\]/.test(id))
              delete require.cache[id];
          });
        });
      });
    },
    dev: {
      stats: 'minimal'
    }
  }
};
