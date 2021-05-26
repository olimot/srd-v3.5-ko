self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_next_srd_v3_5_ko_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _anchors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../anchors.json */ "./src/anchors.json");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.module.scss */ "./src/components/App/App.module.scss");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\next\\srd-v3.5-ko\\src\\components\\App\\App.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projects_next_srd_v3_5_ko_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const documentGroups = _anchors_json__WEBPACK_IMPORTED_MODULE_5__.filter(a => a.level === 1).reduce((prev, current) => {
  const groupIndex = prev.findIndex(group => group.groupName === current.groupName);
  if (groupIndex === -1) return [...prev, {
    groupName: current.groupName,
    pages: [current]
  }];
  return [...prev.slice(0, groupIndex), _objectSpread(_objectSpread({}, prev[groupIndex]), {}, {
    pages: [...prev[groupIndex].pages, current]
  }), ...prev.slice(groupIndex + 1)];
}, []);

const App = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().app), 'layout'),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().appwrap), 'layout__wrap'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),
        children: "\uAC1C\uC815\uD310 (v.3.5) \uC2DC\uC2A4\uD15C \uCC38\uC870 \uBB38\uC11C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uAC1C\uC815\uD310 (v.3.5) \uC2DC\uC2A4\uD15C \uCC38\uC870 \uBB38\uC11C\uB294 Revised (v.3.5) System Reference Document\uB97C \uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED\uD558\uACE0 GitHub\uC744 \uC774\uC6A9\uD558\uC5EC \uAD00\uB9AC\uD558\uACE0 \uC788\uB294 \uBB38\uC11C\uC785\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Github: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://github.com/olimot/srd-v3.5-ko",
          children: "https://github.com/olimot/srd-v3.5-ko"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["\uC6D0\uBCF8:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "http://www.wizards.com/default.asp?x=d20/article/srd35",
          children: "http://www.wizards.com/default.asp?x=d20/article/srd35"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), " (\uC544\uCE74\uC774\uBE0C: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://archive.org/details/dnd35srd",
          children: "https://archive.org/details/dnd35srd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableOfContents),
        children: documentGroups.map(group => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: group.groupName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: group.pages.map(page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: `/docs/${page.basename}`,
                  prefetch: false,
                  children: page.pageName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, undefined)]
          }, group.groupName, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInNsaWNlIiwiQXBwIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIm1hcCIsInBhZ2UiLCJiYXNlbmFtZSIsInBhZ2VOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsaURBQUEsQ0FDWkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEtBQUYsS0FBWSxDQUROLEVBRXBCQyxNQUZvQixDQUViLENBQUNDLElBQUQsRUFBT0MsT0FBUCxLQUFtQjtBQUN6QixRQUFNQyxVQUFVLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFnQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFNBQU4sS0FBb0JKLE9BQU8sQ0FBQ0ksU0FBdEQsQ0FBbkI7QUFDQSxNQUFJSCxVQUFVLEtBQUssQ0FBQyxDQUFwQixFQUF1QixPQUFPLENBQUMsR0FBR0YsSUFBSixFQUFVO0FBQUVLLGFBQVMsRUFBRUosT0FBTyxDQUFDSSxTQUFyQjtBQUFnQ0MsU0FBSyxFQUFFLENBQUNMLE9BQUQ7QUFBdkMsR0FBVixDQUFQO0FBQ3ZCLFNBQU8sQ0FDTCxHQUFHRCxJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNMLFVBQWQsQ0FERSxrQ0FFQUYsSUFBSSxDQUFDRSxVQUFELENBRko7QUFFa0JJLFNBQUssRUFBRSxDQUFDLEdBQUdOLElBQUksQ0FBQ0UsVUFBRCxDQUFKLENBQWlCSSxLQUFyQixFQUE0QkwsT0FBNUI7QUFGekIsTUFHTCxHQUFHRCxJQUFJLENBQUNPLEtBQUwsQ0FBV0wsVUFBVSxHQUFHLENBQXhCLENBSEUsQ0FBUDtBQUtELENBVm9CLEVBVWxCLEVBVmtCLENBQXZCOztBQVlBLE1BQU1NLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBVSxDQUFDQyw2REFBRCxFQUFhLFFBQWIsQ0FBMUI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsaURBQVUsQ0FBQ0MsaUVBQUQsRUFBaUIsY0FBakIsQ0FBMUI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFNRTtBQUFBLDRDQUNVO0FBQUcsY0FBSSxFQUFDLHVDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVNFO0FBQUEsb0NBQ00sR0FETixlQUVFO0FBQUcsY0FBSSxFQUFDLHdEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRiwrQ0FLZ0I7QUFBRyxjQUFJLEVBQUMsc0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWdCRTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGtCQUNHZixjQUFjLENBQUNnQixHQUFmLENBQW9CUCxLQUFELElBQVc7QUFDN0IsOEJBQ0U7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLQSxLQUFLLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsd0JBQ0dELEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxHQUFaLENBQWlCQyxJQUFELGlCQUNmO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFHLFNBQVFBLElBQUksQ0FBQ0MsUUFBUyxFQUFuQztBQUFzQywwQkFBUSxFQUFFLEtBQWhEO0FBQUEsNEJBQ0dELElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNGLElBQUksQ0FBQ0MsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBLGFBQVVULEtBQUssQ0FBQ0MsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQWNELFNBZkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1Q0QsQ0F4Q0Q7O0tBQU1HLEc7QUEwQ04sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBmYmUwZDUxYmU0YmE4YzYwMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi9hbmNob3JzLmpzb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGRvY3VtZW50R3JvdXBzID0gYW5jaG9yc1xuICAuZmlsdGVyKChhKSA9PiBhLmxldmVsID09PSAxKVxuICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJbmRleCA9IHByZXYuZmluZEluZGV4KChncm91cCkgPT4gZ3JvdXAuZ3JvdXBOYW1lID09PSBjdXJyZW50Lmdyb3VwTmFtZSk7XG4gICAgaWYgKGdyb3VwSW5kZXggPT09IC0xKSByZXR1cm4gWy4uLnByZXYsIHsgZ3JvdXBOYW1lOiBjdXJyZW50Lmdyb3VwTmFtZSwgcGFnZXM6IFtjdXJyZW50XSB9XTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4ucHJldi5zbGljZSgwLCBncm91cEluZGV4KSxcbiAgICAgIHsgLi4ucHJldltncm91cEluZGV4XSwgcGFnZXM6IFsuLi5wcmV2W2dyb3VwSW5kZXhdLnBhZ2VzLCBjdXJyZW50XSB9LFxuICAgICAgLi4ucHJldi5zbGljZShncm91cEluZGV4ICsgMSksXG4gICAgXTtcbiAgfSwgW10gYXMgeyBncm91cE5hbWU6IHN0cmluZzsgcGFnZXM6IHR5cGVvZiBhbmNob3JzIH1bXSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYXBwLCAnbGF5b3V0Jyl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmFwcHdyYXAsICdsYXlvdXRfX3dyYXAnKX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PuqwnOygle2MkCAodi4zLjUpIOyLnOyKpO2FnCDssLjsobAg66y47IScPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAg6rCc7KCV7YyQICh2LjMuNSkg7Iuc7Iqk7YWcIOywuOyhsCDrrLjshJzripQgUmV2aXNlZCAodi4zLjUpIFN5c3RlbSBSZWZlcmVuY2UgRG9jdW1lbnTrpbwg7ZWc6rWt7Ja066GcIOuyiOyXre2VmOqzoCBHaXRIdWLsnYRcbiAgICAgICAgICDsnbTsmqntlZjsl6wg6rSA66as7ZWY6rOgIOyeiOuKlCDrrLjshJzsnoXri4jri6QuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR2l0aHViOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL29saW1vdC9zcmQtdjMuNS1rb1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9vbGltb3Qvc3JkLXYzLjUta288L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAg7JuQ67O4OnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cud2l6YXJkcy5jb20vZGVmYXVsdC5hc3A/eD1kMjAvYXJ0aWNsZS9zcmQzNVwiPlxuICAgICAgICAgICAgaHR0cDovL3d3dy53aXphcmRzLmNvbS9kZWZhdWx0LmFzcD94PWQyMC9hcnRpY2xlL3NyZDM1XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxiciAvPiAo7JWE7Lm07J2067iMOiA8YSBocmVmPVwiaHR0cHM6Ly9hcmNoaXZlLm9yZy9kZXRhaWxzL2RuZDM1c3JkXCI+aHR0cHM6Ly9hcmNoaXZlLm9yZy9kZXRhaWxzL2RuZDM1c3JkPC9hPilcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlT2ZDb250ZW50c30+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICAgIDxoMz57Z3JvdXAuZ3JvdXBOYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2dyb3VwLnBhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlLmJhc2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvY3MvJHtwYWdlLmJhc2VuYW1lfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5wYWdlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9