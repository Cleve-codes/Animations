"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ScrollSection.tsx":
/*!**************************************!*\
  !*** ./components/ScrollSection.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// type Props = {}\nconst ScrollSection = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pin = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo(sectionRef.current, {\n            translateX: 0\n        }, {\n            translateX: \"-300vw\",\n            ease: \"none\",\n            duration: 1,\n            scrollTrigger: {\n                trigger: triggerRef.current,\n                start: \"top top\",\n                end: \"2000 top\",\n                scrub: true,\n                pin: true\n            }\n        });\n        return ()=>{\n            pin.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"scroll-section-outer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: triggerRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: sectionRef,\n                className: \"scroll-section-inner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \".h3\",\n                            children: \"Section 1\"\n                        }, void 0, false, {\n                            fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \".h3\",\n                            children: \"Section 2\"\n                        }, void 0, false, {\n                            fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \".h3\",\n                            children: \"Section 3\"\n                        }, void 0, false, {\n                            fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \".h3\",\n                            children: \"Section 4\"\n                        }, void 0, false, {\n                            fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollSection, \"4T38NAjndkK2FQ/20bPVz/GD+3w=\");\n_c = ScrollSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollSection);\nvar _c;\n$RefreshReg$(_c, \"ScrollSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2Nyb2xsU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dEO0FBQ3pCO0FBQ2dDO0FBRXZELGtCQUFrQjtBQUVsQixNQUFNSyxnQkFBZ0I7O0lBRXBCLE1BQU1DLGFBQWFMLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1NLGFBQWFOLDZDQUFNQSxDQUFDO0lBRTFCRSw0Q0FBSUEsQ0FBQ0ssY0FBYyxDQUFDSixrRUFBYUE7SUFFakNGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sTUFBTU4sNENBQUlBLENBQUNPLE1BQU0sQ0FBQ0osV0FBV0ssT0FBTyxFQUFFO1lBQzFDQyxZQUFZO1FBQ2QsR0FBRztZQUNEQSxZQUFZO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxlQUFlO2dCQUNaQyxTQUFTVCxXQUFXSSxPQUFPO2dCQUMzQk0sT0FBTztnQkFDUEMsS0FBSztnQkFDTEMsT0FBTztnQkFDUFYsS0FBSztZQUNSO1FBQ0Y7UUFFQSxPQUFPO1lBQ0xBLElBQUlXLElBQUk7UUFDVjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJQyxLQUFLakI7c0JBQ1IsNEVBQUNnQjtnQkFBSUMsS0FBS2xCO2dCQUFZZ0IsV0FBVTs7a0NBQzlCLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUdILFdBQVU7c0NBQU07Ozs7Ozs7Ozs7O2tDQUV0Qiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2YsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUFNOzs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNmLDRFQUFDRzs0QkFBR0gsV0FBVTtzQ0FBTTs7Ozs7Ozs7Ozs7a0NBRXBCLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDZiw0RUFBQ0c7NEJBQUdILFdBQVU7c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQWhETWpCO0tBQUFBO0FBa0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2Nyb2xsU2VjdGlvbi50c3g/YzYxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlcidcblxuLy8gdHlwZSBQcm9wcyA9IHt9XG5cbmNvbnN0IFNjcm9sbFNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGluID0gZ3NhcC5mcm9tVG8oc2VjdGlvblJlZi5jdXJyZW50LCB7XG4gICAgICB0cmFuc2xhdGVYOiAwLFxuICAgIH0sIHtcbiAgICAgIHRyYW5zbGF0ZVg6ICctMzAwdncnLFxuICAgICAgZWFzZTogJ25vbmUnLFxuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgZW5kOiAnMjAwMCB0b3AnLFxuICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgICBwaW46IHRydWUsXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBwaW4ua2lsbCgpO1xuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uLW91dGVyJz5cbiAgICAgICAgPGRpdiByZWY9e3RyaWdnZXJSZWZ9PlxuICAgICAgICAgIDxkaXYgcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uLWlubmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbic+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9Jy5oMyc+U2VjdGlvbiAxPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9Jy5oMyc+U2VjdGlvbiAyPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9Jy5oMyc+U2VjdGlvbiAzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9Jy5oMyc+U2VjdGlvbiA0PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIlNjcm9sbFNlY3Rpb24iLCJzZWN0aW9uUmVmIiwidHJpZ2dlclJlZiIsInJlZ2lzdGVyUGx1Z2luIiwicGluIiwiZnJvbVRvIiwiY3VycmVudCIsInRyYW5zbGF0ZVgiLCJlYXNlIiwiZHVyYXRpb24iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJraWxsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInJlZiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ScrollSection.tsx\n"));

/***/ })

});