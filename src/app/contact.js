//

import pageLayout from './page'
import jss from '../jss'
import { commentIcon } from './svg'
import styles from './contact.scss'

//

const sheet = jss.createStyleSheet(styles)
const { classes } = sheet

//

const _ = {}
export const backgoundColor = '#F23030'
export default ({ hyper: { wire } }, state, emit) =>
  pageLayout(wire)({
    title: 'Contact',
    bgColor: backgoundColor,
    watermark: commentIcon(wire, state),
    children: wire(_, ':contact')`
  <ul class=${classes.ul}>
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="mailto:douglasduteil@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
          Gmail
      </a>
    </li>
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="https://google.com/+DouglasDuteil"
        rel="noreferrer"
        target="_blank"
      >
        Google +
      </a>
    </li>
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="https://twitter.com/douglasduteil"
        rel="noreferrer"
        target="_blank"
      >
        Twitter
      </a>
    </li>
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="https://www.facebook.com/douglas.duteil"
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a>
    </li>
    <li class=${classes.li}>
      <a
        class=${classes.a}
        href="mailto:douglasduteil@outlook.com"
        rel="noreferrer"
        target="_blank"
      >
        Outlook
        </a>
    </li>
  </ul>
  <style>${{ html: sheet.toString() }}</style>
  `,
  })
