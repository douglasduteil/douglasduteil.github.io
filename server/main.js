module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"achievements":"achievements","contact":"contact","me":"me","rockets":"rockets"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/hyperchoo/index.js":
/*!*************************************!*\
  !*** ./packages/hyperchoo/index.js ***!
  \*************************************/
/*! exports provided: HyperChoo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyperChoo", function() { return HyperChoo; });
/* harmony import */ var nanobus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanobus */ "nanobus");
/* harmony import */ var nanobus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nanobus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanotiming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanotiming */ "nanotiming");
/* harmony import */ var nanotiming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanotiming__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanorouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanorouter */ "nanorouter");
/* harmony import */ var nanorouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanorouter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nanolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanolocation */ "nanolocation");
/* harmony import */ var nanolocation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanolocation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoraf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoraf */ "nanoraf");
/* harmony import */ var nanoraf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nanoraf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanohref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanohref */ "nanohref");
/* harmony import */ var nanohref__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nanohref__WEBPACK_IMPORTED_MODULE_5__);
// @ts-check







// import onIdle from 'on-idle'

const HISTORY_OBJECT = {}
class HyperChoo {
  constructor({ defaultRoute } = { defaultRoute: '/404' }) {
    this.prefix = 'hyperchoo'
    this.emitter = nanobus__WEBPACK_IMPORTED_MODULE_0___default()(`${this.prefix}.emitter`)
    this.router = nanorouter__WEBPACK_IMPORTED_MODULE_2___default()({
      curry: true,
      default: defaultRoute
    })
    this.hyper = null
    this.state = {}
    this.render = null
    this.stores = new WeakSet()
  }

  destroy() {
    this.state = null
    this.router = null
    this.stores = null

    // Important to prevent memory leak due to hyper binding
    this.render = null
    this.hyper = null

    this.emitter.emit('destroy')
    this.emitter.removeAllListeners()
    this.emitter = null
  }

