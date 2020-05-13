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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
      background: 'linear-gradient(135deg, #00b300 10%, #39ac73 30%, #002db3 99%)',
      //'linear-gradient(135deg, #456F61 50%, #417991 90%)',
      color: '#FFF',
      fill: '#FFF',
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    toolbar: {
      background: 'WhiteSmoke',
      //'#edf2f7',
      justifyContent: 'space-between',
      paddingRight: theme.spacing(3)
    },
    icon: {
      fill: 'WhiteSmoke' //'#edf2f7',

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/firebase */ "./src/helper/firebase.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Home/Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Home = () => {
  const classes = Object(_Home_style__WEBPACK_IMPORTED_MODULE_7__["default"])();

  const handleLogout = () => {
    _helper_firebase__WEBPACK_IMPORTED_MODULE_9__["firebase"].auth().signOut();
  };

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h5",
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Fleuriland")), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.drawerContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: handleLogout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Logout")), __jsx(_Orders_Orders__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/LoginPage/LoginPage.style.tsx":
/*!******************************************************!*\
  !*** ./src/components/LoginPage/LoginPage.style.tsx ***!
  \******************************************************/
/*! exports provided: useStyleLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyleLoginPage", function() { return useStyleLoginPage; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyleLoginPage = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      background: 'linear-gradient(135deg, #00b300 10%, #39ac73 60%, #002db3 99%)'
    },
    container: {
      maxWidth: 'sm',
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down('sm')]: {
        paddingTop: '20vh'
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: '5vh'
      }
    },
    paper: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        height: '60vh'
      },
      [theme.breakpoints.up('md')]: {
        height: '90vh'
      },
      minHeight: '400px',
      width: '35vw',
      minWidth: '300px'
    },
    typo: {
      display: "flex",
      justifyContent: "center"
    },
    error: {
      color: 'red'
    },
    button: {
      background: '#39ac73',
      color: 'white',
      marginTop: '1vh',
      height: '60px',
      "&:hover": {
        background: '#0086b3'
      }
    },
    form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
      paddingLeft: '5vw',
      paddingRight: '5vw'
    },
    textfield: {
      paddingBottom: '20px'
    },
    providers: {
      display: "flex",
      justifyContent: "center"
    },
    google: {
      marginTop: '20px'
    }
  });
});

/***/ }),

