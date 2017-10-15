import React from 'react';
import {NavLink} from 'react-router-dom';

module.exports = class Navigation extends React.Component {
	render() {
		return(
			<nav>
				<div className="row">
					<div className="small-12 medium-10 medium-centered">
						<div className="top-bar">
							<div className="top-bar-left">
								<ul className="menu">
									{/*<li><NavLink exact to="/"><ISVG className="logo--svg" src={logoSVG}></ISVG></NavLink></li>*/}
								</ul>
							</div>
							<div className="top-bar-right">
								<ul className="menu">
									<li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
									<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};
