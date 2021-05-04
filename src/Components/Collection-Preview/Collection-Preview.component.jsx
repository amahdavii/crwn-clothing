import React from 'react';
import CollectionItem from './../Collection-Item/Collection-Item.component';

import './Collection-Preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);
 
export default CollectionPreview;