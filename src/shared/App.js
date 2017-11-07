import React from 'react';
import { Route, Switch } from 'react-router-dom';

// eslint-disable-next-line
import Style from './scss/app.scss'; // global styles must be imported before components to maintain styling order

import Routes from './components/routes/routes';
import Page from './components/page/page';

class App extends React.Component {
	render() {
		const routeComponents = Routes.map(
			({ path, component, exact}, key) => { 
				return <Route path={path} component={component} exact={exact} key={key} />; 
			}
		);
		return(
			<div>
				<Page>
					<Switch>
						{routeComponents}
					</Switch>
				</Page>
			</div>
		);
	}
};

export default App;