import React from 'react';
import CSSModules from 'react-css-modules';

import style from './about.scss';

const About = () => {
	return (
		<div className='row'>
			<h1>About</h1>
		</div>
	);
};

export default CSSModules(About, style);