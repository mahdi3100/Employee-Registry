"use strict";
(globalThis["webpackChunkclient"] = globalThis["webpackChunkclient"] || []).push([["src_Components_AddLoggedUser_js-src_Components_HeaderLoggedUser_js-src_reportWebVitals_js-src-786fb1"],{

/***/ "./src/Components/AddLoggedUser.js":
/*!*****************************************!*\
  !*** ./src/Components/AddLoggedUser.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context/AddUserContext.js */ "./src/Context/AddUserContext.js");



/**Component to catch Live Price comming From server by Websocket */
function AddLoggedUser(props) {
  var {
    elementUser,
    setMyUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_1__.UserContext);
  if (elementUser === undefined) {
    throw new Error("elementUser was used outside of its Provider");
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //to prevent add empty row in case Mount Unmount triggered through filter component, "NO" value used for DEV understading , Have to set it up to {}

    if (elementUser.length != 0) {
      //initial state 

      props.setUsers(elementUser);
      // setMyUser([])//initialize
    }
  }, [elementUser]);
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLoggedUser);

/***/ }),

/***/ "./src/Components/HeaderLoggedUser.js":
/*!********************************************!*\
  !*** ./src/Components/HeaderLoggedUser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function HeaderLoggedUser(_ref) {
  let {
    loc
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Side, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            size: 5,
            subtitle: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Employee Registry"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Side, {
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Item, {
          children: ["Hello, ", localStorage.getItem('username')]
        }), loc != "home" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "button",
            href: "/home",
            children: "Home"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "button is-link",
            href: "/logout",
            children: "Logout"
          })
        })]
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLoggedUser);

/***/ }),

/***/ "./src/Context/AddUserContext.js":
/*!***************************************!*\
  !*** ./src/Context/AddUserContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContext": () => (/* binding */ UserContext),
/* harmony export */   "UserContextProvider": () => (/* binding */ UserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  /*
    elemUser:"[]",
    setUser : (element)=>{}
    */
});
const UserContextProvider = props => {
  const [elemUser, setNewUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UserContext.Provider, {
    value: {
      elementUser: elemUser,
      setMyUser: newUser => {
        setNewUser(newUser);
      }
    },
    children: props.children
  });
};


/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "node_modules_web-vitals_dist_web-vitals_js").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);

/***/ }),

/***/ "./src/serviceWorkerRegistration.js":
/*!******************************************!*\
  !*** ./src/serviceWorkerRegistration.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "unregister": () => (/* binding */ unregister)
