import React, { Component } from 'react';

import CollectionPreview from './../../Components/Collection-Preview/Collection-Preview.component';

import SHOP_DATA from './Shop.data';

import './Shop.styles.scss';

class ShopPage extends Component {
    state = {
      collections: SHOP_DATA,
    }

    render() { 
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />                        
                    ))
                }
            </div>
        );
    }
}
 
export default ShopPage;