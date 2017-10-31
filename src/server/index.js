// SERVER SIDE RENDERING

// BASE IMPORTS
// ========================================
import Express from 'express';
import React from 'react';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
// import fetch from 'node-fetch';

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
// const routes = [
//     '/',
//     '/g/:gistId'
// ];

app.use('/static', Express.static('./dist'));


// app.get('/catalogue/:name', (req, res) => {
// 	res.send(`<p>catalogue page: Item: ${req.params.name}</p>`);
// 	console.log(req.method, req.url, req.params);
// });

app.get('*', (req, res) => {
    // const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    // if (!match) {
    //     res.status(404).send(render(<NotFound />));
    //     return;
    // }
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



// // server.js

// // BASE SETUP
// // ==================================================================
// const Express 	= require('express');
// let app 		= Express();
// const PORT 		= process.env.PORT || 8080;

// // ROUTES
// // ==================================================================
// app.get('/', (req, res) => {
// 	res.send('<p>home page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/test', (req, res) => {
// res.status(200).send(`<p>test</p>`);
// 	console.log(req.method, req.url);
// });

// app.get('/about', (req, res) => {
// 	res.send('<p>about page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/catalogue', (req, res) => {
// 	res.send('<p>catalogue page</p>');
// 	console.log(req.method, req.url);
// });

// app.get('/catalogue/:name', (req, res) => {
// 	res.send(`<p>catalogue page: Item: ${req.params.name}</p>`);
// 	console.log(req.method, req.url, req.params);
// });

// // START SERVER
// // ==================================================================
// app.listen(PORT);
// console.log('server is running on port:', PORT);