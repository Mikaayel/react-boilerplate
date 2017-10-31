import React from 'react';
import { NavLink } from 'react-router-dom';
// import CSSModules from 'react-css-modules';

// import style from './navigation.scss';

class Navigation extends React.Component {
	render() {
		return (
			<nav>
				<div>
					<ul>
						<li>LOGO</li>
					</ul>
				</div>
				<div>
					<ul>
						<li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
						<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
					</ul>
				</div>
			</nav>
		);
	}
};

export default Navigation;
// export default CSSModules(Navigation, style);