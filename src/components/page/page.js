import React from 'react';

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

export default Page;