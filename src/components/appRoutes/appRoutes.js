import React from 'react';


import Page from '../page/page';
import Routes from '../routes/routes';

class AppRoutes extends React.Component {
    render() {
        return (
            <Router>
                <Routes/>
            </Router>
        );
    }
};

export default AppRoutes;