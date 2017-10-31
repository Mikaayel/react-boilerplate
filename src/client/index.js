import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'whatwg-fetch';
console.log('rendering on client side');
hydrate((
    <Router>
        <App />
    </Router>
), document.getElementById('app'));