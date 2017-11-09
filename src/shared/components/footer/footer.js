import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './footer.scss';

const Footer = () => {
	return (
		<footer className='row' styleName='container'>
			<div className='third'></div>
			<div className='third' styleName='brand'>
				<a href='https://www.mikarehman.com'>made by mika</a>
			</div>
			<div className='third' styleName='social'>
				<span>linkedin</span>
				<span>github</span>
			</div>
		</footer>
	);
};

export default CSSModules(Footer, Style);