import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../utils/mockData"; // Ensure mockData is an array
import  { useDispatch, useSelector } from 'react-redux';
import { addToCart , removeFromCart, selectItemListByRestrauntId} from '../feature/cart/cartSlice';
import PlusMinusButton from "./PlusMinusButton"


const MenuPage = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const dispatch = useDispatch()
  const restaurantId = parseInt(id, 10);
  const restaurant = mockData.data.restaurants.find((res) => res.id === restaurantId);
  //Fetch all items in CART for a specific restraunt
  // const cartItemList = useSelector(state => selectItemsByRestrauntId(state, restaurantId))
  const cartItemList = useSelector(state => selectItemListByRestrauntId(state, restaurantId))

  function cartItemQuantity( itemId ){
    // console.log("fetched item list",cartItemList)
    const item = cartItemList.find( item => item.itemId === itemId)
    if (item) return item.quantity
    else return 0 
  }
  

  //function Add to cart
  function handleAddToCart(e , cuisine, itemId){
    e.preventDefault()
    const newProduct = {
      restrauntId: restaurantId,
      itemId: itemId,
      restrauntName: restaurant.name,
      itemName: cuisine.name,
      price: cuisine.price,
      deliveryTime: restaurant.deliveryTime
    }
    console.log(addToCart(newProduct))
   dispatch( addToCart(newProduct))
  }

  //handle remove from cart
  function handleRemoveFromCart(e, restrauntId, itemId){
    e.preventDefault()
    dispatch(removeFromCart({restrauntId, itemId}))
  }

  

  // Find the restaurant data by ID

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
      <h3 className="text-xl mb-2">Campus: {restaurant.campusName}</h3>
      <p className="text-gray-600 mb-4">Rating: {restaurant.overallRating} ⭐</p>
      <h4 className="text-lg font-semibold mb-3">Menu:</h4>

      <div className="space-y-4 w-10/12 mx-auto">
        {restaurant.cuisines.map((cuisine, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col flex-grow">
              <h5 className="font-bold text-lg">{cuisine.name}</h5>
              <p className="font-medium">Price: ₹{cuisine.price}</p>
              <p className="text-gray-700">{cuisine.description}</p>
            </div>
            {
              cartItemQuantity(index) > 0 ? 
              <PlusMinusButton 
                cuisine={cuisine}
                restaurantId={restaurantId}
                index={index}
                addFn={e => handleAddToCart(e, cuisine, index)} 
                removeFn={e => handleRemoveFromCart(e,restaurantId, index)} 
                value={cartItemQuantity(index)}
              /> : (
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={e => handleAddToCart(e, cuisine, index)}>
              Add
            </button>
              )
            }
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
