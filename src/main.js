//

import hyper from 'hyperhtml';

import { HyperChoo } from '@hyperchoo/core';
import { devtools } from '@hyperchoo/devtools';

export const app = new HyperChoo(hyper);
app.use(devtools);
app.use(countStore);
app.route(
  '/',
  async (state, emit) => await import('./home.js').default(hyper, state, emit)
);

async function mainView(state, emit) {
  await new Promise(res => setTimeout(res, 1000));
  return hyper(state, ':main')`
    <section>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </section>
  `;

  function onclick() {
    emit('increment', 1);
  }
}
function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', function(count) {
    state.count += count;
    emitter.emit('render');
  });
}

//console.log(require('./views/index.html'));

// app.mount('#root');
