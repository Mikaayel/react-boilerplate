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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import CSSModules from 'react-css-modules';

// import style from './notFound.scss';

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

exports.default = NotFound;
// export default CSSModules(NotFound, style);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(6);

var _sourceMapSupport = __webpack_require__(7);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _notFound = __webpack_require__(3);

var _notFound2 = _interopRequireDefault(_notFound);

var _render = __webpack_require__(16);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// BASE SETUP
// ========================================
var PORT = process.env.PORT || 8080;
// import fetch from 'node-fetch';

// BASE COMPONENTS
// ========================================
// SERVER SIDE RENDERING

// BASE IMPORTS
// ========================================

var app = (0, _express2.default)();
_sourceMapSupport2.default.install();

console.log('rendering on server side');

// ROUTES SETUP
// ========================================
// const routes = [
//     '/',
//     '/g/:gistId'
// ];

app.use('/static', _express2.default.static('./dist'));

// app.get('/catalogue/:name', (req, res) => {
// 	res.send(`<p>catalogue page: Item: ${req.params.name}</p>`);
// 	console.log(req.method, req.url, req.params);
// });

app.get('*', function (req, res) {
    // const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    // if (!match) {
    //     res.status(404).send(render(<NotFound />));
    //     return;
    // }
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

// // server.js

// // BASE SETUP
// // ==================================================================
// const Express 	= require('express');
// let app 		= Express();
// const PORT 		= process.env.PORT || 8080;

// // ROUTES
// // ==================================================================
// app.get('/', (req, res) => {
// 	res.send('<p>home page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/test', (req, res) => {
// res.status(200).send(`<p>test</p>`);
// 	console.log(req.method, req.url);
// });

// app.get('/about', (req, res) => {
// 	res.send('<p>about page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/catalogue', (req, res) => {
// 	res.send('<p>catalogue page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/catalogue/:name', (req, res) => {
// 	res.send(`<p>catalogue page: Item: ${req.params.name}</p>`);
// 	console.log(req.method, req.url, req.params);
// });

// // START SERVER
// // ==================================================================
// app.listen(PORT);
// console.log('server is running on port:', PORT);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _home = __webpack_require__(9);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(11);

var _about2 = _interopRequireDefault(_about);

var _notFound = __webpack_require__(3);

var _notFound2 = _interopRequireDefault(_notFound);

var _page = __webpack_require__(12);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Style from './scss/app.scss'; // global styles must be imported before components to maintain styling order

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _page2.default,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _notFound2.default })
            )
        )
    )
    // <div style={style}>
    //     <Sidebar>
    //         {
    //             gists ? gists.map(gist => (
    //                     <SidebarItem key={gist.id}>
    //                         <Link to={`/g/${gist.id}`}>
    //                             {gist.description || '[no description]'}
    //                         </Link>
    //                     </SidebarItem>
    //                 )) : (<p>Loading…</p>)
    //         }
    //     </Sidebar>
    //     <Main>
    //         <Route path="/" exact component={Home} />
    //         {
    //             gists && (
    //                 <Route path="/g/:gistId" render={
    //                     ({ match }) => (
    //                         <Gist gist={gists.find(g => g.id === match.params.gistId)} />
    //                     )
    //                 } />
    //             )
    //         }
    //     </Main>
    // </div>
    ;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _home = __webpack_require__(10);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'p',
			null,
			'home'
		)
	);
};

exports.default = (0, _reactCssModules2.default)(Home, _home2.default);
// export default Home;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _footer = __webpack_require__(13);

var _footer2 = _interopRequireDefault(_footer);

var _navigation = __webpack_require__(15);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import CSSModule from 'react-css-modules';

// import style from './page.scss';

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
				this.props.children
			);
		}
	}]);

	return Page;
}(_react2.default.Component);

exports.default = Page;
// export default CSSModule(Page, style);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _footer = __webpack_require__(14);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		{ className: 'row' },
		_react2.default.createElement(
			'h2',
			null,
			'Footer'
		)
	);
};

exports.default = (0, _reactCssModules2.default)(Footer, _footer2.default);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CSSModules from 'react-css-modules';

// import style from './navigation.scss';

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
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							'LOGO'
						)
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
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

exports.default = Navigation;
// export default CSSModules(Navigation, style);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (renderMe) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Tether</title>\n        <style>\n            body {\n                font-family: Helvetica Neue, Arial, sans-serif;\n                margin: 0;\n            }\n            html { box-sizing: border-box; }\n            *, *:before, *:after { box-sizing: inherit; }\n        </style>\n    </head>\n    <body>\n        <div id="root">' + (0, _server.renderToString)(renderMe) + '</div>\n        <script src="/static/client.js"></script>\n    </body>\n</html>';
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map