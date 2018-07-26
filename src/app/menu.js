import { stateFrom } from './utils';
import { commentIcon, faceIcon, trophyIcon, rocketIcon } from './svg';

//
const _ = {};
export default (render, state = {}) => render(_)`
<nav>
  <a active=${isActiveHref(state.href, '/me.html')} href="/me.html">${faceIcon(
  render
)}</a>
  <a active=${isActiveHref(
    state.href,
    '/achievements.html'
  )} href="/achievements.html">${trophyIcon(render)}</a>
  <a active=${isActiveHref(
    state.href,
    '/rockets.html'
  )} href="/rockets.html">${rocketIcon(render)}</a>
  <a active=${isActiveHref(
    state.href,
    '/contact.html'
  )} href="/contact.html">${commentIcon(render)}</a>
</nav>
`;

function isActiveHref(current, href) {
  current = current === '' ? '/me.html' : current;
  return current === href ? 'active' : null;
}
