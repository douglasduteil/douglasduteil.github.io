//

import menu from './menu';

const _ = {};
export default (app, state, emit) => {
  return app.hyper.wire(_, ':rockets')`
    <h1>Yo Rockets </h1>
  `;
};
