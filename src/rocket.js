//

const {h, Component} = require('dio.js')

const Menu = require('./partials/menu.js')

//

module.exports = class Rocket extends Component {
  render () {
    return [
      Menu,
      h('div', {
        className: 'h100 me'
      }, [
        'Yooo Rocket'
      ])
    ]
  }
}
