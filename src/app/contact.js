//

import pageLayout from './page';
import jss from '../jss';
import { githubIcon, locationIcon, suitcaseIcon } from './svg';
import styles from './contact.scss';

//

const sheet = jss.createStyleSheet(styles);
const { classes } = sheet;

//

const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Contact',
    bgColor: '#F23030',
    children: wire(_, ':contact')`
  <ul class=${classes.ul}>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="mailto:douglasduteil@gmail.com">Gmail

    </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://google.com/+DouglasDuteil">Google +
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://twitter.com/douglasduteil">Twitter
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://www.facebook.com/douglas.duteil">Facebook
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="mailto:douglasduteil@outlook.com">Outlook

    </a>
  </li>
  </ul>
  <style>${{ html: sheet.toString() }}</style>
  `
  });
