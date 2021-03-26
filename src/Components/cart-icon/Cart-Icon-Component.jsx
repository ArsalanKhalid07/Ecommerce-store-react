import React from "react";
import "./Cart-Icon-Styles.scss";
import {ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import  { toggleCardHidden } from "../../redux/cart/Cart-Action";
import {selectCartItemsCount } from "../../redux/cart/cart.selectors";




const CartIcon = ({toggleCardHidden,cartCount}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
)
    

const mapsStateToProps = state => ({
    cartCount: selectCartItemsCount(state) 
})

const mapsDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(mapsStateToProps,mapsDispatchToProps)(CartIcon);