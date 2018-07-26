//

import pageLayout from './page';

const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Rockets',

    content: wire(_, ':rockets')`
  <ul>
    <li><a target="_blank" href="https://github.com/douglasduteil"><sapn>Github</sapn></a></li>
    <li><a target="_blank" href="http://plnkr.co/users/douglasduteil"><sapn>Plunker</sapn></a></li>
    <li><a target="_blank" href="http://cssdeck.com/user/DouglasDuteil"><sapn>CSSDesk</sapn></a></li>
    <li><a target="_blank" href="http://codepen.io/douglasduteil"><sapn>CodePen</sapn></a></li>
  </ul>
  `
  });
