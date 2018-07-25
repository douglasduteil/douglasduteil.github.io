//

import hyper from 'hyperhtml';
import { devtools } from '@hyperchoo/devtools';

import { app } from './app/app';

//

app.use(devtools);

app.hyper = hyper;

app.mount('#root');
