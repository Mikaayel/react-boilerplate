import React from 'react';
import ReactDOM from 'react-dom';

import css from './scss/app.scss';

import Navigation from 'navigation';

ReactDOM.render(
    <div>
        <h1>Header One</h1>
        <Navigation/>
    </div>,
    document.getElementById('root')
);
