// @ts-nocheck

import {configureStore} from '@reduxjs/toolkit'
import loginReducer from "./reducers/LoginReducer";
import restaurantReducer from "./reducers/RestaurantReducer";
const reducer = {
    loginReducer: loginReducer,
    restaurantReducer: restaurantReducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;
