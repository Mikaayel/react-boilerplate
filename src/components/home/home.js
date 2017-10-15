import React from 'react';
import CSSModules from 'react-css-modules';

import style from './home.scss';

const Home = () => {
	return (
		<div>
			<p>home</p>
		</div>
	);
};

export default CSSModules(Home, style);