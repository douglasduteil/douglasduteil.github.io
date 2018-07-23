//

import resolve from 'rollup-plugin-node-resolve';
import fillHtml from 'rollup-plugin-fill-html';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

//

export const input = ['src/main.js'];
export const inputOptions = {
  experimentalCodeSplitting: true
  // experimentalDynamicImport: true
};
export const outputDir = 'dist';
export const plugins = [
  postcss({
    extensions: ['.css']
  }),
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  copy({
    'src/index.html': 'dist/index.html',
    'src/icons': 'dist/icons'
  })
  // fillHtml()
];

export default [
  {
    input,
    ...inputOptions,
    output: {
      dir: outputDir + '/module',
      format: 'es'
    },
    plugins
  },
  {
    input,
    ...inputOptions,
    output: {
      dir: outputDir + '/nomodule',
      format: 'system'
    },
    plugins
  }
];
