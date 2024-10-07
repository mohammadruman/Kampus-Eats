import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData"; // Importing named export
import { Link } from "react-router-dom"; // Import Link for navigation

const Foodcourt = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter restaurants based on search query
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>

      {/* Display filtered restaurants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <Link
              key={index}
              to={`/restaurant-menu/${restaurant.id}`} // Link to menu page with restaurant ID
              className="block" // Ensure the entire card is clickable
            >
              <RestaurantCard
                name={restaurant.name}
                campusname={restaurant.campusName}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                price={restaurant.price}
              />
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
