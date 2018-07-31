//

import jss from '../jss'
import pageLayout from './page'
import {
  githubIcon,
  graduationIcon,
  locationIcon,
  trophyIcon,
  suitcaseIcon,
  usersIcon
} from './svg'
import styles from './achievements.scss'
import achievements from './achievements.json'

//

const sheet = jss.createStyleSheet(styles)
const { classes } = sheet

//

const _ = {}
export const backgoundColor = '#4F8C86'
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Achievements',
    bgColor: backgoundColor,
    watermark: trophyIcon(wire, _),
    children: wire(_, ':achivement')`
    <article>${listTimeline(wire)(achievements)}</article>

    <style>${{ html: sheet.toString() }}</style>
  `
  })

function listTimeline (render) {
  return yearList => render()`
    <ul class=${classes.ul}>
    ${yearList.map(
    ([year, events]) => render()`
        <li>
          ${renderYear(render)(year)}

          <ul class=${classes['event-list']}>
          ${events.map(
    event => render()`
              <li class=${classes.event}>${renderEvent[event.type](render)(
  event
)}</li>
            `
  )}
          </ul>
        </li>
      `
  )}
    </ul>`
}

function renderYear (render) {
  return year =>
    render()`<time class=${classes.year} datetime="${new Date(
      year
    )}">${year}</time>`
}

const renderEvent = {
  job (render) {
    return event => render()`
    <i class=${classes.icon}>${suitcaseIcon(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  study (render) {
    return event => render()`
    <i class=${classes.icon}>${graduationIcon(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  github (render) {
    return event => render()`
    <i class=${classes.icon}>${githubIcon(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  talk (render) {
    return event => render()`
    <i class=${classes.icon}>${usersIcon(render, event)}</i>
    <div class=${classes.body}>
      <h3>${event.where}</h3>
      <p><em>"${event.title}"</em></p>
      <p><a href="${event.link.href}">${event.link.name}</a></p>
    </div>
      `
  }
}
