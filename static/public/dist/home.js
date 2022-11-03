/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/ButtonAddUser.js":
/*!*****************************************!*\
  !*** ./src/Components/ButtonAddUser.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var _Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/AddUserContext.js */ "./src/Context/AddUserContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




//import Signup from "../Views/Registration/signup";
const Signup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_Views_Registration_signup_js").then(__webpack_require__.bind(__webpack_require__, /*! ../Views/Registration/signup */ "./src/Views/Registration/signup.js")));




function ButtonAddUser(props) {
  const [showSignup, setShowSignup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
      className: "button is-info is-rounded",
      onClick: () => setShowSignup(true),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          icon: "ant-design:usergroup-add-outlined"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: "Add User"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxSignUp, {
      showSignup: showSignup,
      setShowSignup: () => setShowSignup(false)
    })]
  });
}
function BoxSignUp(_ref) {
  let {
    showSignup,
    setShowSignup
  } = _ref;
  const [newUser, SetNewUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const SignUpSucceed = newUser => {
    let userone = [];
    userone.push(newUser);
    setShowSignup();
    SetNewUser(userone);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "modal " + (showSignup ? " is-active" : ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal-background"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "modal-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Box, {
        style: {
          width: 400,
          margin: 'auto'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "loader is-centered is-loading",
            style: {
              margin: "20px auto",
              height: "70px",
              width: "70px"
            }
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Signup, {
            createditUser: "create",
            CreateUpdateSucceed: newUser => SignUpSucceed(newUser)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_3__.UserContext.Consumer, {
        children: _ref2 => {
          let {
            /*elementUser,*/setMyUser
          } = _ref2;
          return setMyUser(newUser);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      className: "modal-close is-large",
      "aria-label": "close",
      onClick: () => setShowSignup()
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonAddUser);

/***/ }),

/***/ "./src/Components/Employees.js":
/*!*************************************!*\
  !*** ./src/Components/Employees.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Employees)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Employees(_ref) {
  let {
    usersInfo
  } = _ref;
  return usersInfo.map((userInfo, key) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Card, {
    style: {
      width: 300,
      margin: '10px auto'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Media, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Media.Item, {
          renderAs: "figure",
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            width: "100",
            height: "100",
            icon: "bxs:user",
            color: "#757575"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Media.Item, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Heading, {
            size: 4,
            children: [userInfo.firstname, " ", userInfo.lastname]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Heading, {
            subtitle: true,
            size: 6,
            children: ["@", userInfo.username]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Content, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: "entypo:address",
              color: "#b0b0b0",
              width: "30",
              height: "30"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: userInfo.address
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: "ic:baseline-work",
              color: "#b0b0b0",
              width: "30",
              height: "30"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: userInfo.role
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: "dashicons:email",
              color: "#b0b0b0",
              width: "30",
              height: "30"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: userInfo.email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "button is-link  is-fullwidth",
          href: "user?username=" + userInfo.username,
          children: "Profile"
        })]
      })]
    })
  }, key));
}

/***/ }),

/***/ "./src/Components/ImportCSVui.js":
/*!***************************************!*\
  !*** ./src/Components/ImportCSVui.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/AddUserContext.js */ "./src/Context/AddUserContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








class ImportCSVui extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      errorFile: "",
      loadFile: false,
      showSignup: false,
      importNewUser: []
    };
    this.uploadCSV = this.uploadCSV.bind(this);
  }
  uploadCSV(e) {
    this.setState({
      errorFile: ""
    });
    var getFile = e.target.files;
    if (!getFile || getFile.length > 1) return;
    let getExrension, filejoinname;
    filejoinname = getFile[0].name;
    getExrension = filejoinname.substr(filejoinname.lastIndexOf('.') + 1).toLowerCase();
    if (getExrension != "csv") {
      this.setState({
        errorFile: "The file format must be CSV "
      });
      return;
    }
    this.setState({
      loadFile: true
    });
    var formFile = new FormData();
    formFile.append('csvfile', e.target.files[0]);
    let baseURL = {"LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_GB:en","USER":"mahdi","LC_TIME":"fr_FR.UTF-8","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false","SSH_AGENT_PID":"2805","XDG_SESSION_TYPE":"x11","npm_node_execpath":"/usr/local/bin/node","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/mahdi","OLDPWD":"/home/mahdi/ReactExpress/Registry-Employee","DESKTOP_SESSION":"ubuntu","npm_package_json":"/home/mahdi/ReactExpress/Registry-Employee/static/package.json","GNOME_SHELL_SESSION_MODE":"ubuntu","GTK_MODULES":"gail:atk-bridge","LC_MONETARY":"fr_FR.UTF-8","MANAGERPID":"2430","npm_config_userconfig":"/home/mahdi/.npmrc","npm_config_local_prefix":"/home/mahdi/ReactExpress/Registry-Employee/static","DBUS_STARTER_BUS_TYPE":"session","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","COLORTERM":"truecolor","LIBVIRT_DEFAULT_URI":"qemu:///system","COLOR":"1","npm_config_metrics_registry":"https://registry.npmjs.org/","MANDATORY_PATH":"/usr/share/gconf/ubuntu.mandatory.path","QT_QPA_PLATFORMTHEME":"appmenu-qt5","IM_CONFIG_PHASE":"1","LOGNAME":"mahdi","JOURNAL_STREAM":"9:48893","_":"/usr/local/bin/npm","npm_config_prefix":"/usr/local","XDG_SESSION_CLASS":"user","DEFAULTS_PATH":"/usr/share/gconf/ubuntu.default.path","USERNAME":"mahdi","TERM":"xterm-256color","npm_config_cache":"/home/mahdi/.npm","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","GTK2_MODULES":"overlay-scrollbar","WINDOWPATH":"2","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/mahdi/ReactExpress/Registry-Employee/static/node_modules/.bin:/home/mahdi/ReactExpress/Registry-Employee/node_modules/.bin:/home/mahdi/ReactExpress/node_modules/.bin:/home/mahdi/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","SESSION_MANAGER":"local/mahdi-Inspiron-3543:@/tmp/.ICE-unix/2870,unix/mahdi-Inspiron-3543:/tmp/.ICE-unix/2870","INVOCATION_ID":"22c3448231fd4eae8c3e13ec20f48be6","PAPERSIZE":"a4","NODE":"/usr/local/bin/node","npm_package_name":"client","XDG_MENU_PREFIX":"gnome-","LC_ADDRESS":"fr_FR.UTF-8","GNOME_TERMINAL_SCREEN":"/org/gnome/Terminal/screen/3506d3ea_e6c0_4b0c_b803_24f771978cb8","XDG_RUNTIME_DIR":"/run/user/1000","DISPLAY":":1","LANG":"en_GB.UTF-8","XDG_CURRENT_DESKTOP":"ubuntu:GNOME","LC_TELEPHONE":"fr_FR.UTF-8","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"ubuntu","XAUTHORITY":"/run/user/1000/gdm/Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","GNOME_TERMINAL_SERVICE":":1.477","npm_lifecycle_script":"webpack --watch --config webpack.dev.js ","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","SHELL":"/bin/bash","LC_NAME":"fr_FR.UTF-8","npm_package_version":"0.1.0","npm_lifecycle_event":"watch","QT_ACCESSIBILITY":"1","GDMSESSION":"ubuntu","LESSCLOSE":"/usr/bin/lesspipe %s %s","LC_MEASUREMENT":"fr_FR.UTF-8","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","LC_IDENTIFICATION":"fr_FR.UTF-8","QT_IM_MODULE":"ibus","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_init_module":"/home/mahdi/.npm-init.js","PWD":"/home/mahdi/ReactExpress/Registry-Employee/static","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-ubuntu:/etc/xdg","DBUS_STARTER_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","XDG_DATA_DIRS":"/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop:/var/lib/snapd/desktop","npm_config_global_prefix":"/usr/local","LC_NUMERIC":"fr_FR.UTF-8","npm_command":"run-script","LC_PAPER":"fr_FR.UTF-8","VTE_VERSION":"6003","INIT_CWD":"/home/mahdi/ReactExpress/Registry-Employee/static","EDITOR":"vi","PORT":"8787","NODE_ENV":"development","HOST":"localhost","REACT_APP_API_BASE_URL":"localhost:8787"}.REACT_APP_API_BASE_URL || 'localhost:8787';
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].request({
      method: "POST",
      url: "http://" + baseURL + "/upload",
      data: formFile,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: p => {
        console.log(p);
      }
    }).then(res => res.data).then(res => {
      this.setState({
        loadFile: false
      });
      if (res["error"] == 1) {
        return this.setState({
          errorFile: res["txt"]
        });
      }
      if (res["error"] == 2) {
        return location.href = res['redirect'];
      }
      this.setState({
        importNewUser: res
      });
      return;
    }).catch(err => {
      console.log(err);
      this.setState({
        errorFile: 'Please try again'
      });
      this.setState({
        loadFile: false
      });
    });
  }
  componentDidMount() {
    //check component mounted times for Debug purpose
    console.log("check component mounted times for Debug purpose ");
    console.log("in case called Twice that because React.StrictMode in dev mode");
  }
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "control",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "file is-primary is-rounded",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
            className: "file-label",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              onChange: e => this.uploadCSV(e),
              className: "file-input ",
              disabled: this.state.loadFile,
              type: "file",
              name: "csv"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "file-cta",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "file-icon",
                children: !this.state.loadFile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  icon: "akar-icons:file"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "loader is-centered is-loading",
                  style: {}
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "file-label",
                children: "Imort CSV File"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "help is-danger",
          children: this.state.errorFile
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Context_AddUserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext.Consumer, {
        children: _ref => {
          let {
            /*elementUser, */setMyUser
          } = _ref;
          return setMyUser(this.state.importNewUser);
        }
      })]
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportCSVui);

