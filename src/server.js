//

import { HyperChoo } from '@hyperchoo/core';
import hyper from 'viperhtml';

//

const path = __path__;
const app = new HyperChoo(hyper);
app.use(countStore);
app.route('/', mainView);

const base = require(__dirname + '/views/index.html');

function mainView(state, emit) {
  return hyper(state, ':main')`${base}`;

  function onclick() {
    emit('increment', 1);
  }
}

const view = app.router.emit(path);
console.log(view().toString());

function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', function(count) {
    state.count += count;
    emitter.emit('render');
  });
}

function templateToRenderModelFn(source) {
  return `export default (render, model) => render\`${source}\``;
}
