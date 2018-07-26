//

import menu from './menu';

const _ = {};
export default (render, state) => content => {
  return render(_, ':layout')`
    <menu>${menu(render, state)}</menu>
    <main>${content}</main>
  `;
};
