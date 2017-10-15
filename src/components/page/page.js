import React from 'react';
import CSSModule from 'react-css-modules';

import style from './page.scss';

import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

class Page extends React.Component {
	render() {
		return (
			<div>
				<Navigation/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export default CSSModule(Page, style);