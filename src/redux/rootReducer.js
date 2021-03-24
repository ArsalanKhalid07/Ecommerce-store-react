import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import  CartReducer from "./cart/Cart-Reducer"; 



export default combineReducers({
    user:UserReducer,
    cart:CartReducer
}) 