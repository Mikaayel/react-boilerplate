import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './notFound.scss';

const NotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<h2>Page not found</h2>
		</div>
	);
};

export default CSSModules(NotFound, Style);