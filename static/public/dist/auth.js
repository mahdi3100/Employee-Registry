/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Auth.js":
/*!*********************!*\
  !*** ./src/Auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _Components_HeaderNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/HeaderNav.js */ "./src/Components/HeaderNav.js");
/* harmony import */ var _serviceWorkerRegistration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorkerRegistration */ "./src/serviceWorkerRegistration.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _Views_Registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Views/Registration */ "./src/Views/Registration/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_HeaderNav_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Views_Registration__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
}));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
_serviceWorkerRegistration__WEBPACK_IMPORTED_MODULE_4__.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./src/Components/HeaderNav.js":
/*!*************************************!*\
  !*** ./src/Components/HeaderNav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function HeaderNav() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Side, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Level.Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            size: 5,
            subtitle: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Employee Registry"
            })
          })
        })
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNav);

/***/ }),

/***/ "./src/Views/Registration/index.js":
/*!*****************************************!*\
  !*** ./src/Views/Registration/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin */ "./src/Views/Registration/signin.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/Views/Registration/signup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







class Registration extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true
    };
    this.toSignIn = this.toSignIn.bind(this);
  }
  toSignIn() {
    this.setState({
      showSignIn: !this.state.showSignIn
    });
  }
  componentDidMount() {
    //check component mounted times for Debug purpose
    console.log("check component mounted times for Debug purpose ");
    console.log("in case called Twice that because React.StrictMode in dev mode");
  }
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Box, {
        style: {
          width: 400,
          margin: 'auto'
        },
        children: !this.state.showSignIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: this.toSignIn
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_signin__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: this.toSignIn
        })
      })
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);

/***/ }),

