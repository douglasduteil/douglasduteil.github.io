//

import { HyperChoo } from '@hyperchoo/core';
import { devtools } from '@hyperchoo/devtools';

export const app = new HyperChoo({ defaultRoute: '/me' });

app.route('/', () => app.router.emit('/me.html'));
app.route('/index.html', () => app.router.emit('/me.html'));

app.route('/me.html', async (state, emit) => {
  const { default: template } = await import('./me.js');
  return { body: template(app, state, emit) };
});

app.route('/achievements.html', async (state, emit) => {
  const { default: template } = await import('./achievements.js');
  return { body: template(app, state, emit) };
});

app.route('/rockets.html', async (state, emit) => {
  const { default: template } = await import('./rockets.js');
  return { body: template(app, state, emit) };
});

app.route('/contact.html', async (state, emit) => {
  const { default: template } = await import('./contact.js');
  return { body: template(app, state, emit) };
});
