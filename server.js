const Express = require('express');
const Router = require('react-router');

let app = Express();
const PORT = process.env.PORT || 8080;

/** forward http to https */
// app.use(function(req, res, next) {
// 	if(req.headers['x-forwarded-proto'] === 'https') {
// 		next();
// 	} else {
// 		res.redirect('https://' + req.hostname + req.url);
// 	}
// });

app.get('/*', (req, res) => {
	res.render('index');
});

// app.use(Express.static('dist'));

app.listen(PORT, function() {
	console.log(`Express server is running on port ${PORT}`);
})