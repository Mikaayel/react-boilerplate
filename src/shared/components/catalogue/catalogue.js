import React from 'react';
import CSSModules from 'react-css-modules';

import Style from './catalogue.scss';

const Catalogue = (props) => {
	console.log(props);
	return(
		<div className='row'>
			<h1>Catalogue</h1>
			{props.match.params && <p>{props.match.params.name}</p>}
		</div>
	);
};

export default CSSModules(Catalogue, Style);