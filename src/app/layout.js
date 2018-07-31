//

import jss from '../jss'
import menu from './menu'
import styles from './layout.scss'

const sheet = jss.createStyleSheet(styles)
sheet.addRules({
  menu: {
    backgroundColor: data => data.backgoundColor
  },
  main: {
    backgroundColor: data => data.backgoundColor
  }
})
const { classes } = sheet

const _ = {}
export default (render, state) => ({ children, backgoundColor }) => {
  sheet.update({ backgoundColor })
  return render(_, ':layout')`
    <menu class=${classes.menu}>${menu(render, state)}</menu>
    <main class=${classes.main}>${children}</main>
    <style>${{ html: sheet.toString() }}</style>
  `
}
