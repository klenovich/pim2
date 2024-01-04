/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/initSupabase.ts":
/*!*****************************!*\
  !*** ./lib/initSupabase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://blbtgtjbhmaielhislnb.supabase.co\" ?? 0, \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsYnRndGpiaG1haWVsaGlzbG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjQxODIsImV4cCI6MjAxOTkwMDE4Mn0.PHxweEA2q-a9Yz1LXhzO4fNhiBfCm44y6e5gBCVO1zk\" ?? 0);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW5pdFN1cGFiYXNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUU3QyxNQUFNQyxXQUFXRCxtRUFBWUEsQ0FDbENFLDBDQUFvQyxJQUFJLEdBQ3hDQSxrTkFBeUMsSUFBSSxHQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10b2RvLWxpc3QvLi9saWIvaW5pdFN1cGFiYXNlLnRzPzMzZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCA/PyAnJyxcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkgPz8gJydcbilcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/initSupabase.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_initSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/initSupabase */ \"./lib/initSupabase.ts\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.SessionContextProvider, {\n        supabaseClient: _lib_initSupabase__WEBPACK_IMPORTED_MODULE_1__.supabase,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDcEI7QUFDNEM7QUFHdEQsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSCxnRkFBc0JBO1FBQUNJLGdCQUFnQkwsdURBQVFBO2tCQUM5Qyw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRvZG8tbGlzdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICdAL2xpYi9pbml0U3VwYWJhc2UnXG5pbXBvcnQgJ0Avc3R5bGVzL2FwcC5jc3MnXG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvbkNvbnRleHRQcm92aWRlciBzdXBhYmFzZUNsaWVudD17c3VwYWJhc2V9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU2Vzc2lvbkNvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiU2Vzc2lvbkNvbnRleHRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN1cGFiYXNlQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();