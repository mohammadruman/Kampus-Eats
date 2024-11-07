const foodCourtImages = {
    'Foodcourt 1': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVe3HaFs_6Yc4fOMv1E5JwPyelKAKrf_dGbQ&s',
    'Foodcourt 2': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/26/8c/17/gin-ginger-restaurant.jpg?w=600&h=-1&s=1',
    'Foodcourt 3': 'https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/4:3/w_1440,h_1080,c_limit/Untitled%20design%20(14).png',
    'Foodcourt 4': 'https://rishikeshcamps.in/wp-content/uploads/2023/05/restaarant.jpg',
    'Foodcourt 5': 'https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg',
    'Foodcourt 6': 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/03/07174959/AdobeStock_334422311-scaled.jpeg',
    'Foodcourt 7': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1',
    'Foodcourt 8': 'https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1280,c_limit/Prequel-lead.jpg',
    'Foodcourt 9': 'https://images.axios.com/lIPBPJ802rSLL98aIQ9FDkQd2Go=/0x0:6687x3761/1920x1080/2023/04/11/1681223212336.jpg',
    'Foodcourt 10': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/1d/74/51/photo1jpg.jpg?w=600&h=400&s=1',
    'Foodcourt 11': 'https://b.zmtcdn.com/data/pictures/2/21327202/69b734fbf063df89a662b80ba2d71e01_featured_v2.jpg',
    'Foodcourt 12': 'https://sulaindianrestaurant.com/wp-content/uploads/2020/12/IMG_2575-1-1200x800.jpg',
    'Foodcourt 13': 'https://sumesshmenonassociates.com/wp-content/uploads/2020/10/madras-diaries1.jpg',
    'Foodcourt 14': 'https://www.indianeagle.com/travelbeats/wp-content/uploads/2016/05/Indian-restaurant-Utsav-NYC-best-Indian-restaurants-in-New-York.jpg',
    'Foodcourt 15': 'https://b.zmtcdn.com/data/pictures/4/21128204/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg',
    'Foodcourt 16': 'https://offloadmedia.feverup.com/secretsandiego.com/wp-content/uploads/2023/05/13024811/curryosity-1024x698.jpg',
    'Foodcourt 17': 'https://sumesshmenonassociates.com/wp-content/uploads/2020/10/nom570x410.jpg',
    'Foodcourt 18': 'https://thumbs.dreamstime.com/b/moscow-august-interior-restaurant-indian-tibetan-cuisine-decorated-ethnic-style-99797430.jpg',
    'Foodcourt 19': 'https://www.veeraswamy.com/media/oxbczfce/v_regent_verandah_towards_paisley__mw5-revised_a.jpg',
    'Foodcourt 20': 'https://media.istockphoto.com/id/1163284610/photo/very-stylish-indian-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=-0Bz0mNjnrDoXApfo6P_xBrKmIMPZYJwQ5zAGEpzThI=',
    // Image showing burritos
};

// Fallback image in case the mapping doesn't exist
const defaultImage = '/api/placeholder/200/120';

const RestaurantCard = ({ resData = {} }) => {
    const {
        name,
        campusName,
        overallRating,
        cuisines,
        deliveryTime,
    } = resData;

    // Get the appropriate image based on restaurant name or use fallback
    const getImageForRestaurant = (restaurantName) => {
        return foodCourtImages[restaurantName] || defaultImage;
    };


    //format cuisne function
    const formatCuisines = (cuisinesArray, limit = 2) => {
        const cuisineNames = cuisinesArray.map(cuisine => cuisine.name); // Extract names by iterating through all the cuisne object
        if (cuisineNames.length <= limit) {
            return cuisineNames.join(", ");
        }
        return `${cuisineNames.slice(0, limit).join(", ")}...`;
    };

    return (
        <div className="m-4 p-4 w-[250px] h-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-600">
            <img
                className="rounded-lg w-[200px] h-[120px] object-cover"
                src={getImageForRestaurant(name)}
                alt={`${name} - ${formatCuisines(cuisines)}`} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="text-gray-600 mb-2">{campusName}</h4>
            <h4 className="text-gray-600 mb-2"> {formatCuisines(cuisines)}</h4>
            <div className="flex justify-between text-gray-700 text-sm">
                <h4 className="flex items-center">
                    <span className="material-icons mr-1">⭐</span>
                    {overallRating}
                </h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;