/***/ }),

/***/ "./src/Components/Toolbar.js":
/*!***********************************!*\
  !*** ./src/Components/Toolbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonAddUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonAddUser */ "./src/Components/ButtonAddUser.js");
/* harmony import */ var _ImportCSVui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportCSVui */ "./src/Components/ImportCSVui.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Toolbar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Block, {
    style: {
      width: 400,
      margin: '20px auto',
      borderRadius: "49px"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "field is-grouped is-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ImportCSVui__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ButtonAddUser__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbar);

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Views/Home */ "./src/Views/Home/index.js");
/* harmony import */ var _Context_AddUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context/AddUserContext */ "./src/Context/AddUserContext.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _serviceWorkerRegistration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorkerRegistration */ "./src/serviceWorkerRegistration.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _Components_HeaderLoggedUser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/HeaderLoggedUser.js */ "./src/Components/HeaderLoggedUser.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const root = react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_HeaderLoggedUser_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loc: "home"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Context_AddUserContext__WEBPACK_IMPORTED_MODULE_2__.UserContextProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Views_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  })]
}));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
_serviceWorkerRegistration__WEBPACK_IMPORTED_MODULE_5__.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./src/Views/Home/index.js":
/*!*********************************!*\
  !*** ./src/Views/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Employees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Employees */ "./src/Components/Employees.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var _Components_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Toolbar */ "./src/Components/Toolbar.js");
