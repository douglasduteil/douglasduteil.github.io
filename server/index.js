//

require = require('esm')(module, { mode: 'all' });

const prunk = require('prunk');
prunk.mock(/\.(css|scss)$/, { foo: 'bar' });

const { default: ssr, routes } = require('./main.js');
ssr.routes = routes;
module.exports = ssr;
