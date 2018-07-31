//

import hyper from 'hyperhtml';
// @if BUILD_ENV='development'
import { devtools } from '@hyperchoo/devtools';
// @endif

import { app } from './app/app';

//

// @if BUILD_ENV='development'
app.use(devtools);
// @endif

app.hyper = hyper;

app.renderTitle = title => ` ${title ? `${title} ` : ''} Douglas Duteil`;

app.mount('root');
