//

import jss from '../jss';
import styles from './page.scss';

const sheet = jss.createStyleSheet(styles);

const _ = {};
export default render => ({ title, children, bgColor }) => {
  sheet.addRules({
    '@global main': { backgroundColor: bgColor },
    '@global nav': { backgroundColor: bgColor },
    title: { backgroundColor: bgColor }
  });
  const { classes } = sheet;

  return render(_, ':page-layout')`
    <h1 class=${classes.title}>${title}</h1>
    <section class=${classes.section}>${children}</section>
    <style>${{ html: sheet.toString() }}</style>
  `;
};
