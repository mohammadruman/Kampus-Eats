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
  const filteredRestaurants = resData.data.restaurants.filter((restaurant) => {
    const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(", ").toLowerCase(); // Map cuisine names and join them
    return cuisines.includes(searchQuery.toLowerCase()); // Filters based on cuisine only
  });
  

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 py-10 px-2 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-8 text-center drop-shadow-sm">Discover Foodcourts & Cuisines</h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search for foodcourts or cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl px-6 py-3 rounded-full border-2 border-orange-200 bg-white/90 text-orange-700 placeholder-orange-300 shadow focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
          />
        </div>

        {/* Display filtered restaurants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant-menu/${restaurant.id}`}
                className="block hover:scale-105 transition-transform duration-200"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          ) : (
            <div className="col-span-4 text-center text-orange-400">
              <p className="text-4xl font-bold text-pink-400 animate-pulse">Oops!</p>
              <p className="text-xl text-orange-400 mt-2">No results found</p>
              <p className="text-md text-orange-300 mt-1">Try searching for something else!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Foodcourt;
