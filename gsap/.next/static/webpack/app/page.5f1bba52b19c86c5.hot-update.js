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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n// \"use client\";\n// import React, { useRef, useEffect } from 'react'\n// import gsap from 'gsap'\n// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'\n// // type Props = {}\n// const ScrollSection = () => {\n//   const sectionRef = useRef(null);\n//   const triggerRef = useRef(null);\n//   gsap.registerPlugin(ScrollTrigger);\n//   useEffect(() => {\n//     const pin = gsap.fromTo(sectionRef.current, {\n//       translateX: 0,\n//     }, {\n//       translateX: '-100%',\n//       ease: 'none',\n//       duration: 1,\n//       scrollTrigger: {\n//          trigger: triggerRef.current,\n//          start: 'top top',\n//          end: '2000 top',\n//          scrub: true,\n//          pin: true,\n//       }\n//     })\n//     return () => {\n//       pin.kill();\n//     }\n//   }, [])\n//   return (\n//     <section className='scroll-section-outer'>\n//         <div ref={triggerRef}>\n//           <div ref={sectionRef} className='scroll-section-inner'>\n//             <div className='scroll-section'>\n//               <h3 className='h3'>Section 1</h3>\n//             </div>\n//             <div className='scroll-section'>\n//             <h3 className='h3'>Section 2</h3>\n//             </div>\n//             <div className='scroll-section'>\n//             <h3 className='h3'>Section 3</h3>\n//             </div>\n//             <div className='scroll-section'>\n//             <h3 className='h3'>Section 4</h3>\n//             </div>\n//           </div>\n//         </div>\n//     </section>\n//   )\n// }\n// export default ScrollSection;\n\nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollSection = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _sectionRef_current;\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo((_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.children, {\n            x: \"100%\"\n        }, {\n            x: \"-100%\",\n            ease: \"none\",\n            scrollTrigger: {\n                trigger: sectionRef.current,\n                start: \"top top\",\n                end: ()=>{\n                    var _sectionRef_current;\n                    return \"+=\" + ((_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.offsetWidth);\n                },\n                scrub: true,\n                pin: true\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        className: \"scroll-section-outer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"h3\",\n                    children: \"Section 1\"\n                }, void 0, false, {\n                    fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"h3\",\n                    children: \"Section 2\"\n                }, void 0, false, {\n                    fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"h3\",\n                    children: \"Section 3\"\n                }, void 0, false, {\n                    fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"h3\",\n                    children: \"Section 4\"\n                }, void 0, false, {\n                    fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cleve/Documents/Javascript/animations/gsap/components/ScrollSection.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollSection, \"O9MYfDkQexHh+zrn37J6HLSAdf8=\");\n_c = ScrollSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollSection);\nvar _c;\n$RefreshReg$(_c, \"ScrollSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2Nyb2xsU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQixtREFBbUQ7QUFDbkQsMEJBQTBCO0FBQzFCLDBEQUEwRDtBQUUxRCxxQkFBcUI7QUFFckIsZ0NBQWdDO0FBRWhDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFFckMsd0NBQXdDO0FBRXhDLHNCQUFzQjtBQUN0QixvREFBb0Q7QUFDcEQsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWCw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsd0NBQXdDO0FBQ3hDLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsU0FBUztBQUVULHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsUUFBUTtBQUNSLFdBQVc7QUFFWCxhQUFhO0FBQ2IsaURBQWlEO0FBQ2pELGlDQUFpQztBQUNqQyxvRUFBb0U7QUFDcEUsK0NBQStDO0FBQy9DLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxxQkFBcUI7QUFDckIsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxxQkFBcUI7QUFDckIsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsTUFBTTtBQUNOLElBQUk7QUFFSixnQ0FBZ0M7OztBQUVnQjtBQUN6QjtBQUNnQztBQUV2REcsNENBQUlBLENBQUNFLGNBQWMsQ0FBQ0Qsa0VBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTUMsYUFBYU4sNkNBQU1BLENBQUM7SUFFMUJDLGdEQUFTQSxDQUFDO1lBQ0lLO1FBQVpKLDRDQUFJQSxDQUFDSyxNQUFNLEVBQUNELHNCQUFBQSxXQUFXRSxPQUFPLGNBQWxCRiwwQ0FBQUEsb0JBQW9CRyxRQUFRLEVBQUU7WUFDeENDLEdBQUc7UUFDTCxHQUFHO1lBQ0RBLEdBQUc7WUFDSEMsTUFBTTtZQUNOQyxlQUFlO2dCQUNiQyxTQUFTUCxXQUFXRSxPQUFPO2dCQUMzQk0sT0FBTztnQkFDUEMsS0FBSzt3QkFBYVQ7MkJBQVAsU0FBT0Esc0JBQUFBLFdBQVdFLE9BQU8sY0FBbEJGLDBDQUFBQSxvQkFBb0JVLFdBQVc7O2dCQUNqREMsT0FBTztnQkFDUEMsS0FBSztZQUNQO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBUUMsS0FBS2Q7UUFBWWUsV0FBVTs7MEJBQ2xDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQUs7Ozs7Ozs7Ozs7OzBCQUVyQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFVOzhCQUFLOzs7Ozs7Ozs7OzswQkFFckIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBSzs7Ozs7Ozs7Ozs7MEJBRXJCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0dBbkNNaEI7S0FBQUE7QUFxQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY3JvbGxTZWN0aW9uLnRzeD9jNjE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuLy8gaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyJ1xuXG4vLyAvLyB0eXBlIFByb3BzID0ge31cblxuLy8gY29uc3QgU2Nyb2xsU2VjdGlvbiA9ICgpID0+IHtcblxuLy8gICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xuLy8gICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4vLyAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBwaW4gPSBnc2FwLmZyb21UbyhzZWN0aW9uUmVmLmN1cnJlbnQsIHtcbi8vICAgICAgIHRyYW5zbGF0ZVg6IDAsXG4vLyAgICAgfSwge1xuLy8gICAgICAgdHJhbnNsYXRlWDogJy0xMDAlJyxcbi8vICAgICAgIGVhc2U6ICdub25lJyxcbi8vICAgICAgIGR1cmF0aW9uOiAxLFxuLy8gICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlclJlZi5jdXJyZW50LFxuLy8gICAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbi8vICAgICAgICAgIGVuZDogJzIwMDAgdG9wJyxcbi8vICAgICAgICAgIHNjcnViOiB0cnVlLFxuLy8gICAgICAgICAgcGluOiB0cnVlLFxuLy8gICAgICAgfVxuLy8gICAgIH0pXG5cbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgcGluLmtpbGwoKTtcbi8vICAgICB9XG4vLyAgIH0sIFtdKVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbi1vdXRlcic+XG4vLyAgICAgICAgIDxkaXYgcmVmPXt0cmlnZ2VyUmVmfT5cbi8vICAgICAgICAgICA8ZGl2IHJlZj17c2VjdGlvblJlZn0gY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbi1pbm5lcic+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLXNlY3Rpb24nPlxuLy8gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdoMyc+U2VjdGlvbiAxPC9oMz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uJz5cbi8vICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2gzJz5TZWN0aW9uIDI8L2gzPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLXNlY3Rpb24nPlxuLy8gICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0naDMnPlNlY3Rpb24gMzwvaDM+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbic+XG4vLyAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdoMyc+U2VjdGlvbiA0PC9oMz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU2VjdGlvbjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyJ1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBTY3JvbGxTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oc2VjdGlvblJlZi5jdXJyZW50Py5jaGlsZHJlbiwge1xuICAgICAgeDogJzEwMCUnLFxuICAgIH0sIHtcbiAgICAgIHg6ICctMTAwJScsXG4gICAgICBlYXNlOiAnbm9uZScsXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHNlY3Rpb25SZWYuY3VycmVudCxcbiAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgZW5kOiAoKSA9PiBcIis9XCIgKyBzZWN0aW9uUmVmLmN1cnJlbnQ/Lm9mZnNldFdpZHRoLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgcGluOiB0cnVlLFxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uLW91dGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2gzJz5TZWN0aW9uIDE8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLXNlY3Rpb24nPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdoMyc+U2VjdGlvbiAyPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1zZWN0aW9uJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0naDMnPlNlY3Rpb24gMzwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtc2VjdGlvbic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2gzJz5TZWN0aW9uIDQ8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFNlY3Rpb24iLCJzZWN0aW9uUmVmIiwiZnJvbVRvIiwiY3VycmVudCIsImNoaWxkcmVuIiwieCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwib2Zmc2V0V2lkdGgiLCJzY3J1YiIsInBpbiIsInNlY3Rpb24iLCJyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ScrollSection.tsx\n"));

/***/ })

});