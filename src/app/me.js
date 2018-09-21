//

import jss from '../jss'
import { githubIcon, locationIcon, suitcaseIcon } from './svg'
import styles from './me.scss'
import miniMe from './mini_me.jpeg'

const gravatarPic = '//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1'

const sheet = jss.createStyleSheet(styles)
sheet.addRules({
  '@global main': {
    backgroundImage: `url(${gravatarPic + '?s=680'}), url(${miniMe})`
  }
})
const { classes } = sheet

const _ = {}
export default ({ hyper: { wire } }, state, emit) => {
  return wire(_, ':me')`
    <section class=${classes.section}>
      <ul class=${classes.ul}>
        <li class=${classes.li}>
          <h1 class=${classes.h1}>
            Douglas Duteil
          </h1>
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${locationIcon(wire)}</i>
          <div>Paris, France</div>
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${githubIcon(wire)}</i>
          <div>OneDoes Member</div>
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${suitcaseIcon(wire)}</i>
          <div>Front End Developer at SFEIR Paris</div>
        </li>
      </ul>
    </section>

    <style>${{ html: sheet.toString() }}</style>
  `
}
