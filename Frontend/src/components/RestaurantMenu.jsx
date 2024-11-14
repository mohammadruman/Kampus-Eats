import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../utils/mockData"; // Ensure mockData is an array
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectItemListByRestrauntId } from '../feature/cart/cartSlice';
import PlusMinusButton from "./PlusMinusButton";

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurantId = parseInt(id, 10);
  const restaurant = mockData.data.restaurants.find((res) => res.id === restaurantId);
  const dispatch = useDispatch();
  
  // Fetch all items in CART for a specific restaurant
  const cartItemList = useSelector(state => selectItemListByRestrauntId(state, restaurantId));

  function cartItemQuantity(itemId) {
    const item = cartItemList.find(item => item.itemId === itemId);
    return item?.quantity ?? 0;
  }

  // Function to add a new item to the cart
  function handleAddToCart(e, cuisine, itemId) {
    e.preventDefault();
    const newProduct = {
      resId: restaurantId,
      itemId: itemId,
      resName: restaurant.name,
      itemName: cuisine.name,
      price: cuisine.price,
    };
    dispatch(addItemToCart(newProduct));
  }

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  const filteredCuisines = restaurant.cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className='text-lg font-bold py-3'>{restaurant.name}</h1>
      <input
        type="text"
        placeholder="Search cuisines..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 my-4 rounded"
      />
      <div className="flex flex-col space-y-4">
        {filteredCuisines.length > 0 ? (
          filteredCuisines.map((cuisine, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold">{cuisine.name}</h2>
              <div>
                <p className="font-medium">Price: ₹{cuisine.price}</p>
                <p className="text-gray-700">{cuisine.description}</p>
              </div>
              <div className="flex justify-center items-center mt-4">
              {cartItemQuantity(index) > 0 ? (
                <PlusMinusButton 
                  resId={restaurantId}
                  itemId={index}
                  quantity={cartItemQuantity(index)}
                />
              ) : (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={(e) => handleAddToCart(e, cuisine, index)}
                >
                  Add
                </button>
              )}
              </div>
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
