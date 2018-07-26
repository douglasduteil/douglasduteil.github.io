//

import { HyperChoo } from '@hyperchoo/core';
import { devtools } from '@hyperchoo/devtools';

export const app = new HyperChoo({ defaultRoute: '/me' });

app.route('/', () => app.router.emit('/me.html'));
app.route('/index.html', () => app.router.emit('/me.html'));

app.route('/me.html', async (state, emit) => {
  const {
    default: template
  } = await import(/* webpackChunkName: "me" */ './me.js');
  return {
    title: 'Me',
    body: template(app, state, emit)
  };
});

app.route('/achievements.html', async (state, emit) => {
  const {
    default: template
  } = await import(/* webpackChunkName: "achievements" */ './achievements.js');
  return {
    title: 'Achievements of',
    body: template(app, state, emit)
  };
});

app.route('/rockets.html', async (state, emit) => {
  const {
    default: template
  } = await import(/* webpackChunkName: "rockets" */ './rockets.js');
  return {
    title: 'Rockets of',
    body: template(app, state, emit)
  };
});

app.route('/contact.html', async (state, emit) => {
  const {
    default: template
  } = await import(/* webpackChunkName: "contact" */ './contact.js');
  return {
    title: 'Contacts of',
    body: template(app, state, emit)
  };
});
