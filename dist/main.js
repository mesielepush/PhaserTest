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
eval("__webpack_require__.r(__webpack_exports__);\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: {\n      preload: preload,\n      create: create\n    }\n  };\n  var game = new Phaser.Game(config);\n\n  function preload() {\n    this.load.setBaseURL('http://labs.phaser.io');\n    this.load.image('sky', 'assets/skies/space3.png');\n    this.load.image('logo', 'assets/sprites/phaser3-logo.png');\n    this.load.image('red', 'assets/particles/red.png');\n  }\n\n  function create() {\n    this.add.image(400, 300, 'sky');\n    var particles = this.add.particles('red');\n    var emitter = particles.createEmitter({\n      speed: 100,\n      scale: {\n        start: 1,\n        end: 0\n      },\n      blendMode: 'ADD'\n    });\n    var logo = this.physics.add.image(400, 100, 'logo');\n    logo.setVelocity(100, 200);\n    logo.setBounce(1, 1);\n    logo.setCollideWorldBounds(true);\n    emitter.startFollow(logo);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnUGhhc2VyLmpzP2M4MTMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsInByZWxvYWQiLCJjcmVhdGUiLCJnYW1lIiwiR2FtZSIsImxvYWQiLCJzZXRCYXNlVVJMIiwiaW1hZ2UiLCJhZGQiLCJwYXJ0aWNsZXMiLCJlbWl0dGVyIiwiY3JlYXRlRW1pdHRlciIsInNwZWVkIiwic2NhbGUiLCJzdGFydCIsImVuZCIsImJsZW5kTW9kZSIsImxvZ28iLCJzZXRWZWxvY2l0eSIsInNldEJvdW5jZSIsInNldENvbGxpZGVXb3JsZEJvdW5kcyIsInN0YXJ0Rm9sbG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRyxNQUFJO0FBQ2YsTUFBSUEsTUFBTSxHQUFHO0FBQ1RDLFFBQUksRUFBRUMsTUFBTSxDQUFDQyxJQURKO0FBRVRDLFNBQUssRUFBRSxHQUZFO0FBR1RDLFVBQU0sRUFBRSxHQUhDO0FBSVRDLFdBQU8sRUFBRTtBQUNMQyxhQUFPLEVBQUUsUUFESjtBQUVMQyxZQUFNLEVBQUU7QUFDSkMsZUFBTyxFQUFFO0FBQUVDLFdBQUMsRUFBRTtBQUFMO0FBREw7QUFGSCxLQUpBO0FBVVRDLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUVBLE9BRE47QUFFSEMsWUFBTSxFQUFFQTtBQUZMO0FBVkUsR0FBYjtBQWdCQSxNQUFJQyxJQUFJLEdBQUcsSUFBSVosTUFBTSxDQUFDYSxJQUFYLENBQWdCZixNQUFoQixDQUFYOztBQUVBLFdBQVNZLE9BQVQsR0FDQTtBQUNJLFNBQUtJLElBQUwsQ0FBVUMsVUFBVixDQUFxQix1QkFBckI7QUFFQSxTQUFLRCxJQUFMLENBQVVFLEtBQVYsQ0FBZ0IsS0FBaEIsRUFBdUIseUJBQXZCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVRSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLGlDQUF4QjtBQUNBLFNBQUtGLElBQUwsQ0FBVUUsS0FBVixDQUFnQixLQUFoQixFQUF1QiwwQkFBdkI7QUFDSDs7QUFFRCxXQUFTTCxNQUFULEdBQ0E7QUFDSSxTQUFLTSxHQUFMLENBQVNELEtBQVQsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEtBQXpCO0FBRUEsUUFBSUUsU0FBUyxHQUFHLEtBQUtELEdBQUwsQ0FBU0MsU0FBVCxDQUFtQixLQUFuQixDQUFoQjtBQUVBLFFBQUlDLE9BQU8sR0FBR0QsU0FBUyxDQUFDRSxhQUFWLENBQXdCO0FBQ2xDQyxXQUFLLEVBQUUsR0FEMkI7QUFFbENDLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsQ0FBVDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FGMkI7QUFHbENDLGVBQVMsRUFBRTtBQUh1QixLQUF4QixDQUFkO0FBTUEsUUFBSUMsSUFBSSxHQUFHLEtBQUt0QixPQUFMLENBQWFhLEdBQWIsQ0FBaUJELEtBQWpCLENBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLEVBQWlDLE1BQWpDLENBQVg7QUFFQVUsUUFBSSxDQUFDQyxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCO0FBQ0FELFFBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQUYsUUFBSSxDQUFDRyxxQkFBTCxDQUEyQixJQUEzQjtBQUVBVixXQUFPLENBQUNXLFdBQVIsQ0FBb0JKLElBQXBCO0FBQ0g7QUFFSixDQWpERDs7QUFtRGU1QixxRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9jb25maWdQaGFzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSAoKT0+e1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgIHBoeXNpY3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogeyB5OiAyMDAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2VuZToge1xyXG4gICAgICAgICAgICBwcmVsb2FkOiBwcmVsb2FkLFxyXG4gICAgICAgICAgICBjcmVhdGU6IGNyZWF0ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHByZWxvYWQgKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnaHR0cDovL2xhYnMucGhhc2VyLmlvJyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICdhc3NldHMvc2tpZXMvc3BhY2UzLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9nbycsICdhc3NldHMvc3ByaXRlcy9waGFzZXIzLWxvZ28ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL3BhcnRpY2xlcy9yZWQucG5nJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKDQwMCwgMzAwLCAnc2t5Jyk7XHJcbiAgICBcclxuICAgICAgICB2YXIgcGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdyZWQnKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBlbWl0dGVyID0gcGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgICAgICBzY2FsZTogeyBzdGFydDogMSwgZW5kOiAwIH0sXHJcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCdcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHZhciBsb2dvID0gdGhpcy5waHlzaWNzLmFkZC5pbWFnZSg0MDAsIDEwMCwgJ2xvZ28nKTtcclxuICAgIFxyXG4gICAgICAgIGxvZ28uc2V0VmVsb2NpdHkoMTAwLCAyMDApO1xyXG4gICAgICAgIGxvZ28uc2V0Qm91bmNlKDEsIDEpO1xyXG4gICAgICAgIGxvZ28uc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgZW1pdHRlci5zdGFydEZvbGxvdyhsb2dvKTtcclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/configPhaser.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configPhaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configPhaser */ \"./src/js/configPhaser.js\");\n\nObject(_configPhaser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBQSw2REFBTSIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWdQaGFzZXInXHJcbmNvbmZpZygpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });