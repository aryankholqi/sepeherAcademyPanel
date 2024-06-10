"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/layout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useBodyLock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useBodyLock */ \"./components/hooks/useBodyLock.ts\");\n/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar */ \"./components/navbar/navbar.tsx\");\n/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar */ \"./components/sidebar/sidebar.tsx\");\n/* harmony import */ var _layout_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-context */ \"./components/layout/layout-context.ts\");\n/* harmony import */ var _layout_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.styles */ \"./components/layout/layout.styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sidebarOpen, setSidebarOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [_, setLocked] = (0,_hooks_useBodyLock__WEBPACK_IMPORTED_MODULE_2__.useLockedBody)(false);\n    const handleToggleSidebar = ()=>{\n        setSidebarOpen(!sidebarOpen);\n        setLocked(!sidebarOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_context__WEBPACK_IMPORTED_MODULE_5__.SidebarContext.Provider, {\n        value: {\n            collapsed: sidebarOpen,\n            setCollapsed: handleToggleSidebar\n        },\n        children: isMounted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_styles__WEBPACK_IMPORTED_MODULE_6__.WrapperLayout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarWrapper, {}, void 0, false, {\n                    fileName: \"/Users/aryankholqi/Desktop/sepeher-academy-panel/components/layout/layout.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__.NavbarWrapper, {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/aryankholqi/Desktop/sepeher-academy-panel/components/layout/layout.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aryankholqi/Desktop/sepeher-academy-panel/components/layout/layout.tsx\",\n            lineNumber: 31,\n            columnNumber: 23\n        }, undefined) : null\n    }, void 0, false, {\n        fileName: \"/Users/aryankholqi/Desktop/sepeher-academy-panel/components/layout/layout.tsx\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Layout, \"hL2xPBWNXPMlpblr1lKG322YtLM=\", false, function() {\n    return [\n        _hooks_useBodyLock__WEBPACK_IMPORTED_MODULE_2__.useLockedBody\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNFO0FBQ0o7QUFDRztBQUNGO0FBQ0Y7QUFNekMsTUFBTVEsU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBUzs7SUFDdkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHYixxREFBYyxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2MsR0FBR0MsVUFBVSxHQUFHWixpRUFBYUEsQ0FBQztJQUNyQyxNQUFNYSxzQkFBc0I7UUFDekJILGVBQWUsQ0FBQ0Q7UUFDaEJHLFVBQVUsQ0FBQ0g7SUFDZDtJQUVBWCxnREFBU0EsQ0FBQztRQUNQVSxhQUFhO0lBQ2hCLEdBQUcsRUFBRTtJQUNMLHFCQUNHLDhEQUFDTCwyREFBY0EsQ0FBQ1csUUFBUTtRQUNyQkMsT0FBTztZQUNKQyxXQUFXUDtZQUNYUSxjQUFjSjtRQUNqQjtrQkFFQ04sMEJBQVksOERBQUNILHlEQUFhQTs7OEJBQ3hCLDhEQUFDRiw0REFBY0E7Ozs7OzhCQUNmLDhEQUFDRCx5REFBYUE7OEJBQUVLOzs7Ozs7Ozs7Ozt3QkFDQTs7Ozs7O0FBRzVCLEVBQUU7R0F6QldEOztRQUdhTCw2REFBYUE7OztLQUgxQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnRzeD8xYmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9ja2VkQm9keSB9IGZyb20gJy4uL2hvb2tzL3VzZUJvZHlMb2NrJztcbmltcG9ydCB7IE5hdmJhcldyYXBwZXIgfSBmcm9tICcuLi9uYXZiYXIvbmF2YmFyJztcbmltcG9ydCB7IFNpZGViYXJXcmFwcGVyIH0gZnJvbSAnLi4vc2lkZWJhci9zaWRlYmFyJztcbmltcG9ydCB7IFNpZGViYXJDb250ZXh0IH0gZnJvbSAnLi9sYXlvdXQtY29udGV4dCc7XG5pbXBvcnQgeyBXcmFwcGVyTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQuc3R5bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgY29uc3QgW3NpZGViYXJPcGVuLCBzZXRTaWRlYmFyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbXywgc2V0TG9ja2VkXSA9IHVzZUxvY2tlZEJvZHkoZmFsc2UpO1xuICAgY29uc3QgaGFuZGxlVG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICAgIHNldFNpZGViYXJPcGVuKCFzaWRlYmFyT3Blbik7XG4gICAgICBzZXRMb2NrZWQoIXNpZGViYXJPcGVuKTtcbiAgIH07XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRJc01vdW50ZWQodHJ1ZSlcbiAgIH0sIFtdKVxuICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIGNvbGxhcHNlZDogc2lkZWJhck9wZW4sXG4gICAgICAgICAgICBzZXRDb2xsYXBzZWQ6IGhhbmRsZVRvZ2dsZVNpZGViYXIsXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAge2lzTW91bnRlZCA/IDxXcmFwcGVyTGF5b3V0PlxuICAgICAgICAgICAgPFNpZGViYXJXcmFwcGVyIC8+XG4gICAgICAgICAgICA8TmF2YmFyV3JhcHBlcj57Y2hpbGRyZW59PC9OYXZiYXJXcmFwcGVyPlxuICAgICAgICAgPC9XcmFwcGVyTGF5b3V0PiA6IG51bGx9XG4gICAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxvY2tlZEJvZHkiLCJOYXZiYXJXcmFwcGVyIiwiU2lkZWJhcldyYXBwZXIiLCJTaWRlYmFyQ29udGV4dCIsIldyYXBwZXJMYXlvdXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJfIiwic2V0TG9ja2VkIiwiaGFuZGxlVG9nZ2xlU2lkZWJhciIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/layout.tsx\n"));

/***/ })

});