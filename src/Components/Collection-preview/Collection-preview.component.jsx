import React from 'react';
import CollectionItem from '../Collection-item/Collection-item.component';
import './Collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            { items.filter((item, index) => index < 4).map(({id,...otherItemProps})=> (
                //  console('otherItemProps',prop)
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)


export default CollectionPreview;