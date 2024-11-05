import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./feature/cart/cartSlice"

//confgure key we want to persist
const cartPersistConfig = {
    key: "cart",
    storage: storage,
    whitelist: ['cart'] //only cart will be persisted
}

const rootReducer = combineReducers({
    cart: persistReducer( cartPersistConfig, cartReducer)
})


export const store = configureStore({
    reducer : rootReducer,
})

export const persistor = persistStore(store) 