//

const {router} = require('dio.js')

const Achievements = require('./achievements.js')
const Me = require('./index.js')
const Contact = require('./contact.js')
const Rocket = require('./rocket.js')

//

let document = null
try {
  document = window.document
} catch (e) {
  // ...
}
const browser = document !== null

//

global.routerApi = {link: noop}

exports.initiateRouting = function initiateRouting () {
  global.routerApi = browser ? describeRouter() : global.routerApi
}

//

function noop () {}

function describeRouter () {
  return router({
    '/': Me,
    '/index.html': Me,
    '/achievements.html': Achievements,
    '/contact.html': Contact,
    '/rocket.html': Rocket
  }, {
    mount: '#root',
    root: '/'
  })
}
