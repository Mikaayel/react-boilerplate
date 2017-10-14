import React from 'react';
import { Route } from 'react-router-dom';

import Item from '../item/item';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import NotFound from '../notFound/notFound';

class Page extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Page;