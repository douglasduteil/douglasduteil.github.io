//

require = require('esm')(module);
const { default: ssr, routes } = require('./main.js');
ssr.routes = routes;
module.exports = ssr;
