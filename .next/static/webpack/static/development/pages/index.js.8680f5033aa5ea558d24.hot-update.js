webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/StatusSelector.tsx":
/*!**************************************************!*\
  !*** ./src/components/Orders/StatusSelector.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _Orders_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Orders.style */ "./src/components/Orders/Orders.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/StatusSelector.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StatusSelector = function StatusSelector(props) {
  var classes = Object(_Orders_style__WEBPACK_IMPORTED_MODULE_3__["useStylesStatusSelector"])();
  console.log("in");
  return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: props.status,
    onChange: props.handleChange,
    variant: "filled",
    classes: {
      root: classes.filledOverride
    },
    style: _Orders_style__WEBPACK_IMPORTED_MODULE_3__["colors"][props.status],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "cancelled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Annul\xE9e"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "processing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "En Cours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "completed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Termin\xE9e"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "refunded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Rembours\xE9e"));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusSelector);

/***/ })

})
//# sourceMappingURL=index.js.8680f5033aa5ea558d24.hot-update.js.map