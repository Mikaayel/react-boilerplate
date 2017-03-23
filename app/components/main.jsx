// react components
import React from 'react';

// custom components


// modular components


var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="">
                <div className="">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
