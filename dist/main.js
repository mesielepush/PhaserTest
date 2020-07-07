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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene1 */ \"./src/js/scene1.js\");\n\n\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: [_scene1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n  };\n  var game = new Phaser.Game(config);\n  /* function preload ()\r\n  {\r\n      this.load.setBaseURL('http://labs.phaser.io');\r\n  \r\n      this.load.image('sky', 'assets/skies/nebula.jpg');\r\n      this.load.image('logo', 'assets/sprites/phaser3-logo.png');\r\n      this.load.image('red', 'assets/particles/muzzleflash4.png');\r\n        \r\n  }\r\n  \r\n  function create ()\r\n  {\r\n      this.add.image(400, 300, 'sky');\r\n  \r\n      var particles = this.add.particles('red');\r\n  \r\n      var emitter = particles.createEmitter({\r\n          speed: 50,\r\n          scale: { start: 1, end: 0 },\r\n          blendMode: 'ADD'\r\n      });\r\n  \r\n      var logo = this.physics.add.image(400, 100, 'logo');\r\n  \r\n      logo.setVelocity(100, 200);\r\n      logo.setBounce(1, 1);\r\n      logo.setCollideWorldBounds(true);\r\n  \r\n      emitter.startFollow(logo);\r\n  } */\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzP2M4MTMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsInNjZW5lMSIsImdhbWUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLE1BQUk7QUFDZixNQUFJQSxNQUFNLEdBQUc7QUFDVEMsUUFBSSxFQUFFQyxNQUFNLENBQUNDLElBREo7QUFFVEMsU0FBSyxFQUFFLEdBRkU7QUFHVEMsVUFBTSxFQUFFLEdBSEM7QUFJVEMsV0FBTyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxRQURKO0FBRUxDLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUU7QUFBRUMsV0FBQyxFQUFFO0FBQUw7QUFETDtBQUZILEtBSkE7QUFVVEMsU0FBSyxFQUFFLENBQUNDLCtDQUFEO0FBVkUsR0FBYjtBQWFBLE1BQUlDLElBQUksR0FBRyxJQUFJWCxNQUFNLENBQUNZLElBQVgsQ0FBZ0JkLE1BQWhCLENBQVg7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NILENBaEREOztBQWtEZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjZW5lMSBmcm9tICcuL3NjZW5lMSdcclxuY29uc3QgY29uZmlnID0gKCk9PntcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NlbmU6IFtzY2VuZTFdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvKiBmdW5jdGlvbiBwcmVsb2FkICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNldEJhc2VVUkwoJ2h0dHA6Ly9sYWJzLnBoYXNlci5pbycpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NraWVzL25lYnVsYS5qcGcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnYXNzZXRzL3Nwcml0ZXMvcGhhc2VyMy1sb2dvLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvbXV6emxlZmxhc2g0LnBuZycpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdza3knKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ3JlZCcpO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBwYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIHNwZWVkOiA1MCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgc3RhcnQ6IDEsIGVuZDogMCB9LFxyXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB2YXIgbG9nbyA9IHRoaXMucGh5c2ljcy5hZGQuaW1hZ2UoNDAwLCAxMDAsICdsb2dvJyk7XHJcbiAgICBcclxuICAgICAgICBsb2dvLnNldFZlbG9jaXR5KDEwMCwgMjAwKTtcclxuICAgICAgICBsb2dvLnNldEJvdW5jZSgxLCAxKTtcclxuICAgICAgICBsb2dvLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIGVtaXR0ZXIuc3RhcnRGb2xsb3cobG9nbyk7XHJcbiAgICB9ICovXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/configPhaser.js\n");

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

