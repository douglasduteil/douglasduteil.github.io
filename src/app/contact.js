//

import menu from './menu';

const _ = {};
export default (app, state, emit) => {
  return app.hyper.wire(_, ':contact')`
    <h1>Yo Contact </h1>
  `;
};
