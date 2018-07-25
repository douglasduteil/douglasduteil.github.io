export const command = 'build';
export const desc = 'Build sources';
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
    'webpack-cli',
    '--config',
    resolve(srcPath, 'config', 'webpack.config.prod.js')
  ];

  spawn('yarn', args, { stdio: 'inherit' });
}
