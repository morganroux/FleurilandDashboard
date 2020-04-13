webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useControlled.js":
false,

/***/ "./src/components/Orders/OrderItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/Orders/OrderItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OrderItem = function OrderItem(props) {
  return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: props.order.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(IdCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, props.order.id), __jsx(NameCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.order.billing.first_name, " ", props.order.billing.last_name, " "), __jsx(PriceCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, props.order.total, "\u20AC"), __jsx(StatusCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, props.order.status), __jsx(MethodCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, props.order.shipping_lines[0].method_title));
};

var IdCell = function IdCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, props.children);
};

var NameCell = function NameCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, props.children);
};

var PriceCell = function PriceCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.children);
};

var StatusCell = function StatusCell(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.children.toString()),
      status = _useState[0],
      setStatus = _useState[1];

  var handleChange = function handleChange(event) {
    console.log("here");
    setStatus(event.target.value); //setColor(colors[event.target.value as string]);
  };

  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      borderRadius: 10,
      backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  });
};

var MethodCell = function MethodCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OrderItem);

/***/ }),

/***/ "./src/components/Orders/StatusSelector.tsx":
false

})
//# sourceMappingURL=index.js.3969480491b89a966041.hot-update.js.map