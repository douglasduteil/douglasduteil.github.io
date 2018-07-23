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

const input = 'src/main.js';
const inputOptions = {
  // experimentalCodeSplitting: true
  // experimentalDynamicImport: true
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

  {
    name: 'builtins__perf_hooks',
    resolveId(importee) {
      if (importee && importee.slice(-1) === '/') {
        importee === importee.slice(0, -1);
      }

      if (importee === 'perf_hooks') {
        return require.resolve(require('path').join(__dirname, 'window.js'));
      }
    }
  },
  builtins(),
  babel({
    exclude: 'node_modules/**'
  }),
  copy({
    // 'src/index.html': 'dist/index.html',
    'src/icons': 'dist/icons'
  }),
  templateToRenderModelFn()

  // fillHtml()
];

export default [
  {
    input,
    ...inputOptions,
    watch,
    output: {
      file: outputDir + '/module/main.js',
      format: 'es'
    },
    plugins
  },
  {
    input,
    ...inputOptions,
    watch,
    output: {
      file: outputDir + '/nomodule/main.js',
      format: 'system'
    },
    plugins
  },
  {
    input: 'src/server.js',
    output: {
      file: '/tmp/server/main.js',
      format: 'es'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      templateToRenderModelFn(),
      prerender({
        router: 'src/router-cli.js',
        map: {
          '/': 'dist/index.html'
          //'/about': 'dist/about.html',
          //'/contact': 'dist/contact.html'
        }
      })
    ]
  }
];

//

function templateToRenderModelFn() {
  return {
    name: 'tempalte to render model function',
    transform(source, id) {
      if (!id.endsWith('.html')) {
        return;
      }
      return `export default (render, model) => render\`${source}\``;
    }
  };
}

function prerender(options) {
  return {
    name: 'static html file generator from routes',
    async generateBundle(outputOptions, bundle, isWrite) {
      if (!isWrite) {
        return;
      }

      const { createContext, Module } = require('vm');

      const myModule = new Module(bundle['main.js'].code);
      await myModule.link();
      const context = createContext({
        __path__: 'Douglas'
      });
      myModule.runInContext(context);

      const { exec } = require('child_process');
      const fse = require('fs-extra');
      const bin = 'node -r esm ' + options.router;

      return Promise.all(
        Object.entries(options.map).map(async ([path, file]) =>
          generateStaticFile(bin, path, file).then(
            fse.writeFile.bind(null, file)
          )
        )
      );

      //

      function generateStaticFile(binPath, path, file) {
        const command = `${binPath} ${path} ${file}`;
        return new Promise((resolve, reject) => {
          exec(command, {}, (err, code, stderr) => {
            if (err) {
              reject(err);
            }
            resolve(code);
          });
        });
      }
    }
  };
}
