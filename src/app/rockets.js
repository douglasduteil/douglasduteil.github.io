//

import pageLayout from './page'
import jss from '../jss'
import { rocketIcon } from './svg'
import styles from './rockets.scss'

//

const sheet = jss.createStyleSheet(styles)
const { classes } = sheet

//

const _ = {}

export const backgoundColor = '#525A16'
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Rockets',
    bgColor: backgoundColor,
    watermark: rocketIcon(wire, state),
    children: wire(_, ':rockets')`
  <ul class=${classes.ul}>
  
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="https://github.com/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${classes.text}>Github</div>
      </a>
    </li>

    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="https://next.plnkr.co/users/douglasduteil/plunks"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${classes.text}>Plunker</div>
      </a>
    </li>

    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="http://cssdeck.com/user/DouglasDuteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${classes.text}>CSSDesk</div>
      </a>
    </li>

    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="http://codepen.io/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        <div class=${classes.text}>CodePen</div>
      </a>
    </li>

  </ul>
  <style>${{ html: sheet.toString() }}</style>
  `
  })
