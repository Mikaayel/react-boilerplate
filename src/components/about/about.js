import React from 'react';
import CSSModules from 'react-css-modules';

import style from './about.scss';

const About = () => {
	return (
		<div>
			<p>About</p>
		</div>
	);
};

export default CSSModules(About, style);