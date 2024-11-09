import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../utils/mockData"; // Ensure mockData is an array
import  { useDispatch, useSelector } from 'react-redux';
import { addToCart , removeFromCart, selectItemListByRestrauntId} from '../feature/cart/cartSlice';
import PlusMinusButton from "./PlusMinusButton"


const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurantId = parseInt(id, 10);
  const restaurant = mockData.data.restaurants.find((res) => res.id === restaurantId);
  const dispatch = useDispatch()
  //Fetch all items in CART for a specific restraunt
  const cartItemList = useSelector(state => selectItemListByRestrauntId(state, restaurantId))

  function cartItemQuantity( itemId ){
    const item = cartItemList.find( item => item.itemId === itemId)
    return item?.quantity ?? 0
  }
  

  //function Add to cart
  function handleAddToCart(e , cuisine, itemId){
    e.preventDefault()
    const newProduct = {
      resId: restaurantId,
      itemId: itemId,
      resName: restaurant.name,
      itemName: cuisine.name,
      price: cuisine.price,
    }
   dispatch( addToCart(newProduct))
  }

  //handle remove from cart
  function handleRemoveFromCart(e, resId, itemId){
    e.preventDefault()
    dispatch(removeFromCart({resId, itemId}))
  }

  

  // Find the restaurant data by ID

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  // Filter cuisines based on search query
  const filteredCuisines = restaurant.cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
      <h3 className="text-xl mb-2">Campus: {restaurant.campusName}</h3>
      <p className="text-gray-600 mb-4">Rating: {restaurant.overallRating} ⭐</p>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for Foodcourt or cuisines"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-6/12"
        />
      </div>
      <h4 className="text-lg font-semibold mb-3">Menu:</h4>

      <div className="space-y-4 w-10/12 mx-auto">
        {filteredCuisines.length > 0 ? (
          filteredCuisines.map((cuisine, index) => (
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
          ))
        ) : (
          <p className="text-gray-500">No cuisines match your search.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
