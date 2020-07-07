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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadScene */ \"./src/js/loadScene.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _scene3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene3 */ \"./src/js/scene3.js\");\n\n\n\n\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: [_loadScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scene3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    render: {\n      pixelArt: true\n    }\n  };\n  var game = new Phaser.Game(config);\n  /* function preload ()\r\n  {\r\n      this.load.setBaseURL('http://labs.phaser.io');\r\n  \r\n      this.load.image('sky', 'assets/skies/nebula.jpg');\r\n      this.load.image('logo', 'assets/sprites/phaser3-logo.png');\r\n      this.load.image('red', 'assets/particles/muzzleflash4.png');\r\n        \r\n  }\r\n  \r\n  function create ()\r\n  {\r\n      this.add.image(400, 300, 'sky');\r\n  \r\n      var particles = this.add.particles('red');\r\n  \r\n      var emitter = particles.createEmitter({\r\n          speed: 50,\r\n          scale: { start: 1, end: 0 },\r\n          blendMode: 'ADD'\r\n      });\r\n  \r\n      var logo = this.physics.add.image(400, 100, 'logo');\r\n  \r\n      logo.setVelocity(100, 200);\r\n      logo.setBounce(1, 1);\r\n      logo.setCollideWorldBounds(true);\r\n  \r\n      emitter.startFollow(logo);\r\n  } */\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzP2M4MTMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRTY2VuZSIsIm1lbnUiLCJzY2VuZTMiLCJyZW5kZXIiLCJwaXhlbEFydCIsImdhbWUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBSTtBQUNmLE1BQUlBLE1BQU0sR0FBRztBQUNUQyxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsSUFESjtBQUVUQyxTQUFLLEVBQUUsR0FGRTtBQUdUQyxVQUFNLEVBQUUsR0FIQztBQUlUQyxXQUFPLEVBQUU7QUFDTEMsYUFBTyxFQUFFLFFBREo7QUFFTEMsWUFBTSxFQUFFO0FBQ0pDLGVBQU8sRUFBRTtBQUFFQyxXQUFDLEVBQUU7QUFBTDtBQURMO0FBRkgsS0FKQTtBQVVUQyxTQUFLLEVBQUUsQ0FBQ0Msa0RBQUQsRUFBV0MsNkNBQVgsRUFBZ0JDLCtDQUFoQixDQVZFO0FBV1RDLFVBQU0sRUFBQztBQUNIQyxjQUFRLEVBQUM7QUFETjtBQVhFLEdBQWI7QUFnQkEsTUFBSUMsSUFBSSxHQUFHLElBQUlmLE1BQU0sQ0FBQ2dCLElBQVgsQ0FBZ0JsQixNQUFoQixDQUFYO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDSCxDQW5ERDs7QUFxRGVBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbmZpZ1BoYXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkU2NlbmUgZnJvbSAnLi9sb2FkU2NlbmUnXHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IHNjZW5lMyBmcm9tICcuL3NjZW5lMydcclxuXHJcbmNvbnN0IGNvbmZpZyA9ICgpPT57XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgcGh5c2ljczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5OiB7IHk6IDIwMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjZW5lOiBbbG9hZFNjZW5lLG1lbnUsc2NlbmUzXSxcclxuICAgICAgICByZW5kZXI6e1xyXG4gICAgICAgICAgICBwaXhlbEFydDp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcclxuICAgIFxyXG4gICAgLyogZnVuY3Rpb24gcHJlbG9hZCAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za2llcy9uZWJ1bGEuanBnJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvJywgJ2Fzc2V0cy9zcHJpdGVzL3BoYXNlcjMtbG9nby5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZCcsICdhc3NldHMvcGFydGljbGVzL211enpsZWZsYXNoNC5wbmcnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKDQwMCwgMzAwLCAnc2t5Jyk7XHJcbiAgICBcclxuICAgICAgICB2YXIgcGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdyZWQnKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBlbWl0dGVyID0gcGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgICAgIHNjYWxlOiB7IHN0YXJ0OiAxLCBlbmQ6IDAgfSxcclxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGxvZ28gPSB0aGlzLnBoeXNpY3MuYWRkLmltYWdlKDQwMCwgMTAwLCAnbG9nbycpO1xyXG4gICAgXHJcbiAgICAgICAgbG9nby5zZXRWZWxvY2l0eSgxMDAsIDIwMCk7XHJcbiAgICAgICAgbG9nby5zZXRCb3VuY2UoMSwgMSk7XHJcbiAgICAgICAgbG9nby5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICBlbWl0dGVyLnN0YXJ0Rm9sbG93KGxvZ28pO1xyXG4gICAgfSAqL1xyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWdcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/configPhaser.js\n");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n  scenes: {\n    load: \"loadScene\",\n    menu: \"menu\",\n    play: \"PLAY\"\n  },\n  image: {\n    logo: \"logo\",\n    options: \"options_button\",\n    play: \"play_button\",\n    title: \"title_bg.\"\n  },\n  AUDIO: {\n    TITLE: \"shuinvy-childhood.mp3\"\n  },\n  SPRITE: {\n    CAT: \"cat.png\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzPzU5ZjkiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwic2NlbmVzIiwibG9hZCIsIm1lbnUiLCJwbGF5IiwiaW1hZ2UiLCJsb2dvIiwib3B0aW9ucyIsInRpdGxlIiwiQVVESU8iLCJUSVRMRSIsIlNQUklURSIsIkNBVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxXQURGO0FBRUpDLFFBQUksRUFBRSxNQUZGO0FBR0pDLFFBQUksRUFBRTtBQUhGLEdBRE07QUFNZEMsT0FBSyxFQUFFO0FBQ0hDLFFBQUksRUFBRSxNQURIO0FBRUhDLFdBQU8sRUFBRSxnQkFGTjtBQUdISCxRQUFJLEVBQUUsYUFISDtBQUlISSxTQUFLLEVBQUU7QUFKSixHQU5PO0FBWWRDLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFESixHQVpPO0FBZWRDLFFBQU0sRUFBRTtBQUNKQyxPQUFHLEVBQUU7QUFERDtBQWZNLENBQWxCO0FBbUJlWix3RUFBZiIsImZpbGUiOiIuL3NyYy9qcy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSB7XHJcbiAgICBzY2VuZXM6IHtcclxuICAgICAgICBsb2FkOiBcImxvYWRTY2VuZVwiLFxyXG4gICAgICAgIG1lbnU6IFwibWVudVwiLFxyXG4gICAgICAgIHBsYXk6IFwiUExBWVwiXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBsb2dvOiBcImxvZ29cIixcclxuICAgICAgICBvcHRpb25zOiBcIm9wdGlvbnNfYnV0dG9uXCIsXHJcbiAgICAgICAgcGxheTogXCJwbGF5X2J1dHRvblwiLFxyXG4gICAgICAgIHRpdGxlOiBcInRpdGxlX2JnLlwiXHJcbiAgICB9LFxyXG4gICAgQVVESU86IHtcclxuICAgICAgICBUSVRMRTogXCJzaHVpbnZ5LWNoaWxkaG9vZC5tcDNcIlxyXG4gICAgfSxcclxuICAgIFNQUklURToge1xyXG4gICAgICAgIENBVDogXCJjYXQucG5nXCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/constants.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nclass loadScene extends Phaser.Scene {\n  constructor() {\n    super({\n      key: \"loadScene\"\n    });\n  }\n\n  preload() {\n    this.load.image('title_bg', \"../src/images/title_bg.jpg\");\n    this.load.image('options_button', \"../src/images/options_button.png\");\n    this.load.image('play_button', \"../src/images/play_button.png\");\n    this.load.image('logo', \"../src/images/logo.png\");\n    this.load.spritesheet('cat', \"../src/images/sprites/cat.png\", {\n      frameWidth: 32,\n      frameHeight: 32\n    });\n    this.load.audio('title_music', '../src/mp3/song.mp3');\n    let loadingBar = this.add.graphics({\n      fillStyle: {\n        color: 0xffffff\n      }\n    });\n    this.load.on('progress', percent => {\n      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);\n      console.log(percent);\n    });\n    this.load.on('complete', () => {\n      console.log('DONE');\n    });\n  }\n\n  create() {\n    this.scene.start(_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scenes.menu, 'Hellow from the loade scene');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadScene);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZFNjZW5lLmpzPzI0MDEiXSwibmFtZXMiOlsibG9hZFNjZW5lIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJzcHJpdGVzaGVldCIsImZyYW1lV2lkdGgiLCJmcmFtZUhlaWdodCIsImF1ZGlvIiwibG9hZGluZ0JhciIsImFkZCIsImdyYXBoaWNzIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJvbiIsInBlcmNlbnQiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsInNjZW5lIiwic3RhcnQiLCJjb25zdGFudHMiLCJzY2VuZXMiLCJtZW51Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsU0FBTixTQUF3QkMsTUFBTSxDQUFDQyxLQUEvQixDQUFxQztBQUNqQ0MsYUFBVyxHQUFFO0FBQ1QsVUFBTTtBQUFDQyxTQUFHLEVBQUM7QUFBTCxLQUFOO0FBQ0g7O0FBQ0RDLFNBQU8sR0FBRTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixVQUFoQixFQUEyQiw0QkFBM0I7QUFDQSxTQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsZ0JBQWhCLEVBQWlDLGtDQUFqQztBQUNBLFNBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixhQUFoQixFQUE4QiwrQkFBOUI7QUFDQSxTQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBdUIsd0JBQXZCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxXQUFWLENBQXNCLEtBQXRCLEVBQTRCLCtCQUE1QixFQUE0RDtBQUN4REMsZ0JBQVUsRUFBQyxFQUQ2QztBQUV4REMsaUJBQVcsRUFBQztBQUY0QyxLQUE1RDtBQUlBLFNBQUtKLElBQUwsQ0FBVUssS0FBVixDQUFnQixhQUFoQixFQUE4QixxQkFBOUI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsS0FBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCO0FBQy9CQyxlQUFTLEVBQUM7QUFDTkMsYUFBSyxFQUFFO0FBREQ7QUFEcUIsS0FBbEIsQ0FBakI7QUFNQSxTQUFLVixJQUFMLENBQVVXLEVBQVYsQ0FBYSxVQUFiLEVBQTBCQyxPQUFELElBQVk7QUFDakNOLGdCQUFVLENBQUNPLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBc0IsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxNQUFuQixHQUE0QixDQUFsRCxFQUFvRCxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLEtBQW5CLEdBQTJCTCxPQUEvRSxFQUF3RixFQUF4RjtBQUNBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWjtBQUVILEtBSkQ7QUFLQSxTQUFLWixJQUFMLENBQVVXLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLE1BQUs7QUFDMUJPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUZEO0FBR0g7O0FBQ0RDLFFBQU0sR0FBRTtBQUNKLFNBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsSUFBbEMsRUFBdUMsNkJBQXZDO0FBRUg7O0FBaENnQzs7QUFtQ3RCL0Isd0VBQWYiLCJmaWxlIjoiLi9zcmMvanMvbG9hZFNjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcclxuY2xhc3MgbG9hZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTpcImxvYWRTY2VuZVwifSk7XHJcbiAgICB9XHJcbiAgICBwcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZV9iZycsXCIuLi9zcmMvaW1hZ2VzL3RpdGxlX2JnLmpwZ1wiKVxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnb3B0aW9uc19idXR0b24nLFwiLi4vc3JjL2ltYWdlcy9vcHRpb25zX2J1dHRvbi5wbmdcIilcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BsYXlfYnV0dG9uJyxcIi4uL3NyYy9pbWFnZXMvcGxheV9idXR0b24ucG5nXCIpXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvJyxcIi4uL3NyYy9pbWFnZXMvbG9nby5wbmdcIilcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2NhdCcsXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvY2F0LnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVXaWR0aDozMixcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6MzJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3RpdGxlX211c2ljJywnLi4vc3JjL21wMy9zb25nLm1wMycpO1xyXG4gICAgICAgIGxldCBsb2FkaW5nQmFyID0gdGhpcy5hZGQuZ3JhcGhpY3Moe1xyXG4gICAgICAgICAgICBmaWxsU3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHBlcmNlbnQpID0+e1xyXG4gICAgICAgICAgICBsb2FkaW5nQmFyLmZpbGxSZWN0KDAsdGhpcy5nYW1lLnJlbmRlcmVyLmhlaWdodCAvIDIsdGhpcy5nYW1lLnJlbmRlcmVyLndpZHRoICogcGVyY2VudCwgNTApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnQpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdET05FJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydChjb25zdGFudHMuc2NlbmVzLm1lbnUsJ0hlbGxvdyBmcm9tIHRoZSBsb2FkZSBzY2VuZScpXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRTY2VuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/loadScene.js\n");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nclass menu extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'menu'\n    });\n  }\n\n  create() {\n    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, 'logo').setDepth(1);\n    this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);\n    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'play_button').setDepth(1);\n    let options_button = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.options).setDepth(1);\n    let hoverSprite = this.add.sprite(100, 100, 'cat');\n    hoverSprite.setScale(2);\n    hoverSprite.setVisible(false);\n    this.sound.pauseOnBlur = true;\n    this.sound.play('title_music', {\n      loop: true\n    });\n    this.anims.create({\n      key: 'walk',\n      frameRate: 8,\n      repeat: -1,\n      frames: this.anims.generateFrameNumbers('cat', {\n        frames: [0, 1, 2, 3]\n      })\n    });\n    playButton.setInteractive();\n    playButton.on('pointerover', () => {\n      hoverSprite.setVisible(true);\n      hoverSprite.play('walk');\n      hoverSprite.x = playButton.x - playButton.width;\n      hoverSprite.y = playButton.y;\n    });\n    playButton.on('pointerout', () => {\n      hoverSprite.setVisible(false);\n    });\n    playButton.on('pointerup', () => {\n      console.log('OPEN SESAME');\n    });\n    options_button.setInteractive();\n    options_button.on('pointerover', () => {\n      hoverSprite.setVisible(true);\n      hoverSprite.play('walk');\n      hoverSprite.x = options_button.x - options_button.width;\n      hoverSprite.y = options_button.y;\n    });\n    options_button.on('pointerout', () => {\n      hoverSprite.setVisible(false);\n    });\n    options_button.on('pointerup', () => {\n      console.log('options up');\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcz81YzdmIl0sIm5hbWVzIjpbIm1lbnUiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwiY3JlYXRlIiwiYWRkIiwiaW1hZ2UiLCJnYW1lIiwicmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInNldERlcHRoIiwic2V0T3JpZ2luIiwicGxheUJ1dHRvbiIsIm9wdGlvbnNfYnV0dG9uIiwiY29uc3RhbnRzIiwib3B0aW9ucyIsImhvdmVyU3ByaXRlIiwic3ByaXRlIiwic2V0U2NhbGUiLCJzZXRWaXNpYmxlIiwic291bmQiLCJwYXVzZU9uQmx1ciIsInBsYXkiLCJsb29wIiwiYW5pbXMiLCJmcmFtZVJhdGUiLCJyZXBlYXQiLCJmcmFtZXMiLCJnZW5lcmF0ZUZyYW1lTnVtYmVycyIsInNldEludGVyYWN0aXZlIiwib24iLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFDQSxNQUFNQSxJQUFOLFNBQW1CQyxNQUFNLENBQUNDLEtBQTFCLENBQStCO0FBRTNCQyxhQUFXLEdBQUU7QUFDVCxVQUFNO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBQU47QUFDSDs7QUFFREMsUUFBTSxHQUFFO0FBRUosU0FBS0MsR0FBTCxDQUFTQyxLQUFULENBQWUsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxLQUFuQixHQUEwQixDQUF6QyxFQUE0QyxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLE1BQW5CLEdBQTRCLElBQXhFLEVBQThFLE1BQTlFLEVBQXNGQyxRQUF0RixDQUErRixDQUEvRjtBQUNBLFNBQUtOLEdBQUwsQ0FBU0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsVUFBbkIsRUFBK0JNLFNBQS9CLENBQXlDLENBQXpDLEVBQTRDRCxRQUE1QyxDQUFxRCxDQUFyRDtBQUNBLFFBQUlFLFVBQVUsR0FBRyxLQUFLUixHQUFMLENB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O0FBR0g7O0FBaEUwQjs7QUFtRWhCcEMsbUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXHJcbmNsYXNzIG1lbnUgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidtZW51J30pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZSgpe1xyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLmdhbWUucmVuZGVyZXIud2lkdGggLzIsIHRoaXMuZ2FtZS5yZW5kZXJlci5oZWlnaHQgKiAwLjIwLCAnbG9nbycpLnNldERlcHRoKDEpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwwLCd0aXRsZV9iZycpLnNldE9yaWdpbigwKS5zZXREZXB0aCgwKTtcclxuICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IHRoaXMuYWRkLmltYWdlKHRoaXMuZ2FtZS5yZW5kZXJlci53aWR0aC8yLHRoaXMuZ2FtZS5yZW5kZXJlci5oZWlnaHQgLyAyLCdwbGF5X2J1dHRvbicpLnNldERlcHRoKDEpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQgb3B0aW9uc19idXR0b24gPXRoaXMuYWRkLmltYWdlKHRoaXMuZ2FtZS5yZW5kZXJlci53aWR0aC8yLHRoaXMuZ2FtZS5yZW5kZXJlci5oZWlnaHQgLyAyKzEwMCxjb25zdGFudHMuaW1hZ2Uub3B0aW9ucykuc2V0RGVwdGgoMSk7XHJcblxyXG4gICAgICAgIGxldCBob3ZlclNwcml0ZSA9IHRoaXMuYWRkLnNwcml0ZSgxMDAsMTAwLCdjYXQnKVxyXG4gICAgICAgIGhvdmVyU3ByaXRlLnNldFNjYWxlKDIpO1xyXG4gICAgICAgIGhvdmVyU3ByaXRlLnNldFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ3RpdGxlX211c2ljJyx7XHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTond2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogOCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdjYXQnLCB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IFswLDEsMiwzXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBwbGF5QnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgcGxheUJ1dHRvbi5vbigncG9pbnRlcm92ZXInLCAoKT0+e1xyXG4gICAgICAgICAgICBob3ZlclNwcml0ZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICBob3ZlclNwcml0ZS5wbGF5KCd3YWxrJylcclxuICAgICAgICAgICAgaG92ZXJTcHJpdGUueCA9IHBsYXlCdXR0b24ueC1wbGF5QnV0dG9uLndpZHRoO1xyXG4gICAgICAgICAgICBob3ZlclNwcml0ZS55ID0gcGxheUJ1dHRvbi55XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxheUJ1dHRvbi5vbigncG9pbnRlcm91dCcsICgpPT57XHJcbiAgICAgICAgICAgIGhvdmVyU3ByaXRlLnNldFZpc2libGUoZmFsc2UpXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBsYXlCdXR0b24ub24oJ3BvaW50ZXJ1cCcsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPUEVOIFNFU0FNRScpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wdGlvbnNfYnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgb3B0aW9uc19idXR0b24ub24oJ3BvaW50ZXJvdmVyJywgKCk9PntcclxuICAgICAgICAgICAgaG92ZXJTcHJpdGUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgaG92ZXJTcHJpdGUucGxheSgnd2FsaycpXHJcbiAgICAgICAgICAgIGhvdmVyU3ByaXRlLnggPSBvcHRpb25zX2J1dHRvbi54LW9wdGlvbnNfYnV0dG9uLndpZHRoO1xyXG4gICAgICAgICAgICBob3ZlclNwcml0ZS55ID0gb3B0aW9uc19idXR0b24ueVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9wdGlvbnNfYnV0dG9uLm9uKCdwb2ludGVyb3V0JywgKCk9PntcclxuICAgICAgICAgICAgaG92ZXJTcHJpdGUuc2V0VmlzaWJsZShmYWxzZSlcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3B0aW9uc19idXR0b24ub24oJ3BvaW50ZXJ1cCcsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcHRpb25zIHVwJylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/menu.js\n");

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