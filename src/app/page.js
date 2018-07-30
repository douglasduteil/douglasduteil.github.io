//

import jss from '../jss';
import styles from './page.scss';

const sheet = jss.createStyleSheet(styles);
const { classes } = sheet;

const _ = {};
export default render => ({ title, children, bgColor }) => {
  return render(_, ':page-layout')`
    <h1 class=${classes.title}>${title}</h1>
    <section class=${classes.section}>${children}</section>
    <style>${{ html: sheet.toString() }}</style>
    <style>${{
      html: `
      main {
        background-color: ${bgColor};
      }
      `
    }}</style>
  `;
};
