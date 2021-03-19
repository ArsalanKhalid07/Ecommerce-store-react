import React from "react";
import "./Collection-Item-Style.scss";


const CollectionItem = ( {id, name, price, imageUrl }  ) => (
    <div key={id} className="collection-item"> 
        <div 
            className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>

        </div>   

    </div>
)


export default CollectionItem;