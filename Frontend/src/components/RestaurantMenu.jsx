// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { mockData } from '../utils/mockData'; // Importing the restaurants data

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get the restaurant ID from the URL
//   const [restaurant, setRestaurant] = useState(null); // State to hold the restaurant data

//   useEffect(() => {
//     // Find the restaurant with the matching id from the restaurants array
//     // const restaurantData = restaurants.find((res) => res.id === parseInt(id));
    
//     // Set the found restaurant data to the state
//     // setRestaurant(restaurantData);
//   }, [id]);

//   if (!restaurant) {
//     return <p>Loading restaurant menu...</p>;
//   }

//   // Split the cuisines into an array
//   const cuisineList = restaurant.cuisine.split(', '); // Assuming cuisines are comma-separated

//   return (
//     <div className="p-6">
//       {/* <h1 className="text-2xl font-bold mb-4">Menu for {restaurant.name}</h1>
//        */}
      
//       {/* Display the cuisines as a list */}
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold mb-2">Cuisines Available:</h2>
       
//           {cuisineList.map((cuisines, index) => (
//             <ul
//               key={index}
//               className="bg-gray-200 p-2 rounded-md mb-2 text-lg text-gray-700"
//             >
//               {cuisines}
//             </ul>
//           ))}
       
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
