import { stateFrom } from './utils';
import { commentIcon, faceIcon, trophyIcon, rocketIcon } from './svg';

//

export default ({ hyper: wire }, state = {}, emit) => wire(
  stateFrom(state.href, () => ({ href: state.href })),
  ':menu'
)`
<nav>
  <a active=${isActiveHref(state.href, '/me.html')} href="/me.html">${faceIcon(
  wire
)}</a>
  <a active=${isActiveHref(
    state.href,
    '/achievements.html'
  )} href="/achievements.html">${trophyIcon(wire)}</a>
  <a active=${isActiveHref(
    state.href,
    '/rockets.html'
  )} href="/rockets.html">${rocketIcon(wire)}</a>
  <a active=${isActiveHref(
    state.href,
    '/contact.html'
  )} href="/contact.html">${commentIcon(wire)}</a>
</nav>
`;

function isActiveHref(current, href) {
  current = current === '' ? '/me.html' : current;
  return current === href ? 'active' : null;
}
