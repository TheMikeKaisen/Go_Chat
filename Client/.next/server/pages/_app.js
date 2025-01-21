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

/***/ "./modules/auth_provider.tsx":
/*!***********************************!*\
  !*** ./modules/auth_provider.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authenticated: false,\n    setAuthenticated: ()=>{},\n    user: {\n        username: \"\",\n        id: \"\"\n    },\n    setUser: ()=>{}\n});\nconst AuthContextProvider = ({ children  })=>{\n    const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        id: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userInfo = localStorage.getItem(\"user_info\");\n        if (!userInfo) {\n            if (window.location.pathname != \"/signup\") {\n                router.push(\"/login\");\n                return;\n            }\n        } else {\n            const user = JSON.parse(userInfo);\n            if (user) {\n                setUser({\n                    username: user.username,\n                    id: user.id\n                });\n            }\n            setAuthenticated(true);\n        }\n    }, [\n        authenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            authenticated: authenticated,\n            setAuthenticated: setAuthenticated,\n            user: user,\n            setUser: setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/modules/auth_provider.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2F1dGhfcHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEQ7QUFDbkI7QUFPaEMsTUFBTUksNEJBQWNILG9EQUFhQSxDQUtyQztJQUNESSxlQUFlLEtBQUs7SUFDcEJDLGtCQUFrQixJQUFNLENBQUM7SUFDekJDLE1BQU07UUFBRUMsVUFBVTtRQUFJQyxJQUFJO0lBQUc7SUFDN0JDLFNBQVMsSUFBTSxDQUFDO0FBQ2xCLEdBQUU7QUFFRixNQUFNQyxzQkFBc0IsQ0FBQyxFQUFFQyxTQUFRLEVBQWlDLEdBQUs7SUFDM0UsTUFBTSxDQUFDUCxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNPLE1BQU1HLFFBQVEsR0FBR1YsK0NBQVFBLENBQVc7UUFBRVEsVUFBVTtRQUFJQyxJQUFJO0lBQUc7SUFFbEUsTUFBTUksU0FBU1Ysc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVksV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1FBRXRDLElBQUksQ0FBQ0YsVUFBVTtZQUNiLElBQUlHLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUSxJQUFJLFdBQVc7Z0JBQ3pDTixPQUFPTyxJQUFJLENBQUM7Z0JBQ1o7WUFDRixDQUFDO1FBQ0gsT0FBTztZQUNMLE1BQU1iLE9BQWlCYyxLQUFLQyxLQUFLLENBQUNSO1lBQ2xDLElBQUlQLE1BQU07Z0JBQ1JHLFFBQVE7b0JBQ05GLFVBQVVELEtBQUtDLFFBQVE7b0JBQ3ZCQyxJQUFJRixLQUFLRSxFQUFFO2dCQUNiO1lBQ0YsQ0FBQztZQUNESCxpQkFBaUIsSUFBSTtRQUN2QixDQUFDO0lBQ0gsR0FBRztRQUFDRDtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDRCxZQUFZbUIsUUFBUTtRQUNuQkMsT0FBTztZQUNMbkIsZUFBZUE7WUFDZkMsa0JBQWtCQTtZQUNsQkMsTUFBTUE7WUFDTkcsU0FBU0E7UUFDWDtrQkFFQ0U7Ozs7OztBQUdQO0FBRUEsaUVBQWVELG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL21vZHVsZXMvYXV0aF9wcm92aWRlci50c3g/ZWU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IHR5cGUgVXNlckluZm8gPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHtcbiAgYXV0aGVudGljYXRlZDogYm9vbGVhblxuICBzZXRBdXRoZW50aWNhdGVkOiAoYXV0aDogYm9vbGVhbikgPT4gdm9pZFxuICB1c2VyOiBVc2VySW5mb1xuICBzZXRVc2VyOiAodXNlcjogVXNlckluZm8pID0+IHZvaWRcbn0+KHtcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHNldEF1dGhlbnRpY2F0ZWQ6ICgpID0+IHt9LFxuICB1c2VyOiB7IHVzZXJuYW1lOiAnJywgaWQ6ICcnIH0sXG4gIHNldFVzZXI6ICgpID0+IHt9LFxufSlcblxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VySW5mbz4oeyB1c2VybmFtZTogJycsIGlkOiAnJyB9KVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VySW5mbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2luZm8nKVxuXG4gICAgaWYgKCF1c2VySW5mbykge1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPSAnL3NpZ251cCcpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VyOiBVc2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm8pXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFthdXRoZW50aWNhdGVkXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXV0aGVudGljYXRlZDogYXV0aGVudGljYXRlZCxcbiAgICAgICAgc2V0QXV0aGVudGljYXRlZDogc2V0QXV0aGVudGljYXRlZCxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgc2V0VXNlcjogc2V0VXNlcixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidXNlcm5hbWUiLCJpZCIsInNldFVzZXIiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/auth_provider.tsx\n");

/***/ }),

