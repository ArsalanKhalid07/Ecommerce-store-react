import CartActionReducer from "../cart/cart.type";
const INTIAL_STATE = {
    hidden: true,
}



const CartReducer = (state = INTIAL_STATE , action ) => {
    switch(action.type) {
        case CartActionReducer.TOGGLE_CARD_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        }
        default: 
        return state;
    }
}

export default CartReducer;