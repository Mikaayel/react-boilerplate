import React from 'react';
import store from '../../store/store';

import Item from '../item/item'

class Home extends React.Component {
    render() {
        return (
            <div>
                {store.map((item) => {
                    <Item key={item.id} {...item}/>
                })}
            </div>
        )
    }
}

export default Home;