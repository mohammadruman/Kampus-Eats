import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{
        id: 1,
        name: '',
        quantity: 0,
        price: 0
    },
    {
        id: 2,
        name: '',
        quantity: 0,
        price: 0
    }],
    totalPrice: 0,
    totalQuantity: 0    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart : function( state, action){
            const existingItem = state.items.find( item => item.id === action.payload.id)
            if (existingItem){
                existingItem.quantity++
            }else{
                state.items.push({... action.payload, quantity: 1})
            }
            state.totalQuantity++
            state.totalPrice += action.payload.price
        },
        removeFromCart : function( state, action){
            const existingItemIndex = state.items.find( item => item.id === action.payload.id)
            if (existingItemIndex === -1){
                const existingItem = state.items[existingItemIndex]
                state.totalQuantity -= existingItem.quantity
                state.totalPrice -= (existingItem.quantity * existingItem.price)
                state.items.splice(existingItemIndex, 1)
            }
        },
        updateItemQuantity : function(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem){
                if ( action.payload.sign === "-"){
                    const difference = action.payload.quantity - existingItem.quantity;
                    existingItem.quantity = action.payload.quantity;
                    state.totalQuantity += difference;
                    state.totalPrice += difference * existingItem.price;
                }else{
                    const difference = action.payload.quantity + existingItem.quantity;
                    existingItem.quantity = action.payload.quantity;
                    state.totalQuantity += difference;
                    state.totalPrice += difference * existingItem.price;
                }
            }
        },
        clearCart : function( state){
            state.items = []
        }
    }
})

//export actions
export const { addToCart, removeFromCart, updateItemQuantity, clearCart } = cartSlice.actions

//export the reducer
export default cartSlice.reducer