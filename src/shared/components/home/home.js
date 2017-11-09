import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './home.scss';

const Home = () => {
	return (
		<div className='row'>
			<h1>Home</h1>
		</div>
	);
};

export default CSSModules(Home, Style);