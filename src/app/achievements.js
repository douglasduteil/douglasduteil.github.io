//

import menu from './menu';

const _ = {};
export default (app, state, emit) => {
  return app.hyper.wire(_, ':achivement')`
    <h1>Yo Achievements </h1>
  `;
};
