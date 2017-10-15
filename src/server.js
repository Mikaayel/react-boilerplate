const Express = require('express');

let app = Express();

app.use(Express.static('dist'));

app.listen(8080, function() {
	console.log('server is running on port: 8080');
});