//

import hyper from 'hyperhtml';
import { devtools } from '@hyperchoo/devtools';

import { app } from './app/app';

//

app.use(devtools);

app.hyper = hyper;

app.renderTitle = title => ` ${title ? `${title} ` : ''} Douglas Duteil`;

app.mount('root');
