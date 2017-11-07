// import React from 'react';

// import mapRoutes from 'react-routes-map';

import About from '../about/about';
import Catalogue from '../catalogue/catalogue';
import Home from '../home/home';
import NotFound from '../notFound/notFound';

const Routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/about',
		exact: true,
		component: About
	},
	{
		path: '/catalogue',
		exact: true,
		component: Catalogue
	},
	{
		path: '*',
		component: NotFound
	}
];

export default Routes;