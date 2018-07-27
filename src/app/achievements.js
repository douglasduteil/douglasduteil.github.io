//

import pageLayout from './page';
import achievements from './achievements.json';

const inlineStyle = `

`;
const _ = {};
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Achievements',
    bgColor: '#4F8C86',
    children: wire(_, ':achivement')`
    <article>${listTimeline(wire)(achievements)}</article>

    <style>${{ html: inlineStyle }}</style>
  `
  });

function listTimeline(render) {
  return yearList => render()`
    <ul>
    ${yearList.map(
      ([year, events]) => render()`
        <li>
          ${renderYear(render)(year)}

          <ul>
          ${events.map(
            event => render()`
              <li>${renderEvent[event.type](render)(event)}</li>
            `
          )}
          </ul>
        </li>
      `
    )}
    </ul>`;
}

function renderYear(render) {
  return year => render()`<h2>${year}</h2>`;
}

const renderEvent = {
  job(render) {
    return event => render()`
    <h3>${event.title}</h3>
    <p>${event.body}</p>
    `;
  },
  study(render) {
    return event => render()`
    <h3>${event.title}</h3>
    <p>${event.body}</p>
    `;
  },
  github(render) {
    return event => render()`
    <h3>${event.title}</h3>
    <p>${event.body}</p>
    `;
  },
  talk(render) {
    return event => render()`
    <h3>${event.where}</h3>
    <p><em>"${event.title}"</em></p>
    <p><a href="${event.link.href}">${event.link.name}</a></p>
    `;
  }
};
