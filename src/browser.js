//

const {initiateRouting} = require('./router.js')

//

exports.appHydratation = appHydratation

//

function appHydratation () {
  const location = (window.history && window.history.location) || window.location
  initiateRouting()
}
