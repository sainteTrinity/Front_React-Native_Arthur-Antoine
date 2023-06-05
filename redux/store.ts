// @ts-nocheck

import {configureStore} from '@reduxjs/toolkit'
import loginReducer from "./reducers/LoginReducer";

const reducer = {
    loginReducer: loginReducer,
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;
