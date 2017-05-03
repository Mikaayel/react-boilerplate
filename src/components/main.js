import React from 'react';
import {
    HashRouter as Router,
    Route,
    Match,
    Link,
    Switch
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
                        <Route path="/" exact={true} component={Home} />
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
};
