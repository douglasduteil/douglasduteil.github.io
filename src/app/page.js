//

import menu from './menu';

const _ = {};
export default render => ({ title, content }) => {
  return render(_, ':page-layout')`
    <h1>${title}</h1>
    <section>${content}</section>
  `;
};
