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
				<a href='https://github.com/Mikaayel/react-boilerplate'>GitHub</a>
				<a href='https://www.linkedin.com/in/mika-rehman/'>LinkedIn</a>
			</div>
		</footer>
	);
};

export default CSSModules(Footer, Style);