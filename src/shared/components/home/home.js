import React from 'react';
import CSSModules from 'react-css-modules';

import style from './home.scss';

const Home = () => {
	return (
		<div>
			<h1>home</h1>
		</div>
	);
};

export default CSSModules(Home, style);