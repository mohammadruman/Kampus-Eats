import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../utils/mockData"; // Ensure mockData is an array

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurantId = parseInt(id, 10);

  // Find the restaurant data by ID
  const restaurant = mockData.data.restaurants.find((res) => res.id === restaurantId);

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
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md ">
              <div className="flex flex-col flex-grow">
                <h5 className="font-bold text-lg">{cuisine.name}</h5>
                <p className="font-medium">Price: ₹{cuisine.price}</p>
                <p className="text-gray-700 italic md:italic sm:italic">{cuisine.description}</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Add
              </button>
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
