const express = require('express');
const app = express();

// port value set by heroku or localhost
const port = process.env.PORT || 3000;

// redirect all https request to http
// app.use(function(req, res, next) {
//     if(req.headers['x-forwarded-proto'] === 'https') {
//         res.redirect('http://' + req.hostname + req.url);
//     }
//     else {
//         next();
//     }
// });

app.use(express.static('public'));

app.listen(port, function() {
    console.log(`Express server is running on port ${port}`);
});
