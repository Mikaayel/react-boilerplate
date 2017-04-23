import React from 'react';

import Navigation from 'navigation';
import Footer from 'footer';


let Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation/>
                <main>
                    <h1>Main</h1>
                </main>
                <Footer/>
            </div>
        );
    }
});

module.exports = Main;