/***/ "./src/Views/Registration/signin.js":
/*!******************************************!*\
  !*** ./src/Views/Registration/signin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var _Components_InputForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/InputForm */ "./src/Components/InputForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Signin extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      formerror: "",
      fetchloader: false
    };
    this.form = {
      username: null,
      password: null
    };
    this.login = this.login.bind(this);
  }
  login() {
    for (const [key, value] of Object.entries(this.form)) {
      if (value == null) {
        this.setState({
          formerror: `Please fill the field ${key}`
        });
        return;
      }
    }
    let baseURL = {"LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_GB:en","USER":"mahdi","LC_TIME":"fr_FR.UTF-8","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false","SSH_AGENT_PID":"2805","XDG_SESSION_TYPE":"x11","npm_node_execpath":"/usr/local/bin/node","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/mahdi","OLDPWD":"/home/mahdi/ReactExpress/Registry-Employee","DESKTOP_SESSION":"ubuntu","npm_package_json":"/home/mahdi/ReactExpress/Registry-Employee/static/package.json","GNOME_SHELL_SESSION_MODE":"ubuntu","GTK_MODULES":"gail:atk-bridge","LC_MONETARY":"fr_FR.UTF-8","MANAGERPID":"2430","npm_config_userconfig":"/home/mahdi/.npmrc","npm_config_local_prefix":"/home/mahdi/ReactExpress/Registry-Employee/static","DBUS_STARTER_BUS_TYPE":"session","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","COLORTERM":"truecolor","LIBVIRT_DEFAULT_URI":"qemu:///system","COLOR":"1","npm_config_metrics_registry":"https://registry.npmjs.org/","MANDATORY_PATH":"/usr/share/gconf/ubuntu.mandatory.path","QT_QPA_PLATFORMTHEME":"appmenu-qt5","IM_CONFIG_PHASE":"1","LOGNAME":"mahdi","JOURNAL_STREAM":"9:48893","_":"/usr/local/bin/npm","npm_config_prefix":"/usr/local","XDG_SESSION_CLASS":"user","DEFAULTS_PATH":"/usr/share/gconf/ubuntu.default.path","USERNAME":"mahdi","TERM":"xterm-256color","npm_config_cache":"/home/mahdi/.npm","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","GTK2_MODULES":"overlay-scrollbar","WINDOWPATH":"2","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/mahdi/ReactExpress/Registry-Employee/static/node_modules/.bin:/home/mahdi/ReactExpress/Registry-Employee/node_modules/.bin:/home/mahdi/ReactExpress/node_modules/.bin:/home/mahdi/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","SESSION_MANAGER":"local/mahdi-Inspiron-3543:@/tmp/.ICE-unix/2870,unix/mahdi-Inspiron-3543:/tmp/.ICE-unix/2870","INVOCATION_ID":"22c3448231fd4eae8c3e13ec20f48be6","PAPERSIZE":"a4","NODE":"/usr/local/bin/node","npm_package_name":"client","XDG_MENU_PREFIX":"gnome-","LC_ADDRESS":"fr_FR.UTF-8","GNOME_TERMINAL_SCREEN":"/org/gnome/Terminal/screen/3506d3ea_e6c0_4b0c_b803_24f771978cb8","XDG_RUNTIME_DIR":"/run/user/1000","DISPLAY":":1","LANG":"en_GB.UTF-8","XDG_CURRENT_DESKTOP":"ubuntu:GNOME","LC_TELEPHONE":"fr_FR.UTF-8","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"ubuntu","XAUTHORITY":"/run/user/1000/gdm/Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","GNOME_TERMINAL_SERVICE":":1.477","npm_lifecycle_script":"webpack --watch --config webpack.dev.js ","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","SHELL":"/bin/bash","LC_NAME":"fr_FR.UTF-8","npm_package_version":"0.1.0","npm_lifecycle_event":"watch","QT_ACCESSIBILITY":"1","GDMSESSION":"ubuntu","LESSCLOSE":"/usr/bin/lesspipe %s %s","LC_MEASUREMENT":"fr_FR.UTF-8","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","LC_IDENTIFICATION":"fr_FR.UTF-8","QT_IM_MODULE":"ibus","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_init_module":"/home/mahdi/.npm-init.js","PWD":"/home/mahdi/ReactExpress/Registry-Employee/static","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-ubuntu:/etc/xdg","DBUS_STARTER_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","XDG_DATA_DIRS":"/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop:/var/lib/snapd/desktop","npm_config_global_prefix":"/usr/local","LC_NUMERIC":"fr_FR.UTF-8","npm_command":"run-script","LC_PAPER":"fr_FR.UTF-8","VTE_VERSION":"6003","INIT_CWD":"/home/mahdi/ReactExpress/Registry-Employee/static","EDITOR":"vi","PORT":"8787","NODE_ENV":"development","HOST":"localhost","REACT_APP_API_BASE_URL":"localhost:8787"}.REACT_APP_API_BASE_URL || 'localhost:8787';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.form
      })
    };
    this.setState({
      fetchloader: true,
      formerror: ""
    });
    fetch("http://" + baseURL + "/signin", requestOptions).then(res => res.json()).then(res => {
      this.setState({
        formerror: ''
      });
      console.log(res);
      if (res["error"] == 1) {
        this.setState({
          formerror: res["txt"],
          fetchloader: false
        });
        return;
      }
      if (res["error"] == 2) {
        return this.setState({
          fetchloader: false,
          formerror: "This user does not exist"
        });
      }
      localStorage.setItem('username', this.form.username);
      location.href = "/home";
      //REDIRECT
    }).catch(err => {
      console.log(err);
      this.setState({
        formerror: 'Please try again'
      });
      this.setState({
        fetchloader: false
      });
    });
  }
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: username => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "username": username
        }),
        label: "Username",
        type: "text",
        name: "Username",
        placeholder: "* Username",
        value: "",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "uil:user"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: password => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "password": password
        }),
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "* Password",
        value: "",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "bi:eye-fill"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button.Group, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          fullwidth: true,
          rounded: true,
          color: "primary",
          loading: this.state.fetchloader,
          onClick: () => this.login(),
          children: "Login"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          fullwidth: true,
          rounded: true,
          color: "link",
          onClick: this.props.onClick,
          children: "Sign up"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Form.Help, {
        color: "danger",
        children: this.state.formerror
      })]
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"auth": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkclient"] = globalThis["webpackChunkclient"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-bulma-components_cjs_index_js-node_modules_react-dom_client_js-nod-6d73cb","src_Views_Registration_signup_js"], () => (__webpack_require__("./src/Auth.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUM7O1dBRWpDO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTCxlQUFlO1dBQ2Y7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0F1dGguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbXBvbmVudHMvSGVhZGVyTmF2LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9WaWV3cy9SZWdpc3RyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL1ZpZXdzL1JlZ2lzdHJhdGlvbi9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3JlcG9ydFdlYlZpdGFscy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9BcHAuY3NzP2Q5Y2QiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgSGVhZGVyTmF2IGZyb20gJy4vQ29tcG9uZW50cy9IZWFkZXJOYXYuanMnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiBmcm9tICcuL3NlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24nO1xuaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tICcuL3JlcG9ydFdlYlZpdGFscyc7XG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vVmlld3MvUmVnaXN0cmF0aW9uJztcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5yb290LnJlbmRlcihcbiAgPD5cbiBcbiAgICA8SGVhZGVyTmF2IC8+XG4gICAgPFJlZ2lzdHJhdGlvbiAvPlxuICA8Lz5cbik7XG5cbi8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXG4vLyB1bnJlZ2lzdGVyKCkgdG8gcmVnaXN0ZXIoKSBiZWxvdy4gTm90ZSB0aGlzIGNvbWVzIHdpdGggc29tZSBwaXRmYWxscy5cbi8vIExlYXJuIG1vcmUgYWJvdXQgc2VydmljZSB3b3JrZXJzOiBodHRwczovL2NyYS5saW5rL1BXQVxuc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG5cbi8vIElmIHlvdSB3YW50IHRvIHN0YXJ0IG1lYXN1cmluZyBwZXJmb3JtYW5jZSBpbiB5b3VyIGFwcCwgcGFzcyBhIGZ1bmN0aW9uXG4vLyB0byBsb2cgcmVzdWx0cyAoZm9yIGV4YW1wbGU6IHJlcG9ydFdlYlZpdGFscyhjb25zb2xlLmxvZykpXG4vLyBvciBzZW5kIHRvIGFuIGFuYWx5dGljcyBlbmRwb2ludC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9iaXQubHkvQ1JBLXZpdGFsc1xucmVwb3J0V2ViVml0YWxzKCk7XG4iLCJpbXBvcnQgeyBCb3gsIExldmVsLCBIZWFkaW5nIH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MnO1xuXG5cbmZ1bmN0aW9uIEhlYWRlck5hdigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPExldmVsPlxuICAgICAgICAgICAgICAgIDxMZXZlbC5TaWRlPlxuICAgICAgICAgICAgICAgICAgICA8TGV2ZWwuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcGxveWVlIFJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MZXZlbC5JdGVtPlxuXG4gICAgICAgICAgICAgICAgPC9MZXZlbC5TaWRlPlxuXG4gICAgICAgICAgICA8L0xldmVsPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdjtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MnO1xuXG5pbXBvcnQgU2lnbmluIGZyb20gXCIuL3NpZ25pblwiO1xuaW1wb3J0IFNpZ251cCBmcm9tIFwiLi9zaWdudXBcIjtcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93U2lnbkluOiB0cnVlLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b1NpZ25JbiA9IHRoaXMudG9TaWduSW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b1NpZ25JbigpIHtcbiAgXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTaWduSW46ICF0aGlzLnN0YXRlLnNob3dTaWduSW4gfSlcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgXG4gICAgICAgIC8vY2hlY2sgY29tcG9uZW50IG1vdW50ZWQgdGltZXMgZm9yIERlYnVnIHB1cnBvc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBjb21wb25lbnQgbW91bnRlZCB0aW1lcyBmb3IgRGVidWcgcHVycG9zZSBcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBjYXNlIGNhbGxlZCBUd2ljZSB0aGF0IGJlY2F1c2UgUmVhY3QuU3RyaWN0TW9kZSBpbiBkZXYgbW9kZVwiKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cblxuXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogNDAwLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLnNob3dTaWduSW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWdudXAgb25DbGljaz17dGhpcy50b1NpZ25Jbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25pbiBvbkNsaWNrPXt0aGlzLnRvU2lnbklufSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiwgRm9ybSwgQnV0dG9uLCBCb3ggfSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcyc7XG5pbXBvcnQgeyBJY29uIGFzIEljb25pZnkgfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0lucHV0Rm9ybVwiO1xuXG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtZXJyb3I6IFwiXCIsXG4gICAgICBmZXRjaGxvYWRlcjogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5mb3JtID0ge1xuXG4gICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuXG5cbiAgICB9XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICB9XG4gIGxvZ2luKCkge1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mb3JtKSkge1xuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtZXJyb3I6IGBQbGVhc2UgZmlsbCB0aGUgZmllbGQgJHtrZXl9YCB9KVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYmFzZVVSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfQkFTRV9VUkx8fCAnbG9jYWxob3N0Ojg3ODcnO1xuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiB0aGlzLmZvcm0gfSlcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZldGNobG9hZGVyOiB0cnVlLCBmb3JtZXJyb3I6IFwiXCIgfSk7XG5cbiAgICBmZXRjaChcImh0dHA6Ly9cIiArIGJhc2VVUkwgKyBcIi9zaWduaW5cIiwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtZXJyb3I6ICcnIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICBpZiAocmVzW1wiZXJyb3JcIl0gPT0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtZXJyb3I6IHJlc1tcInR4dFwiXSwgZmV0Y2hsb2FkZXI6IGZhbHNlIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc1tcImVycm9yXCJdID09IDIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZldGNobG9hZGVyOiBmYWxzZSwgZm9ybWVycm9yOiBcIlRoaXMgdXNlciBkb2VzIG5vdCBleGlzdFwiIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB0aGlzLmZvcm0udXNlcm5hbWUpO1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xuICAgICAgICAvL1JFRElSRUNUXG5cblxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtZXJyb3I6ICdQbGVhc2UgdHJ5IGFnYWluJyB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmV0Y2hsb2FkZXI6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SW5wdXRGb3JtIGdldFZhbHVlPXsodXNlcm5hbWUpID0+ICh0aGlzLmZvcm0gPSB7IC4uLnRoaXMuZm9ybSwgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSB9KX0gbGFiZWw9XCJVc2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCIqIFVzZXJuYW1lXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICA8SWNvbiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDxJY29uaWZ5IGljb249XCJ1aWw6dXNlclwiIC8+XG4gICAgICAgICAgPC9JY29uPlxuICAgICAgICA8L0lucHV0Rm9ybT5cblxuICAgICAgICA8SW5wdXRGb3JtIGdldFZhbHVlPXsocGFzc3dvcmQpID0+ICh0aGlzLmZvcm0gPSB7IC4uLnRoaXMuZm9ybSwgXCJwYXNzd29yZFwiOiBwYXNzd29yZCB9KX0gbGFiZWw9XCJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKiBQYXNzd29yZFwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgPEljb24gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwiYmk6ZXllLWZpbGxcIiAvPlxuICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgPC9JbnB1dEZvcm0+XG5cblxuXG4gICAgICAgIDxCdXR0b24uR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvbiBmdWxsd2lkdGggcm91bmRlZCBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGxvYWRlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMubG9naW4oKX0+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGZ1bGx3aWR0aCByb3VuZGVkIGNvbG9yPVwibGlua1wiXG5cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+U2lnbiB1cDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgPEZvcm0uSGVscCBjb2xvcj1cImRhbmdlclwiPnt0aGlzLnN0YXRlLmZvcm1lcnJvcn08L0Zvcm0uSGVscD5cblxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluOyIsImNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IChvblBlcmZFbnRyeSkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2NyYS5saW5rL1BXQVxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjAvOCBhcmUgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kLylcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9jcmEubGluay9QV0EnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJcyBub3QgbG9jYWxob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZykge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9jcmEubGluay9QV0EuJ1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsLCB7XG4gICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLicpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeVxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2lnbmluLWJveHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zaWduaW4tYm94e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNUOztjQUVZO0VBQ1osbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO2FBQ1c7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjbGllbnQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhdXRoXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gZ2xvYmFsVGhpc1tcIndlYnBhY2tDaHVua2NsaWVudFwiXSA9IGdsb2JhbFRoaXNbXCJ3ZWJwYWNrQ2h1bmtjbGllbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtYnVsbWEtY29tcG9uZW50c19janNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9jbGllbnRfanMtbm9kLTZkNzNjYlwiLFwic3JjX1ZpZXdzX1JlZ2lzdHJhdGlvbl9zaWdudXBfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvQXV0aC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJIZWFkZXJOYXYiLCJzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIiwicmVwb3J0V2ViVml0YWxzIiwiUmVnaXN0cmF0aW9uIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwidW5yZWdpc3RlciIsIkJveCIsIkxldmVsIiwiSGVhZGluZyIsIlNpZ25pbiIsIlNpZ251cCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNob3dTaWduSW4iLCJ0b1NpZ25JbiIsImJpbmQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwibWFyZ2luIiwiSWNvbiIsIkZvcm0iLCJCdXR0b24iLCJJY29uaWZ5IiwiSW5wdXRGb3JtIiwiZm9ybWVycm9yIiwiZmV0Y2hsb2FkZXIiLCJmb3JtIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ2luIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0JBU0VfVVJMIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVyciIsIm9uQ2xpY2siLCJvblBlcmZFbnRyeSIsIkZ1bmN0aW9uIiwiZ2V0Q0xTIiwiZ2V0RklEIiwiZ2V0RkNQIiwiZ2V0TENQIiwiZ2V0VFRGQiIsImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsIndpbmRvdyIsImhvc3RuYW1lIiwibWF0Y2giLCJyZWdpc3RlciIsImNvbmZpZyIsIk5PREVfRU5WIiwibmF2aWdhdG9yIiwicHVibGljVXJsIiwiVVJMIiwiUFVCTElDX1VSTCIsIm9yaWdpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd1VybCIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlYWR5IiwicmVnaXN0ZXJWYWxpZFNXIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsImNvbnRyb2xsZXIiLCJvblVwZGF0ZSIsIm9uU3VjY2VzcyIsImVycm9yIiwicmVzcG9uc2UiLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==