import React from 'react';

import { Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

import Item from '../item/item';
import NotFound from '../notFound/notFound';

class Page extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Route path='/' exact component={Item}/>
                <Route path='/about' component={NotFound}/>
                <Footer/>
            </div>
        )
    }
}

export default Page;