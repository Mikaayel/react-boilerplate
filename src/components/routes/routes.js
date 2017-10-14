import React from 'react';

import { Route, Switch } from 'react-router-dom';

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
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Page>
        )
    }
}

export default Routes;