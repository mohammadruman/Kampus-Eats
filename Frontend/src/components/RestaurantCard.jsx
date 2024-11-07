import img from "../Image/img.jpg";

const RestaurantCard = (props) => {
    const { resData = {}, } = props;

    const {
        name,
        campusName,
        overallRating,
        cuisines,
        deliveryTime,
    } = resData;



    //format cuisne function
    const formatCuisines = (cuisinesArray, limit = 2) => {
        const cuisineNames = cuisinesArray.map(cuisine => cuisine.name); // Extract names by iterating through all the cuisne object
        if (cuisineNames.length <= limit) {
            return cuisineNames.join(", ");
        }
        return `${cuisineNames.slice(0, limit).join(", ")}...`;
    };

    return (
        <div className="m-4 p-4 w-[250px] h-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-[200px] h-[120px] object-cover" src={img} alt="Restaurant" />
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