  start() {
    this.state.href = nanolocation__WEBPACK_IMPORTED_MODULE_3___default()()

    this.emitter.prependListener('navigate', () => {
      this.state.href = window.location.pathname
      this.emitter.emit('render')
    })

    this.emitter.prependListener('popState', () => {
      this.emitter.emit('navigate')
    })

    this.emitter.prependListener('pushState', href => {
      window.history.pushState(HISTORY_OBJECT, null, href)
      this.emitter.emit('navigate')
    })

    this.emitter.prependListener('replaceState', href => {
      window.history.replaceState(HISTORY_OBJECT, null, href)
      this.emitter.emit('navigate')
    })

    window.onpopstate = () => this.emitter.emit('popState')

    nanohref__WEBPACK_IMPORTED_MODULE_5___default()(location => {
      var href = location.href
      if (href === window.location.href) {
        // if (!hash) scrollToAnchor(hash)
        return
      }
      this.emitter.emit('pushState', href)
    })

    this.emitter.prependListener('render', () => {
      const renderTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.render`)
      const doRender = nanoraf__WEBPACK_IMPORTED_MODULE_4___default()(async () => {
        const tree = await this._prerender(this.state.href)
        this._render(tree)
        renderTiming()
      })

      doRender()
    })
  }

  /**
   *
   * @param { string } href
   */
  async _prerender(href) {
    const resolveTreeTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.prerender "${href}"`)
    const tree = await this.router.emit(href)
    resolveTreeTiming()
    return tree
  }

  _render(tree) {
    const hyperHtmlTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.render`)
    const dom = this.render`${tree.body}`
    hyperHtmlTiming()

    if (tree.title && typeof document === 'object') {
      document.title = this.renderTitle(tree.title)
    }

    return dom
  }

  renderTitle(title) {
    return title
  }

  use(cb) {
    if (this.stores.has(cb)) {
      return this
    }

    const msg = `${this.prefix}.use`
    const cbName = cb.storeName || cb.name
    const timingName = cbName ? msg + '(' + cbName + ')' : msg
    const useTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(timingName)
    cb(this.state, this.emitter, this)
    this.stores.add(cb)
    useTiming()

    return this
  }

  route(route, handler) {
    this.router.on(route, params => {
      this.state.params = params
      this.state.route = route
      const routeTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.route("${route}")`)
      var res = handler(this.state, this.emitter.emit.bind(this.emitter))
      routeTiming()
      return res
    })
  }

  mount(selector) {
    const mountTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.mount`)

    this.start()

    const hyperNodeTiming = nanotiming__WEBPACK_IMPORTED_MODULE_1___default()(`${this.prefix}.hyper(node)`)
    this.render = this.hyper.bind(document.querySelector(selector))
    hyperNodeTiming()

    this.emitter.emit('render')
    mountTiming()
  }

  /**
   * @param {string} location
   * @param {object} state
   */
  async toString(location, state) {
    Object.assign(this.state, state, { href: location })
    const tree = await this._prerender(this.state.href)
    return tree
  }
}


/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _hyperchoo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hyperchoo/core */ "./packages/hyperchoo/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/app/layout.js");
//




const app = new _hyperchoo_core__WEBPACK_IMPORTED_MODULE_0__["HyperChoo"]({ defaultRoute: '/me' })

app.route('/', () => app.router.emit('/me.html'))
app.route('/index.html', () => app.router.emit('/me.html'))

app.route('/me.html', async (state, emit) => {
  const {
    default: template
  } = await __webpack_require__.e(/*! import() | me */ "me").then(__webpack_require__.bind(null, /*! ./me.js */ "./src/app/me.js"))
  const main = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["default"])(app.hyper.wire, state)
  return {
    title: 'Me',
    body: main({
      backgoundColor: 'transparent',
      children: template(app, state, emit)
    })
  }
})

app.route('/achievements.html', async (state, emit) => {
  const {
    default: template,
    backgoundColor
  } = await __webpack_require__.e(/*! import() | achievements */ "achievements").then(__webpack_require__.bind(null, /*! ./achievements.js */ "./src/app/achievements.js"))

  const main = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["default"])(app.hyper.wire, state)
  return {
    title: 'Achievements of',
    body: main({
      backgoundColor,
      children: template(app, state, emit)
    })
  }
})

app.route('/rockets.html', async (state, emit) => {
  const {
    default: template,
    backgoundColor
  } = await __webpack_require__.e(/*! import() | rockets */ "rockets").then(__webpack_require__.bind(null, /*! ./rockets.js */ "./src/app/rockets.js"))

  const main = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["default"])(app.hyper.wire, state)
  return {
    title: 'Rockets of',
    body: main({
      backgoundColor,
      children: template(app, state, emit)
    })
  }
})

app.route('/contact.html', async (state, emit) => {
  const {
    default: template,
    backgoundColor
  } = await __webpack_require__.e(/*! import() | contact */ "contact").then(__webpack_require__.bind(null, /*! ./contact.js */ "./src/app/contact.js"))

  const main = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["default"])(app.hyper.wire, state)
  return {
    title: 'Contacts of',
    body: main({
      backgoundColor,
      children: template(app, state, emit)
    })
  }
})


/***/ }),

/***/ "./src/app/layout.js":
/*!***************************!*\
  !*** ./src/app/layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/app/menu.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.scss */ "./src/app/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_2__);
//





const sheet = _jss__WEBPACK_IMPORTED_MODULE_0__["default"].createStyleSheet(_layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a)
sheet.addRules({
  menu: {
    backgroundColor: data => data.backgoundColor
  },
  main: {
    backgroundColor: data => data.backgoundColor
  }
})
const { classes } = sheet

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => ({ children, backgoundColor }) => {
  sheet.update({ backgoundColor })
  return render(_, ':layout')`
    <menu class=${classes.menu}>${Object(_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(render, state)}</menu>
    <main class=${classes.main}>${children}</main>
    <style>${{ html: sheet.toString() }}</style>
  `
});


/***/ }),

/***/ "./src/app/layout.scss":
/*!*****************************!*\
  !*** ./src/app/layout.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"menu":{"display":"flex","margin":"0","padding":"0","position":"fixed","transform":"translateZ(0)","willChange":"transform","zIndex":"1000","@media (max-width: 767px)":{"bottom":"0","left":"0","right":"0"},"@media (min-width: 768px)":{"left":"0","top":"0","bottom":"0"}}};

/***/ }),

/***/ "./src/app/menu.js":
/*!*************************!*\
  !*** ./src/app/menu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.scss */ "./src/app/menu.scss");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/app/svg/index.js");
//





//

const sheet = _jss__WEBPACK_IMPORTED_MODULE_0__["default"].createStyleSheet(_menu_scss__WEBPACK_IMPORTED_MODULE_1___default.a)
const { classes } = sheet

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state = {}) => render(_)`
  <nav class=${classes.nav}>
    <a active=${isActiveHref(state.href, '/me.html')}
    class=${classes.a}
    href="/me.html">${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["faceIcon"])(render)} <span class="sr-only">Me</span></a>
    <a active=${isActiveHref(state.href, '/achievements.html')}
    class=${classes.a}
    href="/achievements.html">${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["trophyIcon"])(
      render
    )}<span class="sr-only">Achievements</span></a>
    <a active=${isActiveHref(state.href, '/rockets.html')}
    class=${classes.a}
    href="/rockets.html">${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["rocketIcon"])(
      render
    )}<span class="sr-only">Rockets</span></a>
    <a active=${isActiveHref(state.href, '/contact.html')}
    class=${classes.a}
    href="/contact.html">${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["commentIcon"])(
      render
    )}<span class="sr-only">Contact</span></a>
  </nav>

  <style>${{ html: sheet.toString() }}</style>
