exports.ids = ["contact"];
exports.modules = {

/***/ "./src/app/contact.js":
/*!****************************!*\
  !*** ./src/app/contact.js ***!
  \****************************/
/*! exports provided: backgoundColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgoundColor", function() { return backgoundColor; });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/app/page.js");
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/app/svg/index.js");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.scss */ "./src/app/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_3__);
//






//

const sheet = _jss__WEBPACK_IMPORTED_MODULE_1__["default"].createStyleSheet(_contact_scss__WEBPACK_IMPORTED_MODULE_3___default.a)
const { classes } = sheet

//

const _ = {}
const backgoundColor = '#F23030'
/* harmony default export */ __webpack_exports__["default"] = (({ hyper: { wire } }, state, emit) =>
  Object(_page__WEBPACK_IMPORTED_MODULE_0__["default"])(wire)({
    title: 'Contact',
    bgColor: backgoundColor,
    watermark: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["commentIcon"])(wire, state),
    children: wire(_, ':contact')`
  <ul class=${classes.ul}>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="mailto:douglasduteil@gmail.com">Gmail

    </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://google.com/+DouglasDuteil">Google +
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://twitter.com/douglasduteil">Twitter
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="https://www.facebook.com/douglas.duteil">Facebook
  </a>
  </li>
    <li class=${classes.li}>
    <a target="_blank"
    class=${classes.a}  href="mailto:douglasduteil@outlook.com">Outlook

    </a>
  </li>
  </ul>
  <style>${{ html: sheet.toString() }}</style>
  `
  }));


/***/ }),

/***/ "./src/app/contact.scss":
/*!******************************!*\
  !*** ./src/app/contact.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@global section":{"alignItems":"center"},"ul":{"listStyle":"none","padding":"0","margin":"0","display":"flex","flexWrap":"wrap","justifyContent":"space-around"},"li":{"marginTop":"10px","marginRight":"10px"},"a":{"textAlign":"center","display":"block","color":"#eee","textDecoration":"none","backgroundColor":"rgba(0, 0, 0, 0.5)","borderRadius":"50%","width":"100px","height":"100px","lineHeight":"100px","@media (min-width: 768px)":{"width":"200px","height":"200px","lineHeight":"200px","fontSize":"1.5em"}}};

/***/ }),

/***/ "./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/*! exports provided: sheet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.scss */ "./src/app/page.scss");
/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_scss__WEBPACK_IMPORTED_MODULE_1__);
//




const sheet = _jss__WEBPACK_IMPORTED_MODULE_0__["default"].createStyleSheet(_page_scss__WEBPACK_IMPORTED_MODULE_1___default.a)
sheet.addRules({
  section: { backgroundColor: data => data.bgColor },
  title: { backgroundColor: data => data.bgColor }
})
const { classes } = sheet

const _ = {}
/* harmony default export */ __webpack_exports__["default"] = (render => ({ title, children, bgColor, watermark }) => {
  sheet.update({
    bgColor
  })
  return render(_, ':page-layout')`
    <div class=${classes.watermark}>${watermark}</div>
    <h1 class=${classes.title}>${title}</h1>
    <section class=${classes.section}>${children}</section>
    <style>${{ html: sheet.toString() }}</style>
  `
});


/***/ }),

/***/ "./src/app/page.scss":
/*!***************************!*\
  !*** ./src/app/page.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@global":{"@media (min-width: 768px)":{"main":{"paddingLeft":"70px"}}},"title":{"position":"fixed","top":"0","left":"0","right":"0","zIndex":"100","transform":"translateZ(0)","willChange":"transform","textAlign":"center","margin":"0","padding":"1rem 0","@media (min-width: 768px)":{"left":"70px"}},"section":{"flex":"1","display":"flex","padding":"20px","marginBottom":"50px","@media (min-width: 768px)":{"marginBottom":"0","paddingBottom":"0"}},"watermark":{"position":"fixed","top":"0","bottom":"0","left":"0","right":"0","zIndex":"0","opacity":"0.1","display":"flex","alignItems":"center","justifyContent":"center","@global svg":{"width":"170px","height":"170px"}}};

/***/ })

};;