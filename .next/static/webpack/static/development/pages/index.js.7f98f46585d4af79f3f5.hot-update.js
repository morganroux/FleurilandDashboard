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
var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/StatusSelector.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StatusSelector = function StatusSelector() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      status = _useState[0],
      setStatus = _useState[1];

  var handleChange = function handleChange(event) {
    setStatus(event.target.value);
  };

  return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    labelId: "demo-simple-select-outlined-label",
    id: "demo-simple-select-outlined",
    value: status,
    onChange: handleChange,
    label: "Status",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "None")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: 30,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Thirty"));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusSelector);

/***/ })

})
//# sourceMappingURL=index.js.7f98f46585d4af79f3f5.hot-update.js.map