/* harmony export */ });
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://cra.link/PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n  text-align: center;\n}\n.signin-box{\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf","sourcesContent":[".App {\n  text-align: center;\n}\n.signin-box{\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0NvbXBvbmVudHNfQWRkTG9nZ2VkVXNlcl9qcy1zcmNfQ29tcG9uZW50c19IZWFkZXJMb2dnZWRVc2VyX2pzLXNyY19yZXBvcnRXZWJWaXRhbHNfanMtc3JjLTc4NmZiMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2E7O0FBSTNEO0FBQ0EsU0FBU0csYUFBYSxDQUFDQyxLQUFLLEVBQUU7RUFDNUIsSUFBSTtJQUFFQyxXQUFXO0lBQUVDO0VBQVUsQ0FBQyxHQUFHTixpREFBVSxDQUFDRSxtRUFBVyxDQUFDO0VBQ3hELElBQUlHLFdBQVcsS0FBS0UsU0FBUyxFQUFFO0lBQzdCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO0VBQ2pFO0VBQ0FQLGdEQUFTLENBQUMsTUFBTTtJQUNkOztJQUVBLElBQUlJLFdBQVcsQ0FBQ0ksTUFBTSxJQUFJLENBQUMsRUFBRTtNQUFDOztNQUU1QkwsS0FBSyxDQUFDTSxRQUFRLENBQUNMLFdBQVcsQ0FBQztNQUMzQjtJQUNGO0VBRUYsQ0FBQyxFQUFFLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0VBQ2pCLE9BQVEsSUFBSTtBQUNkO0FBQ0EsaUVBQWVGLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJpQztBQUM1QjtBQUFBO0FBQUE7QUFHakMsU0FBU1csZ0JBQWdCLE9BQVU7RUFBQSxJQUFUO0lBQUVDO0VBQUksQ0FBQztFQUM3QixvQkFDSSx1REFBQyx1REFBRztJQUFBLHVCQUNBLHdEQUFDLHlEQUFLO01BQUEsd0JBQ0YsdURBQUMsOERBQVU7UUFBQSx1QkFDUCx1REFBQyw4REFBVTtVQUFBLHVCQUNQLHVEQUFDLDJEQUFPO1lBQ0osSUFBSSxFQUFFLENBQUU7WUFDUixRQUFRO1lBQUEsdUJBRVI7Y0FBQTtZQUFBO1VBRVM7UUFFSDtNQUNELEVBRUosZUFDYix3REFBQyw4REFBVTtRQUFDLEtBQUssRUFBQyxPQUFPO1FBQUEsd0JBRXJCLHdEQUFDLDhEQUFVO1VBQUEsc0JBRUNDLFlB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QUFPLEtBQUssS0FBSyxLQUFLLCtCQUErQixjQUFjLDZLQUE2Syx3Q0FBd0MsdUNBQXVDLEdBQUcsVUFBVSx5RkFBeUYsR0FBRyxxQkFBcUI7QUFDditCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWlHO0FBQ2pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJMkM7QUFDbkUsT0FBTyxpRUFBZSxvRkFBTyxJQUFJLDJGQUFjLEdBQUcsMkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQ29tcG9uZW50cy9BZGRMb2dnZWRVc2VyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9Db21wb25lbnRzL0hlYWRlckxvZ2dlZFVzZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbnRleHQvQWRkVXNlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3JlcG9ydFdlYlZpdGFscy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9BcHAuY3NzP2Q5Y2QiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmNzcz9jZmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9BZGRVc2VyQ29udGV4dC5qc1wiO1xuXG5cblxuLyoqQ29tcG9uZW50IHRvIGNhdGNoIExpdmUgUHJpY2UgY29tbWluZyBGcm9tIHNlcnZlciBieSBXZWJzb2NrZXQgKi9cbmZ1bmN0aW9uIEFkZExvZ2dlZFVzZXIocHJvcHMpIHtcbiAgdmFyIHsgZWxlbWVudFVzZXIsIHNldE15VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGlmIChlbGVtZW50VXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudFVzZXIgd2FzIHVzZWQgb3V0c2lkZSBvZiBpdHMgUHJvdmlkZXJcIik7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RvIHByZXZlbnQgYWRkIGVtcHR5IHJvdyBpbiBjYXNlIE1vdW50IFVubW91bnQgdHJpZ2dlcmVkIHRocm91Z2ggZmlsdGVyIGNvbXBvbmVudCwgXCJOT1wiIHZhbHVlIHVzZWQgZm9yIERFViB1bmRlcnN0YWRpbmcgLCBIYXZlIHRvIHNldCBpdCB1cCB0byB7fVxuXG4gICAgaWYgKGVsZW1lbnRVc2VyLmxlbmd0aCAhPSAwKSB7Ly9pbml0aWFsIHN0YXRlIFxuXG4gICAgICBwcm9wcy5zZXRVc2VycyhlbGVtZW50VXNlcilcbiAgICAgIC8vIHNldE15VXNlcihbXSkvL2luaXRpYWxpemVcbiAgICB9XG5cbiAgfSwgW2VsZW1lbnRVc2VyXSlcbiAgcmV0dXJuIChudWxsKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFkZExvZ2dlZFVzZXI7XG4iLCJpbXBvcnQgeyBCb3gsIExldmVsLCBIZWFkaW5nIH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MnO1xuXG5cbmZ1bmN0aW9uIEhlYWRlckxvZ2dlZFVzZXIoeyBsb2MgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8TGV2ZWw+XG4gICAgICAgICAgICAgICAgPExldmVsLlNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxMZXZlbC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1wbG95ZWUgUmVnaXN0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8L0xldmVsLkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8L0xldmVsLlNpZGU+XG4gICAgICAgICAgICAgICAgPExldmVsLlNpZGUgYWxpZ249XCJyaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMZXZlbC5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBIZWxsbywge2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9MZXZlbC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2MgIT0gXCJob21lXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV2ZWwuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGV2ZWwuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgPExldmVsLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L0xldmVsLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MZXZlbC5TaWRlPlxuICAgICAgICAgICAgPC9MZXZlbD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJMb2dnZWRVc2VyO1xuIiwiaW1wb3J0IFJlYWN0LCB7ICB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8qXG4gICAgZWxlbVVzZXI6XCJbXVwiLFxuICAgIHNldFVzZXIgOiAoZWxlbWVudCk9Pnt9XG4gICAgKi9cbn0pO1xuXG5jb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtlbGVtVXNlciwgc2V0TmV3VXNlcl0gPSB1c2VTdGF0ZShbXSlcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgZWxlbWVudFVzZXI6IGVsZW1Vc2VyLFxuICAgICAgc2V0TXlVc2VyOiAobmV3VXNlcikgPT4geyBzZXROZXdVc2VyKG5ld1VzZXIpIH1cbiAgICB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlckNvbnRleHRQcm92aWRlciB9OyIsImNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IChvblBlcmZFbnRyeSkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2NyYS5saW5rL1BXQVxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjAvOCBhcmUgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kLylcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9jcmEubGluay9QV0EnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJcyBub3QgbG9jYWxob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZykge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9jcmEubGluay9QV0EuJ1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsLCB7XG4gICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLicpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeVxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2lnbmluLWJveHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zaWduaW4tYm94e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNUOztjQUVZO0VBQ1osbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO2FBQ1c7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJBZGRMb2dnZWRVc2VyIiwicHJvcHMiLCJlbGVtZW50VXNlciIsInNldE15VXNlciIsInVuZGVmaW5lZCIsIkVycm9yIiwibGVuZ3RoIiwic2V0VXNlcnMiLCJCb3giLCJMZXZlbCIsIkhlYWRpbmciLCJIZWFkZXJMb2dnZWRVc2VyIiwibG9jIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsImVsZW1Vc2VyIiwic2V0TmV3VXNlciIsIm5ld1VzZXIiLCJjaGlsZHJlbiIsInJlcG9ydFdlYlZpdGFscyIsIm9uUGVyZkVudHJ5IiwiRnVuY3Rpb24iLCJ0aGVuIiwiZ2V0Q0xTIiwiZ2V0RklEIiwiZ2V0RkNQIiwiZ2V0TENQIiwiZ2V0VFRGQiIsImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYXRjaCIsInJlZ2lzdGVyIiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibmF2aWdhdG9yIiwicHVibGljVXJsIiwiVVJMIiwiUFVCTElDX1VSTCIsImhyZWYiLCJvcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3dVcmwiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlclZhbGlkU1ciLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwic3RhdGUiLCJjb250cm9sbGVyIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=