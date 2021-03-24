import React from "react";
import "./Cart-Icon-Styles.scss";
import {ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import toggleCardHidden from "../../redux/cart/Cart-Action";



const CartIcon = ({toggleCardHidden}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">2</span>
    </div>
)


const mapsDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(null,mapsDispatchToProps)(CartIcon);