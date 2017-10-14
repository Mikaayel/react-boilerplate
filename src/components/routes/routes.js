import React from 'react';

import { Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';

import Item from '../item/item';
import NotFound from '../notFound/notFound';
import Page from '../page/page';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Page>
                    <Route path='/' exact component={Item}/>
                    <Route path='/about' component={NotFound}/>
                </Page>
            </div>
        )
    }
}

export default Routes;