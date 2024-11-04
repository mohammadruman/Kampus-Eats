import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData"; 
import { Link } from "react-router-dom"; 

const Foodcourt = () => {
  const resData = mockData;
  const [searchQuery, setSearchQuery] = useState("");
  const cuisines = resData.data.restaurants.map(restaurant => restaurant.cuisines);
  console.log(cuisines);

  // Function to filter restaurants based on search query
  const filteredRestaurants = resData.data.restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisines.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for Foodcourt or cuisines"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>

      {/* Display filtered restaurants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant-menu/${restaurant.id}`} // Link to menu page with restaurant ID
              className="block" // Ensure the entire card is clickable
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-600">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Foodcourt;
