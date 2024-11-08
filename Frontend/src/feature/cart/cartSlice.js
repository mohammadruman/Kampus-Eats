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
            console.log("state items", state)
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

export const selectItems = state => state.cart.items
export const selectTotalPrice = state => state.cart.totalPrice
export const selectTotalQuantity = state => state.cart.totalQuantity

const selectRestrauntId = (state, restrauntId) => restrauntId
const selectItemId = (state, itemId) => itemId

//Filter Items by restraunt (memoized selector)
export const selectItemListByRestrauntId = createSelector([selectItems, selectRestrauntId ], (items, restrauntId) => {
    if (items.length === 0) return []
    else{
        //filter list by restraunt id
        const itemList = items.filter( item => item.restrauntId === restrauntId)
        return itemList
    }
    
})
// export const selectItemListByRestrauntId = (state, restrauntId) => {
//     console.log("state:",state)
//     if (state.cart.items.length === 0) return []
//     else{
//         const itemsList = state.cart.items.filter( item => item.restrauntId === restrauntId)
//         return itemsList
//     } 
// }

//get specific item with itemId in a specific restraunt
// export const selectItemByIdAndRestraunt = createSelector([selectItemsByRestrauntId, selectItemId], (itemList, itemId) => {
//     return itemList.find( item => item.itemId === itemId)
// }) 



//export the reducer
export default cartSlice.reducer