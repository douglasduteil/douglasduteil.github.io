//

import { buildClientWebpackServer, buildSSRWebpackServer } from '../index'

//

export const command = 'build'
export const desc = 'Build sources'
export const builder = {
  dir: {
    default: '.'
  }
}
export function handler(argv) {
  const cp = buildSSRWebpackServer()
  cp.once('exit', buildClientWebpackServer)
}
