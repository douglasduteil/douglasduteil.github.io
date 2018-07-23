//

import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import baseConfig from './rollup.config_base';

//

const DIST_FOLDER = 'dist';

const [config, ...otherConfig] = baseConfig;

config.plugins = config.plugins.concat([
  serve({ contentBase: DIST_FOLDER, port: 8080 }),
  livereload({ watch: DIST_FOLDER })
]);

//

export default [config, ...otherConfig];
