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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene1 */ \"./src/js/scene1.js\");\n/* harmony import */ var _scene2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene2 */ \"./src/js/scene2.js\");\n/* harmony import */ var _scene3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene3 */ \"./src/js/scene3.js\");\n\n\n\n\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: [_scene1__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scene2__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scene3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n  };\n  var game = new Phaser.Game(config);\n  /* function preload ()\r\n  {\r\n      this.load.setBaseURL('http://labs.phaser.io');\r\n  \r\n      this.load.image('sky', 'assets/skies/nebula.jpg');\r\n      this.load.image('logo', 'assets/sprites/phaser3-logo.png');\r\n      this.load.image('red', 'assets/particles/muzzleflash4.png');\r\n        \r\n  }\r\n  \r\n  function create ()\r\n  {\r\n      this.add.image(400, 300, 'sky');\r\n  \r\n      var particles = this.add.particles('red');\r\n  \r\n      var emitter = particles.createEmitter({\r\n          speed: 50,\r\n          scale: { start: 1, end: 0 },\r\n          blendMode: 'ADD'\r\n      });\r\n  \r\n      var logo = this.physics.add.image(400, 100, 'logo');\r\n  \r\n      logo.setVelocity(100, 200);\r\n      logo.setBounce(1, 1);\r\n      logo.setCollideWorldBounds(true);\r\n  \r\n      emitter.startFollow(logo);\r\n  } */\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzP2M4MTMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsInNjZW5lMSIsInNjZW5lMiIsInNjZW5lMyIsImdhbWUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBSTtBQUNmLE1BQUlBLE1BQU0sR0FBRztBQUNUQyxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsSUFESjtBQUVUQyxTQUFLLEVBQUUsR0FGRTtBQUdUQyxVQUFNLEVBQUUsR0FIQztBQUlUQyxXQUFPLEVBQUU7QUFDTEMsYUFBTyxFQUFFLFFBREo7QUFFTEMsWUFBTSxFQUFFO0FBQ0pDLGVBQU8sRUFBRTtBQUFFQyxXQUFDLEVBQUU7QUFBTDtBQURMO0FBRkgsS0FKQTtBQVVUQyxTQUFLLEVBQUUsQ0FBQ0MsK0NBQUQsRUFBUUMsK0NBQVIsRUFBZUMsK0NBQWY7QUFWRSxHQUFiO0FBYUEsTUFBSUMsSUFBSSxHQUFHLElBQUliLE1BQU0sQ0FBQ2MsSUFBWCxDQUFnQmhCLE1BQWhCLENBQVg7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NILENBaEREOztBQWtEZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjZW5lMSBmcm9tICcuL3NjZW5lMSdcclxuaW1wb3J0IHNjZW5lMiBmcm9tICcuL3NjZW5lMidcclxuaW1wb3J0IHNjZW5lMyBmcm9tICcuL3NjZW5lMydcclxuXHJcbmNvbnN0IGNvbmZpZyA9ICgpPT57XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgcGh5c2ljczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5OiB7IHk6IDIwMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjZW5lOiBbc2NlbmUxLHNjZW5lMixzY2VuZTNdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvKiBmdW5jdGlvbiBwcmVsb2FkICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNldEJhc2VVUkwoJ2h0dHA6Ly9sYWJzLnBoYXNlci5pbycpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NraWVzL25lYnVsYS5qcGcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnYXNzZXRzL3Nwcml0ZXMvcGhhc2VyMy1sb2dvLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvbXV6emxlZmxhc2g0LnBuZycpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdza3knKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ3JlZCcpO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBwYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIHNwZWVkOiA1MCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgc3RhcnQ6IDEsIGVuZDogMCB9LFxyXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB2YXIgbG9nbyA9IHRoaXMucGh5c2ljcy5hZGQuaW1hZ2UoNDAwLCAxMDAsICdsb2dvJyk7XHJcbiAgICBcclxuICAgICAgICBsb2dvLnNldFZlbG9jaXR5KDEwMCwgMjAwKTtcclxuICAgICAgICBsb2dvLnNldEJvdW5jZSgxLCAxKTtcclxuICAgICAgICBsb2dvLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIGVtaXR0ZXIuc3RhcnRGb2xsb3cobG9nbyk7XHJcbiAgICB9ICovXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/configPhaser.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass scene1 extends Phaser.Scene {\n  constructor() {\n    super({\n      key: \"scene1\"\n    });\n  }\n\n  preload() {\n    this.load.image('background1', '../src/images/star.png');\n  }\n\n  create() {\n    this.image = this.add.image(400, 300, 'background1');\n    this.input.keyboard.on('keyup_D', function (event) {\n      this.image.x += 10;\n    }, this);\n    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);\n    this.input.on('pointerdown', function (event) {\n      this.image.x = event.x;\n      this.image.y = event.y;\n    }, this);\n    this.input.keyboard.on('keyup_P', function (event) {\n      var physicsImage = this.physics.add.image(this.image.x, this.image.y, 'background1');\n      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);\n    }, this);\n    this.input.keyboard.on('keyup', function (e) {\n      if (e.key == \"2\") {\n        this.scene.start(\"scene2\");\n      }\n\n      if (e.key == \"3\") {\n        this.scene.start(\"scene3\");\n      }\n    }, this);\n  }\n\n  update(delta) {\n    if (this.key_A.isDown) {\n      this.image.x--;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NlbmUxLmpzP2IyMzYiXSwibmFtZXMiOlsic2NlbmUxIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJhZGQiLCJpbnB1dCIsImtleWJvYXJkIiwib24iLCJldmVudCIsIngiLCJrZXlfQSIsImFkZEtleSIsIklucHV0IiwiS2V5Ym9hcmQiLCJLZXlDb2RlcyIsIkEiLCJ5IiwicGh5c2ljc0ltYWdlIiwicGh5c2ljcyIsInNldFZlbG9jaXR5IiwiTWF0aCIsIlJORCIsImludGVnZXJJblJhbmdlIiwiZSIsInNjZW5lIiwic3RhcnQiLCJ1cGRhdGUiLCJkZWx0YSIsImlzRG93biJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNLENBQUNDLEtBQTVCLENBQWtDO0FBQzlCQyxhQUFXLEdBQUU7QUFDVCxVQUFNO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBQU47QUFDSDs7QUFDREMsU0FBTyxHQUFFO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCLGFBQWhCLEVBQThCLHdCQUE5QjtBQUNIOztBQUNEQyxRQUFNLEdBQUU7QUFDSixTQUFLRCxLQUFMLEdBQWEsS0FBS0UsR0FBTCxDQUFTRixLQUFULENBQWUsR0FBZixFQUFtQixHQUFuQixFQUF1QixhQUF2QixDQUFiO0FBQ0EsU0FBS0csS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxFQUFwQixDQUF1QixTQUF2QixFQUFrQyxVQUFTQyxLQUFULEVBQWU7QUFDN0MsV0FBS04sS0FBTCxDQUFXTyxDQUFYLElBQWdCLEVBQWhCO0FBQ0gsS0FGRCxFQUVFLElBRkY7QUFHQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0wsS0FBTCxDQUFXQyxRQUFYLENBQW9CSyxNQUFwQixDQUEyQmYsTUFBTSxDQUFDZ0IsS0FBUCxDQUFhQyxRQUFiLENBQXNCQyxRQUF0QixDQUErQkMsQ0FBMUQsQ0FBYjtBQUNBLFNBQUtWLEtBQUwsQ0FBV0UsRUFBWCxDQUFjLGFBQWQsRUFBNkIsVUFBU0MsS0FBVCxFQUFlO0FBQ3hDLFdBQUtOLEtBQUwsQ0FBV08sQ0FBWCxHQUFlRCxLQUFLLENBQUNDLENBQXJCO0FBQ0EsV0FBS1AsS0FBTCxDQUFXYyxDQUFYLEdBQWVSLEtBQUssQ0FBQ1EsQ0FBckI7QUFDSCxLQUhELEVBR0UsSUFIRjtBQUlBLFNBQUtYLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsRUFBcEIsQ0FBdUIsU0FBdkIsRUFBaUMsVUFBU0MsS0FBVCxFQUFlO0FBQzVDLFVBQUlTLFlBQVksR0FBRyxLQUFLQyxPQUFMLENBQWFkLEdBQWIsQ0FBaUJGLEtBQWpCLENBQXVCLEtBQUtBLEtBQUwsQ0FBV08sQ0FBbEMsRUFBb0MsS0FBS1AsS0FBTCxDQUFXYyxDQUEvQyxFQUFpRCxhQUFqRCxDQUFuQjtBQUNBQyxrQkFBWSxDQUFDRSxXQUFiLENBQXlCdkIsTUFBTSxDQUFDd0IsSUFBUCxDQUFZQyxHQUFaLENBQWdCQyxjQUFoQixDQUErQixDQUFDLEdBQWhDLEVBQW9DLEdBQXBDLENBQXpCLEVBQWtFLENBQUMsR0FBbkU7QUFDSCxLQUhELEVBR0UsSUFIRjtBQUlBLFNBQUtqQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVNnQixDQUFULEVBQVc7QUFDdkMsVUFBSUEsQ0FBQyxDQUFDeEIsR0FBRixJQUFTLEdBQWIsRUFBaUI7QUFDYixhQUFLeUIsS0FBTCxDQUFXQyxLQUFYLENBQWlCLFFBQWpCO0FBQ0g7O0FBQ0QsVUFBSUYsQ0FBQyxDQUFDeEIsR0FBRixJQUFTLEdBQWIsRUFBaUI7QUFDYixhQUFLeUIsS0FBTCxDQUFXQyxLQUFYLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixLQVBELEVBT0UsSUFQRjtBQVdIOztBQUNEQyxRQUFNLENBQUNDLEtBQUQsRUFBUTtBQUNWLFFBQUksS0FBS2pCLEtBQUwsQ0FBV2tCLE1BQWYsRUFBc0I7QUFDbEIsV0FBSzFCLEtBQUwsQ0FBV08sQ0FBWDtBQUNIO0FBQ0o7O0FBckM2Qjs7QUF1Q25CZCxxRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9zY2VuZTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBzY2VuZTEgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5Olwic2NlbmUxXCJ9KTtcclxuICAgIH1cclxuICAgIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQxJywnLi4vc3JjL2ltYWdlcy9zdGFyLnBuZycpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuYWRkLmltYWdlKDQwMCwzMDAsJ2JhY2tncm91bmQxJyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5dXBfRCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS54ICs9IDEwO1xyXG4gICAgICAgIH0sdGhpcylcclxuICAgICAgICB0aGlzLmtleV9BID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkEpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLnggPSBldmVudC54O1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlLnkgPSBldmVudC55O1xyXG4gICAgICAgIH0sdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXl1cF9QJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHZhciBwaHlzaWNzSW1hZ2UgPSB0aGlzLnBoeXNpY3MuYWRkLmltYWdlKHRoaXMuaW1hZ2UueCx0aGlzLmltYWdlLnksJ2JhY2tncm91bmQxJyk7XHJcbiAgICAgICAgICAgIHBoeXNpY3NJbWFnZS5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoLTEwMCwxMDApLC0zMDApO1xyXG4gICAgICAgIH0sdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCIyXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcInNjZW5lMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCIzXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcInNjZW5lM1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcylcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleV9BLmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueC0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY2VuZTEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/scene1.js\n");

