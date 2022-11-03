"use strict";
(globalThis["webpackChunkclient"] = globalThis["webpackChunkclient"] || []).push([["src_Views_Registration_signup_js"],{

/***/ "./src/Components/InputForm.js":
/*!*************************************!*\
  !*** ./src/Components/InputForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/cjs/index.js");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function inputReducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let nextState;

  // String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g,"")};

  action.value = action.value.trim();
  switch (action.type) {
    case 'text':
      if (/^[a-zA-Z0-9]{4,13}$/g.test(action.value) != true) {
        nextState = "danger";
        action.props.getValue(null);
      } else if (action.value.length < 8) {
        nextState = "success";
        action.props.getValue(action.value);
      }
      return nextState || state;
    case 'email':
      if (/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i.test(action.value) == true) {
        nextState = "success";
        action.props.getValue(action.value);
      } else {
        nextState = "danger";
        action.props.getValue(null);
      }
      return nextState;
    case 'password':
      nextState = (() => {
        if (action.value.length < 4) {
          action.props.getValue(null);
          return "danger";
        } else if (action.value.length < 8) {
          action.props.getValue(action.value);
          return "warning";
        } else if (action.value.length >= 8) {
          action.props.getValue(action.value);
          return "success";
        }
      })();
      return nextState || state;
    default:
      return state;
  }
}
function InputFrom(props) {
  const {
    label,
    type,
    name,
    placeholder
  } = props;
  const [colorvalue, setColorValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(inputReducer, "");
  /**
   * Another approach , instead using useRedcuer 
   * const [colorvalue, setColorValue] = useState({type:typeInput , value:inputvalue})
   * and inside useEffect
   * switch(colorvalue.type){
   *    case "email":
   *      if ( colorvalue.type )
   *    break;
   * }
   */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        rounded: true,
        placeholder: placeholder,
        type: type,
        name: name,
        color: colorvalue,
        onChange: e => setColorValue({
          props: props,
          name: e.target.name,
          type: type,
          value: e.target.value
        })
      }), props.children]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFrom);

/***/ }),

