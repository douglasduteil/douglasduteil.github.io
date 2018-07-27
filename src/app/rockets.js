//

import pageLayout from './page';

// HACK(douglasduteil): use require notation to ensure that the mocked cache is
// used.
//
// I want to write :
// import styles from './rockets.scss';
// but node doesn't want to load "scss" file...
// more other the require module cache seems to be different...
// "import ...from ..." and "import(...)" seems to use another cache that
// I don't know about #frustractedDouglas
//
const styles = require('./rockets.scss');

const inlineStyle = `
section {
  justify-content: center;
}
`;

const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Rockets',
    bgColor: '#97A629',
    children: wire(_, ':rockets')`
  <ul class=${styles.list}>
    <li><a target="_blank" href="https://github.com/douglasduteil"><div>Github</div></a></li>
    <li><a target="_blank" href="http://plnkr.co/users/douglasduteil"><div>Plunker</div></a></li>
    <li><a target="_blank" href="http://cssdeck.com/user/DouglasDuteil"><div>CSSDesk</div></a></li>
    <li><a target="_blank" href="http://codepen.io/douglasduteil"><div>CodePen</div></a></li>
  </ul>
  <style>${{ html: inlineStyle }}</style>
  `
  });
