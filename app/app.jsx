// load react libraries
import React from 'react';
import ReactDOM from 'react-dom';
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
$(document).foundation();

// load custom scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<p>Boiler Plate</p>,
    document.getElementById('app')
);
