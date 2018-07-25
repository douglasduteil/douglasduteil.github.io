export const command = 'serve';
export const desc = 'Launch development server';
export const builder = {
  dir: {
    default: '.'
  }
};
export function handler(argv) {
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
