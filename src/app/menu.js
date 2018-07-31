//

import jss from '../jss';
import styles from './menu.scss';
import { stateFrom } from './utils';
import { commentIcon, faceIcon, trophyIcon, rocketIcon } from './svg';

//

const sheet = jss.createStyleSheet(styles);
const { classes } = sheet;

const _ = {};
export default (render, state = {}) => render(_)`
  <nav class=${classes.nav}>
    <a active=${isActiveHref(state.href, '/me.html')}
    class=${classes.a}
    href="/me.html">${faceIcon(render)} <span class="sr-only">Me</span></a>
    <a active=${isActiveHref(state.href, '/achievements.html')}
    class=${classes.a}
    href="/achievements.html">${trophyIcon(
      render
    )}<span class="sr-only">Achievements</span></a>
    <a active=${isActiveHref(state.href, '/rockets.html')}
    class=${classes.a}
    href="/rockets.html">${rocketIcon(
      render
    )}<span class="sr-only">Rockets</span></a>
    <a active=${isActiveHref(state.href, '/contact.html')}
    class=${classes.a}
    href="/contact.html">${commentIcon(
      render
    )}<span class="sr-only">Contact</span></a>
  </nav>

  <style>${{ html: sheet.toString() }}</style>
`;

function isActiveHref(current, href) {
  current = current === '' ? '/me.html' : current;
  return current === href ? 'active' : null;
}
