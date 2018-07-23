//

import parse from 'yargs-parser';
import fs from 'fs';
import { HyperChoo } from '@hyperchoo/core';
import hyper from 'viperhtml';

//

const argv = parse(process.argv.slice(2));
const {
  _: [path]
} = argv;

const app = new HyperChoo(hyper);
app.use(countStore);
app.route('/', mainView);

console.log(
  templateToRenderModelFn(
    fs.readFileSync(__dirname + '/views/index.html').toString()
  )
);

function mainView(state, emit) {
  return hyper(state, ':main')`
    <section id="root">
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </section>
  `;

  function onclick() {
    emit('increment', 1);
  }
}

const view = app.router.emit(path);
// console.log(view().toString());

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
