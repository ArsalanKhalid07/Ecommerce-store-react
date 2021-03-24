import React from "react";
import "./Collection-Item-Style.scss";
import CustomButton from "../Custom-Button/Custom-Button-Component";
import {connect} from "react-redux";
import { AddItem } from "../../redux/cart/Cart-Action";

const CollectionItem = ( {item, AddItem }  ) =>  {

    const {imageUrl, name, price }  = item;

     return (
    <div  className="collection-item"> 
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
        <CustomButton  inverted onClick={() => AddItem(item)}  >
            Add To Card    
        </CustomButton>

    </div>
)
}

const mapDisatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null,mapDisatchToProps)(CollectionItem);