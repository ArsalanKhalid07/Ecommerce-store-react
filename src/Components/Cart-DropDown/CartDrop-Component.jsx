import React from "react";
import CustomButton from "../Custom-Button/Custom-Button-Component";
import "../Cart-DropDown/CartDrop-Styles.scss";
import  CartItem from "../cart-item/Cart-Item-Component";
import {connect} from "react-redux";


const CartDrop = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(
                    cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                )
            } 
        </div>
        <CustomButton>
            Add To Cart
        </CustomButton>
    </div>
)


const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})  

export default connect(mapStateToProps)(CartDrop);