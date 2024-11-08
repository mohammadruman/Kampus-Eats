import { createSelector, createSlice } from "@reduxjs/toolkit";


// Each item will contain below contents
// itemId: 0,    
// restrauntId : 0,
// restrauntName: "test" , 
// itemName: "foodBlog",
// quantity:0,
// price:0,
// deliveryTime: 0,  //? 

const cart = {
    items :[],
    totalPrice: 0,
    totalQuantity: 0 ,  
    totalDeliveryTime:0, //?
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cart,
    reducers:{
        addToCart : function( state, action){
            //check if the item exists
            const existingItem = state.items.find( item => {
                if ( item.restrauntId === action.payload.restrauntId) return item.itemId === action.payload.itemId
                return false
            })
            if (existingItem){
                existingItem.quantity++
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
            state.totalQuantity++
            state.totalPrice += action.payload.price
            //? deliverytime
        },
        removeFromCart : function( state, action){
            //check if the item exists
            const existingItemIndex = state.items.findIndex( item => {
                if ( item.restrauntId === action.payload.restrauntId) return item.itemId === action.payload.itemId
                return false
            })
            if (existingItemIndex !== -1){
                let existingItem = state.items[existingItemIndex]
                if (existingItem.quantity > 1) existingItem.quantity -- 
                //completely remove the item
                else state.items.splice(existingItemIndex,1)
                state.totalQuantity -= 1
                state.totalPrice -= existingItem.price
            }
        },
        clearCart : function( state){
            state.items = []
        }
    }
})

//export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectItems = state => state.cart.items
export const selectTotalPrice = state => state.cart.totalPrice
export const selectTotalQuantity = state => state.cart.totalQuantity

const selectRestrauntId = (state, restrauntId) => restrauntId

//Filter Items by restraunt (memoized selector)
export const selectItemListByRestrauntId = createSelector([selectItems, selectRestrauntId ], (items, restrauntId) => {
    if (items.length === 0) return []
    else{
        //filter list by restraunt id
        const itemList = items.filter( item => item.restrauntId === restrauntId)
        return itemList
    }
    
})

//export the reducer
export default cartSlice.reducer