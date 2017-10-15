import React from 'react';
import CSSModules from 'react-css-modules';

import style from './footer.scss';

const Footer = () => {
	return (
		<footer className='row'>
			<h2>Footer</h2>
		</footer>
	);
};

export default CSSModules(Footer, style);