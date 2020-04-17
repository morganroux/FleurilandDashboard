module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Home/Home.style.tsx":
/*!********************************************!*\
  !*** ./src/components/Home/Home.style.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const drawerWidth = 242;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      background: 'linear-gradient(135deg, #456F61 50%, #417991 90%)',
      color: '#FFF',
      fill: '#FFF',
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    toolbar: {
      background: '#edf2f7'
    },
    icon: {
      fill: '#edf2f7'
    },
    content: {
      flexGrow: 1
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Orders_Orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Orders/Orders */ "./src/components/Orders/Orders.tsx");
/* harmony import */ var _Home_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home.style */ "./src/components/Home/Home.style.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Home/Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Home = () => {
  const classes = Object(_Home_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h5",
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Fleuriland")), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.drawerContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_Orders_Orders__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Orders/OrderItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/Orders/OrderItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StatusSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusSelector */ "./src/components/Orders/StatusSelector.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LocalShipping */ "@material-ui/icons/LocalShipping");
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HouseOutlined */ "@material-ui/icons/HouseOutlined");
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const OrderItem = props => {
  const {
    order
  } = props;
  return order && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: order.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(IdCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), __jsx(NameCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx(PriceCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx(StatusCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })), __jsx(DateCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx(MethodCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })));
};

const IdCell = ({
  order
}) => {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, order.id);
};

const NameCell = ({
  order
}) => {
  const firstName = order.billing.first_name.charAt(0).toUpperCase() + order.billing.first_name.slice(1).toLowerCase();
  const lastName = order.billing.last_name.charAt(0).toUpperCase() + order.billing.last_name.slice(1).toLowerCase();
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, lastName, " ", firstName);
};

const PriceCell = ({
  order
}) => {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, order.total, "\u20AC");
};

const StatusCell = ({
  order,
  enqueueSnackbar
}) => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(order.status);

  const handleChange = async event => {
    const status = event.target.value;
    const rep = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(`http://localhost:3000/api/updateOrder?id=${order.id}&status=${status}`);
    console.log("ok");

    if (rep.data.status == event.target.value) {
      setStatus(event.target.value);
      enqueueSnackbar('Mise à jour réussie', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      });
    } else enqueueSnackbar('Erreur de connexion au serveur', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    });
  };

  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      borderRadius: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_StatusSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    status: status,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));
};

const DateCell = ({
  order
}) => {
  const date = new Date(order.date_created);
  const min = date.getMinutes().toString().padStart(2, "0");
  const hh = date.getHours().toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = date.getFullYear().toString().padStart(2, "0");
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, `${dd}-${mm}-${yyyy} ${hh}:${min}`);
};

const MethodCell = ({
  order
}) => {
  const method = order.shipping_lines[0] ? order.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, !!method && __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: method,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8___default.a,
    TransitionProps: {
      timeout: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, method == "Retrait en point de vente" && __jsx(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }), method == "Livraison chez vous" && __jsx(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_9__["withSnackbar"])(OrderItem));

/***/ }),

/***/ "./src/components/Orders/OrderTable.tsx":
/*!**********************************************!*\
  !*** ./src/components/Orders/OrderTable.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OrderItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderItem */ "./src/components/Orders/OrderItem.tsx");
/* harmony import */ var _sorters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sorters */ "./src/components/Orders/sorters.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const OrderHead = ({
  orderBy,
  orderDir,
  setOrderBy,
  setOrderDir
}) => {
  const heads = ["N°", "Nom", "Total", "Status", "Date de commande", "Expédition"];

  const createSortHandler = id => {
    console.log(id);
    if (orderBy == id) setOrderDir(orderDir == 'asc' ? 'desc' : 'asc');else {
      setOrderBy(id);
      setOrderDir('asc');
    }
  };

  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, heads.map((name, id) => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: id,
    align: name == "Expédition" ? "center" : "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
    active: orderBy === id,
    direction: orderBy === id ? orderDir : 'asc',
    onClick: () => createSortHandler(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, name)))));
};

const OrderTable = props => {
  const {
    orders
  } = props;
  const {
    0: orderBy,
    1: setOrderBy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: orderDir,
    1: setOrderDir
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('asc');
  const sorters = [_sorters__WEBPACK_IMPORTED_MODULE_7__["sortById"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByName"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByTotal"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByStatus"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByDate"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByMethod"]];

  const getSortHandler = (orderBy, orderDir) => {
    return (elmt1, elmt2) => {
      const ret = sorters[orderBy](elmt1, elmt2); //elmt1.id <= elmt2.id ? -1 : 1;

      return orderDir == 'asc' ? ret : -ret;
    };
  };

  return __jsx("div", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    stickyHeader: true,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(OrderHead, {
    orderBy: orderBy,
    orderDir: orderDir,
    setOrderBy: setOrderBy,
    setOrderDir: setOrderDir,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, orders.sort(getSortHandler(orderBy, orderDir)).map(order => {
    return __jsx(_OrderItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: order.id,
      order: order,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStylesOrders = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      padding: theme.spacing(3)
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    title: {
      flex: '1 1 100%'
    }
  });
});
/*==================================*/

const colors = {
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
const useStylesStatusSelector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      '&:focus': {
        background: 'transparent'
      }
    }
  });
});

/***/ }),

