import img from "../Image/img.jpg";

const RestaurantCard = (props) => {
    const { resData = {} } = props;

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
                    <div className="w-[260px] h-[320px] bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 border border-orange-100 flex flex-col overflow-hidden mx-auto">
                        <div className="relative h-1/2 min-h-[160px] max-h-[160px]">
                            <img
                                className="w-full h-full object-cover rounded-t-3xl"
                                src={img}
                                alt="Restaurant"
                            />
                            <span className="absolute top-3 right-3 bg-white/80 text-orange-500 font-bold px-3 py-1 rounded-full text-xs shadow">{deliveryTime} min</span>
                        </div>
                        <div className="flex-1 flex flex-col px-5 py-4">
                    <h3 className="font-extrabold text-lg text-orange-500 mb-1 truncate">{name}</h3>
                    <h4 className="text-orange-400 text-sm mb-1 truncate">{campusName}</h4>
                    <h4 className="text-orange-300 text-xs mb-3 truncate">{formatCuisines(cuisines)}</h4>
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="inline-flex items-center bg-pink-100 text-pink-500 font-bold px-2 py-1 rounded-full text-xs">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                            {overallRating}
                        </span>
                    </div>
                </div>
            </div>
        );
};

export default RestaurantCard;
