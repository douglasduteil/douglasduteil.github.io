//

import menu from './menu';

export default (app, state, emit) => {
  return app.hyper.wire(state, ':contact')`
  <menu>${menu(app, state, emit)}</menu>

    <h1>Yo Contact </h1>
  `;
};
