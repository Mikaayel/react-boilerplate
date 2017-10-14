import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Navigation from '../navigation/navigation';

import Page from '../page/page';
import Home from '../home/home';
import About from '../about/about';
import Item from '../item/item';
import NotFound from '../notFound/notFound';

class Routes extends React.Component {
    render() {
        return (
            <Page>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/404' component={NotFound}/>
                <Redirect path='*' to='/404'/>
            </Page>
        )
    }
}

export default Routes;