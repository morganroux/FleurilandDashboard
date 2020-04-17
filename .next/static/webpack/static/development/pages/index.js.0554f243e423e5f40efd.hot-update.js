webpackHotUpdate("static/development/pages/index.js",{

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
var sortById = function sortById(elmt1, elmt2) {
  return elmt1.id <= elmt2.id ? -1 : 1;
};
var sortByName = function sortByName(elmt1, elmt2) {
  var firstName1 = elmt1.billing.first_name.charAt(0).toUpperCase() + elmt1.billing.first_name.slice(1).toLowerCase();
  var lastName1 = elmt1.billing.last_name.charAt(0).toUpperCase() + elmt1.billing.last_name.slice(1).toLowerCase();
  var firstName2 = elmt2.billing.first_name.charAt(0).toUpperCase() + elmt2.billing.first_name.slice(1).toLowerCase();
  var lastName2 = elmt2.billing.last_name.charAt(0).toUpperCase() + elmt2.billing.last_name.slice(1).toLowerCase();

  if (lastName1 != lastName2) {
    return lastName1 <= lastName2 ? -1 : 1;
  } else return firstName1 <= firstName2 ? -1 : 1;
};
var sortByTotal = function sortByTotal(elmt1, elmt2) {
  return parseFloat(elmt1.total) <= parseFloat(elmt2.total) ? -1 : 1;
};
var sortByStatus = function sortByStatus(elmt1, elmt2) {
  return elmt1.status <= elmt2.status ? -1 : 1;
};
var sortByDate = function sortByDate(elmt1, elmt2) {
  return elmt1.date_created <= elmt2.date_created ? -1 : 1;
};
var sortByMethod = function sortByMethod(elmt1, elmt2) {
  var method1 = elmt1.shipping_lines[0] ? elmt1.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  var method2 = elmt2.shipping_lines[0] ? elmt2.shipping_lines[0].method_title : 'Aucune méthode renseignée';
  return method1 <= method2 ? -1 : 1;
};

/***/ })

})
//# sourceMappingURL=index.js.0554f243e423e5f40efd.hot-update.js.map