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
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between'
    },
    title: {//flex: '1 1 100%'
    },
    search: {
      border: 1,
      borderColor: "black"
    },
    searchtextfield: {
      background: '#edf2f7'
    }
  });
});
/*==================================*/

var colors = {
  "completed": {
    '--background-start': '#76D3C9',
    '--background-end': '#CEEDEB'
  },
  "processing": {
    '--background-start': '#FBA285',
    '--background-end': '#FEE2E1'
  },
  "cancelled": {
    '--background-start': '#E2E3E5',
    '--background-end': '#F1ECE1'
  },
  "refunded": {
    '--background-start': '#ABA4D3',
    '--background-end': '#E7B8D9'
  }
};
var useStylesStatusSelector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      '&:focus': {
        background: 'transparent'
      }
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.62cde1fc18067d7db047.hot-update.js.map