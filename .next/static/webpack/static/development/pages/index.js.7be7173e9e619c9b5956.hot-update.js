webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Home */ "./src/components/Home/Home.tsx");
/* harmony import */ var _helper_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/firebase */ "./src/helper/firebase.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _context_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/auth.context */ "./src/context/auth/auth.context.tsx");
var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var LoginPage = function LoginPage() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      authState = _useContext.authState,
      authDispatch = _useContext.authDispatch;

  var hanldeClick = function hanldeClick() {
    _helper_firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth().signInWithPopup(_helper_firebase__WEBPACK_IMPORTED_MODULE_2__["googleAuthProvider"]);
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: hanldeClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Login");
};

var Index = function Index() {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      authState = _useContext2.authState,
      authDispatch = _useContext2.authDispatch;

  var auth = authState.auth;

  var setAuthListener = function setAuthListener() {
    _helper_firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth().onAuthStateChanged(function (user) {
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
          type: 'LOGIN'
        });
      } else authDispatch({
        type: 'LOGOUT'
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(setAuthListener, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Fleuriland"), auth ? __jsx(_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 18
    }
  }) : __jsx(LoginPage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7be7173e9e619c9b5956.hot-update.js.map