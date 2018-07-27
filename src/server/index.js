//

import Debug from 'debug';
import fse from 'fs-extra';
import { runInContext, createContext, Script } from 'vm';
import path from 'path';
import nanorouter from 'nanorouter';
import hyper, { bind } from 'viperhtml';
import jss from '../jss';
import { app } from '../app/app';
import styles from '../ciritcal.scss';
import hyperhtmlHtmlViewsLoader from 'hyperhtml-html-views-loader';

//

app.hyper = hyper;

const log = Debug('my:server:main');
const templatePath = 'src/template.html';

const sheet = jss.createStyleSheet(styles);

//

export const routes = [
  '/index.html',
  '/me.html',
  '/achievements.html',
  '/rockets.html',
  '/contact.html'
];

export default async () => {
  log('loading template from', templatePath);
  const templateFileBuffer = await fse.readFile(templatePath);
  const htmlifyTemplate = hyperhtmlHtmlViewsLoader
    .call({}, templateFileBuffer.toString())
    .replace(/^module.exports = "/, '`')
    .replace(/";$/, '`');
  const sandbox = createContext({});
  const hyperTemplate = runInContext(
    `(render, model) => render${htmlifyTemplate}`,
    sandbox
  );

  return async (ctx, next) => {
    const {
      request: { url, method }
    } = ctx;

    if (/^(?!GET|HEAD).*$/.test(method)) {
      return next();
    }

    if (!['/', ...routes].includes(url)) {
      return next();
    }

    log({ url, method });
    const response = await app.toString(url);
    log({ url, method, response });
    ctx.body = hyperTemplate(hyper, {
      ...response,
      criticalCss: `<style>${sheet.toString()}</style>`
    }).toString();
  };
};
