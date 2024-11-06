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
      <h2 className="text-2xl font-bold mb-2 mr-28">{restaurant.name}</h2>
      <h3 className="text-xl mb-2 mr-28">Campus: {restaurant.campusName}</h3>
      <p className="text-gray-600 text-lg mb-4 mr-28">Rating: {restaurant.overallRating}⭐</p>

      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <div className='max-w-4xl w-full'>
          <input
            type="text"
            placeholder="Search for Foodcourt or cuisines"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-zinc-600 rounded-md px-4 py-2  w-full max-w-4xl outline-none focus:border-cyan-800"
          />
        </div>
      </div>

      <h3 className="font-medium text-2xl text-center mb-4 mr-36 ">Menu</h3>
      <hr className='max-w-screen h-[4px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-zinc-500' />

      {/* Menu list */}
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {filteredCuisines.length > 0 ? (
          filteredCuisines.map((cuisine, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-cyan-100 rounded-lg shadow-md mb-4 w-full hover:shadow-md hover:shadow-gray-500">
              {/* Cuisine details */}
              <div className="flex-grow ">
                <h5 className="font-bold text-lg">{cuisine.name}</h5>
                <p className="font-medium">Price: ₹{cuisine.price}</p>
                <p className="text-gray-700 italic md:italic sm:italic">{cuisine.description}</p>
              </div>

              {/* Add to Cart button */}
              <div className="flex-shrink px-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-light hover:bg-blue-600 w-28 text-center">
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No cuisines match your search.</p>
        )}
      </div>
    </div>


  );
};

export default MenuPage;
