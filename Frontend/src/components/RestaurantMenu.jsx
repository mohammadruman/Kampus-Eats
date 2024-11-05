import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../utils/mockData"; // Ensure mockData is an array
import  { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/cartSlice';

const MenuPage = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const dispatch = useDispatch()
  const restaurantId = parseInt(id, 10);

  //function Add to cart
  function handleAddToCart(e , cuisine){
    e.preventDefault()
    const newProduct = {
      id: cuisine.id,
      name: cuisine.name,
      price: cuisine.price
    }
   dispatch( addToCart(newProduct))
  }

  // Find the restaurant data by ID
  const restaurant = mockData.data.restaurants.find((res) => res.id === restaurantId);

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
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={e => handleAddToCart(e, cuisine)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
