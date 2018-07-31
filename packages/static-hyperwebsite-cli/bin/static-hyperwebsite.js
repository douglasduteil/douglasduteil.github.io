#!/usr/bin/env node

'use strict';

require = require('esm')(module, {});
module.exports = require('../src/cli.js');
