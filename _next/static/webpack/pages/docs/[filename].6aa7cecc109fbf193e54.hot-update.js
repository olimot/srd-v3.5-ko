self["webpackHotUpdate_N_E"]("pages/docs/[filename]",{

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
  const pageIndex = prev[groupIndex].pages.findIndex(page => page.pageName === current.pageName);
  if (pageIndex !== -1) return prev;
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

    const onLinkClick = e => {
      const target = e.target;
      if (target.tagName !== 'A' || window.innerWidth >= 1024) return;
      setTimeout(() => {
        setSidebarVisible(false);
        setTOCVisible(false);
      }, 33);
    };

    window.addEventListener('click', onLinkClick);
    return () => window.removeEventListener('click', onLinkClick);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!isTOCVisible && !isSidebarVisible) return () => {};

    const dissmissTOC = e => {
      let cursor = e.target;

      if (isSidebarVisible && window.innerWidth < 1024) {
        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar))) cursor = cursor.parentElement;

        if (!cursor) setSidebarVisible(false);
      } else if (isTOCVisible) {
        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc))) cursor = cursor.parentElement;

        if (!cursor) setTOCVisible(false);
      }
    };

    window.addEventListener('click', dissmissTOC);
    return () => window.removeEventListener('click', dissmissTOC);
  }, [isTOCVisible, isSidebarVisible]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().block), isSidebarVisible === null && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockInit), isSidebarVisible && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithSidebar), toc.length === 0 && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithoutTOC)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["v3.5 SRD", pageName && ` - ${pageName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
              lineNumber: 126,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().mainWrap),
      children: [toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc), isTOCVisible === true && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocVisible), isTOCVisible === false && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocHidden)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/raw-html/${basename}.html`,
            children: "(\uC2A4\uD0C0\uC77C \uC81C\uC678 \uBC84\uC804 \uBCF4\uAE30)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\uD398\uC774\uC9C0 \uBAA9\uCC28"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, `${item.anchor.filename}${item.anchor.id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Revised (v.3.5)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "System Reference Document"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
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
              lineNumber: 173,
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
                    lineNumber: 178,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uTGlua0NsaWNrIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNzbWlzc1RPQyIsImN1cnNvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGVzIiwicGFyZW50RWxlbWVudCIsImNsYXNzTmFtZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiZmlsZW5hbWUiLCJpZCIsInNlYXJjaEZvcm0iLCJmaW5kIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBQSxDQUNaQyxDQUFELElB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QXRCO0FBRUEsK0RBQWUzQyxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS42YWE3Y2VjYzEwOWZiZjE5M2U1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBkb2N1bWVudEdyb3VwcyA9IGFuY2hvcnNcbiAgLmZpbHRlcigoYSkgPT4gYS5sZXZlbCA9PT0gMSlcbiAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwSW5kZXggPSBwcmV2LmZpbmRJbmRleCgoZ3JvdXApID0+IGdyb3VwLmdyb3VwTmFtZSA9PT0gY3VycmVudC5ncm91cE5hbWUpO1xuICAgIGlmIChncm91cEluZGV4ID09PSAtMSkgcmV0dXJuIFsuLi5wcmV2LCB7IGdyb3VwTmFtZTogY3VycmVudC5ncm91cE5hbWUsIHBhZ2VzOiBbY3VycmVudF0gfV07XG4gICAgY29uc3QgcGFnZUluZGV4ID0gcHJldltncm91cEluZGV4XS5wYWdlcy5maW5kSW5kZXgoKHBhZ2UpID0+IHBhZ2UucGFnZU5hbWUgPT09IGN1cnJlbnQucGFnZU5hbWUpO1xuICAgIGlmIChwYWdlSW5kZXggIT09IC0xKSByZXR1cm4gcHJldjtcbiAgICByZXR1cm4gW1xuICAgICAgLi4ucHJldi5zbGljZSgwLCBncm91cEluZGV4KSxcbiAgICAgIHsgLi4ucHJldltncm91cEluZGV4XSwgcGFnZXM6IFsuLi5wcmV2W2dyb3VwSW5kZXhdLnBhZ2VzLCBjdXJyZW50XSB9LFxuICAgICAgLi4ucHJldi5zbGljZShncm91cEluZGV4ICsgMSksXG4gICAgXTtcbiAgfSwgW10gYXMgeyBncm91cE5hbWU6IHN0cmluZzsgcGFnZXM6IHR5cGVvZiBhbmNob3JzIH1bXSk7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYmFzZW5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQocm91dGVyLmFzUGF0aC5zcGxpdCgnIycpWzBdLnNwbGl0KCcvJykucG9wKCkgfHwgJycpO1xuICBjb25zdCB0b2MgPSBidWlsZFRPQyhiYXNlbmFtZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1RPQ1Zpc2libGUsIHNldFRPQ1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHBhZ2VOYW1lLCBncm91cE5hbWU6IHBhZ2VHcm91cE5hbWUgfSA9XG4gICAgYW5jaG9ycy5maW5kKChhbmNob3IpID0+IGFuY2hvci5sZXZlbCA9PT0gMSAmJiBhbmNob3IuYmFzZW5hbWUgPT09IGJhc2VuYW1lKSB8fCB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpZGViYXJWaXNpYmxlKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpO1xuICAgIGNvbnN0IG9uTGlua0NsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnQScgfHwgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkgcmV0dXJuO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFNpZGViYXJWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgc2V0VE9DVmlzaWJsZShmYWxzZSk7XG4gICAgICB9LCAzMyk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkxpbmtDbGljayk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTGlua0NsaWNrKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUgJiYgIWlzU2lkZWJhclZpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpc1NpZGViYXJWaXNpYmxlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5zaWRlYmFyKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVE9DVmlzaWJsZSkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGUsIGlzU2lkZWJhclZpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7cGFnZU5hbWUgJiYgYCAtICR7cGFnZU5hbWV9YH08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbj1cIlwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTZXJpZitLUjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRyb2xzfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7cGFnZUdyb3VwTmFtZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50R3JvdXBOYW1lfT57cGFnZUdyb3VwTmFtZX08L3NwYW4+IC97JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZU5hbWV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlVE9DfSBvbkNsaWNrPXsoKSA9PiBzZXRUT0NWaXNpYmxlKCFpc1RPQ1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTBcIiB4Mj1cIjdcIiB5Mj1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCI2XCIgeDI9XCIzXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxNFwiIHgyPVwiM1wiIHkyPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE4XCIgeDI9XCI3XCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwfT5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgc3R5bGVzLnRvYyxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSB0cnVlICYmIHN0eWxlcy50b2NWaXNpYmxlLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IGZhbHNlICYmIHN0eWxlcy50b2NIaWRkZW4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jhdy1odG1sLyR7YmFzZW5hbWV9Lmh0bWxgfT4o7Iqk7YOA7J28IOygnOyZuCDrsoTsoIQg67O06riwKTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj7tjpjsnbTsp4Ag66qp7LCoPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3RvYy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2Ake2l0ZW0uYW5jaG9yLmZpbGVuYW1lfSR7aXRlbS5hbmNob3IuaWR9YH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICl9XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbil9PntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8ZGl2PlJldmlzZWQgKHYuMy41KTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+U3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cExpc3R9PlxuICAgICAgICAgIHtkb2N1bWVudEdyb3Vwcy5tYXAoKGdyb3VwKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXshIWdyb3VwLnBhZ2VzLmZpbmQoKHBhZ2UpID0+IHBhZ2UuYmFzZW5hbWUgPT09IGJhc2VuYW1lKX0+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+e2dyb3VwLmdyb3VwTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluR3JvdXBMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5iYXNlbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kb2NzLyR7cGFnZS5iYXNlbmFtZS5zcGxpdCgnLicpWzBdfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYmFzZW5hbWUgPT09IHBhZ2UuYmFzZW5hbWUgJiYgJ2FjdGl2ZScpfT57cGFnZS5wYWdlTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHsgY2hpbGRyZW46IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9