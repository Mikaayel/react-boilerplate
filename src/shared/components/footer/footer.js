import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './footer.scss';

const Footer = () => {
	return (
		<footer>
			<h2>Footer</h2>
		</footer>
	);
};

export default CSSModules(Footer, Style);