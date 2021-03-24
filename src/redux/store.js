import { createStore , applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import {composeWithDevTools}  from "redux-devtools-extension"


const middleware = [logger];
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));


export default store;