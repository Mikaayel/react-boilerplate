import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import foundation from 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'; // load foundation
$(document).foundation(); // apply foundation method with jquery
import css from './scss/app.scss'; // load custom styles

import Routes from './components/routes/routes';

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
    document.getElementById('root')
);