`);

function isActiveHref(current, href) {
  current = current === '' ? '/me.html' : current
  return current === href ? 'active' : null
}


/***/ }),

/***/ "./src/app/menu.scss":
/*!***************************!*\
  !*** ./src/app/menu.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"nav":{"fontSize":"1.5em","color":"#fff","display":"flex","width":"100%","@media (min-width: 768px)":{"flexDirection":"column"}},"a":{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center","backgroundColor":"rgba(0, 0, 0, 0.6)","color":"#eee","transition":"0.2s ease","transitionProperty":"background-color, color","&:hover":{"backgroundColor":"rgba(0, 0, 0, 0.7)"},"&[active]":{"color":"#fff","backgroundColor":"rgba(0, 0, 0, 0.8)"},"@media (max-width: 767px)":{"height":"50px"},"@media (min-width: 768px)":{"width":"70px"}}};

/***/ }),

/***/ "./src/app/svg/comment.js":
/*!********************************!*\
  !*** ./src/app/svg/comment.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:comment')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M9.429 5.143c-4.179 0-7.714 2.357-7.714 5.143 0 1.473 0.991 2.893 2.705 3.884l1.299 0.75-0.469 1.125c0.281-0.161 0.563-0.335 0.83-0.522l0.589-0.415 0.71 0.134c0.67 0.121 1.353 0.188 2.049 0.188 4.179 0 7.714-2.357 7.714-5.143s-3.536-5.143-7.714-5.143zM9.429 3.429c5.21 0 9.429 3.067 9.429 6.857s-4.219 6.857-9.429 6.857c-0.817 0-1.607-0.080-2.357-0.214-1.112 0.79-2.371 1.366-3.723 1.714-0.362 0.094-0.75 0.161-1.152 0.214h-0.040c-0.201 0-0.388-0.161-0.429-0.388v0c-0.054-0.254 0.121-0.415 0.268-0.589 0.522-0.589 1.112-1.112 1.567-2.223-2.17-1.259-3.563-3.201-3.563-5.371 0-3.79 4.219-6.857 9.429-6.857zM20.438 19.085c0.455 1.112 1.045 1.634 1.567 2.223 0.147 0.174 0.321 0.335 0.268 0.589v0c-0.054 0.241-0.254 0.415-0.469 0.388-0.402-0.054-0.79-0.121-1.152-0.214-1.353-0.348-2.612-0.924-3.723-1.714-0.75 0.134-1.54 0.214-2.357 0.214-2.424 0-4.647-0.67-6.321-1.768 0.388 0.027 0.79 0.054 1.179 0.054 2.879 0 5.598-0.83 7.674-2.33 2.237-1.634 3.469-3.844 3.469-6.241 0-0.696-0.107-1.379-0.308-2.036 2.263 1.246 3.737 3.228 3.737 5.464 0 2.183-1.393 4.112-3.563 5.371z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/face.js":
/*!*****************************!*\
  !*** ./src/app/svg/face.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = (render => {
  return render(_, 'svg:face')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/github.js":
/*!*******************************!*\
  !*** ./src/app/svg/github.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:github')`
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 28">
    <path d="M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z"></path>
   </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/graduation.js":
/*!***********************************!*\
  !*** ./src/app/svg/graduation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:graduation')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 28">
    <path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/index.js":
/*!******************************!*\
  !*** ./src/app/svg/index.js ***!
  \******************************/