/***/ "./src/components/LoginPage/LoginPage.tsx":
/*!************************************************!*\
  !*** ./src/components/LoginPage/LoginPage.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/firebase */ "./src/helper/firebase.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "@material-ui/icons/MailOutline");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VpnKey */ "@material-ui/icons/VpnKey");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoginPage_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginPage.style */ "./src/components/LoginPage/LoginPage.style.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/LoginPage/LoginPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const LoginPage = () => {
  const classes = Object(_LoginPage_style__WEBPACK_IMPORTED_MODULE_7__["useStyleLoginPage"])();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: pwd,
    1: setPwd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const hanldeGoogleClick = () => {
    _helper_firebase__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(_helper_firebase__WEBPACK_IMPORTED_MODULE_1__["googleAuthProvider"]);
  };

  const hanldeSignIn = async e => {
    e.preventDefault(); // await firebase.auth().createUserWithEmailAndPassword('test@test.fr', '123456').catch(function(error) {
    //     // Handle Errors here.
    //     setError(error.message)
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    // });

    _helper_firebase__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithEmailAndPassword(email, pwd).catch(function (error) {
      // Handle Errors here.
      setError(error.message);
      var errorCode = error.code;
      var errorMessage = error.message; // ...
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: classes.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.paper,
    elevation: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.typo,
    variant: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Fleuriland"), __jsx("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: hanldeSignIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: classes.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.textfield,
    value: email,
    onChange: event => setEmail(event.target.value),
    id: "mail",
    label: "Email",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "start",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 35
        }
      }, __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 37
        }
      }))
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.textfield,
    value: pwd,
    onChange: event => setPwd(event.target.value),
    id: "password",
    type: showPassword ? "text" : "password",
    label: "Password",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "start",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 35
        }
      }, __jsx(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 37
        }
      })),
      endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "end",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 37
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
        "aria-label": "toggle password visibility",
        onClick: () => setShowPassword(!showPassword),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 39
        }
      }, showPassword ? __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 57
        }
      }) : __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 74
        }
      })))
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), !!error && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    className: `${classes.typo} ${classes.error}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, error), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "Login"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./src/components/OrderDetailsDialog/OrderDetailsDialog.style.tsx":
/*!************************************************************************!*\
  !*** ./src/components/OrderDetailsDialog/OrderDetailsDialog.style.tsx ***!
  \************************************************************************/
/*! exports provided: useStylesDetailsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesDetailsDialog", function() { return useStylesDetailsDialog; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStylesDetailsDialog = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    dialogContent: {
      background: 'WhiteSmoke'
    },
    container: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
    tableContainer: {
      marginTop: theme.spacing(1)
    },
    mainTitle: {
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    title: {
      paddingBottom: theme.spacing(1)
    },
    main: {
      padding: theme.spacing(3),
      margin: theme.spacing(2)
    },
    contact: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    address: {
      flexGrow: 1
    },
    details: {
      padding: theme.spacing(3),
      margin: theme.spacing(2)
    }
  });
});

/***/ }),

/***/ "./src/components/OrderDetailsDialog/OrderDetailsDialog.tsx":
/*!******************************************************************!*\
  !*** ./src/components/OrderDetailsDialog/OrderDetailsDialog.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_order_order_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/order/order.context */ "./src/context/order/order.context.tsx");
/* harmony import */ var _OrderDetailsDialog_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderDetailsDialog.style */ "./src/components/OrderDetailsDialog/OrderDetailsDialog.style.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/OrderDetailsDialog/OrderDetailsDialog.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const formatStr = str => {
  return !!str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
};

const OrderDetailsDialog = () => {
  const {
    order,
    setOpen,
    open
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_order_order_context__WEBPACK_IMPORTED_MODULE_3__["OrderContext"]);
  const bill = !!order && order.billing;
  const ship = !!order && order.shipping;
  const productList = !!order ? order.line_items : [];
  const method = !!order && order.shipping_lines[0] ? order.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  const classes = Object(_OrderDetailsDialog_style__WEBPACK_IMPORTED_MODULE_4__["useStylesDetailsDialog"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: open,
    onClose: () => setOpen(false),
    fullWidth: true,
    maxWidth: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    className: classes.dialogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, order && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    className: classes.mainTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, "Commande #", order.id, " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    elevation: 3,
    className: classes.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, formatStr(bill.first_name), " ", formatStr(bill.last_name)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "M\xE9thode : ", method), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Paiement : ", order.payment_method_title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Total : ", order.total, "\u20AC")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    elevation: 3,
    className: classes.contact,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, "Facturation"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    style: {
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, formatStr(bill.first_name), " ", formatStr(bill.last_name)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }, `${bill.address_1.toLowerCase()}${!!bill.address_2 ? ` ${bill.address_2.toLowerCase()} ` : ' '}- ${bill.postcode} ${formatStr(bill.city)}`), bill.email && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 38
    }
  }, bill.email.toLowerCase()), bill.phone && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 38
    }
  }, bill.phone)), method == "Livraison chez vous" && __jsx("div", {
    className: classes.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, "Livraison"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    style: {
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, formatStr(ship.first_name), " ", formatStr(ship.last_name)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, `${ship.address_1.toLowerCase()}${!!ship.address_2 ? ` ${ship.address_2.toLowerCase()} ` : ' '}- ${ship.postcode} ${formatStr(ship.city)}`))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    elevation: 3,
    className: classes.details,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "D\xE9tails de la commande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.tableContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, productList.map((product, id) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      key: id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 31
      }
    }, product.quantity), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 31
      }
    }, product.name));
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderDetailsDialog);

/***/ }),

/***/ "./src/components/Orders/OrderItem.style.tsx":
/*!***************************************************!*\
  !*** ./src/components/Orders/OrderItem.style.tsx ***!
  \***************************************************/
/*! exports provided: useStylesOrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesOrderItem", function() { return useStylesOrderItem; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStylesOrderItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    link: {
      // '&:hover': {
      //     cursor: 'pointer'
      // }
      cursor: 'pointer',
      color: 'black',
      fontWeight: 'bold'
    }
  });
});

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
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StatusSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatusSelector */ "./src/components/Orders/StatusSelector.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocalShipping */ "@material-ui/icons/LocalShipping");
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/HouseOutlined */ "@material-ui/icons/HouseOutlined");
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_auth_auth_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/auth/auth.context */ "./src/context/auth/auth.context.tsx");
/* harmony import */ var _context_order_order_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context/order/order.context */ "./src/context/order/order.context.tsx");
/* harmony import */ var _OrderItem_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OrderItem.style */ "./src/components/Orders/OrderItem.style.tsx");
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
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(IdCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx(NameCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx(PriceCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx(StatusCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx(DateCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx(CityCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx(MethodCell, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })));
};

const IdCell = ({
  order
}) => {
  const classes = Object(_OrderItem_style__WEBPACK_IMPORTED_MODULE_13__["useStylesOrderItem"])();
  const {
    setOrder,
    setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_order_order_context__WEBPACK_IMPORTED_MODULE_12__["OrderContext"]);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.link,
    onClick: () => {
      setOrder(order);
      setOpen(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, order.id));
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
      lineNumber: 59,
      columnNumber: 9
    }
  }, lastName, " ", firstName);
};

const PriceCell = ({
  order
}) => {
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_auth_context__WEBPACK_IMPORTED_MODULE_11__["AuthContext"]);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, authState.user.email == 'valerie@fleuriland.fr' ? order.total : '***', "\u20AC");
};

const StatusCell = ({
  order,
  enqueueSnackbar
}) => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(order.status);
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_auth_context__WEBPACK_IMPORTED_MODULE_11__["AuthContext"]);

  const handleChange = async event => {
    const status = event.target.value;

    if (authState.user.email != 'valerie@fleuriland.fr') {
      enqueueSnackbar(`Vous n'avez pas l'autorisation d'apporter des modifications`, {
        variant: 'warning',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }
      });
      return;
    }

    const rep = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(`api/updateOrder?id=${order.id}&status=${status}`);

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_StatusSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    status: status,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 117,
      columnNumber: 9
    }
  }, `${dd}-${mm}-${yyyy} ${hh}:${min}`);
};

