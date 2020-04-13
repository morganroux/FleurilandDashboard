webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/Orders.style.tsx":
/*!************************************************!*\
  !*** ./src/components/Orders/Orders.style.tsx ***!
  \************************************************/
/*! exports provided: useStylesOrders, colors, useStylesStatusSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesOrders", function() { return useStylesOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesStatusSelector", function() { return useStylesStatusSelector; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var useStylesOrders = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      padding: theme.spacing(3)
    }
  });
});
/*==================================*/

var colors = {
  "completed": {
    '--background-start': '#2196F3',
    '--background-end': '#21CBF3',
    '--box-shadow': 'rgba(33, 203, 243, .3)'
  },
  "processing": {
    '--background-start': 'red',
    //'#FE6B8B',
    '--background-end': '#FF8E53',
    '--box-shadow': 'rgba(255, 105, 135, .3)'
  }
};
var useStylesStatusSelector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    filledOverride: {
      background: 'var(--background-start)',
      borderRadius: 10,
      border: 0,
      boxShadow: '0 3px 5px 2px var(--box-shadow)'
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.3768931f99b206c3399f.hot-update.js.map