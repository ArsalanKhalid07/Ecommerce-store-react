export const addItemCart = (cartItems, cartItemsToAdd) => {
    const exitingItems = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );


    if(exitingItems) {
       return (
        cartItems.map( cartItem =>
            cartItem.id === cartItemsToAdd.id
             ? {...cartItem , quantity:cartItem.quantity + 1 }
             : cartItem  
        )
       ) 
    };


    return [...cartItems, {...cartItemsToAdd , quantity: 1 }]
 


}