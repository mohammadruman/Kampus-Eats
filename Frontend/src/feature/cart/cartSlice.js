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
        //adds new item to the cart
        addItemToCart: function( state, action){
            //check if restraun exist
            const index = state.restrauntList.findIndex( res => res.resId === action.payload.resId)
            if(index === -1){
                // first add restraun to cart list
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
                // add item to the restraun items list
                const restraunt = state.restrauntList[index]
                    const item = {
                        itemId : action.payload.itemId,
                        itemName: action.payload.itemName,
                        price: action.payload.price,
                        quantity: 1
                    }
                    restraunt.items.push( item )
            }

            state.totalQuantity++
            state.totalPrice += action.payload.price
            //? deliveryTime
        },
        //increases quantity of existing item by 1
        incItemQuantity: function(state, action){
            const restraunt = state.restrauntList.find( res => res.resId === action.payload.resId)
            const existingItem = restraunt.items.find( item => item.itemId === action.payload.itemId)
            existingItem.quantity +=1
            state.totalQuantity += 1
            state.totalPrice += existingItem.price
        },
        //decreases quantity of existing item by 1
        decFromCart : function (state, action){
            const restraunt = state.restrauntList.find( res => res.resId === action.payload.resId)
            const existingItemIndex = restraunt.items.findIndex( item => item.itemId === action.payload.itemId)
            state.totalQuantity -= 1
            state.totalPrice -= restraunt.items[existingItemIndex].price
            if (restraunt.items[existingItemIndex].quantity === 1){
                //remove item from item list
                restraunt.items.splice(existingItemIndex,1)
            }else{
                restraunt.items[existingItemIndex].quantity --
            }
            //if no items remain in the cart, remvoe teh restraunt from restraunt list
            if (restraunt.items.length === 0 ){
                const index = state.restrauntList.findIndex( res => res.resId === restraunt.resId)
                state.restrauntList.splice( index, 1)
            }
        },
        //empty the cart completely
        clearCart : function( state){
            state.restrauntList = []
        }
    }
})

//export actions
export const { addItemToCart,incItemQuantity, decFromCart, clearCart } = cartSlice.actions

export const selectItems = state => state.cart.items
export const selectTotalPrice = state => state.cart.totalPrice
export const selectTotalQuantity = state => state.cart.totalQuantity
export const selectRestrauntList = state => state.cart.restrauntList
export const selectAllCart = state => state.cart

const selectRestrauntId = (state, restrauntId) => restrauntId

//Filter Items by restraunt (memoized selector)
export const selectItemListByRestrauntId = createSelector([selectRestrauntList, selectRestrauntId ], (resList, restrauntId) => {
    const restraunt = resList.find( res => res.resId === restrauntId)
    return Array.isArray(restraunt?.items) ? restraunt.items : [] 
})

//export the reducer
export default cartSlice.reducer