import React, { useEffect } from 'react';
import './Collection-item.styles.scss';

const CollectionItem = ({id,imageUrl,price,name}) => {
    useEffect(()=>{
        console.log('propsss',imageUrl,price,name)
    })

    return(
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
        </div>
    )
}
 
export default CollectionItem;