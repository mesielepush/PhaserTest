/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/configPhaser.js":
/*!********************************!*\
  !*** ./src/js/configPhaser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadScene */ \"./src/js/loadScene.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _scene3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene3 */ \"./src/js/scene3.js\");\n\n\n\n\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: [_loadScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scene3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n  };\n  var game = new Phaser.Game(config);\n  /* function preload ()\r\n  {\r\n      this.load.setBaseURL('http://labs.phaser.io');\r\n  \r\n      this.load.image('sky', 'assets/skies/nebula.jpg');\r\n      this.load.image('logo', 'assets/sprites/phaser3-logo.png');\r\n      this.load.image('red', 'assets/particles/muzzleflash4.png');\r\n        \r\n  }\r\n  \r\n  function create ()\r\n  {\r\n      this.add.image(400, 300, 'sky');\r\n  \r\n      var particles = this.add.particles('red');\r\n  \r\n      var emitter = particles.createEmitter({\r\n          speed: 50,\r\n          scale: { start: 1, end: 0 },\r\n          blendMode: 'ADD'\r\n      });\r\n  \r\n      var logo = this.physics.add.image(400, 100, 'logo');\r\n  \r\n      logo.setVelocity(100, 200);\r\n      logo.setBounce(1, 1);\r\n      logo.setCollideWorldBounds(true);\r\n  \r\n      emitter.startFollow(logo);\r\n  } */\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzP2M4MTMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRTY2VuZSIsIm1lbnUiLCJzY2VuZTMiLCJnYW1lIiwiR2FtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQUk7QUFDZixNQUFJQSxNQUFNLEdBQUc7QUFDVEMsUUFBSSxFQUFFQyxNQUFNLENBQUNDLElBREo7QUFFVEMsU0FBSyxFQUFFLEdBRkU7QUFHVEMsVUFBTSxFQUFFLEdBSEM7QUFJVEMsV0FBTyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxRQURKO0FBRUxDLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUU7QUFBRUMsV0FBQyxFQUFFO0FBQUw7QUFETDtBQUZILEtBSkE7QUFVVEMsU0FBSyxFQUFFLENBQUNDLGtEQUFELEVBQVdDLDZDQUFYLEVBQWdCQywrQ0FBaEI7QUFWRSxHQUFiO0FBYUEsTUFBSUMsSUFBSSxHQUFHLElBQUliLE1BQU0sQ0FBQ2MsSUFBWCxDQUFnQmhCLE1BQWhCLENBQVg7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NILENBaEREOztBQWtEZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRTY2VuZSBmcm9tICcuL2xvYWRTY2VuZSdcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQgc2NlbmUzIGZyb20gJy4vc2NlbmUzJ1xyXG5cclxuY29uc3QgY29uZmlnID0gKCk9PntcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NlbmU6IFtsb2FkU2NlbmUsbWVudSxzY2VuZTNdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvKiBmdW5jdGlvbiBwcmVsb2FkICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNldEJhc2VVUkwoJ2h0dHA6Ly9sYWJzLnBoYXNlci5pbycpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NraWVzL25lYnVsYS5qcGcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnYXNzZXRzL3Nwcml0ZXMvcGhhc2VyMy1sb2dvLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvbXV6emxlZmxhc2g0LnBuZycpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdza3knKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ3JlZCcpO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBwYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIHNwZWVkOiA1MCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgc3RhcnQ6IDEsIGVuZDogMCB9LFxyXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB2YXIgbG9nbyA9IHRoaXMucGh5c2ljcy5hZGQuaW1hZ2UoNDAwLCAxMDAsICdsb2dvJyk7XHJcbiAgICBcclxuICAgICAgICBsb2dvLnNldFZlbG9jaXR5KDEwMCwgMjAwKTtcclxuICAgICAgICBsb2dvLnNldEJvdW5jZSgxLCAxKTtcclxuICAgICAgICBsb2dvLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIGVtaXR0ZXIuc3RhcnRGb2xsb3cobG9nbyk7XHJcbiAgICB9ICovXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/configPhaser.js\n");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n  scenes: {\n    load: \"loadScene\",\n    menu: \"menu\",\n    play: \"PLAY\"\n  },\n  IMAGE: {\n    LOGO: \"logo.png\",\n    OPTIONS: \"options_button.png\",\n    PLAY: \"play_button.png\",\n    TITLE: \"title_bg.jpg\"\n  },\n  AUDIO: {\n    TITLE: \"shuinvy-childhood.mp3\"\n  },\n  SPRITE: {\n    CAT: \"cat.png\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzPzU5ZjkiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwic2NlbmVzIiwibG9hZCIsIm1lbnUiLCJwbGF5IiwiSU1BR0UiLCJMT0dPIiwiT1BUSU9OUyIsIlBMQVkiLCJUSVRMRSIsIkFVRElPIiwiU1BSSVRFIiwiQ0FUIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxRQUFNLEVBQUU7QUFDSkMsUUFBSSxFQUFFLFdBREY7QUFFSkMsUUFBSSxFQUFFLE1BRkY7QUFHSkMsUUFBSSxFQUFFO0FBSEYsR0FETTtBQU1kQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFLFVBREg7QUFFSEMsV0FBTyxFQUFFLG9CQUZOO0FBR0hDLFFBQUksRUFBRSxpQkFISDtBQUlIQyxTQUFLLEVBQUU7QUFKSixHQU5PO0FBWWRDLE9BQUssRUFBRTtBQUNIRCxTQUFLLEVBQUU7QUFESixHQVpPO0FBZWRFLFFBQU0sRUFBRTtBQUNKQyxPQUFHLEVBQUU7QUFERDtBQWZNLENBQWxCO0FBbUJlWix3RUFBZiIsImZpbGUiOiIuL3NyYy9qcy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSB7XHJcbiAgICBzY2VuZXM6IHtcclxuICAgICAgICBsb2FkOiBcImxvYWRTY2VuZVwiLFxyXG4gICAgICAgIG1lbnU6IFwibWVudVwiLFxyXG4gICAgICAgIHBsYXk6IFwiUExBWVwiXHJcbiAgICB9LFxyXG4gICAgSU1BR0U6IHtcclxuICAgICAgICBMT0dPOiBcImxvZ28ucG5nXCIsXHJcbiAgICAgICAgT1BUSU9OUzogXCJvcHRpb25zX2J1dHRvbi5wbmdcIixcclxuICAgICAgICBQTEFZOiBcInBsYXlfYnV0dG9uLnBuZ1wiLFxyXG4gICAgICAgIFRJVExFOiBcInRpdGxlX2JnLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAgQVVESU86IHtcclxuICAgICAgICBUSVRMRTogXCJzaHVpbnZ5LWNoaWxkaG9vZC5tcDNcIlxyXG4gICAgfSxcclxuICAgIFNQUklURToge1xyXG4gICAgICAgIENBVDogXCJjYXQucG5nXCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/constants.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configPhaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configPhaser */ \"./src/js/configPhaser.js\");\n\nObject(_configPhaser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBQSw2REFBTSIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWdQaGFzZXInXHJcbmNvbmZpZygpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/loadScene.js":
/*!*****************************!*\
  !*** ./src/js/loadScene.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nclass loadScene extends Phaser.Scene {\n  constructor() {\n    super({\n      key: \"loadScene\"\n    });\n  }\n\n  preload() {\n    this.load.image('title_bg', \"../src/images/title_bg.jpg\");\n    this.load.image('options_button', \"../src/images/options_button.png\");\n    this.load.image('play_button', \"../src/images/play_button.png\");\n    this.load.image('logo', \"../src/images/logo.png\");\n    this.load.spritesheet('cat', \"../src/images/sprites/cat.png\", {\n      frameWidth: 32,\n      frameHeight: 32\n    });\n    this.load.audio('title_music', '../src/mp3/song.mp3');\n    let loadingBar = this.add.graphics({\n      fillStyle: {\n        color: 0xffffff\n      }\n    });\n    this.load.on('progress', percent => {\n      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);\n      console.log(percent);\n    });\n    this.load.on('complete', () => {\n      console.log('DONE');\n    });\n  }\n\n  create() {\n    this.scene.start(_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scenes.menu, 'Hellow from the loade scene');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadScene);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZFNjZW5lLmpzPzI0MDEiXSwibmFtZXMiOlsibG9hZFNjZW5lIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJzcHJpdGVzaGVldCIsImZyYW1lV2lkdGgiLCJmcmFtZUhlaWdodCIsImF1ZGlvIiwibG9hZGluZ0JhciIsImFkZCIsImdyYXBoaWNzIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJvbiIsInBlcmNlbnQiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsInNjZW5lIiwic3RhcnQiLCJjb25zdGFudHMiLCJzY2VuZXMiLCJtZW51Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsU0FBTixTQUF3QkMsTUFBTSxDQUFDQyxLQUEvQixDQUFxQztBQUNqQ0MsYUFBVyxHQUFFO0FBQ1QsVUFBTTtBQUFDQyxTQUFHLEVBQUM7QUFBTCxLQUFOO0FBQ0g7O0FBQ0RDLFNBQU8sR0FBRTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixVQUFoQixFQUEyQiw0QkFBM0I7QUFDQSxTQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsZ0JBQWhCLEVBQWlDLGtDQUFqQztBQUNBLFNBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixhQUFoQixFQUE4QiwrQkFBOUI7QUFDQSxTQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBdUIsd0JBQXZCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxXQUFWLENBQXNCLEtBQXRCLEVBQTRCLCtCQUE1QixFQUE0RDtBQUN4REMsZ0JBQVUsRUFBQyxFQUQ2QztBQUV4REMsaUJBQVcsRUFBQztBQUY0QyxLQUE1RDtBQUlBLFNBQUtKLElBQUwsQ0FBVUssS0FBVixDQUFnQixhQUFoQixFQUE4QixxQkFBOUI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsS0FBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCO0FBQy9CQyxlQUFTLEVBQUM7QUFDTkMsYUFBSyxFQUFFO0FBREQ7QUFEcUIsS0FBbEIsQ0FBakI7QUFLQSxTQUFLVixJQUFMLENBQVVXLEVBQVYsQ0FBYSxVQUFiLEVBQTBCQyxPQUFELElBQVk7QUFDakNOLGdCQUFVLENBQUNPLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBc0IsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxNQUFuQixHQUE0QixDQUFsRCxFQUFvRCxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLEtBQW5CLEdBQTJCTCxPQUEvRSxFQUF3RixFQUF4RjtBQUNBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWjtBQUVILEtBSkQ7QUFLQSxTQUFLWixJQUFMLENBQVVXLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLE1BQUs7QUFDMUJPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUZEO0FBR0g7O0FBQ0RDLFFBQU0sR0FBRTtBQUNKLFNBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsSUFBbEMsRUFBdUMsNkJBQXZDO0FBRUg7O0FBL0JnQzs7QUFrQ3RCL0Isd0VBQWYiLCJmaWxlIjoiLi9zcmMvanMvbG9hZFNjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcclxuY2xhc3MgbG9hZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTpcImxvYWRTY2VuZVwifSk7XHJcbiAgICB9XHJcbiAgICBwcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZV9iZycsXCIuLi9zcmMvaW1hZ2VzL3RpdGxlX2JnLmpwZ1wiKVxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnb3B0aW9uc19idXR0b24nLFwiLi4vc3JjL2ltYWdlcy9vcHRpb25zX2J1dHRvbi5wbmdcIilcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BsYXlfYnV0dG9uJyxcIi4uL3NyYy9pbWFnZXMvcGxheV9idXR0b24ucG5nXCIpXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvJyxcIi4uL3NyYy9pbWFnZXMvbG9nby5wbmdcIilcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2NhdCcsXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvY2F0LnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVXaWR0aDozMixcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6MzJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3RpdGxlX211c2ljJywnLi4vc3JjL21wMy9zb25nLm1wMycpO1xyXG4gICAgICAgIGxldCBsb2FkaW5nQmFyID0gdGhpcy5hZGQuZ3JhcGhpY3Moe1xyXG4gICAgICAgICAgICBmaWxsU3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHBlcmNlbnQpID0+e1xyXG4gICAgICAgICAgICBsb2FkaW5nQmFyLmZpbGxSZWN0KDAsdGhpcy5nYW1lLnJlbmRlcmVyLmhlaWdodCAvIDIsdGhpcy5nYW1lLnJlbmRlcmVyLndpZHRoICogcGVyY2VudCwgNTApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnQpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdET05FJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydChjb25zdGFudHMuc2NlbmVzLm1lbnUsJ0hlbGxvdyBmcm9tIHRoZSBsb2FkZSBzY2VuZScpXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRTY2VuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/loadScene.js\n");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nclass menu extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'menu'\n    });\n  }\n\n  init() {\n    console.log('something simetyhing');\n  }\n\n  create() {\n    this.add.image(0, 0, 'title_bg').setOrigin(0);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcz81YzdmIl0sIm5hbWVzIjpbIm1lbnUiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJhZGQiLCJpbWFnZSIsInNldE9yaWdpbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUNBLE1BQU1BLElBQU4sU0FBbUJDLE1BQU0sQ0FBQ0MsS0FBMUIsQ0FBK0I7QUFFM0JDLGFBQVcsR0FBRTtBQUNULFVBQU07QUFBQ0MsU0FBRyxFQUFDO0FBQUwsS0FBTjtBQUNIOztBQUNEQyxNQUFJLEdBQUU7QUFFRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSDs7QUFDREMsUUFBTSxHQUFFO0FBQ0osU0FBS0MsR0FBTCxDQUFTQyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixVQUFuQixFQUErQkMsU0FBL0IsQ0FBeUMsQ0FBekM7QUFDSDs7QUFYMEI7O0FBY2hCWCxtRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcclxuY2xhc3MgbWVudSBleHRlbmRzIFBoYXNlci5TY2VuZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHtrZXk6J21lbnUnfSlcclxuICAgIH1cclxuICAgIGluaXQoKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHNpbWV0eWhpbmcnKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwwLCd0aXRsZV9iZycpLnNldE9yaWdpbigwKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/menu.js\n");

/***/ }),