/* harmony import */ var _Components_AddLoggedUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/AddLoggedUser */ "./src/Components/AddLoggedUser.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









class Home extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      //check if fetch return
      usersLoading: false,
      usersInfo: [],
      errorFetch: false,
      emptyResault: false
    };
    this.getUsers = this.getUsers.bind(this);
  }
  componentDidMount() {
    //Cacll fetch getUsers once component get mounted 
    this.state.fetched == false && this.getUsers();
  }
  updateUsers(newUsers) {
    this.setState({
      usersInfo: [...newUsers, ...this.state.usersInfo]
    });
  }
  getUsers() {
    let baseURL = {"LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_GB:en","USER":"mahdi","LC_TIME":"fr_FR.UTF-8","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false","SSH_AGENT_PID":"2805","XDG_SESSION_TYPE":"x11","npm_node_execpath":"/usr/local/bin/node","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/mahdi","OLDPWD":"/home/mahdi/ReactExpress/Registry-Employee","DESKTOP_SESSION":"ubuntu","npm_package_json":"/home/mahdi/ReactExpress/Registry-Employee/static/package.json","GNOME_SHELL_SESSION_MODE":"ubuntu","GTK_MODULES":"gail:atk-bridge","LC_MONETARY":"fr_FR.UTF-8","MANAGERPID":"2430","npm_config_userconfig":"/home/mahdi/.npmrc","npm_config_local_prefix":"/home/mahdi/ReactExpress/Registry-Employee/static","DBUS_STARTER_BUS_TYPE":"session","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","COLORTERM":"truecolor","LIBVIRT_DEFAULT_URI":"qemu:///system","COLOR":"1","npm_config_metrics_registry":"https://registry.npmjs.org/","MANDATORY_PATH":"/usr/share/gconf/ubuntu.mandatory.path","QT_QPA_PLATFORMTHEME":"appmenu-qt5","IM_CONFIG_PHASE":"1","LOGNAME":"mahdi","JOURNAL_STREAM":"9:48893","_":"/usr/local/bin/npm","npm_config_prefix":"/usr/local","XDG_SESSION_CLASS":"user","DEFAULTS_PATH":"/usr/share/gconf/ubuntu.default.path","USERNAME":"mahdi","TERM":"xterm-256color","npm_config_cache":"/home/mahdi/.npm","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","GTK2_MODULES":"overlay-scrollbar","WINDOWPATH":"2","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/mahdi/ReactExpress/Registry-Employee/static/node_modules/.bin:/home/mahdi/ReactExpress/Registry-Employee/node_modules/.bin:/home/mahdi/ReactExpress/node_modules/.bin:/home/mahdi/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","SESSION_MANAGER":"local/mahdi-Inspiron-3543:@/tmp/.ICE-unix/2870,unix/mahdi-Inspiron-3543:/tmp/.ICE-unix/2870","INVOCATION_ID":"22c3448231fd4eae8c3e13ec20f48be6","PAPERSIZE":"a4","NODE":"/usr/local/bin/node","npm_package_name":"client","XDG_MENU_PREFIX":"gnome-","LC_ADDRESS":"fr_FR.UTF-8","GNOME_TERMINAL_SCREEN":"/org/gnome/Terminal/screen/3506d3ea_e6c0_4b0c_b803_24f771978cb8","XDG_RUNTIME_DIR":"/run/user/1000","DISPLAY":":1","LANG":"en_GB.UTF-8","XDG_CURRENT_DESKTOP":"ubuntu:GNOME","LC_TELEPHONE":"fr_FR.UTF-8","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"ubuntu","XAUTHORITY":"/run/user/1000/gdm/Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","GNOME_TERMINAL_SERVICE":":1.477","npm_lifecycle_script":"webpack --watch --config webpack.dev.js ","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","SHELL":"/bin/bash","LC_NAME":"fr_FR.UTF-8","npm_package_version":"0.1.0","npm_lifecycle_event":"watch","QT_ACCESSIBILITY":"1","GDMSESSION":"ubuntu","LESSCLOSE":"/usr/bin/lesspipe %s %s","LC_MEASUREMENT":"fr_FR.UTF-8","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","LC_IDENTIFICATION":"fr_FR.UTF-8","QT_IM_MODULE":"ibus","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_init_module":"/home/mahdi/.npm-init.js","PWD":"/home/mahdi/ReactExpress/Registry-Employee/static","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-ubuntu:/etc/xdg","DBUS_STARTER_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","XDG_DATA_DIRS":"/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop:/var/lib/snapd/desktop","npm_config_global_prefix":"/usr/local","LC_NUMERIC":"fr_FR.UTF-8","npm_command":"run-script","LC_PAPER":"fr_FR.UTF-8","VTE_VERSION":"6003","INIT_CWD":"/home/mahdi/ReactExpress/Registry-Employee/static","EDITOR":"vi","PORT":"8787","NODE_ENV":"development","HOST":"localhost","REACT_APP_API_BASE_URL":"localhost:8787"}.REACT_APP_API_BASE_URL || 'localhost:8787';
    this.setState({
      usersLoading: true
    });
    fetch("http://" + baseURL + "/users").then(res => res.json()).then(res => {
      console.log("RESAULT");
      console.log(res);
      this.setState({
        emptyResault: false,
        usersLoading: false
      });
      if (res["error"] == 1) {
        return this.setState({
          errorFetch: res["error"]
        });
      }
      if (res.length == 0) {
        return this.setState({
          emptyResault: true
        });
      }
      this.setState({
        usersInfo: res,
        fetched: true
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        errorFetch: 'Please try again'
      });
      this.setState({
        fetchloader: false
      });
    });
    ;
  }
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Block, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Block, {
        style: {
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "700px",
          margin: "auto"
        },
        children: [this.state.usersLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "loader is-centered is-loading",
          style: {
            margin: "20px auto",
            height: "70px",
            width: "70px"
          }
        }), this.state.errorFetch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Notification, {
          color: "danger",
          children: this.state.errorFetch
        }), !this.state.usersLoading && !this.state.errorFetch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: this.state.emptyResault ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Notification, {
            color: "danger",
            children: ["No data to show !", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              onClick: () => {
                this.getUsers();
              },
              children: "Reload"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_AddLoggedUser__WEBPACK_IMPORTED_MODULE_4__["default"], {
              setUsers: users => {
                this.updateUsers(users);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Employees__WEBPACK_IMPORTED_MODULE_1__["default"], {
              usersInfo: this.state.usersInfo
            })]
          })
        })]
      })]
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
/******/ 			"home": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-bulma-components_cjs_index_js-node_modules_react-dom_client_js-nod-6d73cb","vendors-node_modules_axios_index_js","src_Components_AddLoggedUser_js-src_Components_HeaderLoggedUser_js-src_reportWebVitals_js-src-786fb1"], () => (__webpack_require__("./src/Home.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbXBvbmVudHMvQnV0dG9uQWRkVXNlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQ29tcG9uZW50cy9FbXBsb3llZXMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbXBvbmVudHMvSW1wb3J0Q1NWdWkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvVmlld3MvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94fSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgLCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiBhcyBJY29uaWZ5IH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuLy9pbXBvcnQgU2lnbnVwIGZyb20gXCIuLi9WaWV3cy9SZWdpc3RyYXRpb24vc2lnbnVwXCI7XG5jb25zdCBTaWdudXAgPSBsYXp5KCAoKSA9PiAgaW1wb3J0KFwiLi4vVmlld3MvUmVnaXN0cmF0aW9uL3NpZ251cFwiKSk7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L0FkZFVzZXJDb250ZXh0LmpzXCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbkFkZFVzZXIocHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd1NpZ251cCwgc2V0U2hvd1NpZ251cF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mbyBpcy1yb3VuZGVkXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1NpZ251cCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwiYW50LWRlc2lnbjp1c2VyZ3JvdXAtYWRkLW91dGxpbmVkXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIFVzZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxCb3hTaWduVXAgc2hvd1NpZ251cD17c2hvd1NpZ251cH0gc2V0U2hvd1NpZ251cD17KCkgPT4gc2V0U2hvd1NpZ251cChmYWxzZSl9IC8+XG4gICAgICAgIDwvPlxuICAgIClcblxuXG59XG5cblxuZnVuY3Rpb24gQm94U2lnblVwKHsgc2hvd1NpZ251cCwgc2V0U2hvd1NpZ251cCB9KSB7XG5cbiAgICBjb25zdCBbbmV3VXNlciwgU2V0TmV3VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBTaWduVXBTdWNjZWVkID0gKG5ld1VzZXIpID0+IHtcblxuICAgICAgICBsZXQgdXNlcm9uZSA9IFtdO1xuICAgICAgICB1c2Vyb25lLnB1c2gobmV3VXNlcilcbiAgICAgICAgc2V0U2hvd1NpZ251cCgpXG5cbiAgICAgICAgU2V0TmV3VXNlcih1c2Vyb25lKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtb2RhbCBcIiArIChzaG93U2lnbnVwID8gXCIgaXMtYWN0aXZlXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IDQwMCwgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXIgaXMtY2VudGVyZWQgaXMtbG9hZGluZ1wiIHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IGF1dG9cIiwgaGVpZ2h0OiBcIjcwcHhcIiwgd2lkdGg6IFwiNzBweFwiIH19PjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPFNpZ251cCBjcmVhdGVkaXRVc2VyPVwiY3JlYXRlXCIgQ3JlYXRlVXBkYXRlU3VjY2VlZD17KG5ld1VzZXIpID0+IFNpZ25VcFN1Y2NlZWQobmV3VXNlcil9IC8+XG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8VXNlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgICAgICAgIHsoeyAvKmVsZW1lbnRVc2VyLCovIHNldE15VXNlciB9KSA9PiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE15VXNlcihuZXdVc2VyKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVXNlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2UgaXMtbGFyZ2VcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2lnbnVwKCl9PjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25BZGRVc2VyOyIsImltcG9ydCB7IEljb24sIENhcmQsIE1lZGlhLCBIZWFkaW5nLCBDb250ZW50IH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MnO1xuaW1wb3J0IHsgSWNvbiBhcyBJY29uaWZ5IH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbXBsb3llZXMoeyB1c2Vyc0luZm8gfSkge1xuXG4gIHJldHVybiAoXG4gICAgdXNlcnNJbmZvLm1hcCgodXNlckluZm8sIGtleSkgPT4gKFxuICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDMwMCwgbWFyZ2luOiAnMTBweCBhdXRvJyB9fSBrZXk9e2tleX0gPlxuXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPE1lZGlhPlxuICAgICAgICAgICAgPE1lZGlhLkl0ZW0gcmVuZGVyQXM9XCJmaWd1cmVcIiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPEljb25pZnkgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBpY29uPVwiYnhzOnVzZXJcIiBjb2xvcj1cIiM3NTc1NzVcIiAvPlxuICAgICAgICAgICAgPC9NZWRpYS5JdGVtPlxuICAgICAgICAgICAgPE1lZGlhLkl0ZW0+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezR9Pnt1c2VySW5mby5maXJzdG5hbWV9IHt1c2VySW5mby5sYXN0bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN1YnRpdGxlIHNpemU9ezZ9PlxuICAgICAgICAgICAgICAgIEB7dXNlckluZm8udXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDwvTWVkaWEuSXRlbT5cbiAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgIDxDb250ZW50PlxuXG5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICAgIDxJY29uaWZ5IGljb249XCJlbnR5cG86YWRkcmVzc1wiIGNvbG9yPVwiI2IwYjBiMFwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgPHA+e3VzZXJJbmZvLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPEljb25pZnkgaWNvbj1cImljOmJhc2VsaW5lLXdvcmtcIiBjb2xvcj1cIiNiMGIwYjBcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxuICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgIDxwPnt1c2VySW5mby5yb2xlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICAgIDxJY29uaWZ5IGljb249XCJkYXNoaWNvbnM6ZW1haWxcIiBjb2xvcj1cIiNiMGIwYjBcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxuICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgIDxwPnt1c2VySW5mby5lbWFpbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtbGluayAgaXMtZnVsbHdpZHRoXCIgaHJlZj17XCJ1c2VyP3VzZXJuYW1lPVwiICsgdXNlckluZm8udXNlcm5hbWV9PlxuICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICA8L2E+XG5cblxuXG5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICA8L0NhcmQ+XG5cbiAgICApXG4gICAgKVxuICApO1xufSIsIlxuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uIGFzIEljb25pZnkgfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvQWRkVXNlckNvbnRleHQuanNcIjtcblxuY2xhc3MgSW1wb3J0Q1NWdWkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXJyb3JGaWxlOiBcIlwiLFxuICAgICAgICAgICAgbG9hZEZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NpZ251cDogZmFsc2UsXG4gICAgICAgICAgICBpbXBvcnROZXdVc2VyOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGxvYWRDU1YgPSB0aGlzLnVwbG9hZENTVi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwbG9hZENTVihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpbGU6IFwiXCIgfSlcbiAgICAgICAgdmFyIGdldEZpbGUgPSBlLnRhcmdldC5maWxlcztcblxuICAgICAgICBpZiAoIWdldEZpbGUgfHwgZ2V0RmlsZS5sZW5ndGggPiAxKSByZXR1cm47XG5cblxuICAgICAgICBsZXQgZ2V0RXhyZW5zaW9uLCBmaWxlam9pbm5hbWU7XG5cbiAgICAgICAgZmlsZWpvaW5uYW1lID0gZ2V0RmlsZVswXS5uYW1lO1xuICAgICAgICBnZXRFeHJlbnNpb24gPSBmaWxlam9pbm5hbWUuc3Vic3RyKGZpbGVqb2lubmFtZS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGdldEV4cmVuc2lvbiAhPSBcImNzdlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaWxlOiBcIlRoZSBmaWxlIGZvcm1hdCBtdXN0IGJlIENTViBcIiB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkRmlsZTogdHJ1ZSB9KVxuICAgICAgICB2YXIgZm9ybUZpbGUgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybUZpbGUuYXBwZW5kKCdjc3ZmaWxlJywgZS50YXJnZXQuZmlsZXNbMF0pO1xuXG4gICAgICAgIGxldCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9CQVNFX1VSTCB8fCAnbG9jYWxob3N0Ojg3ODcnO1xuICAgICAgICBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL1wiICsgYmFzZVVSTCArIFwiL3VwbG9hZFwiLFxuICAgICAgICAgICAgZGF0YTogZm9ybUZpbGUsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG5cbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZEZpbGU6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcImVycm9yXCJdID09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yRmlsZTogcmVzW1widHh0XCJdIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJlcnJvclwiXSA9PSAyKSB7IHJldHVybiBsb2NhdGlvbi5ocmVmID0gcmVzWydyZWRpcmVjdCddOyB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1wb3J0TmV3VXNlcjogcmVzIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckZpbGU6ICdQbGVhc2UgdHJ5IGFnYWluJyB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkRmlsZTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vY2hlY2sgY29tcG9uZW50IG1vdW50ZWQgdGltZXMgZm9yIERlYnVnIHB1cnBvc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBjb21wb25lbnQgbW91bnRlZCB0aW1lcyBmb3IgRGVidWcgcHVycG9zZSBcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBjYXNlIGNhbGxlZCBUd2ljZSB0aGF0IGJlY2F1c2UgUmVhY3QuU3RyaWN0TW9kZSBpbiBkZXYgbW9kZVwiKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUgaXMtcHJpbWFyeSBpcy1yb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBsb2FkQ1NWKGUpfSBjbGFzc05hbWU9XCJmaWxlLWlucHV0IFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRGaWxlfSB0eXBlPVwiZmlsZVwiIG5hbWU9XCJjc3ZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtY3RhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5sb2FkRmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwiYWthci1pY29uczpmaWxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBpcy1jZW50ZXJlZCBpcy1sb2FkaW5nXCIgc3R5bGU9e3t9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltb3J0IENTViBGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWxwIGlzLWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9yRmlsZX08L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPFVzZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICAgICAgICB7KHsgLyplbGVtZW50VXNlciwgKi9zZXRNeVVzZXIgfSkgPT4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNeVVzZXIodGhpcy5zdGF0ZS5pbXBvcnROZXdVc2VyKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVXNlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydENTVnVpO1xuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0IEJ1dHRvbkFkZFVzZXIgZnJvbSBcIi4vQnV0dG9uQWRkVXNlclwiO1xuaW1wb3J0IEltcG9ydENTVnVpIGZyb20gXCIuL0ltcG9ydENTVnVpXCI7XG5mdW5jdGlvbiBUb29sYmFyKCkge1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmxvY2sgc3R5bGU9e3sgd2lkdGg6IDQwMCwgbWFyZ2luOiAnMjBweCBhdXRvJywgYm9yZGVyUmFkaXVzOiBcIjQ5cHhcIiwgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWQgaXMtY2VudGVyXCIgPlxuXG4gICAgICAgICAgICAgICAgPEltcG9ydENTVnVpIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQWRkVXNlciAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CbG9jaz5cbiAgICApXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL1ZpZXdzL0hvbWUnO1xuaW1wb3J0IHsgVXNlckNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuL0NvbnRleHQvQWRkVXNlckNvbnRleHRcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiBmcm9tICcuL3NlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24nO1xuaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tICcuL3JlcG9ydFdlYlZpdGFscyc7XG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgSGVhZGVyTG9nZ2VkVXNlciBmcm9tICcuL0NvbXBvbmVudHMvSGVhZGVyTG9nZ2VkVXNlci5qcyc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoXG4gIDw+XG4gICAgPEhlYWRlckxvZ2dlZFVzZXIgbG9jPVwiaG9tZVwiIC8+XG4gICAgPFVzZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8SG9tZSAvPlxuICAgIDwvVXNlckNvbnRleHRQcm92aWRlcj5cbiAgPC8+XG4pO1xuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9jcmEubGluay9QV0FcbnNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuXG4vLyBJZiB5b3Ugd2FudCB0byBzdGFydCBtZWFzdXJpbmcgcGVyZm9ybWFuY2UgaW4geW91ciBhcHAsIHBhc3MgYSBmdW5jdGlvblxuLy8gdG8gbG9nIHJlc3VsdHMgKGZvciBleGFtcGxlOiByZXBvcnRXZWJWaXRhbHMoY29uc29sZS5sb2cpKVxuLy8gb3Igc2VuZCB0byBhbiBhbmFseXRpY3MgZW5kcG9pbnQuIExlYXJuIG1vcmU6IGh0dHBzOi8vYml0Lmx5L0NSQS12aXRhbHNcbnJlcG9ydFdlYlZpdGFscygpO1xuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFbXBsb3llZXMgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvRW1wbG95ZWVzXCI7XG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJztcblxuaW1wb3J0IHsgQmxvY2ssIE5vdGlmaWNhdGlvbiB9IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9Ub29sYmFyXCI7XG5pbXBvcnQgQWRkTG9nZ2VkVXNlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9BZGRMb2dnZWRVc2VyXCI7XG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLC8vY2hlY2sgaWYgZmV0Y2ggcmV0dXJuXG4gICAgICAgICAgICB1c2Vyc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdXNlcnNJbmZvOiBbXSxcbiAgICAgICAgICAgIGVycm9yRmV0Y2g6IGZhbHNlLFxuICAgICAgICAgICAgZW1wdHlSZXNhdWx0OiBmYWxzZSxcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRVc2VycyA9IHRoaXMuZ2V0VXNlcnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy9DYWNsbCBmZXRjaCBnZXRVc2VycyBvbmNlIGNvbXBvbmVudCBnZXQgbW91bnRlZCBcbiAgICAgICAgKHRoaXMuc3RhdGUuZmV0Y2hlZCA9PSBmYWxzZSAmJiB0aGlzLmdldFVzZXJzKCkpO1xuXG5cblxuICAgIH1cblxuICAgIHVwZGF0ZVVzZXJzKG5ld1VzZXJzKSB7XG5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNJbmZvOiBbLi4ubmV3VXNlcnMsIC4uLnRoaXMuc3RhdGUudXNlcnNJbmZvXSB9KVxuICAgIH1cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgbGV0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0JBU0VfVVJMIHx8ICdsb2NhbGhvc3Q6ODc4Nyc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2Vyc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIGZldGNoKFwiaHR0cDovL1wiICsgYmFzZVVSTCArIFwiL3VzZXJzXCIpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNBVUxUXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbXB0eVJlc2F1bHQ6IGZhbHNlLCB1c2Vyc0xvYWRpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcImVycm9yXCJdID09IDEpIHsgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvckZldGNoOiByZXNbXCJlcnJvclwiXSB9KTsgfVxuICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID09IDApIHsgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlbXB0eVJlc2F1bHQ6IHRydWUgfSk7IH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNJbmZvOiByZXMsIGZldGNoZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvckZldGNoOiAnUGxlYXNlIHRyeSBhZ2FpbicgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmV0Y2hsb2FkZXI6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgLz5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBtYXhXaWR0aDogXCI3MDBweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS51c2Vyc0xvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBpcy1jZW50ZXJlZCBpcy1sb2FkaW5nXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHggYXV0b1wiLCBoZWlnaHQ6IFwiNzBweFwiLCB3aWR0aDogXCI3MHB4XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXJyb3JGZXRjaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb24gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JGZXRjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05vdGlmaWNhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS51c2Vyc0xvYWRpbmcgJiYgIXRoaXMuc3RhdGUuZXJyb3JGZXRjaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZW1wdHlSZXNhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb24gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gZGF0YSB0byBzaG93ICFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyB0aGlzLmdldFVzZXJzKCkgfX0+UmVsb2FkPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTG9nZ2VkVXNlciBzZXRVc2Vycz17KHVzZXJzKSA9PiB7IHRoaXMudXBkYXRlVXNlcnModXNlcnMpIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbXBsb3llZXMgdXNlcnNJbmZvPXt0aGlzLnN0YXRlLnVzZXJzSW5mb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjbGllbnQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJob21lXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gZ2xvYmFsVGhpc1tcIndlYnBhY2tDaHVua2NsaWVudFwiXSA9IGdsb2JhbFRoaXNbXCJ3ZWJwYWNrQ2h1bmtjbGllbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtYnVsbWEtY29tcG9uZW50c19janNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9jbGllbnRfanMtbm9kLTZkNzNjYlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanNcIixcInNyY19Db21wb25lbnRzX0FkZExvZ2dlZFVzZXJfanMtc3JjX0NvbXBvbmVudHNfSGVhZGVyTG9nZ2VkVXNlcl9qcy1zcmNfcmVwb3J0V2ViVml0YWxzX2pzLXNyYy03ODZmYjFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvSG9tZS5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkJveCIsIlJlYWN0IiwidXNlU3RhdGUiLCJsYXp5IiwiU3VzcGVuc2UiLCJJY29uIiwiSWNvbmlmeSIsIlNpZ251cCIsIlVzZXJDb250ZXh0IiwiQnV0dG9uQWRkVXNlciIsInByb3BzIiwic2hvd1NpZ251cCIsInNldFNob3dTaWdudXAiLCJCb3hTaWduVXAiLCJuZXdVc2VyIiwiU2V0TmV3VXNlciIsIlNpZ25VcFN1Y2NlZWQiLCJ1c2Vyb25lIiwicHVzaCIsIndpZHRoIiwibWFyZ2luIiwiaGVpZ2h0Iiwic2V0TXlVc2VyIiwiQ2FyZCIsIk1lZGlhIiwiSGVhZGluZyIsIkNvbnRlbnQiLCJFbXBsb3llZXMiLCJ1c2Vyc0luZm8iLCJtYXAiLCJ1c2VySW5mbyIsImtleSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidXNlcm5hbWUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJhZGRyZXNzIiwicm9sZSIsImVtYWlsIiwiYXhpb3MiLCJJbXBvcnRDU1Z1aSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJlcnJvckZpbGUiLCJsb2FkRmlsZSIsImltcG9ydE5ld1VzZXIiLCJ1cGxvYWRDU1YiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwiZ2V0RmlsZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZ2V0RXhyZW5zaW9uIiwiZmlsZWpvaW5uYW1lIiwibmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwidG9Mb3dlckNhc2UiLCJmb3JtRmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0JBU0VfVVJMIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwib25VcGxvYWRQcm9ncmVzcyIsInAiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJCbG9jayIsIlRvb2xiYXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwiVXNlckNvbnRleHRQcm92aWRlciIsIlJlYWN0RE9NIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInJlcG9ydFdlYlZpdGFscyIsIkhlYWRlckxvZ2dlZFVzZXIiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bnJlZ2lzdGVyIiwiTm90aWZpY2F0aW9uIiwiQWRkTG9nZ2VkVXNlciIsImZldGNoZWQiLCJ1c2Vyc0xvYWRpbmciLCJlcnJvckZldGNoIiwiZW1wdHlSZXNhdWx0IiwiZ2V0VXNlcnMiLCJ1cGRhdGVVc2VycyIsIm5ld1VzZXJzIiwiZmV0Y2giLCJqc29uIiwiZmV0Y2hsb2FkZXIiLCJmbGV4V3JhcCIsIm1heFdpZHRoIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9