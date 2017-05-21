import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from 'home';

import Navigation from 'navigation';
import Footer from 'footer';

module.exports = class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
						<main>
							<Route exact path="/" component={Home} />
						</main>
                    <Footer/>
                </div>
            </Router>
        );
    }
};