/***/ "./src/js/scene3.js":
/*!**************************!*\
  !*** ./src/js/scene3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\n\nclass scene3 extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'scene3'\n    });\n  }\n\n  preload() {\n    this.load.audio(\"song\", ['../src/mp3/song.mp3']);\n  }\n\n  create() {\n    this.soundFX = this.sound.add(\"song\", {\n      loop: \"true\"\n    });\n    this.soundFX.play();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NlbmUzLmpzPzA4ZTQiXSwibmFtZXMiOlsic2NlbmUzIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiYXVkaW8iLCJjcmVhdGUiLCJzb3VuZEZYIiwic291bmQiLCJhZGQiLCJsb29wIiwicGxheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLE1BQU0sQ0FBQ0MsS0FBNUIsQ0FBaUM7QUFDN0JDLGFBQVcsR0FBRztBQUNWLFVBQU07QUFBQ0MsU0FBRyxFQUFDO0FBQUwsS0FBTjtBQUNIOztBQUNEQyxTQUFPLEdBQUU7QUFDTCxTQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBdUIsQ0FBQyxxQkFBRCxDQUF2QjtBQUNIOztBQUNEQyxRQUFNLEdBQUU7QUFDSixTQUFLQyxPQUFMLEdBQWUsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsTUFBZixFQUFzQjtBQUFDQyxVQUFJLEVBQUM7QUFBTixLQUF0QixDQUFmO0FBQ0EsU0FBS0gsT0FBTCxDQUFhSSxJQUFiO0FBQ0g7O0FBVjRCOztBQVlsQmIscUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvc2NlbmUzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjZW5lMiBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5jbGFzcyBzY2VuZTMgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcbiAgICBjb25zdHJ1Y3RvciAoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidzY2VuZTMnfSk7XHJcbiAgICB9XHJcbiAgICBwcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKFwic29uZ1wiLFsnLi4vc3JjL21wMy9zb25nLm1wMyddKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5zb3VuZEZYID0gdGhpcy5zb3VuZC5hZGQoXCJzb25nXCIse2xvb3A6XCJ0cnVlXCJ9KTtcclxuICAgICAgICB0aGlzLnNvdW5kRlgucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjZW5lMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/scene3.js\n");

/***/ })

/******/ });