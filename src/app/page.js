//

import jss from '../jss'
import styles from './page.scss'

export const sheet = jss.createStyleSheet(styles)
sheet.addRules({
  section: { backgroundColor: data => data.bgColor },
  title: { backgroundColor: data => data.bgColor }
})
const { classes } = sheet

const _ = {}
export default render => ({ title, children, bgColor, watermark }) => {
  sheet.update({
    bgColor
  })
  return render(_, ':page-layout')`
    <div class=${classes.watermark}>${watermark}</div>
    <h1 class=${classes.title}>${title}</h1>
    <section class=${classes.section}>${children}</section>
    <style>${{ html: sheet.toString() }}</style>
  `
}
