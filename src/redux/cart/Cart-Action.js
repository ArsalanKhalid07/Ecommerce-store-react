import CartActionReducer from "../cart/cart.type";



export const toggleCardHidden = () =>  ({
    type:CartActionReducer.TOGGLE_CARD_HIDDEN


})

export const AddItem = item => ({
    type:CartActionReducer.ADD_ITEM,
    payload:item
}) 

