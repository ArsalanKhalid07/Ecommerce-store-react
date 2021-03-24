import CartActionReducer from "../cart/cart.type";
import {addItemCart} from "../cart/cart.utils";



const INTIAL_STATE = {
    hidden: true,
    cartItems: []
}


const CartReducer = (state = INTIAL_STATE , action ) => {
    switch(action.type) {
        case CartActionReducer.TOGGLE_CARD_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        };
        case CartActionReducer.ADD_ITEM : 
        return {
            ...state,
            cartItems: addItemCart(state.cartItems, action.payload)
        };
        default: 
        return state;
    }
}

export default CartReducer;