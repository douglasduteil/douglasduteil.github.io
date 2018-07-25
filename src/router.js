//

import nanorouter from 'nanorouter';

//

export default function routerConfig(hyper, app) {
  console.log('routerConfig');

  app.route('/', () => app.router.emit('/me'));

  app.route('/me', async (state, emit) => {
    console.log('hit /me');
    console.log({ state, emit });
    const { default: template } = await import('./me.js');
    return { body: template(hyper, state, emit) };
  });

  app.route('/achievements', async () => {
    console.log('hit /achievements');
    return { body: `Achievements` };
  });

  app.route('/rockets', async () => {
    console.log('hit /rockets');
    return { body: `Rockets` };
  });

  app.route('/contact', async () => {
    console.log('hit /contact');
    return {
      body: `Contact`
    };
  });

  return app;
}
//
