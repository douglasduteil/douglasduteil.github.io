//
//

import menu from './menu';

export default (app, state, emit) => {
  return app.hyper.wire(state, ':me')`
  <menu>${menu(app, state, emit)}</menu>

    <h1>Yo Me </h1>
  `;
};

/*

let html;
export default (app, state, emit) => {
  html = html || app.hyper.wire();

  app.use(countStore);
  return app.hyper.wire()`
    ${menu(app, state, emit)}
    <h1>Yo Me </h1>
  `;
  return html`

    ${menu(app, state, emit)}
    <h1> Me </h1>
    <h1> Me </h1>
    <h1> Me </h1>
    <h1> Me </h1>
    <h1> Me </h1>

    <h2>count ${state.count}</h2>
    <button onclick=${onclick}>Mooooore</button>
  `;

  function onclick() {
    emit('increment', 1);
  }
};

function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', function(count) {
    state.count += count;
    emitter.emit('render');
  });
}
*/
