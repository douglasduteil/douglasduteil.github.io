exports.ids = ["achievements"];
exports.modules = {

/***/ "./src/app/achievements.js":
/*!*********************************!*\
  !*** ./src/app/achievements.js ***!
  \*********************************/
/*! exports provided: backgoundColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgoundColor", function() { return backgoundColor; });
/* harmony import */ var _jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jss */ "./src/jss.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/app/page.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/app/svg/index.js");
/* harmony import */ var _achievements_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./achievements.scss */ "./src/app/achievements.scss");
/* harmony import */ var _achievements_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_achievements_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _achievements_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievements.json */ "./src/app/achievements.json");
var _achievements_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./achievements.json */ "./src/app/achievements.json", 1);
//







//

const sheet = _jss__WEBPACK_IMPORTED_MODULE_0__["default"].createStyleSheet(_achievements_scss__WEBPACK_IMPORTED_MODULE_3___default.a)
const { classes } = sheet

//

const _ = {}
const backgoundColor = '#4F8C86'
/* harmony default export */ __webpack_exports__["default"] = (({ hyper: { wire } }, state, emit) =>
  Object(_page__WEBPACK_IMPORTED_MODULE_1__["default"])(wire)({
    title: 'Achievements',
    bgColor: backgoundColor,
    watermark: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["trophyIcon"])(wire, _),
    children: wire(_, ':achivement')`
    <article>${listTimeline(wire)(_achievements_json__WEBPACK_IMPORTED_MODULE_4__)}</article>

    <style>${{ html: sheet.toString() }}</style>
  `
  }));

function listTimeline(render) {
  return yearList => render()`
    <ul class=${classes.ul}>
    ${yearList.map(
      ([year, events]) => render()`
        <li>
          ${renderYear(render)(year)}

          <ul class=${classes['event-list']}>
          ${events.map(
            event => render()`
              <li class=${classes.event}>${renderEvent[event.type](render)(
              event
            )}</li>
            `
          )}
          </ul>
        </li>
      `
    )}
    </ul>`
}

function renderYear(render) {
  return year =>
    render()`<time class=${classes.year} datetime="${new Date(
      year
    )}">${year}</time>`
}

const renderEvent = {
  job(render) {
    return event => render()`
    <i class=${classes.icon}>${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["suitcaseIcon"])(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  study(render) {
    return event => render()`
    <i class=${classes.icon}>${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["graduationIcon"])(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  github(render) {
    return event => render()`
    <i class=${classes.icon}>${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["githubIcon"])(render, event)}</i>
    <div class=${classes.body}>

      <h3>${event.title}</h3>
      <p>${event.body}</p>
    </div>
    `
  },
  talk(render) {
    return event => render()`
    <i class=${classes.icon}>${Object(_svg__WEBPACK_IMPORTED_MODULE_2__["usersIcon"])(render, event)}</i>
    <div class=${classes.body}>
      <h3>${event.where}</h3>
      <p><em>"${event.title}"</em></p>
      <p><a href="${event.link.href}">${event.link.name}</a></p>
    </div>
      `
  }
}


/***/ }),

/***/ "./src/app/achievements.json":
/*!***********************************!*\
  !*** ./src/app/achievements.json ***!
  \***********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [["2014",[{"type":"talk","where":"Talk at the ngParis meetup","title":"Waaa Again !?","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/192808622/","name":"Meetup AngularJS #13 @SFEIR"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"Input[Range] over 9000","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/185603592/","name":"Meetup AngularJS #12 @BeMyAppFr"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"We need to make UI.Utils util again !","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/165733502/","name":"Meetup AngularJS #8 @SFEIR"}}]],["2013",[{"type":"talk","where":"Talk at the ngParis meetup","title":"WaaaAnimation","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/147070122/","name":"Meetup #5 @Deezer"}},{"type":"job","body":"Software development company","title":"Join SFEIR Paris"},{"type":"study","body":"MSc Human-Compute","title":"Graduated from Paris 8"},{"type":"github","body":"A open source organisation that buld widgets and directives for AngularJS","title":"Join Angular UI"}]]];

/***/ }),

/***/ "./src/app/achievements.scss":
/*!***********************************!*\
  !*** ./src/app/achievements.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"@global":{"section":{"@media (max-width: 767px)":{"marginBottom":"50px - 20px"},"@media (min-width: 768px)":{"paddingRight":"15px * 2","justifyContent":"center"}}},"ul":{"padding":"0","listStyle":"none","position":"relative","display":"table","width":"100%","zIndex":"0","color":"black","margin":"0 auto 30px","&:after":{"content":"''","display":"block","position":"absolute","zIndex":"-1","left":"33px","top":"0","bottom":"-30px","width":"10px","marginLeft":"-5px","backgroundColor":"rgba(0, 0, 0, 0.3)"}},"event-list":{"listStyle":"none","padding":"0","margin":"0"},"event":{"position":"relative","@media (min-width: 992px)":{"margin":"auto","width":"768px"}},"icon":{"width":"40px","height":"40px","speak":"none","position":"absolute","color":"#fff","borderRadius":"50%","backgroundColor":"#4f8c86","padding":"4px","boxShadow":"0 0 0 4px #fff","left":"34px","top":"-4px","margin":"0 0 0 -25px","display":"flex","alignItems":"center","justifyContent":"center","@global svg":{"width":"24px","height":"24px"},"@media (max-width: 767px)":{"fontSize":"1.4em"}},"body":{"position":"relative","margin":"5px 0 30px 93px","backgroundColor":"white","padding":"1rem 2rem","@global a":{"color":"#333"},"> h3":{"margin":"0 0 5px"},"&:after":{"content":"' '","right":"100%","height":"0","width":"0","position":"absolute","border":"solid transparent","pointerEvents":"none","borderRightColor":"#fff","borderWidth":"20px","top":"0"}},"year":{"display":"block","margin":"113.33333px 0 1em","paddingLeft":"48px","fontSize":"50px","fontWeight":"bold","color":"rgba(0, 0, 0, 0.6)"}};

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