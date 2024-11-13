import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./feature/cart/cartSlice"

//confgure key we want to persist
const cartPersistConfig = {
    key: "cart",
    storage,
    // whitelist: ['cart'] //only cart will be persisted
}

const rootReducer = combineReducers({
    cart: persistReducer( cartPersistConfig, cartReducer)
})


export const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store) 