//

import menu from './menu';

export default (app, state, emit) => {
  return app.hyper.wire(state, ':achivement')`
  <menu>${menu(app, state, emit)}</menu>

    <h1>Yo Achievements </h1>
  `;
};
