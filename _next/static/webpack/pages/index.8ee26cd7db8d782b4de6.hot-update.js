self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_next_srd_v3_5_ko_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _anchors_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../anchors.json */ "./src/anchors.json");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SearchForm */ "./src/components/SearchForm/index.ts");
/* harmony import */ var _buildTOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildTOC */ "./src/components/Layout/buildTOC.ts");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TocItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TocItem */ "./src/components/Layout/TocItem.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Projects\\next\\srd-v3.5-ko\\src\\components\\Layout\\Layout.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projects_next_srd_v3_5_ko_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











const documentGroups = _anchors_json__WEBPACK_IMPORTED_MODULE_7__.filter(a => a.level === 1).reduce((prev, current) => {
  const groupIndex = prev.findIndex(group => group.groupName === current.groupName);
  if (groupIndex === -1) return [...prev, {
    groupName: current.groupName,
    pages: [current]
  }];
  return [...prev.slice(0, groupIndex), _objectSpread(_objectSpread({}, prev[groupIndex]), {}, {
    pages: [...prev[groupIndex].pages, current]
  }), ...prev.slice(groupIndex + 1)];
}, []);

const Layout = ({
  children
}) => {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const basename = decodeURIComponent(router.asPath.split('#')[0].split('/').pop() || '');
  const toc = (0,_buildTOC__WEBPACK_IMPORTED_MODULE_9__.default)(basename);
  const {
    0: isSidebarVisible,
    1: setSidebarVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: isTOCVisible,
    1: setTOCVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    pageName,
    groupName: pageGroupName
  } = _anchors_json__WEBPACK_IMPORTED_MODULE_7__.find(anchor => anchor.level === 1 && anchor.basename === basename) || {};
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setSidebarVisible(window.innerWidth >= 1024);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!isTOCVisible && !isSidebarVisible) return () => {};

    const dissmissTOC = e => {
      let cursor = e.target;

      if (isSidebarVisible && window.innerWidth < 1024) {
        var _cursor;

        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar))) cursor = cursor.parentElement;

        if (!((_cursor = cursor) !== null && _cursor !== void 0 && _cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar)))) setSidebarVisible(false);
      } else if (isTOCVisible) {
        var _cursor2;

        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc))) cursor = cursor.parentElement;

        if (!((_cursor2 = cursor) !== null && _cursor2 !== void 0 && _cursor2.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc)))) setTOCVisible(false);
      }
    };

    window.addEventListener('click', dissmissTOC);
    return () => window.removeEventListener('click', dissmissTOC);
  }, [isTOCVisible, isSidebarVisible]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().block), isSidebarVisible === null && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockInit), isSidebarVisible && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithSidebar), toc.length === 0 && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithoutTOC)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["v3.5 SRD", pageName && ` - ${pageName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().pageControls),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: () => setSidebarVisible(!isSidebarVisible),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          preserveAspectRatio: "xMidYMid meet",
          height: "1em",
          width: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toggleTOC),
        onClick: () => setTOCVisible(!isTOCVisible),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          preserveAspectRatio: "xMidYMid meet",
          height: "1em",
          width: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "10",
              x2: "7",
              y2: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().mainWrap),
      children: [toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc), isTOCVisible === true && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocVisible), isTOCVisible === false && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocHidden)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, item.anchor.basename, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "\uAC1C\uC815\uD310 (v.3.5) \uC2DC\uC2A4\uD15C \uCC38\uC870 \uBB38\uC11C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().groupList),
        children: documentGroups.map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("details", {
            open: !!group.pages.find(page => page.basename === basename),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("summary", {
              children: group.groupName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inGroupList),
              children: group.pages.map(page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: `/docs/${page.basename.split('.')[0]}`,
                  prefetch: false,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(basename === page.basename && 'active'),
                    children: page.pageName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined);
};

_s(Layout, "HnIImLeAJjEAndn6K2lCotoo4H4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Layout;
Layout.defaultProps = {
  children: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlTmFtZSIsInBhZ2VHcm91cE5hbWUiLCJhbmNob3IiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGlzc21pc3NUT0MiLCJlIiwiY3Vyc29yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsInNlYXJjaEZvcm0iLCJmaW5kIiwicGFnZSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsaURBQUEsQ0FDYkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEtBQUYsS0FBWSxDQURKLEVBRXBCQyxNQUZvQixDQUViLENBQUNDLElBQUQsRUFBT0Ms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REYsZUFFRTtBQUFJLHVCQUFTLEVBQUUrQix5RUFBZjtBQUFBLHdCQUNHaEMsS0FBSyxDQUFDRSxLQUFOLENBQVlvQyxHQUFaLENBQWdCSSxJQUFJLGlCQUNuQjtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBRyxTQUFRQSxJQUFJLENBQUNsQyxRQUFMLENBQWNHLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBNEIsRUFBakQ7QUFBb0QsMEJBQVEsRUFBRSxLQUE5RDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBRXlCLGlEQUFVLENBQUM1QixRQUFRLEtBQUtrQyxJQUFJLENBQUNsQyxRQUFsQixJQUE4QixRQUEvQixDQUF4QjtBQUFBLDhCQUFtRWtDLElBQUksQ0FBQ3RCO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNzQixJQUFJLENBQUNsQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVNSLEtBQUssQ0FBQ0MsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0hELENBakpEOztHQUFNRyxNO1VBQ1dHLGtEOzs7S0FEWEgsTTtBQW1KTkEsTUFBTSxDQUFDdUMsWUFBUCxHQUFzQjtBQUFFdEMsVUFBUSxFQUFFdUM7QUFBWixDQUF0QjtBQUVBLCtEQUFleEMsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZWUyNmNkN2RiOGQ3ODJiNGRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBkb2N1bWVudEdyb3VwcyA9IGFuY2hvcnNcbiAgLmZpbHRlcihhID0+IGEubGV2ZWwgPT09IDEpXG4gIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCBncm91cEluZGV4ID0gcHJldi5maW5kSW5kZXgoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBOYW1lID09PSBjdXJyZW50Lmdyb3VwTmFtZSk7XG4gICAgaWYgKGdyb3VwSW5kZXggPT09IC0xKSByZXR1cm4gWy4uLnByZXYsIHsgZ3JvdXBOYW1lOiBjdXJyZW50Lmdyb3VwTmFtZSwgcGFnZXM6IFtjdXJyZW50XSB9XTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4ucHJldi5zbGljZSgwLCBncm91cEluZGV4KSxcbiAgICAgIHsgLi4ucHJldltncm91cEluZGV4XSwgcGFnZXM6IFsuLi5wcmV2W2dyb3VwSW5kZXhdLnBhZ2VzLCBjdXJyZW50XSB9LFxuICAgICAgLi4ucHJldi5zbGljZShncm91cEluZGV4ICsgMSksXG4gICAgXTtcbiAgfSwgW10gYXMgeyBncm91cE5hbWU6IHN0cmluZzsgcGFnZXM6IHR5cGVvZiBhbmNob3JzIH1bXSk7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYmFzZW5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgcm91dGVyLmFzUGF0aFxuICAgICAgLnNwbGl0KCcjJylbMF1cbiAgICAgIC5zcGxpdCgnLycpXG4gICAgICAucG9wKCkgfHwgJycsXG4gICk7XG4gIGNvbnN0IHRvYyA9IGJ1aWxkVE9DKGJhc2VuYW1lKTtcbiAgY29uc3QgW2lzU2lkZWJhclZpc2libGUsIHNldFNpZGViYXJWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzVE9DVmlzaWJsZSwgc2V0VE9DVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgcGFnZU5hbWUsIGdyb3VwTmFtZTogcGFnZUdyb3VwTmFtZSB9ID1cbiAgICBhbmNob3JzLmZpbmQoYW5jaG9yID0+IGFuY2hvci5sZXZlbCA9PT0gMSAmJiBhbmNob3IuYmFzZW5hbWUgPT09IGJhc2VuYW1lKSB8fCB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpZGViYXJWaXNpYmxlKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzVE9DVmlzaWJsZSAmJiAhaXNTaWRlYmFyVmlzaWJsZSkgcmV0dXJuICgpID0+IHt9O1xuICAgIGNvbnN0IGRpc3NtaXNzVE9DID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGxldCBjdXJzb3I6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGlzU2lkZWJhclZpc2libGUgJiYgd2luZG93LmlubmVyV2lkdGggPCAxMDI0KSB7XG4gICAgICAgIHdoaWxlIChjdXJzb3IgJiYgIWN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnNpZGViYXIpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3I/LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMuc2lkZWJhcikpIHNldFNpZGViYXJWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUT0NWaXNpYmxlKSB7XG4gICAgICAgIHdoaWxlIChjdXJzb3IgJiYgIWN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnRvYykpIGN1cnNvciA9IGN1cnNvci5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoIWN1cnNvcj8uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICB9LCBbaXNUT0NWaXNpYmxlLCBpc1NpZGViYXJWaXNpYmxlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBzdHlsZXMuYmxvY2ssXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgPT09IG51bGwgJiYgc3R5bGVzLmJsb2NrSW5pdCxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSAmJiBzdHlsZXMuYmxvY2tXaXRoU2lkZWJhcixcbiAgICAgICAgdG9jLmxlbmd0aCA9PT0gMCAmJiBzdHlsZXMuYmxvY2tXaXRob3V0VE9DLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnYzLjUgU1JEe3BhZ2VOYW1lICYmIGAgLSAke3BhZ2VOYW1lfWB9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRyb2xzfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7cGFnZUdyb3VwTmFtZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50R3JvdXBOYW1lfT57cGFnZUdyb3VwTmFtZX08L3NwYW4+IC97JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZU5hbWV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlVE9DfSBvbkNsaWNrPXsoKSA9PiBzZXRUT0NWaXNpYmxlKCFpc1RPQ1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTBcIiB4Mj1cIjdcIiB5Mj1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCI2XCIgeDI9XCIzXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxNFwiIHgyPVwiM1wiIHkyPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE4XCIgeDI9XCI3XCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwfT5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgc3R5bGVzLnRvYyxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSB0cnVlICYmIHN0eWxlcy50b2NWaXNpYmxlLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IGZhbHNlICYmIHN0eWxlcy50b2NIaWRkZW4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5JbiBUaGlzIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dG9jLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2l0ZW0uYW5jaG9yLmJhc2VuYW1lfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgKX1cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluKX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+6rCc7KCV7YyQICh2LjMuNSkg7Iuc7Iqk7YWcIOywuOyhsCDrrLjshJw8L0xpbms+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cExpc3R9PlxuICAgICAgICAgIHtkb2N1bWVudEdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17Z3JvdXAuZ3JvdXBOYW1lfT5cbiAgICAgICAgICAgICAgPGRldGFpbHMgb3Blbj17ISFncm91cC5wYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5iYXNlbmFtZSA9PT0gYmFzZW5hbWUpfT5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT57Z3JvdXAuZ3JvdXBOYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5Hcm91cExpc3R9PlxuICAgICAgICAgICAgICAgICAge2dyb3VwLnBhZ2VzLm1hcChwYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5iYXNlbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kb2NzLyR7cGFnZS5iYXNlbmFtZS5zcGxpdCgnLicpWzBdfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYmFzZW5hbWUgPT09IHBhZ2UuYmFzZW5hbWUgJiYgJ2FjdGl2ZScpfT57cGFnZS5wYWdlTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHsgY2hpbGRyZW46IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9