/***/ "./src/components/Orders/Orders.tsx":
/*!******************************************!*\
  !*** ./src/components/Orders/Orders.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderTable */ "./src/components/Orders/OrderTable.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Orders_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Orders.style */ "./src/components/Orders/Orders.style.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/Orders.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Orders = () => {
  const {
    0: orders,
    1: setOrders
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const classes = Object(_Orders_style__WEBPACK_IMPORTED_MODULE_7__["useStylesOrders"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadOrders() {
      const newOrders = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3000/api/orders");
      setOrders(newOrders.data);
      setIsLoading(false);
    }

    loadOrders();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.title,
    variant: "h4",
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Commandes"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Rechercher",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })))), isLoading == true && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 35
    }
  }), __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
    in: !isLoading,
    timeout: 500,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_OrderTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    orders: orders,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "./src/components/Orders/StatusSelector.tsx":
/*!**************************************************!*\
  !*** ./src/components/Orders/StatusSelector.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Orders_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Orders.style */ "./src/components/Orders/Orders.style.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/StatusSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const StatusSelector = props => {
  const classes = Object(_Orders_style__WEBPACK_IMPORTED_MODULE_3__["useStylesStatusSelector"])();
  const colorStart = _Orders_style__WEBPACK_IMPORTED_MODULE_3__["colors"][props.status]['--background-start'];
  const colorEnd = _Orders_style__WEBPACK_IMPORTED_MODULE_3__["colors"][props.status]['--background-end'];
  return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: props.status,
    onChange: props.handleChange,
    classes: {
      root: classes.root
    },
    disableUnderline: true //style={colors[props.status]}
    ,
    style: {
      background: `linear-gradient(45deg, ${colorStart} 30%, ${colorEnd} 90%)`,
      borderRadius: 10,
      border: 0,
      display: 'block',
      padding: '10px 10px 10px 10px'
    } // inputProps= {{
    //     padding: '15px 20px 15px 20px',
    // }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "cancelled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Annul\xE9e"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "processing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "En Cours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "completed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Termin\xE9e"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "refunded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Rembours\xE9e"));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusSelector);

/***/ }),

/***/ "./src/components/Orders/sorters.tsx":
/*!*******************************************!*\
  !*** ./src/components/Orders/sorters.tsx ***!
  \*******************************************/
/*! exports provided: sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortById", function() { return sortById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTotal", function() { return sortByTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByStatus", function() { return sortByStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByMethod", function() { return sortByMethod; });
const sortById = (elmt1, elmt2) => elmt1.id <= elmt2.id ? -1 : 1;
const sortByName = (elmt1, elmt2) => {
  const firstName1 = elmt1.billing.first_name.charAt(0).toUpperCase() + elmt1.billing.first_name.slice(1).toLowerCase();
  const lastName1 = elmt1.billing.last_name.charAt(0).toUpperCase() + elmt1.billing.last_name.slice(1).toLowerCase();
  const firstName2 = elmt2.billing.first_name.charAt(0).toUpperCase() + elmt2.billing.first_name.slice(1).toLowerCase();
  const lastName2 = elmt2.billing.last_name.charAt(0).toUpperCase() + elmt2.billing.last_name.slice(1).toLowerCase();

  if (lastName1 != lastName2) {
    return lastName1 <= lastName2 ? -1 : 1;
  } else return firstName1 <= firstName2 ? -1 : 1;
};
const sortByTotal = (elmt1, elmt2) => parseFloat(elmt1.total) <= parseFloat(elmt2.total) ? -1 : 1;
const sortByStatus = (elmt1, elmt2) => elmt1.status <= elmt2.status ? -1 : 1;
const sortByDate = (elmt1, elmt2) => elmt1.date_created <= elmt2.date_created ? -1 : 1;
const sortByMethod = (elmt1, elmt2) => {
  const method1 = elmt1.shipping_lines[0] ? elmt1.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  const method2 = elmt2.shipping_lines[0] ? elmt2.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  return method1 <= method2 ? -1 : 1;
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Home */ "./src/components/Home/Home.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Fleuriland"), __jsx(_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/HouseOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/HouseOutlined" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HouseOutlined");

/***/ }),

/***/ "@material-ui/icons/LocalShipping":
/*!***************************************************!*\
  !*** external "@material-ui/icons/LocalShipping" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalShipping");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map