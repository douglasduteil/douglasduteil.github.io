//

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fillHtml from 'rollup-plugin-fill-html';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

//

const input = ['src/main.js', 'src/home.js'];
const inputOptions = {
  experimentalCodeSplitting: true,
  experimentalTopLevelAwait: true,
  experimentalPreserveModules: true
};
const watch = {
  clearScreen: false
};
const outputDir = 'dist';
const plugins = [
  postcss({
    extensions: ['.css']
  }),
  resolve({}),
  commonjs({}),
  globals(),
  builtins(),
  builtins__perf_hooks(),
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
    watch,
    output: {
      dir: outputDir + '/module',
      format: 'es',
      sourcemaps: true
    },
    plugins: [
      resolve({}),
      commonjs({}),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
  /*{
    input: input[0],
    // ...inputOptions,
    watch,
    output: {
      file: outputDir + '/nomodule/main.js',
      format: 'system'
    },
    plugins
  }*/
];

function builtins__perf_hooks() {
  return {
    name: 'builtins__perf_hooks',
    resolveId(importee) {
      if (importee && importee.slice(-1) === '/') {
        importee === importee.slice(0, -1);
      }

      if (importee === 'perf_hooks') {
        return require.resolve(require('path').join(__dirname, 'window.js'));
      }
    }
  };
}
