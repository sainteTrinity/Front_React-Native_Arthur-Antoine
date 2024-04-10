// @ts-nocheck

import {configureStore} from '@reduxjs/toolkit'
import loginReducer from "./reducers/LoginReducer";
import restaurantReducer from "./reducers/RestaurantReducer";
import newsReducer from "./reducers/NewsReducer";

const reducer = {
    loginReducer: loginReducer,
    restaurantReducer: restaurantReducer,
    newsReducer: newsReducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;