/*! exports provided: commentIcon, faceIcon, githubIcon, graduationIcon, locationIcon, rocketIcon, suitcaseIcon, trophyIcon, usersIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment */ "./src/app/svg/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentIcon", function() { return _comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face */ "./src/app/svg/face.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "faceIcon", function() { return _face__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github */ "./src/app/svg/github.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "githubIcon", function() { return _github__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _graduation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graduation */ "./src/app/svg/graduation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graduationIcon", function() { return _graduation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location */ "./src/app/svg/location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationIcon", function() { return _location__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rocket */ "./src/app/svg/rocket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rocketIcon", function() { return _rocket__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _suitcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suitcase */ "./src/app/svg/suitcase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "suitcaseIcon", function() { return _suitcase__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _trophy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trophy */ "./src/app/svg/trophy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trophyIcon", function() { return _trophy__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users */ "./src/app/svg/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersIcon", function() { return _users__WEBPACK_IMPORTED_MODULE_8__["default"]; });

//












/***/ }),

/***/ "./src/app/svg/location.js":
/*!*********************************!*\
  !*** ./src/app/svg/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = (render => {
  return render(_, 'svg:location')`
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 28">
    <path d="M12 10c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM16 10c0 0.953-0.109 1.937-0.516 2.797l-5.688 12.094c-0.328 0.688-1.047 1.109-1.797 1.109s-1.469-0.422-1.781-1.109l-5.703-12.094c-0.406-0.859-0.516-1.844-0.516-2.797 0-4.422 3.578-8 8-8s8 3.578 8 8z"></path>
 </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/rocket.js":
/*!*******************************!*\
  !*** ./src/app/svg/rocket.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:rocket')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 28">
    <path d="M22.5 7c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5zM26 2.5c0 5.187-1.437 8.641-5.141 12.359-0.906 0.891-1.937 1.813-3.047 2.75l-0.313 5.922c-0.016 0.156-0.109 0.313-0.25 0.406l-6 3.5c-0.078 0.047-0.156 0.063-0.25 0.063-0.125 0-0.25-0.047-0.359-0.141l-1-1c-0.125-0.141-0.172-0.328-0.125-0.5l1.328-4.312-4.391-4.391-4.312 1.328c-0.047 0.016-0.094 0.016-0.141 0.016-0.125 0-0.266-0.047-0.359-0.141l-1-1c-0.156-0.172-0.187-0.422-0.078-0.609l3.5-6c0.094-0.141 0.25-0.234 0.406-0.25l5.922-0.313c0.938-1.109 1.859-2.141 2.75-3.047 3.906-3.891 6.891-5.141 12.328-5.141 0.281 0 0.531 0.219 0.531 0.5z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/suitcase.js":
/*!*********************************!*\
  !*** ./src/app/svg/suitcase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:suitecase')`
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28">
    <path d="M10 6h8v-2h-8v2zM4.5 6v20h-1c-1.922 0-3.5-1.578-3.5-3.5v-13c0-1.922 1.578-3.5 3.5-3.5h1zM22 6v20h-16v-20h2v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h2zM28 9.5v13c0 1.922-1.578 3.5-3.5 3.5h-1v-20h1c1.922 0 3.5 1.578 3.5 3.5z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/trophy.js":
/*!*******************************!*\
  !*** ./src/app/svg/trophy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:trophy')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M26 6v-4h-20v4h-6v4c0 3.314 2.686 6 6 6 0.627 0 1.232-0.096 1.801-0.275 1.443 2.063 3.644 3.556 6.199 4.075v6.2h-2c-2.209 0-4 1.791-4 4h16c0-2.209-1.791-4-4-4h-2v-6.2c2.555-0.519 4.756-2.012 6.199-4.075 0.568 0.179 1.173 0.275 1.801 0.275 3.314 0 6-2.686 6-6v-4h-6zM6 13.625c-1.999 0-3.625-1.626-3.625-3.625v-2h3.625v2c0 1.256 0.232 2.457 0.655 3.565-0.213 0.039-0.431 0.060-0.655 0.060zM29.625 10c0 1.999-1.626 3.625-3.625 3.625-0.224 0-0.442-0.021-0.655-0.060 0.423-1.107 0.655-2.309 0.655-3.565v-2h3.625v2z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/app/svg/users.js":
/*!******************************!*\
  !*** ./src/app/svg/users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = ((render, state) => {
  return render(state || _, 'svg:users')`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 28">
    <path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
  </svg>
  `
});


/***/ }),

/***/ "./src/ciritcal.scss":
/*!***************************!*\
  !*** ./src/ciritcal.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@global":{"html,\n  body,\n  main,\n  root,\n  article":{"minHeight":"100vh"},"body":{"fontFamily":"sans-serif","display":"flex","margin":"0","padding":"0","color":"#111","flex":"1"},"html.wf-active > body":{"fontFamily":"'Lato', sans-serif"},"ul":{"listStyle":"none"},"a":{"color":"white","fontWeight":"bold"},"root,\n  main":{"display":"flex","flexDirection":"column","flex":"1"},"main":{"color":"white","backgroundColor":"rgba(0, 0, 0, 0.6)"},"svg":{"fill":"currentColor"},".sr-only":{"position":"absolute","width":"1px","height":"1px","padding":"0","overflow":"hidden","clip":"rect(0, 0, 0, 0)","whiteSpace":"nowrap","border":"0"}}};

/***/ }),