/***/ "./src/js/scene1.js":
/*!**************************!*\
  !*** ./src/js/scene1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass scene1 extends Phaser.Scene {\n  constructor() {\n    super({\n      key: \"scene1\"\n    });\n  }\n\n  preload() {\n    this.load.image('background1', '../src/images/star.jpg');\n  }\n\n  create() {\n    this.image = this.add.image(400, 300, 'background1');\n    this.input.keyboard.on('keyup_D', function (event) {\n      this.image.x += 10;\n    }, this);\n    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);\n    this.input.on('pointerdown', function (event) {\n      this.image.x = event.x;\n      this.image.y = event.y;\n    }, this);\n  }\n\n  update(delta) {\n    if (this.key_A.isDown) {\n      this.image.x--;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NlbmUxLmpzP2IyMzYiXSwibmFtZXMiOlsic2NlbmUxIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJhZGQiLCJpbnB1dCIsImtleWJvYXJkIiwib24iLCJldmVudCIsIngiLCJrZXlfQSIsImFkZEtleSIsIklucHV0IiwiS2V5Ym9hcmQiLCJLZXlDb2RlcyIsIkEiLCJ5IiwidXBkYXRlIiwiZGVsdGEiLCJpc0Rvd24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsTUFBTixTQUFxQkMsTUFBTSxDQUFDQyxLQUE1QixDQUFrQztBQUM5QkMsYUFBVyxHQUFFO0FBQ1QsVUFBTTtBQUFDQyxTQUFHLEVBQUM7QUFBTCxLQUFOO0FBQ0g7O0FBQ0RDLFNBQU8sR0FBRTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixhQUFoQixFQUE4Qix3QkFBOUI7QUFDSDs7QUFDREMsUUFBTSxHQUFFO0FBQ0osU0FBS0QsS0FBTCxHQUFhLEtBQUtFLEdBQUwsQ0FBU0YsS0FBVCxDQUFlLEdBQWYsRUFBbUIsR0FBbkIsRUFBdUIsYUFBdkIsQ0FBYjtBQUNBLFNBQUtHLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsRUFBcEIsQ0FBdUIsU0FBdkIsRUFBa0MsVUFBU0MsS0FBVCxFQUFlO0FBQzdDLFdBQUtOLEtBQUwsQ0FBV08sQ0FBWCxJQUFnQixFQUFoQjtBQUNILEtBRkQsRUFFRSxJQUZGO0FBR0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtMLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkssTUFBcEIsQ0FBMkJmLE1BQU0sQ0FBQ2dCLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsUUFBdEIsQ0FBK0JDLENBQTFELENBQWI7QUFDQSxTQUFLVixLQUFMLENBQVdFLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLFVBQVNDLEtBQVQsRUFBZTtBQUN4QyxXQUFLTixLQUFMLENBQVdPLENBQVgsR0FBZUQsS0FBSyxDQUFDQyxDQUFyQjtBQUNBLFdBQUtQLEtBQUwsQ0FBV2MsQ0FBWCxHQUFlUixLQUFLLENBQUNRLENBQXJCO0FBQ0gsS0FIRCxFQUdFLElBSEY7QUFJSDs7QUFDREMsUUFBTSxDQUFDQyxLQUFELEVBQVE7QUFDVixRQUFJLEtBQUtSLEtBQUwsQ0FBV1MsTUFBZixFQUFzQjtBQUNsQixXQUFLakIsS0FBTCxDQUFXTyxDQUFYO0FBQ0g7QUFDSjs7QUF0QjZCOztBQXdCbkJkLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL3NjZW5lMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHNjZW5lMSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHtrZXk6XCJzY2VuZTFcIn0pO1xyXG4gICAgfVxyXG4gICAgcHJlbG9hZCgpe1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFja2dyb3VuZDEnLCcuLi9zcmMvaW1hZ2VzL3N0YXIuanBnJyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5hZGQuaW1hZ2UoNDAwLDMwMCwnYmFja2dyb3VuZDEnKTtcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXl1cF9EJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLnggKz0gMTA7XHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIHRoaXMua2V5X0EgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuQSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueCA9IGV2ZW50Lng7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueSA9IGV2ZW50Lnk7XHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5X0EuaXNEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS54LS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjZW5lMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/scene1.js\n");

/***/ })

/******/ });