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

export const backgoundColor = '#97A629'
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Rockets',
    bgColor: backgoundColor,
    watermark: rocketIcon(wire, state),
    children: wire(_, ':rockets')`
  <ul class=${classes.ul}>
    <li class=${classes.li}>
      <a class=${classes.a} target="_blank"
      href="https://github.com/douglasduteil">
      <div class=${classes.text}>Github</div>
    </a>
  </li>
    <li class=${classes.li}>
      <a class=${classes.a} target="_blank"
      href="http://plnkr.co/users/douglasduteil">
      <div class=${classes.text}>Plunker</div>
    </a>
  </li>
    <li class=${classes.li}>
      <a class=${classes.a} target="_blank"
      href="http://cssdeck.com/user/DouglasDuteil">
      <div class=${classes.text}>CSSDesk</div>
    </a>
  </li>
    <li class=${classes.li}>
      <a class=${classes.a} target="_blank"
      href="http://codepen.io/douglasduteil">
      <div class=${classes.text}>CodePen</div>
    </a>
  </li>
  </ul>
  <style>${{ html: sheet.toString() }}</style>
  `
  })
