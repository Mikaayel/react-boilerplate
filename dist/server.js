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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__("react-router");

var _sourceMapSupport = __webpack_require__("source-map-support");

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _App = __webpack_require__("./shared/App.js");

var _App2 = _interopRequireDefault(_App);

var _render = __webpack_require__("./server/render.js");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// BASE SETUP
// ========================================


// BASE COMPONENTS
// ========================================
// SERVER SIDE RENDERING

// BASE IMPORTS
// ========================================
var PORT = process.env.PORT || 8080;
var app = (0, _express2.default)();
_sourceMapSupport2.default.install();

console.log('rendering on server side');

// ROUTES SETUP
// ========================================
app.use('/dist', _express2.default.static('./dist'));

app.get('*', function (req, res) {
	res.status(200).send((0, _render2.default)(_react2.default.createElement(
		_reactRouter.StaticRouter,
		{ context: {}, location: req.url },
		_react2.default.createElement(_App2.default, null)
	)));
});

// START SERVER
// ========================================
app.listen(PORT);
console.log('server is running on port:', PORT);

/***/ }),

/***/ "./server/render.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__("react-dom/server");

exports.default = function (renderMe) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>React Boilerplate</title>\n    </head>\n    <body>\n        <div id="root">' + (0, _server.renderToString)(renderMe) + '</div>\n        <script src="/dist/client.js"></script>\n    </body>\n</html>';
};

/***/ }),

/***/ "./shared/App.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _app = __webpack_require__("./shared/scss/app.scss");

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__("./shared/components/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _page = __webpack_require__("./shared/components/page/page.js");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line
// global styles must be imported before components to maintain styling order

// import About from './components/about/about';
// import Catalogue from './components/catalogue/catalogue';
// import Home from './components/home/home';
// import NotFound from './components/notFound/notFound';


var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			// const Routes = [
			// 	{
			// 		path: '/',
			// 		exact: true,
			// 		component: Home
			// 	},
			// 	{
			// 		path: '/about',
			// 		component: About
			// 	},
			// 	{
			// 		path: '/catalogue',
			// 		component: Catalogue
			// 	},
			// 	{
			// 		path: '*',
			// 		component: NotFound
			// 	}
			// ];
			var routeComponents = _routes2.default.map(function (_ref, key) {
				var path = _ref.path,
				    component = _ref.component;
				return _react2.default.createElement(_reactRouterDom.Route, { path: path, component: component, key: key });
			});
			// console.log(Routes);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_page2.default,
					null,
					_react2.default.createElement(
						_reactRouterDom.Switch,
						null,
						routeComponents
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

;

exports.default = App;

/***/ }),

/***/ "./shared/components/about/about.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import CSSModules from 'react-css-modules';

// import style from './about.scss';

var About = function About() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'About'
		)
	);
};

exports.default = About;
// export default CSSModules(About, style);

/***/ }),

/***/ "./shared/components/catalogue/catalogue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Catalogue = function Catalogue(props) {
	console.log(props);
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Catalogue'
		)
	);
};

exports.default = Catalogue;

/***/ }),

/***/ "./shared/components/footer/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _footer = __webpack_require__("./shared/components/footer/footer.scss");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		null,
		_react2.default.createElement(
			'h2',
			null,
			'Footer'
		)
	);
};

exports.default = (0, _reactCssModules2.default)(Footer, _footer2.default);

/***/ }),

/***/ "./shared/components/footer/footer.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./shared/components/home/home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _home = __webpack_require__("./shared/components/home/home.scss");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Home'
		)
	);
};

exports.default = (0, _reactCssModules2.default)(Home, _home2.default);

/***/ }),

/***/ "./shared/components/home/home.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./shared/components/navigation/navigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _reactCssModules = __webpack_require__("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _navigation = __webpack_require__("./shared/components/navigation/navigation.scss");

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
	_inherits(Navigation, _React$Component);

	function Navigation() {
		_classCallCheck(this, Navigation);

		return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	}

	_createClass(Navigation, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ styleName: 'navigation' },
				_react2.default.createElement('div', { styleName: 'container' }),
				_react2.default.createElement(
					'div',
					{ styleName: 'container' },
					_react2.default.createElement(
						'h1',
						{ styleName: 'logo' },
						'LOGO'
					)
				),
				_react2.default.createElement(
					'div',
					{ styleName: 'container' },
					_react2.default.createElement(
						'ul',
						{ styleName: 'links' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', exact: true, to: '/' },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', to: '/about' },
								'About'
							)
						)
					)
				)
			);
		}
	}]);

	return Navigation;
}(_react2.default.Component);

;

exports.default = (0, _reactCssModules2.default)(Navigation, _navigation2.default);

/***/ }),

/***/ "./shared/components/navigation/navigation.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navigation":"navigation_1AU2v","container":"container_3i-PK","logo":"logo_2K7t_","links":"links_OeQnV"};

/***/ }),

/***/ "./shared/components/notFound/notFound.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _notFound = __webpack_require__("./shared/components/notFound/notFound.scss");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'404'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Page not found'
		)
	);
};

exports.default = (0, _reactCssModules2.default)(NotFound, _notFound2.default);

/***/ }),

/***/ "./shared/components/notFound/notFound.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./shared/components/page/page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _page = __webpack_require__("./shared/components/page/page.scss");

var _page2 = _interopRequireDefault(_page);

var _footer = __webpack_require__("./shared/components/footer/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _navigation = __webpack_require__("./shared/components/navigation/navigation.js");

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page() {
		_classCallCheck(this, Page);

		return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
	}

	_createClass(Page, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_navigation2.default, null),
				this.props.children,
				_react2.default.createElement(_footer2.default, null)
			);
		}
	}]);

	return Page;
}(_react2.default.Component);

exports.default = (0, _reactCssModules2.default)(Page, _page2.default);

/***/ }),

/***/ "./shared/components/page/page.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./shared/components/routes/routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _about = __webpack_require__("./shared/components/about/about.js");

var _about2 = _interopRequireDefault(_about);

var _catalogue = __webpack_require__("./shared/components/catalogue/catalogue.js");

var _catalogue2 = _interopRequireDefault(_catalogue);

var _home = __webpack_require__("./shared/components/home/home.js");

var _home2 = _interopRequireDefault(_home);

var _notFound = __webpack_require__("./shared/components/notFound/notFound.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';

// import mapRoutes from 'react-routes-map';

var Routes = [{
	path: '/',
	exact: true,
	component: _home2.default
}, {
	path: '/about',
	component: _about2.default
}, {
	path: '/catalogue',
	component: _catalogue2.default
}, {
	path: '*',
	component: _notFound2.default
}];

exports.default = Routes;

/***/ }),

/***/ "./shared/scss/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"active":"app"};

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-css-modules":
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "source-map-support":
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map