//

import { serveClientWebpackServer, buildSSRWebpackServer } from '../index'

//

export const command = 'serve'
export const desc = 'Launch development server'
export const builder = {
  dir: {
    default: '.'
  }
}
export function handler(argv) {
  serveClientWebpackServer()
  buildSSRWebpackServer({ watch: true })
}

//