/***/ }),

/***/ "./src/js/scene2.js":
/*!**************************!*\
  !*** ./src/js/scene2.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass scene2 extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'scene2'\n    });\n  }\n\n  create() {\n    this.text = this.add.text(0, 0, \"WELCOME TO SCENE2\", {\n      font: \"40px Impact\"\n    });\n    var tween = this.tweens.add({\n      targets: this.text,\n      x: 200,\n      y: 250,\n      duration: 2000,\n      ease: \"Elastic\",\n      easeParams: [1.5, 0.5],\n      delay: 1000,\n      onComplete: function (src, tgt) {\n        tgt[0].x = 0;\n        tgt[0].y = 150;\n        tgt[0].setColor('green');\n      }\n    }, this);\n    this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);\n  }\n\n  update(delta) {\n    if (this.key_1.isDown) {\n      this.scene.start(\"scene1\");\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NlbmUyLmpzPzBhMDMiXSwibmFtZXMiOlsic2NlbmUyIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsImNyZWF0ZSIsInRleHQiLCJhZGQiLCJmb250IiwidHdlZW4iLCJ0d2VlbnMiLCJ0YXJnZXRzIiwieCIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJlYXNlUGFyYW1zIiwiZGVsYXkiLCJvbkNvbXBsZXRlIiwic3JjIiwidGd0Iiwic2V0Q29sb3IiLCJrZXlfMSIsImlucHV0Iiwia2V5Ym9hcmQiLCJhZGRLZXkiLCJJbnB1dCIsIktleWJvYXJkIiwiS2V5Q29kZXMiLCJPTkUiLCJ1cGRhdGUiLCJkZWx0YSIsImlzRG93biIsInNjZW5lIiwic3RhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsTUFBTixTQUFxQkMsTUFBTSxDQUFDQyxLQUE1QixDQUFpQztBQUU3QkMsYUFBVyxHQUFFO0FBQ1QsVUFBTTtBQUFDQyxTQUFHLEVBQUM7QUFBTCxLQUFOO0FBQ0g7O0FBRURDLFFBQU0sR0FBRTtBQUNKLFNBQUtDLElBQUwsR0FBWSxLQUFLQyxHQUFMLENBQVNELElBQVQsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLG1CQUFsQixFQUFzQztBQUFDRSxVQUFJLEVBQUM7QUFBTixLQUF0QyxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsR0FBWixDQUFnQjtBQUN4QkksYUFBTyxFQUFFLEtBQUtMLElBRFU7QUFFeEJNLE9BQUMsRUFBQyxHQUZzQjtBQUd4QkMsT0FBQyxFQUFDLEdBSHNCO0FBSXhCQyxjQUFRLEVBQUMsSUFKZTtBQUt4QkMsVUFBSSxFQUFDLFNBTG1CO0FBTXhCQyxnQkFBVSxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FOYTtBQU94QkMsV0FBSyxFQUFDLElBUGtCO0FBUXhCQyxnQkFBVSxFQUFFLFVBQVNDLEdBQVQsRUFBYUMsR0FBYixFQUFpQjtBQUN6QkEsV0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPUixDQUFQLEdBQVcsQ0FBWDtBQUNBUSxXQUFHLENBQUMsQ0FBRCxDQUFILENBQU9QLENBQVAsR0FBVyxHQUFYO0FBQ0FPLFdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0MsUUFBUCxDQUFnQixPQUFoQjtBQUNIO0FBWnVCLEtBQWhCLEVBYVYsSUFiVSxDQUFaO0FBY0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsTUFBcEIsQ0FBMkJ4QixNQUFNLENBQUN5QixLQUFQLENBQWFDLFFBQWIsQ0FBc0JDLFFBQXRCLENBQStCQyxHQUExRCxDQUFiO0FBQ0g7O0FBQ0RDLFFBQU0sQ0FBQ0MsS0FBRCxFQUFPO0FBQ1QsUUFBRyxLQUFLVCxLQUFMLENBQVdVLE1BQWQsRUFBcUI7QUFDakIsV0FBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCLFFBQWpCO0FBQ0g7QUFFSjs7QUE3QjRCOztBQStCbEJsQyxxRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9zY2VuZTIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBzY2VuZTIgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidzY2VuZTInfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmFkZC50ZXh0KDAsMCxcIldFTENPTUUgVE8gU0NFTkUyXCIse2ZvbnQ6XCI0MHB4IEltcGFjdFwifSk7XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gdGhpcy50d2VlbnMuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB4OjIwMCxcclxuICAgICAgICAgICAgeToyNTAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOjIwMDAsXHJcbiAgICAgICAgICAgIGVhc2U6XCJFbGFzdGljXCIsXHJcbiAgICAgICAgICAgIGVhc2VQYXJhbXM6WzEuNSwwLjVdLFxyXG4gICAgICAgICAgICBkZWxheToxMDAwLFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbihzcmMsdGd0KXtcclxuICAgICAgICAgICAgICAgIHRndFswXS54ID0gMDtcclxuICAgICAgICAgICAgICAgIHRndFswXS55ID0gMTUwO1xyXG4gICAgICAgICAgICAgICAgdGd0WzBdLnNldENvbG9yKCdncmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICB0aGlzLmtleV8xID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLk9ORSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGlmKHRoaXMua2V5XzEuaXNEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcInNjZW5lMVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY2VuZTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/scene2.js\n");

/***/ }),

