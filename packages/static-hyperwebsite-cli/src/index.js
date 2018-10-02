//

export function buildClientWebpackServer(configFile) {
  const { spawn } = require('child_process')
  const { resolve } = require('path')
  const srcPath = resolve(__dirname)
  const args = [
    'webpack-cli',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.prod.js')
  ]

  return spawn('yarn', args, { stdio: 'inherit' })
}

export function buildServerWebpackServer(configFile) {
  const { spawn } = require('child_process')
  const { resolve } = require('path')
  const srcPath = resolve(__dirname)
  const args = [
    'webpack-cli',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.prod.js')
  ]

  return spawn('yarn', args, { stdio: 'inherit' })
}

//

export function serveClientWebpackServer(configFile) {
  const { spawn } = require('child_process')
  const { resolve } = require('path')
  const srcPath = resolve(__dirname)
  const args = [
    'webpack-dev-server',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.dev.js')
  ]

  return spawn('yarn', args, { stdio: 'inherit' })
}

//

export function buildSSRWebpackServer({ watch } = { watch: false }) {
  const { spawn } = require('child_process')
  const { resolve } = require('path')
  const srcPath = resolve(__dirname)
  const args = [
    'webpack',
    ...(watch ? ['--watch'] : []),
    '--config',
    resolve(srcPath, 'config', 'webpack.config.ssr.js')
  ]

  return spawn('yarn', args, { stdio: 'inherit' })
}

//

export function lint() {
  const { spawn } = require('child_process')
  const { resolve } = require('path')
  const args = ['eslint', resolve(process.cwd(), 'src')]

  return spawn('yarn', args, { stdio: 'inherit' })
}
