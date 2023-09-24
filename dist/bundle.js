/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/Controller.ts":
/*!***********************************!*\
  !*** ./src/Modules/Controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/Modules/Projects.ts\");\n/* harmony import */ var _Subscribable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscribable */ \"./src/Modules/Subscribable.ts\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ \"./src/Modules/Todo.ts\");\n\n\n\nvar Controller = /** @class */ (function () {\n    function Controller() {\n        this._publisher = new _Subscribable__WEBPACK_IMPORTED_MODULE_1__.Subscribable();\n        this._todoContainer = new _Todo__WEBPACK_IMPORTED_MODULE_2__.TodoContainer(this._publisher);\n        this._projectContainer = new _Projects__WEBPACK_IMPORTED_MODULE_0__.ProjectContainer(this._publisher);\n    }\n    Controller.prototype.handleAddTodo = function (todoInput) {\n        this._publisher.emit('TODO_ADDED', {\n            projectId: 1,\n            todoInput: todoInput,\n        });\n    };\n    Controller.prototype.handleGetAllTodos = function () {\n        return this._todoContainer.todos;\n    };\n    Controller.prototype.handleAddProject = function (name) {\n        this._publisher.emit('PROJECT_ADDED', {\n            name: name,\n        });\n    };\n    return Controller;\n}());\n\n\n\n//# sourceURL=webpack://pub-sub/./src/Modules/Controller.ts?");

/***/ }),

/***/ "./src/Modules/Projects.ts":
/*!*********************************!*\
  !*** ./src/Modules/Projects.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectContainer: () => (/* binding */ ProjectContainer)\n/* harmony export */ });\nvar Project = /** @class */ (function () {\n    function Project(name, id) {\n        this.id = id;\n        this.name = name;\n    }\n    return Project;\n}());\nvar ProjectContainer = /** @class */ (function () {\n    function ProjectContainer(pub) {\n        this._projects = [];\n        this._publisher = pub;\n    }\n    ProjectContainer.prototype.subscribe = function () {\n        var _this = this;\n        this._publisher.on('PROJECT_ADDED', function (_a) {\n            var name = _a.name;\n            _this.projects.push(new Project(name, Math.floor(Math.random() * (5000 - 1 + 1)) + 1));\n        });\n    };\n    Object.defineProperty(ProjectContainer.prototype, \"projects\", {\n        get: function () {\n            return this._projects;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ProjectContainer.prototype.deleteProject = function () { };\n    return ProjectContainer;\n}());\n\n\n\n//# sourceURL=webpack://pub-sub/./src/Modules/Projects.ts?");

/***/ }),

/***/ "./src/Modules/Subscribable.ts":
/*!*************************************!*\
  !*** ./src/Modules/Subscribable.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Subscribable: () => (/* binding */ Subscribable)\n/* harmony export */ });\nvar Subscribable = /** @class */ (function () {\n    function Subscribable() {\n        this.subscribers = {};\n    }\n    Subscribable.prototype.on = function (eventName, callback) {\n        var _a;\n        if (!this.subscribers[eventName]) {\n            this.subscribers[eventName] = [];\n        }\n        (_a = this.subscribers[eventName]) === null || _a === void 0 ? void 0 : _a.push(callback);\n    };\n    Subscribable.prototype.emit = function (event, args) {\n        var funcs = this.subscribers[event];\n        if (!funcs) {\n            return 'no event found';\n        }\n        funcs.forEach(function (func) { return func(args); });\n    };\n    return Subscribable;\n}());\n\n\n\n//# sourceURL=webpack://pub-sub/./src/Modules/Subscribable.ts?");

/***/ }),

/***/ "./src/Modules/Todo.ts":
/*!*****************************!*\
  !*** ./src/Modules/Todo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoContainer: () => (/* binding */ TodoContainer)\n/* harmony export */ });\nvar Todo = /** @class */ (function () {\n    function Todo(_a) {\n        var description = _a.description, title = _a.title, projectIds = _a.projectIds;\n        this.title = title;\n        this.description = description;\n        this.projectIds = projectIds;\n        this.id = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;\n    }\n    return Todo;\n}());\nvar TodoContainer = /** @class */ (function () {\n    function TodoContainer(pub) {\n        this.todos = [];\n        this._publisher = pub;\n        this.subscribe();\n    }\n    TodoContainer.prototype.subscribe = function () {\n        var _this = this;\n        this._publisher.on('TODO_ADDED', function (_a) {\n            var projectId = _a.projectId, todoInput = _a.todoInput;\n            _this.addTodo(todoInput);\n        });\n        this._publisher.on('EDIT_TODO', function (_a) {\n            var projectId = _a.projectId, todoInput = _a.todoInput;\n            var todo = _this.todos.find;\n        });\n    };\n    TodoContainer.prototype.addTodo = function (todoInput) {\n        this.todos.push(new Todo(todoInput));\n    };\n    TodoContainer.prototype.getTodoById = function () { };\n    TodoContainer.prototype.editTodo = function () { };\n    return TodoContainer;\n}());\n\n\n\n//# sourceURL=webpack://pub-sub/./src/Modules/Todo.ts?");

/***/ }),

/***/ "./src/Modules/View.ts":
/*!*****************************!*\
  !*** ./src/Modules/View.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View)\n/* harmony export */ });\nvar View = /** @class */ (function () {\n    function View(controller) {\n        this._controller = controller;\n    }\n    View.prototype.handleAddTodo = function (todoInput) {\n        this._controller.handleAddTodo(todoInput);\n    };\n    View.prototype.handleGetAllTodos = function () {\n        return this._controller.handleGetAllTodos();\n    };\n    View.prototype.handleAddProject = function (name) {\n        this._controller.handleAddProject(name);\n    };\n    return View;\n}());\n\n\n\n//# sourceURL=webpack://pub-sub/./src/Modules/View.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/Controller */ \"./src/Modules/Controller.ts\");\n/* harmony import */ var _Modules_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/View */ \"./src/Modules/View.ts\");\n\n\nvar app = new _Modules_Controller__WEBPACK_IMPORTED_MODULE_0__.Controller();\nvar view = new _Modules_View__WEBPACK_IMPORTED_MODULE_1__.View(app);\nview.handleAddProject('test');\nview.handleAddTodo({\n    description: 'hello',\n    title: '123',\n    projectIds: [1],\n});\nconsole.log('test');\nconsole.log(view.handleGetAllTodos());\n\n\n//# sourceURL=webpack://pub-sub/./src/index.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;