/***/ "./src/js/scene3.js":
/*!**************************!*\
  !*** ./src/js/scene3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene2 */ \"./src/js/scene2.js\");\n\n\nclass scene3 extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'scene3'\n    });\n  }\n\n  preload() {\n    this.load.audio(\"song\", ['../src/mp3/song.mp3']);\n  }\n\n  create() {\n    this.soundFX = this.sound.add(\"song\", {\n      loop: \"true\"\n    });\n    this.soundFX.play();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NlbmUzLmpzPzA4ZTQiXSwibmFtZXMiOlsic2NlbmUzIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwiYXVkaW8iLCJjcmVhdGUiLCJzb3VuZEZYIiwic291bmQiLCJhZGQiLCJsb29wIiwicGxheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLE1BQU0sQ0FBQ0MsS0FBNUIsQ0FBaUM7QUFDN0JDLGFBQVcsR0FBRztBQUNWLFVBQU07QUFBQ0MsU0FBRyxFQUFDO0FBQUwsS0FBTjtBQUNIOztBQUNEQyxTQUFPLEdBQUU7QUFDTCxTQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBdUIsQ0FBQyxxQkFBRCxDQUF2QjtBQUNIOztBQUNEQyxRQUFNLEdBQUU7QUFDSixTQUFLQyxPQUFMLEdBQWUsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsTUFBZixFQUFzQjtBQUFDQyxVQUFJLEVBQUM7QUFBTixLQUF0QixDQUFmO0FBQ0EsU0FBS0gsT0FBTCxDQUFhSSxJQUFiO0FBQ0g7O0FBVjRCOztBQVlsQmIscUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvc2NlbmUzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjZW5lMiBmcm9tIFwiLi9zY2VuZTJcIjtcclxuXHJcbmNsYXNzIHNjZW5lMyBleHRlbmRzIFBoYXNlci5TY2VuZXtcclxuICAgIGNvbnN0cnVjdG9yICgpe1xyXG4gICAgICAgIHN1cGVyKHtrZXk6J3NjZW5lMyd9KTtcclxuICAgIH1cclxuICAgIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oXCJzb25nXCIsWycuLi9zcmMvbXAzL3NvbmcubXAzJ10pXHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLnNvdW5kRlggPSB0aGlzLnNvdW5kLmFkZChcInNvbmdcIix7bG9vcDpcInRydWVcIn0pO1xyXG4gICAgICAgIHRoaXMuc291bmRGWC5wbGF5KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2NlbmUzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/scene3.js\n");

/***/ })

/******/ });