/***/ "./modules/websocket_provider.tsx":
/*!****************************************!*\
  !*** ./modules/websocket_provider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebsocketContext\": () => (/* binding */ WebsocketContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst WebsocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    conn: null,\n    setConn: ()=>{}\n});\nconst WebSocketProvider = ({ children  })=>{\n    const [conn, setConn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebsocketContext.Provider, {\n        value: {\n            conn: conn,\n            setConn: setConn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/modules/websocket_provider.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebSocketProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3dlYnNvY2tldF9wcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFJL0MsTUFBTUcsaUNBQW1CRCxvREFBYUEsQ0FHMUM7SUFDREUsTUFBTSxJQUFJO0lBQ1ZDLFNBQVMsSUFBTSxDQUFDO0FBQ2xCLEdBQUU7QUFFRixNQUFNQyxvQkFBb0IsQ0FBQyxFQUFFQyxTQUFRLEVBQWlDLEdBQUs7SUFDekUsTUFBTSxDQUFDSCxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFPLElBQUk7SUFFM0MscUJBQ0UsOERBQUNFLGlCQUFpQkssUUFBUTtRQUN4QkMsT0FBTztZQUNMTCxNQUFNQTtZQUNOQyxTQUFTQTtRQUNYO2tCQUVDRTs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbW9kdWxlcy93ZWJzb2NrZXRfcHJvdmlkZXIudHN4P2I2NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgQ29ubiA9IFdlYlNvY2tldCB8IG51bGxcblxuZXhwb3J0IGNvbnN0IFdlYnNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHtcbiAgY29ubjogQ29ublxuICBzZXRDb25uOiAoYzogQ29ubikgPT4gdm9pZFxufT4oe1xuICBjb25uOiBudWxsLFxuICBzZXRDb25uOiAoKSA9PiB7fSxcbn0pXG5cbmNvbnN0IFdlYlNvY2tldFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2Nvbm4sIHNldENvbm5dID0gdXNlU3RhdGU8Q29ubj4obnVsbClcblxuICByZXR1cm4gKFxuICAgIDxXZWJzb2NrZXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb25uOiBjb25uLFxuICAgICAgICBzZXRDb25uOiBzZXRDb25uLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XZWJzb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldFByb3ZpZGVyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJXZWJzb2NrZXRDb250ZXh0IiwiY29ubiIsInNldENvbm4iLCJXZWJTb2NrZXRQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/websocket_provider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/auth_provider */ \"./modules/auth_provider.tsx\");\n/* harmony import */ var _modules_websocket_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/websocket_provider */ \"./modules/websocket_provider.tsx\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_auth_provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_websocket_provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row h-full min-h-screen font-sans\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/Project files/Go_Projects/7_Go_Chat/Client/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFNEI7QUFDRztBQUU5QyxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0U7a0JBQ0UsNEVBQUNKLDhEQUFtQkE7c0JBQ2xCLDRFQUFDQyxtRUFBaUJBOzBCQUNoQiw0RUFBQ0k7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNIO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgQXV0aENvbnRleHRQcm92aWRlciBmcm9tICcuLi9tb2R1bGVzL2F1dGhfcHJvdmlkZXInXG5pbXBvcnQgV2ViU29ja2V0UHJvdmlkZXIgZnJvbSAnLi4vbW9kdWxlcy93ZWJzb2NrZXRfcHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8V2ViU29ja2V0UHJvdmlkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaC1mdWxsIG1pbi1oLXNjcmVlbiBmb250LXNhbnMnPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1dlYlNvY2tldFByb3ZpZGVyPlxuICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiQXV0aENvbnRleHRQcm92aWRlciIsIldlYlNvY2tldFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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