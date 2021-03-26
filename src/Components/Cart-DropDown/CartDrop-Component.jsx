import React from "react";
import CustomButton from "../Custom-Button/Custom-Button-Component";
import "../Cart-DropDown/CartDrop-Styles.scss";
import {connect} from "react-redux";
import {selectCartItems } from "../../redux/cart/cart.selectors";
import  CartItem from "../cart-item/Cart-Item-Component";

 

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


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)

})  

export default connect(mapStateToProps)(CartDrop);