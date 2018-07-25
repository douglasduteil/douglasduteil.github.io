import { stateFrom } from './utils';

//

export default ({ hyper: wire }, state = {}, emit) => wire(
  stateFrom(state.href, () => ({ href: state.href })),
  ':menu'
)`
<nav class="navbar">
  <a class="${
    isActiveHref(state.href, '/me.html') ? 'active' : ''
  }" href="/me.html">me</a>
  <a class="${
    isActiveHref(state.href, '/achievements.html') ? 'active' : ''
  }" href="/achievements.html">achievements</a>
  <a class="${
    isActiveHref(state.href, '/rockets.html') ? 'active' : ''
  }" href="/rockets.html">rockets</a>
  <a class="${
    isActiveHref(state.href, '/contact.html') ? 'active' : ''
  }" href="/contact.html">contact</a>
</nav>
`;

function isActiveHref(current, href) {
  return current === href;
}
