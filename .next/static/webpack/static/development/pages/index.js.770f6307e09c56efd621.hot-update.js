webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/OrderTable.tsx":
/*!**********************************************!*\
  !*** ./src/components/Orders/OrderTable.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _OrderItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OrderItem */ "./src/components/Orders/OrderItem.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderTable.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var OrderHead = function OrderHead(_ref) {
  var orderBy = _ref.orderBy,
      orderDir = _ref.orderDir;
  var heads = ["N°", "Nom", "Total", "Status", "Date de commande"];
  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, heads.map(function (name, id) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      align: name == "Expédition" ? "center" : "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
      active: orderBy === id,
      direction: orderBy === id ? orderDir : 'asc',
      onClick: createSortHandler(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, name));
  })));
};

var OrderTable = function OrderTable(props) {
  var orders = props.orders;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      orderBy = _useState[0],
      setOrderBy = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('asc'),
      orderDir = _useState2[0],
      setOrderDir = _useState2[1];

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    stickyHeader: true,
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(OrderHead, {
    orderBy: orderBy,
    orderDir: orderDir,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, orders.map(function (order) {
    return __jsx(_OrderItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: order.id,
      order: order,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

/***/ })

})
//# sourceMappingURL=index.js.770f6307e09c56efd621.hot-update.js.map