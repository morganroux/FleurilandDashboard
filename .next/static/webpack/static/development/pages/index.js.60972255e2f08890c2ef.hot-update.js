webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/helper/firebase.tsx":
/*!*********************************!*\
  !*** ./src/helper/firebase.tsx ***!
  \*********************************/
/*! exports provided: firebase, googleAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


var config = {
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

var googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider(); //const database = firebase.database();



/***/ })

})
//# sourceMappingURL=index.js.60972255e2f08890c2ef.hot-update.js.map