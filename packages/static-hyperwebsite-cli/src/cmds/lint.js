//

import { lint } from '../index';

//

export const command = 'lint';
export const desc = 'Run linter';
export const builder = {
  dir: {
    default: '.'
  }
};
export function handler(argv) {
  lint();
}