/***/ "./src/jss.js":
/*!********************!*\
  !*** ./src/jss.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-preset-default */ "jss-preset-default");
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss_preset_default__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (Object(jss__WEBPACK_IMPORTED_MODULE_0__["create"])(jss_preset_default__WEBPACK_IMPORTED_MODULE_1___default()()));


/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: routes, url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vm */ "vm");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var viperhtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! viperhtml */ "viperhtml");
/* harmony import */ var viperhtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(viperhtml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/app */ "./src/app/app.js");
/* harmony import */ var _ciritcal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ciritcal.scss */ "./src/ciritcal.scss");
/* harmony import */ var _ciritcal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ciritcal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hyperhtml_html_views_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hyperhtml-html-views-loader */ "hyperhtml-html-views-loader");
/* harmony import */ var hyperhtml_html_views_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hyperhtml_html_views_loader__WEBPACK_IMPORTED_MODULE_7__);
//










//

_app_app__WEBPACK_IMPORTED_MODULE_5__["app"].hyper = viperhtml__WEBPACK_IMPORTED_MODULE_3___default.a

const log = debug__WEBPACK_IMPORTED_MODULE_0___default()('my:server:main')
const templatePath = 'src/template.html'

const sheet = _jss__WEBPACK_IMPORTED_MODULE_4__["default"].createStyleSheet(_ciritcal_scss__WEBPACK_IMPORTED_MODULE_6___default.a)

//

const routes = [
  '/index.html',
  '/me.html',
  '/achievements.html',
  '/rockets.html',
  '/contact.html'
]

const url = 'https://douglasduteil.github.io'

/* harmony default export */ __webpack_exports__["default"] = (async () => {
  log('loading template from', templatePath)
  const templateFileBuffer = await fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(templatePath)
  const htmlifyTemplate = hyperhtml_html_views_loader__WEBPACK_IMPORTED_MODULE_7___default.a
    .call({}, templateFileBuffer.toString())
    .replace(/^module.exports = "/, '`')
    .replace(/";$/, '`')
  const sandbox = Object(vm__WEBPACK_IMPORTED_MODULE_2__["createContext"])({})
  const hyperTemplate = Object(vm__WEBPACK_IMPORTED_MODULE_2__["runInContext"])(
    `(render, model) => render${htmlifyTemplate}`,
    sandbox
  )

  return async (ctx, next) => {
    const {
      request: { url, method }
    } = ctx

    if (/^(?!GET|HEAD).*$/.test(method)) {
      return next()
    }

    if (!['/', ...routes].includes(url)) {
      return next()
    }

    log({ url, method })
    const response = await _app_app__WEBPACK_IMPORTED_MODULE_5__["app"].toString(url)
    log({ url, method, response })
    ctx.body = hyperTemplate(viperhtml__WEBPACK_IMPORTED_MODULE_3___default.a, {
      ...response,
      criticalCss: `<style>${sheet.toString()}</style>`
    }).toString()
  }
});


/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "hyperhtml-html-views-loader":
/*!**********************************************!*\
  !*** external "hyperhtml-html-views-loader" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hyperhtml-html-views-loader");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-preset-default":
/*!*************************************!*\
  !*** external "jss-preset-default" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-preset-default");

/***/ }),

/***/ "nanobus":
/*!**************************!*\
  !*** external "nanobus" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanobus");

/***/ }),

/***/ "nanohref":
/*!***************************!*\
  !*** external "nanohref" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanohref");

/***/ }),

/***/ "nanolocation":
/*!*******************************!*\
  !*** external "nanolocation" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanolocation");

/***/ }),

/***/ "nanoraf":
/*!**************************!*\
  !*** external "nanoraf" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoraf");

/***/ }),

/***/ "nanorouter":
/*!*****************************!*\
  !*** external "nanorouter" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanorouter");

/***/ }),

/***/ "nanotiming":
/*!*****************************!*\
  !*** external "nanotiming" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanotiming");

/***/ }),

/***/ "viperhtml":
/*!****************************!*\
  !*** external "viperhtml" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("viperhtml");

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ })

/******/ });