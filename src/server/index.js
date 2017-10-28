// server.js

// BASE SETUP
// ==================================================================
const Express 	= require('express');
let app 		= Express();
const PORT 		= process.env.PORT || 8080;

// const renderString = require('./render');

// HANDLE HTTPS REDIRECTION
// ==================================================================
// if(PORT !== 8080) {
// 	app.use(function(req, res, next) {
// 		if(req.headers['x-forwarded-proto'] === 'https') {
// 			next();
// 		} else {
// 			res.redirect('https://' + req.hostname + req.url);
// 		}
// 	});
// }

// ROUTES
// ==================================================================
app.get('/', (req, res) => {
	res.send('<p>home page</p>');
	console.log(req.method, req.url);
});

app.get('/test', (req, res) => {
res.status(200).send(`<p>test</p>`);
	console.log(req.method, req.url);
});

app.get('/about', (req, res) => {
	res.send('<p>about page</p>');
	console.log(req.method, req.url);
});

app.get('/catalogue', (req, res) => {
	res.send('<p>catalogue page</p>');
	console.log(req.method, req.url);
});

app.get('/catalogue/:name', (req, res) => {
	res.send(`<p>catalogue page: Item: ${req.params.name}</p>`);
	console.log(req.method, req.url, req.params);
});

// START SERVER
// ==================================================================
app.listen(PORT);
console.log('server is running on port:', PORT);