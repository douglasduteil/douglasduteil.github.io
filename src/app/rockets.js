//

import menu from './menu';

export default (app, state, emit) => {
  return app.hyper.wire(state, ':rockets')`
  <menu>${menu(app, state, emit)}</menu>
    <h1>Yo Rockets </h1>
  `;
};
