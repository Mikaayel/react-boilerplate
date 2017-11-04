import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Style from './navigation.scss';

class Navigation extends React.Component {
	render() {
		return (
			<nav styleName='navigation'>
				<div styleName='container'></div>
				<div styleName='container'>
					<h1 styleName='logo'>LOGO</h1>
				</div>
				<div styleName='container'>
					<ul styleName='links'>
						<li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
						<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
					</ul>
				</div>
			</nav>
		);
	}
};

export default CSSModules(Navigation, Style);