const CityCell = ({
  order
}) => {
  const city = order.shipping.city.charAt(0).toUpperCase() + order.shipping.city.slice(1).toLowerCase();
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, city);
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
      lineNumber: 131,
      columnNumber: 9
    }
  }, !!method && __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: method,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9___default.a,
    TransitionProps: {
      timeout: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, method == "Retrait en point de vente" && __jsx(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }), method == "Livraison chez vous" && __jsx(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_10__["withSnackbar"])(OrderItem));

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
/* harmony import */ var _OrderDetailsDialog_OrderDetailsDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../OrderDetailsDialog/OrderDetailsDialog */ "./src/components/OrderDetailsDialog/OrderDetailsDialog.tsx");
/* harmony import */ var _context_order_order_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/order/order.context */ "./src/context/order/order.context.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const OrderTableHead = ({
  orderBy,
  orderDir,
  setOrderBy,
  setOrderDir
}) => {
  const heads = ["N°", "Nom", "Total", "Status", "Date de commande", "Ville", "Expédition"];

  const createSortHandler = id => {
    if (orderBy == id) setOrderDir(orderDir == 'asc' ? 'desc' : 'asc');else {
      setOrderBy(id);
      setOrderDir('asc');
    }
  };

  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, heads.map((name, id) => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: id,
    align: name == "Expédition" ? "center" : "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
    active: orderBy === id,
    direction: orderBy === id ? orderDir : 'asc',
    onClick: () => createSortHandler(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, name)))));
};

