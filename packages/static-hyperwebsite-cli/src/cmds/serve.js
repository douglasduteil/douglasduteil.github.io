export const command = 'serve';
export const desc = 'Launch development server';
export const builder = {
  dir: {
    default: '.'
  }
};
export function handler(argv) {
  serveClientWebpackServer();
  serveSSRWebpackServer();
}

//

function serveClientWebpackServer() {
  const { spawn } = require('child_process');
  const { resolve } = require('path');
  const srcPath = resolve(__dirname, '..');
  const args = [
    'webpack-serve',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.dev.js')
  ];

  spawn('yarn', args, { stdio: 'inherit' });
}

//

function serveSSRWebpackServer() {
  const { spawn } = require('child_process');
  const { resolve } = require('path');
  const srcPath = resolve(__dirname, '..');
  const args = [
    'webpack',
    '--watch',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.ssr.js')
  ];

  spawn('yarn', args, { stdio: 'inherit' });
}
