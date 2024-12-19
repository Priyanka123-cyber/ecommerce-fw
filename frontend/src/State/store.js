import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import ReviewReducer from "./Review/Reducer";


const rootReducers = combineReducers({
        auth: authReducer, // Handles authentication-related state
        products: customerProductReducer, // Manages state for products visible to the customer
        cart: cartReducer, // Tracks the state of items in the shopping cart
        order: orderReducer, // Handles state for orders placed by users
        review: ReviewReducer, // Manages state for product reviews
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))