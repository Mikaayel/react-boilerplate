import React from 'react';
import {NavLink} from 'react-router-dom';

module.exports = class Navigation extends React.Component {
    render() {
        return(
            <nav>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Boilerplate</li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><NavLink to="/">Home</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
