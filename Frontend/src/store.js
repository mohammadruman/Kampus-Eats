import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./feature/cart/cartSlice"

//confgure key we want to persist
const rootPersistConfig = {
    key: "root",
    storage: storage,
    whitelist: ['cart'] //only cart will be persisted
}

const rootReducer = combineReducers({
    cart: cartReducer
})

const persistedReducer = persistReducer( rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer : {
       cart : cartReducer 
    }
})