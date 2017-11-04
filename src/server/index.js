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
import NotFound from '../shared/components/notFound/notFound';
import render from './render';

// BASE SETUP
// ========================================
const PORT = process.env.PORT || 8080;
const app = Express();
sourceMapSupport.install();

console.log('rendering on server side');

// ROUTES SETUP
// ========================================
app.use('/static', Express.static('./dist'));

app.get('*', (req, res) => {
    res.status(200).send(render(
        <Router context={{}} location={req.url}>
            <App/>
        </Router>
    ))
});

// START SERVER
// ========================================
app.listen(PORT);
console.log('server is running on port:', PORT);