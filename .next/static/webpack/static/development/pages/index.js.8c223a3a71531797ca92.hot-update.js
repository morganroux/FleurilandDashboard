webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _StatusSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusSelector */ "./src/components/Orders/StatusSelector.tsx");
/* harmony import */ var _Orders_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Orders.style */ "./src/components/Orders/Orders.style.tsx");
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
  var text = "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.children.toString()),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_Orders_style__WEBPACK_IMPORTED_MODULE_4__["colors"]["processing"]),
      color = _useState2[0],
      setColor = _useState2[1];

  var handleChange = function handleChange(event) {
    setStatus(event.target.value);
    setColor(_Orders_style__WEBPACK_IMPORTED_MODULE_4__["colors"][event.target.value]);
  };
  /*
      if (props.children.toString() == "processing"){
          color = "Coral";
          text = "En cours";
      }
      else if (props.children.toString() == "completed"){
          color = "LightGreen";
          text = "Terminée";
      }
      else if (props.children.toString() == "cancelled"){
          color = "WhiteSmoke";
          text = "Annulée";
      }
      else if (props.children.toString() == "refunded"){
          color = "#bad095";
          text = "Remboursée";
      }
      else {
          color = "White";
          text = props.children.toString();
      }
      */


  return (// <TableCell style={{backgroundColor:`${color}`,  borderRadius:10}}>
    __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        borderRadius: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, __jsx(_StatusSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      status: status,
      handleChange: handleChange,
      color: color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }))
  );
};

var MethodCell = function MethodCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OrderItem);

/***/ }),

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
  "processing": {
    '--background-start': '#2196F3',
    '--background-end': '#21CBF3',
    '--box-shadow': 'rgba(33, 203, 243, .3)'
  },
  "completed": {
    '--background-start': '#FE6B8B',
    '--background-end': '#FF8E53',
    '--box-shadow': 'rgba(255, 105, 135, .3)'
  }
};
var useStylesStatusSelector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      backgroundColor: "blue"
    },
    filled: {
      backgroundColor: 'var(--background-start) !important'
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.8c223a3a71531797ca92.hot-update.js.map