const OrderTable = props => {
  const {
    orders,
    searchtext
  } = props;
  const {
    setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_order_order_context__WEBPACK_IMPORTED_MODULE_10__["OrderContext"]);
  const {
    0: orderBy,
    1: setOrderBy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: orderDir,
    1: setOrderDir
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('desc');
  const sorters = [_sorters__WEBPACK_IMPORTED_MODULE_7__["sortById"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByName"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByTotal"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByStatus"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByDate"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByCity"], _sorters__WEBPACK_IMPORTED_MODULE_7__["sortByMethod"]];

  const getSortHandler = (orderBy, orderDir) => {
    return (elmt1, elmt2) => {
      const ret = sorters[orderBy](elmt1, elmt2);
      return orderDir == 'asc' ? ret : -ret;
    };
  };

  return __jsx("div", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    stickyHeader: true,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(OrderTableHead, {
    orderBy: orderBy,
    orderDir: orderDir,
    setOrderBy: setOrderBy,
    setOrderDir: setOrderDir,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, orders.filter(order => {
    const text = searchtext.toLowerCase();
    const firstName = order.billing.first_name.toLowerCase();
    const lastName = order.billing.last_name.toLowerCase();
    const id = order.id.toString();
    return id.includes(text) || lastName.includes(text) || firstName.includes(text);
  }).sort(getSortHandler(orderBy, orderDir)).map(order => {
    return __jsx(_OrderItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: order.id,
      order: order,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    });
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: () => setOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Test"), __jsx(_OrderDetailsDialog_OrderDetailsDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }));
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
      paddingRight: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between'
    },
    title: {},
    search: {},
    searchtextfield: {
      paddingLeft: theme.spacing(1),
      background: 'WhiteSmoke'
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
/* harmony import */ var _context_order_order_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/order/order.context */ "./src/context/order/order.context.tsx");
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
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const loadOrders = async () => {
      const newOrders = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`api/orders`);
      setOrders(newOrders.data);
      setIsLoading(false);
    };

    loadOrders();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_context_order_order_context__WEBPACK_IMPORTED_MODULE_9__["OrderProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.title,
    variant: "h4",
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Commandes"), __jsx("div", {
    className: classes.search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Rechercher",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputBase"], {
    className: classes.searchtextfield,
    placeholder: "Rechercher",
    onChange: event => setSearchText(event.target.value),
    value: searchText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }))), isLoading == true && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 35
    }
  }), __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
    in: !isLoading,
    timeout: 500,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_OrderTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    orders: orders,
    searchtext: searchText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }))));
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
/*! exports provided: sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByCity, sortByMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortById", function() { return sortById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTotal", function() { return sortByTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByStatus", function() { return sortByStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByCity", function() { return sortByCity; });
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
const sortByCity = (elmt1, elmt2) => elmt1.shipping.city.toLowerCase() <= elmt2.shipping.city.toLowerCase() ? -1 : 1;
const sortByMethod = (elmt1, elmt2) => {
  const method1 = elmt1.shipping_lines[0] ? elmt1.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  const method2 = elmt2.shipping_lines[0] ? elmt2.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  return method1 <= method2 ? -1 : 1;
};

/***/ }),

/***/ "./src/context/auth/auth.context.tsx":
/*!*******************************************!*\
  !*** ./src/context/auth/auth.context.tsx ***!
  \*******************************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/context/auth/auth.context.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  auth: false,
  user: null
};
const AuthContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return _objectSpread({}, state, {
        auth: true,
        user: action.user
      });

    case 'LOGOUT':
      return _objectSpread({}, state, {
        auth: false,
        user: null
      });

    default:
      return state;
  }
};

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(authReducer, INITIAL_STATE);
  return __jsx(AuthContext.Provider, {
    value: {
      authState,
      authDispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/context/order/order.context.tsx":
/*!*********************************************!*\
  !*** ./src/context/order/order.context.tsx ***!
  \*********************************************/
/*! exports provided: OrderContext, OrderProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderContext", function() { return OrderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProvider", function() { return OrderProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/context/order/order.context.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OrderContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  order: null,
  open: false
});
const OrderProvider = ({
  children
}) => {
  const {
    0: order,
    1: setOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(OrderContext.Provider, {
    value: {
      order,
      setOrder,
      open,
      setOpen
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/helper/firebase.tsx":
/*!*********************************!*\
  !*** ./src/helper/firebase.tsx ***!
  \*********************************/
/*! exports provided: firebase, googleAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  apiKey: "AIzaSyARkwRYJ_YxFZByN8dDCpD8Cirs8j3sB9w",
  authDomain: "fleuriland-dashboard.firebaseapp.com",
  databaseURL: "https://fleuriland-dashboard.firebaseio.com",
  projectId: "fleuriland-dashboard",
  storageBucket: "fleuriland-dashboard.appspot.com",
  messagingSenderId: "1055673697175",
  appId: "1:1055673697175:web:51faa702f99b19eb7ffad2"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config);
}

const googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider(); //const database = firebase.database();



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
/* harmony import */ var _components_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginPage/LoginPage */ "./src/components/LoginPage/LoginPage.tsx");
/* harmony import */ var _helper_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/firebase */ "./src/helper/firebase.tsx");
/* harmony import */ var _context_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/auth.context */ "./src/context/auth/auth.context.tsx");
var _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Index = () => {
  const {
    authState,
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const auth = authState.auth;

  const setAuthListener = () => {
    _helper_firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        authDispatch({
          type: 'LOGIN',
          user
        });
      } else authDispatch({
        type: 'LOGOUT'
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(setAuthListener, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Fleuriland"), auth ? __jsx(_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 18
    }
  }) : __jsx(_components_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
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

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

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

/***/ "@material-ui/icons/MailOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MailOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/icons/VpnKey":
/*!********************************************!*\
  !*** external "@material-ui/icons/VpnKey" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VpnKey");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

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