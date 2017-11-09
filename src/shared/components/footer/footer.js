import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './footer.scss';

const Footer = () => {
	return (
		<footer className='row' styleName='container'>
			<div styleName='brand'>
				<h2>made by mika</h2>
			</div>
			<div styleName='social'>
				<span>linkedin</span>
				<span>github</span>
			</div>
		</footer>
	);
};

export default CSSModules(Footer, Style);