//

import pageLayout from './page';

// HACK(douglasduteil): use require notation to ensure that the mocked cache is
// used.
//
// I want to write :
// import styles from './contact.scss';
// but node doesn't want to load "scss" file...
// more other the require module cache seems to be different...
// "import ...from ..." and "import(...)" seems to use another cache that
// I don't know about #frustractedDouglas
//
const styles = require('./contact.scss');

const inlineStyle = `
section {
  align-items: center;
}
`;
const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Contact',
    bgColor: '#F23030',
    children: wire(_, ':contact')`
  <ul class=${styles.list}>
    <li><a target="_blank" href="mailto:douglasduteil@gmail.com">Gmail</a></li>
    <li><a target="_blank" href="https://google.com/+DouglasDuteil">Google +</a></li>
    <li><a target="_blank" href="https://twitter.com/douglasduteil">Twitter</a></li>
    <li><a target="_blank" href="https://www.facebook.com/douglas.duteil">Facebook</a></li>
    <li><a target="_blank" href="mailto:douglasduteil@outlook.com">Outlook</a></li>
  </ul>
  <style>${{ html: inlineStyle }}</style>
  `
  });
