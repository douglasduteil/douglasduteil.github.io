#!/usr/bin/env node

'use strict'

// eslint-disable-next-line no-global-assign
require = require('esm')(module, {})
module.exports = require('../src/cli.js')
