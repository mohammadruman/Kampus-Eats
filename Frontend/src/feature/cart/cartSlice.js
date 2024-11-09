import { createSelector, createSlice } from "@reduxjs/toolkit";


// Each item will contain below contents
// let restrauntList = [
//     {
//         resId: '',
//         resName: 'TEK',
//         deliveryTime: 0 //?
//         items:[
//             {
//                 itemId : 0,
//                 itemName: '',
//                 price: 0,
//                 quantity:0
//             }
//         ]
//     }
// ]

const cart = {
    restrauntList: [],
    totalPrice: 0,
    totalQuantity: 0 ,  
    totalDeliveryTime:0, //?
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cart,
    reducers:{
        // addToCart : function( state, action){
        //     //check if the item exists
        //     const existingItem = state.items.find( item => {
        //         if ( item.restrauntId === action.payload.restrauntId) return item.itemId === action.payload.itemId
        //         return false
        //     })
        //     if (existingItem){
        //         existingItem.quantity++
        //     }else{
        //         state.items.push({...action.payload, quantity: 1})
        //     }
        //     state.totalQuantity++
        //     state.totalPrice += action.payload.price
        //     //? deliverytime
        // },
        addToCart: function( state, action){
            //check if restraun exist
            const index = state.restrauntList.findIndex( res => res.resId === action.payload.resId)
            if(index === -1){
                const restraunt = {
                    resId : action.payload.resId,
                    resName: action.payload.resName,
                    deliveryTime: action.payload.deliveryTime,
                    items: []
                }
                const item = {
                    itemId : action.payload.itemId,
                    itemName: action.payload.itemName,
                    price: action.payload.price,
                    quantity: 1
                }
                restraunt.items.push(item)
                state.restrauntList.push(restraunt)
            }else{
                const restraunt = state.restrauntList[index]
                const itemIndex = restraunt.items.findIndex( item => item.itemId === action.payload.itemId )
                if(itemIndex === -1){
                    const item = {
                        itemId : action.payload.itemId,
                        itemName: action.payload.itemName,
                        price: action.payload.price,
                        quantity: 1
                    }
                    restraunt.items.push( item )
                }else{
                    restraunt.items[index].quantity++
                }
            }

            state.totalQuantity++
            state.totalPrice += action.payload.price
            //? deliveryTime
        },
        // removeFromCart : function( state, action){
        //     //check if the item exists
        //     const existingItemIndex = state.items.findIndex( item => {
        //         if ( item.restrauntId === action.payload.restrauntId) return item.itemId === action.payload.itemId
        //         return false
        //     })
        //     if (existingItemIndex !== -1){
        //         let existingItem = state.items[existingItemIndex]
        //         if (existingItem.quantity > 1) existingItem.quantity -- 
        //         //completely remove the item
        //         else state.items.splice(existingItemIndex,1)
        //         state.totalQuantity -= 1
        //         state.totalPrice -= existingItem.price
        //     }
        // },
        removeFromCart : function (state, action){
            const restraunt = state.restrauntList.find( res => res.resId === action.payload.resId)
            const existingItem = restraunt.items( item => item.itemId === action.payload.itemId)
            existingItem.quantity --
            state.totalQuantity -= 1
            state.totalPrice -= existingItem.price
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
export const selectRestrauntList = state => state.cart.restrauntList

const selectRestrauntId = (state, restrauntId) => restrauntId

//Filter Items by restraunt (memoized selector)
export const selectItemListByRestrauntId = createSelector([selectRestrauntList, selectRestrauntId ], (resList, restrauntId) => {
    const restraunt = resList.find( res => res.resId === restrauntId)
    return Array.isArray(restraunt.items) ? restraunt.items : [] 
})

//export the reducer
export default cartSlice.reducer