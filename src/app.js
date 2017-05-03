import React from 'react';
import ReactDOM from 'react-dom';

import foundation from 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'; // load foundation
$(document).foundation(); // apply foundation method with jquery

import css from './scss/app.scss'; // load custom styles

import Main from 'main';

ReactDOM.render(
    <div>
        <Main/>
    </div>,
    document.getElementById('root')
);
