//

import pageLayout from './page';

const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Contact',
    bgColor: '#F23030',
    content: wire(_, ':contact')`
  <ul>
    <li><a target="_blank" href="mailto:douglasduteil@gmail.com">Gmail</a></li>
    <li><a target="_blank" href="https://google.com/+DouglasDuteil">Google +</a></li>
    <li><a target="_blank" href="https://twitter.com/douglasduteil">Twitter</a></li>
    <li><a target="_blank" href="https://www.facebook.com/douglas.duteil">Facebook</a></li>
    <li><a target="_blank" href="mailto:douglasduteil@outlook.com">Outlook</a></li>
  </ul>
  `
  });
