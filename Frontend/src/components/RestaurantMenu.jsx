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
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 py-10 px-2 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-8 text-center drop-shadow-sm">{restaurant.name}</h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-lg px-6 py-3 rounded-full border-2 border-orange-200 bg-white/90 text-orange-700 placeholder-orange-300 shadow focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-6">
          {filteredCuisines.length > 0 ? (
            filteredCuisines.map((cuisine, index) => (
              <div key={index} className="bg-white/90 border border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-orange-500 mb-1">{cuisine.name}</h2>
                  <p className="font-medium text-orange-400 mb-1">Price: ₹{cuisine.price}</p>
                  <p className="text-orange-300 text-sm mb-2">{cuisine.description}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
                  {cartItemQuantity(index) > 0 ? (
                    <PlusMinusButton 
                      resId={restaurantId}
                      itemId={index}
                      quantity={cartItemQuantity(index)}
                    />
                  ) : (
                    <button
                      className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 hover:from-orange-500 hover:to-pink-500 transition-all duration-200"
                      onClick={(e) => handleAddToCart(e, cuisine, index)}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-orange-400 text-center">No cuisines match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