/***/ "./src/Views/Registration/signup.js":
/*!******************************************!*\
  !*** ./src/Views/Registration/signup.js ***!
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





//function Signup({ onClick }) {



class Signup extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  /**
   * 
   * @param {*} props
   * edituser from editButton
   * CreateUpdateSucceed 
   * createditUser
   */
  constructor(props) {
    super(props);
    this.state = {
      formerror: "",
      fetchloader: false
    };
    this.form = {
      username: null,
      firstname: null,
      lastname: null,
      password: null,
      email: null,
      address: null,
      role: null
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    if (this.props.createditUser != "update") {
      for (const [key, value] of Object.entries(this.form)) {
        if (key == "address" || key == "email") continue;
        if (value == null) {
          this.setState({
            formerror: `Please fill the field ${key}`
          });
          return;
        }
      }
    }
    let baseURL = {"LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_GB:en","USER":"mahdi","LC_TIME":"fr_FR.UTF-8","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false","SSH_AGENT_PID":"2805","XDG_SESSION_TYPE":"x11","npm_node_execpath":"/usr/local/bin/node","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/mahdi","OLDPWD":"/home/mahdi/ReactExpress/Registry-Employee","DESKTOP_SESSION":"ubuntu","npm_package_json":"/home/mahdi/ReactExpress/Registry-Employee/static/package.json","GNOME_SHELL_SESSION_MODE":"ubuntu","GTK_MODULES":"gail:atk-bridge","LC_MONETARY":"fr_FR.UTF-8","MANAGERPID":"2430","npm_config_userconfig":"/home/mahdi/.npmrc","npm_config_local_prefix":"/home/mahdi/ReactExpress/Registry-Employee/static","DBUS_STARTER_BUS_TYPE":"session","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","COLORTERM":"truecolor","LIBVIRT_DEFAULT_URI":"qemu:///system","COLOR":"1","npm_config_metrics_registry":"https://registry.npmjs.org/","MANDATORY_PATH":"/usr/share/gconf/ubuntu.mandatory.path","QT_QPA_PLATFORMTHEME":"appmenu-qt5","IM_CONFIG_PHASE":"1","LOGNAME":"mahdi","JOURNAL_STREAM":"9:48893","_":"/usr/local/bin/npm","npm_config_prefix":"/usr/local","XDG_SESSION_CLASS":"user","DEFAULTS_PATH":"/usr/share/gconf/ubuntu.default.path","USERNAME":"mahdi","TERM":"xterm-256color","npm_config_cache":"/home/mahdi/.npm","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","GTK2_MODULES":"overlay-scrollbar","WINDOWPATH":"2","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/mahdi/ReactExpress/Registry-Employee/static/node_modules/.bin:/home/mahdi/ReactExpress/Registry-Employee/node_modules/.bin:/home/mahdi/ReactExpress/node_modules/.bin:/home/mahdi/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","SESSION_MANAGER":"local/mahdi-Inspiron-3543:@/tmp/.ICE-unix/2870,unix/mahdi-Inspiron-3543:/tmp/.ICE-unix/2870","INVOCATION_ID":"22c3448231fd4eae8c3e13ec20f48be6","PAPERSIZE":"a4","NODE":"/usr/local/bin/node","npm_package_name":"client","XDG_MENU_PREFIX":"gnome-","LC_ADDRESS":"fr_FR.UTF-8","GNOME_TERMINAL_SCREEN":"/org/gnome/Terminal/screen/3506d3ea_e6c0_4b0c_b803_24f771978cb8","XDG_RUNTIME_DIR":"/run/user/1000","DISPLAY":":1","LANG":"en_GB.UTF-8","XDG_CURRENT_DESKTOP":"ubuntu:GNOME","LC_TELEPHONE":"fr_FR.UTF-8","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"ubuntu","XAUTHORITY":"/run/user/1000/gdm/Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","GNOME_TERMINAL_SERVICE":":1.477","npm_lifecycle_script":"webpack --watch --config webpack.dev.js ","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","SHELL":"/bin/bash","LC_NAME":"fr_FR.UTF-8","npm_package_version":"0.1.0","npm_lifecycle_event":"watch","QT_ACCESSIBILITY":"1","GDMSESSION":"ubuntu","LESSCLOSE":"/usr/bin/lesspipe %s %s","LC_MEASUREMENT":"fr_FR.UTF-8","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","LC_IDENTIFICATION":"fr_FR.UTF-8","QT_IM_MODULE":"ibus","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_init_module":"/home/mahdi/.npm-init.js","PWD":"/home/mahdi/ReactExpress/Registry-Employee/static","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-ubuntu:/etc/xdg","DBUS_STARTER_ADDRESS":"unix:path=/run/user/1000/bus,guid=0878fef7f315c33754193b1e6363b7f0","XDG_DATA_DIRS":"/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop:/var/lib/snapd/desktop","npm_config_global_prefix":"/usr/local","LC_NUMERIC":"fr_FR.UTF-8","npm_command":"run-script","LC_PAPER":"fr_FR.UTF-8","VTE_VERSION":"6003","INIT_CWD":"/home/mahdi/ReactExpress/Registry-Employee/static","EDITOR":"vi","PORT":"8787","NODE_ENV":"development","HOST":"localhost","REACT_APP_API_BASE_URL":"localhost:8787"}.REACT_APP_API_BASE_URL || 'localhost:8787';

    /** 
     * this.props.createditUser == update=> EditUserProfile = username of Prfoile that should be updated
     * this.props.createditUser == create => new profile ; EditUserProfile == null
     * 
     */
    let EditUserProfile = this.props.edituser?.username || null;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.form,
        createditUser: this.props.createditUser,
        EditUserProfile: EditUserProfile
      })
    };
    this.setState({
      fetchloader: true
    });
    fetch("http://" + baseURL + "/signup", requestOptions).then(res => res.json()).then(res => {
      this.setState({
        formerror: ''
      });
      if (res["error"] == 1) {
        this.setState({
          formerror: res["txt"],
          fetchloader: false
        });
        return;
      }

      //cratedUser with no session
      if (res["error"] == 2) {
        return location.href = res['redirect'];
      }
      if (this.props.createditUser) {
        this.props.CreateUpdateSucceed(res);
        this.setState({
          fetchloader: false
        });

        //if admin edit his own profile
        if (EditUserProfile == localStorage.getItem('username')) {
          localStorage.setItem('username', this.form.username);
        }
      } else {
        localStorage.setItem('username', this.form.username);
        location.href = "/home";
      }
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
        name: "username",
        type: "text",
        placeholder: "* Username",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "uil:user"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: firstname => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "firstname": firstname
        }),
        label: "First Name",
        type: "text",
        name: "firstname",
        placeholder: "* First Name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "uil:user"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: lastname => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "lastname": lastname
        }),
        label: "Last Name",
        type: "text",
        name: "lastname",
        placeholder: "* Last Name",
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
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "bi:eye-fill"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: email => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "email": email
        }),
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "dashicons:email"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: role => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "role": role
        }),
        label: "Role",
        type: "text",
        name: "role",
        placeholder: "* Role",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "ic:baseline-work"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        getValue: address => this.form = _objectSpread(_objectSpread({}, this.form), {}, {
          "address": address
        }),
        label: "Address",
        type: "text",
        name: "address",
        placeholder: "Address",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: "entypo:address"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button.Group, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          loading: this.state.fetchloader,
          fullwidth: true,
          rounded: true,
          color: "primary",
          onClick: () => this.submit(),
          children: !this.props.createditUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Register"
          }) || this.props.createditUser == "create" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Create new user"
          }) || this.props.createditUser == "update" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Update"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Form.Help, {
        color: "danger",
        children: this.state.formerror
      }), !this.props.createditUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bulma_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        fullwidth: true,
        rounded: true,
        color: "link",
        onClick: this.props.onClick,
        children: "I already have an account"
      })]
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ2lFLE9BQVE7UUFBQTtNQUFBLEVBQW1DO0lBQUEsRUFHbEU7RUFFUDtBQUdGO0FBRUEsaUVBQWVoRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbXBvbmVudHMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9WaWV3cy9SZWdpc3RyYXRpb24vc2lnbnVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcyc7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGlucHV0UmVkdWNlcihzdGF0ZSA9IFwiXCIsIGFjdGlvbikge1xuICAgIGxldCBuZXh0U3RhdGVcblxuICAgIC8vIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX07XG5cbiAgICBhY3Rpb24udmFsdWUgPSBhY3Rpb24udmFsdWUudHJpbSgpXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcblxuXG4gICAgICAgICAgICBpZiAoL15bYS16QS1aMC05XXs0LDEzfSQvZy50ZXN0KGFjdGlvbi52YWx1ZSkgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IFwiZGFuZ2VyXCI7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnByb3BzLmdldFZhbHVlKG51bGwpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi52YWx1ZS5sZW5ndGggPCA4KSB7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnByb3BzLmdldFZhbHVlKGFjdGlvbi52YWx1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZSB8fCBzdGF0ZVxuICAgICAgICBjYXNlICdlbWFpbCc6XG5cblxuICAgICAgICAgICAgaWYgKC9eW2EtekEtWjAtOS5fLV0rQFthLXowLTkuXy1dezIsfVxcLlthLXpdezIsNH0kL2kudGVzdChhY3Rpb24udmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICBhY3Rpb24ucHJvcHMuZ2V0VmFsdWUoYWN0aW9uLnZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBcImRhbmdlclwiO1xuICAgICAgICAgICAgICAgIGFjdGlvbi5wcm9wcy5nZXRWYWx1ZShudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZVxuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi52YWx1ZS5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wcm9wcy5nZXRWYWx1ZShudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJkYW5nZXJcIjtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnByb3BzLmdldFZhbHVlKGFjdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwid2FybmluZ1wiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnByb3BzLmdldFZhbHVlKGFjdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGUgfHwgc3RhdGVcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbmZ1bmN0aW9uIElucHV0RnJvbShwcm9wcykge1xuXG4gICAgY29uc3QgeyBsYWJlbCwgdHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgW2NvbG9ydmFsdWUsIHNldENvbG9yVmFsdWVdID0gdXNlUmVkdWNlcihpbnB1dFJlZHVjZXIsIFwiXCIpXG4gICAgLyoqXG4gICAgICogQW5vdGhlciBhcHByb2FjaCAsIGluc3RlYWQgdXNpbmcgdXNlUmVkY3VlciBcbiAgICAgKiBjb25zdCBbY29sb3J2YWx1ZSwgc2V0Q29sb3JWYWx1ZV0gPSB1c2VTdGF0ZSh7dHlwZTp0eXBlSW5wdXQgLCB2YWx1ZTppbnB1dHZhbHVlfSlcbiAgICAgKiBhbmQgaW5zaWRlIHVzZUVmZmVjdFxuICAgICAqIHN3aXRjaChjb2xvcnZhbHVlLnR5cGUpe1xuICAgICAqICAgIGNhc2UgXCJlbWFpbFwiOlxuICAgICAqICAgICAgaWYgKCBjb2xvcnZhbHVlLnR5cGUgKVxuICAgICAqICAgIGJyZWFrO1xuICAgICAqIH1cbiAgICAgKi9cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+e2xhYmVsfTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xvclZhbHVlKHsgcHJvcHM6IHByb3BzLCBuYW1lOiBlLnRhcmdldC5uYW1lLCB0eXBlOiB0eXBlLCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cblxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGcm9tOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb24sIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJztcbmltcG9ydCB7IEljb24gYXMgSWNvbmlmeSB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXRGb3JtXCI7XG4vL2Z1bmN0aW9uIFNpZ251cCh7IG9uQ2xpY2sgfSkge1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHsqfSBwcm9wc1xuICAgKiBlZGl0dXNlciBmcm9tIGVkaXRCdXR0b25cbiAgICogQ3JlYXRlVXBkYXRlU3VjY2VlZCBcbiAgICogY3JlYXRlZGl0VXNlclxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtZXJyb3I6IFwiXCIsXG4gICAgICBmZXRjaGxvYWRlcjogZmFsc2VcbiAgICB9XG5cblxuICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgZmlyc3RuYW1lOiBudWxsLFxuICAgICAgbGFzdG5hbWU6IG51bGwsXG5cbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBhZGRyZXNzOiBudWxsLFxuICAgICAgcm9sZTogbnVsbFxuICAgIH1cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcylcbiAgfVxuXG5cblxuICBzdWJtaXQoKSB7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jcmVhdGVkaXRVc2VyICE9IFwidXBkYXRlXCIpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZm9ybSkpIHtcbiAgICAgICAgaWYgKGtleSA9PSBcImFkZHJlc3NcIiB8fCBrZXkgPT0gXCJlbWFpbFwiKSBjb250aW51ZVxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1lcnJvcjogYFBsZWFzZSBmaWxsIHRoZSBmaWVsZCAke2tleX1gIH0pXG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGxldCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9CQVNFX1VSTCB8fCAnbG9jYWxob3N0Ojg3ODcnO1xuXG4gICAgLyoqIFxuICAgICAqIHRoaXMucHJvcHMuY3JlYXRlZGl0VXNlciA9PSB1cGRhdGU9PiBFZGl0VXNlclByb2ZpbGUgPSB1c2VybmFtZSBvZiBQcmZvaWxlIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICAgKiB0aGlzLnByb3BzLmNyZWF0ZWRpdFVzZXIgPT0gY3JlYXRlID0+IG5ldyBwcm9maWxlIDsgRWRpdFVzZXJQcm9maWxlID09IG51bGxcbiAgICAgKiBcbiAgICAgKi9cbiAgICBsZXQgRWRpdFVzZXJQcm9maWxlID0gdGhpcy5wcm9wcy5lZGl0dXNlcj8udXNlcm5hbWUgfHwgbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiB0aGlzLmZvcm0sIGNyZWF0ZWRpdFVzZXI6IHRoaXMucHJvcHMuY3JlYXRlZGl0VXNlciwgRWRpdFVzZXJQcm9maWxlOiBFZGl0VXNlclByb2ZpbGUgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZldGNobG9hZGVyOiB0cnVlIH0pO1xuXG4gICAgZmV0Y2goXCJodHRwOi8vXCIgKyBiYXNlVVJMICsgXCIvc2lnbnVwXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybWVycm9yOiAnJyB9KVxuXG4gICAgICAgIGlmIChyZXNbXCJlcnJvclwiXSA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1lcnJvcjogcmVzW1widHh0XCJdLCBmZXRjaGxvYWRlcjogZmFsc2UgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JhdGVkVXNlciB3aXRoIG5vIHNlc3Npb25cbiAgICAgICAgaWYgKHJlc1tcImVycm9yXCJdID09IDIpIHtcbiAgICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZiA9IHJlc1sncmVkaXJlY3QnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNyZWF0ZWRpdFVzZXIpIHtcblxuICAgICAgICAgIHRoaXMucHJvcHMuQ3JlYXRlVXBkYXRlU3VjY2VlZChyZXMpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZldGNobG9hZGVyOiBmYWxzZSB9KTtcblxuICAgICAgICAgIC8vaWYgYWRtaW4gZWRpdCBoaXMgb3duIHByb2ZpbGVcbiAgICAgICAgICBpZiAoRWRpdFVzZXJQcm9maWxlID09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB0aGlzLmZvcm0udXNlcm5hbWUpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdGhpcy5mb3JtLnVzZXJuYW1lKTtcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xuXG4gICAgICAgIH1cblxuXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1lcnJvcjogJ1BsZWFzZSB0cnkgYWdhaW4nIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZXRjaGxvYWRlcjogZmFsc2UgfSk7XG4gICAgICB9KTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPElucHV0Rm9ybSBnZXRWYWx1ZT17KHVzZXJuYW1lKSA9PiAodGhpcy5mb3JtID0geyAuLi50aGlzLmZvcm0sIFwidXNlcm5hbWVcIjogdXNlcm5hbWUgfSl9IGxhYmVsPVwiVXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiKiBVc2VybmFtZVwiICA+XG5cbiAgICAgICAgICA8SWNvbiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDxJY29uaWZ5IGljb249XCJ1aWw6dXNlclwiIC8+XG4gICAgICAgICAgPC9JY29uPlxuICAgICAgICA8L0lucHV0Rm9ybT5cblxuICAgICAgICA8SW5wdXRGb3JtIGdldFZhbHVlPXsoZmlyc3RuYW1lKSA9PiAodGhpcy5mb3JtID0geyAuLi50aGlzLmZvcm0sIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSB9KX0gbGFiZWw9XCJGaXJzdCBOYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIgcGxhY2Vob2xkZXI9XCIqIEZpcnN0IE5hbWVcIiAgPlxuICAgICAgICAgIDxJY29uIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPEljb25pZnkgaWNvbj1cInVpbDp1c2VyXCIgLz5cbiAgICAgICAgICA8L0ljb24+XG4gICAgICAgIDwvSW5wdXRGb3JtPlxuXG4gICAgICAgIDxJbnB1dEZvcm0gZ2V0VmFsdWU9eyhsYXN0bmFtZSkgPT4gKHRoaXMuZm9ybSA9IHsgLi4udGhpcy5mb3JtLCBcImxhc3RuYW1lXCI6IGxhc3RuYW1lIH0pfSBsYWJlbD1cIkxhc3QgTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3RuYW1lXCIgcGxhY2Vob2xkZXI9XCIqIExhc3QgTmFtZVwiICA+XG4gICAgICAgICAgPEljb24gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwidWlsOnVzZXJcIiAvPlxuICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgPC9JbnB1dEZvcm0+XG5cbiAgICAgICAgPElucHV0Rm9ybSBnZXRWYWx1ZT17KHBhc3N3b3JkKSA9PiAodGhpcy5mb3JtID0geyAuLi50aGlzLmZvcm0sIFwicGFzc3dvcmRcIjogcGFzc3dvcmQgfSl9IGxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiogUGFzc3dvcmRcIiA+XG4gICAgICAgICAgPEljb24gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwiYmk6ZXllLWZpbGxcIiAvPlxuICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgPC9JbnB1dEZvcm0+XG5cbiAgICAgICAgPElucHV0Rm9ybSBnZXRWYWx1ZT17KGVtYWlsKSA9PiAodGhpcy5mb3JtID0geyAuLi50aGlzLmZvcm0sIFwiZW1haWxcIjogZW1haWwgfSl9IGxhYmVsPVwiRW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgPlxuICAgICAgICAgIDxJY29uIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPEljb25pZnkgaWNvbj1cImRhc2hpY29uczplbWFpbFwiIC8+XG4gICAgICAgICAgPC9JY29uPlxuICAgICAgICA8L0lucHV0Rm9ybT5cblxuICAgICAgICA8SW5wdXRGb3JtIGdldFZhbHVlPXsocm9sZSkgPT4gKHRoaXMuZm9ybSA9IHsgLi4udGhpcy5mb3JtLCBcInJvbGVcIjogcm9sZSB9KX0gbGFiZWw9XCJSb2xlXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicm9sZVwiIHBsYWNlaG9sZGVyPVwiKiBSb2xlXCIgPlxuICAgICAgICAgIDxJY29uIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPEljb25pZnkgaWNvbj1cImljOmJhc2VsaW5lLXdvcmtcIiAvPlxuICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgPC9JbnB1dEZvcm0+XG5cbiAgICAgICAgPElucHV0Rm9ybSBnZXRWYWx1ZT17KGFkZHJlc3MpID0+ICh0aGlzLmZvcm0gPSB7IC4uLnRoaXMuZm9ybSwgXCJhZGRyZXNzXCI6IGFkZHJlc3MgfSl9IGxhYmVsPVwiQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiA+XG4gICAgICAgICAgPEljb24gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbmlmeSBpY29uPVwiZW50eXBvOmFkZHJlc3NcIiAvPlxuICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgPC9JbnB1dEZvcm0+XG5cbiAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNobG9hZGVyfVxuICAgICAgICAgICAgZnVsbHdpZHRoIHJvdW5kZWQgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQoKX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICghdGhpcy5wcm9wcy5jcmVhdGVkaXRVc2VyICYmIDxzcGFuPlJlZ2lzdGVyPC9zcGFuPiB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNyZWF0ZWRpdFVzZXIgPT0gXCJjcmVhdGVcIiAmJiA8c3Bhbj5DcmVhdGUgbmV3IHVzZXI8L3NwYW4+KVxuICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNyZWF0ZWRpdFVzZXIgPT0gXCJ1cGRhdGVcIiAmJiA8c3Bhbj5VcGRhdGU8L3NwYW4+KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgPEZvcm0uSGVscCBjb2xvcj1cImRhbmdlclwiPnt0aGlzLnN0YXRlLmZvcm1lcnJvcn08L0Zvcm0uSGVscD5cblxuICAgICAgICB7XG4gICAgICAgICAgKCF0aGlzLnByb3BzLmNyZWF0ZWRpdFVzZXIgJiYgPEJ1dHRvbiBmdWxsd2lkdGggcm91bmRlZCBjb2xvcj1cImxpbmtcIlxuXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PkkgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQ8L0J1dHRvbj4pXG4gICAgICAgIH1cblxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sIm5hbWVzIjpbIkZvcm0iLCJ1c2VSZWR1Y2VyIiwiaW5wdXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXh0U3RhdGUiLCJ2YWx1ZSIsInRyaW0iLCJ0eXBlIiwidGVzdCIsInByb3BzIiwiZ2V0VmFsdWUiLCJsZW5ndGgiLCJJbnB1dEZyb20iLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImNvbG9ydmFsdWUiLCJzZXRDb2xvclZhbHVlIiwiZSIsInRhcmdldCIsImNoaWxkcmVuIiwiUmVhY3QiLCJJY29uIiwiQnV0dG9uIiwiSWNvbmlmeSIsIklucHV0Rm9ybSIsIlNpZ251cCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9ybWVycm9yIiwiZmV0Y2hsb2FkZXIiLCJmb3JtIiwidXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJhZGRyZXNzIiwicm9sZSIsInN1Ym1pdCIsImJpbmQiLCJjcmVhdGVkaXRVc2VyIiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsInNldFN0YXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0JBU0VfVVJMIiwiRWRpdFVzZXJQcm9maWxlIiwiZWRpdHVzZXIiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9jYXRpb24iLCJocmVmIiwiQ3JlYXRlVXBkYXRlU3VjY2VlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=