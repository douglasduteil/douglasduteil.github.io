//

import pageLayout from './page';

const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Achievements',
    content: wire(_, ':achivement')`
  <ul>
    <li>
      <h2>2014</h2>

      <ul>
        <li>
          talk...
        </li>
      </ul>
    </li>
  </ul>
  `
  });
