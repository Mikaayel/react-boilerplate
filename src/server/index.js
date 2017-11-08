// SERVER SIDE RENDERING

// BASE IMPORTS
// ========================================
import Express from 'express';
import React from 'react';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';

// BASE COMPONENTS
// ========================================
import App from '../shared/App';
import render from './render';

// BASE SETUP
// ========================================
const PORT = process.env.PORT || 8080;
const app = Express();
sourceMapSupport.install();

import NotFound from '../shared/components/notFound/notFound';
import Routes from '../shared/components/routes/routes';

console.log('rendering on server side');

// ROUTES SETUP
// ========================================
app.use('/dist', Express.static('./dist'));

app.get('*', (req, res) => {

	const match = Routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (match) {
		res.status(200).send(render(
			<Router context={{}} location={req.url}>
				<App />
			</Router>
		));
	} else {
		res.status(404).send(render(<NotFound />));
		return;
	}

});

// START SERVER
// ========================================
app.listen(PORT);
console.log('server is running on port:', PORT);