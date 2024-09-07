
import img from '../Image/img.jpg'
const RestaurantCard=({name, campusname, cuisine, rating  ,time  })=>{
    return (
        <div className=" m-4 p-4 w-[250px] h-[300px] rounded-lg  bg-gray-100 hover:bg-gray-200 " >
            <img className="rounded-lg w-[200px] h-[120px] object-cover"
             src={img} />
                <h3 className='font-bold py-4 text-lg'>{name}</h3> 
                <h4 className='text-gray-600 mb-2'>{campusname}</h4>  
                <h4 className='text-gray-600 mb-2'>{cuisine}</h4>
                <div className='flex justify-between text-gray-700 text-sm'>
                <h4 className="flex items-center">
                    <span className="material-icons  mr-1">⭐</span>
                {rating}
                </h4>
                <h4>{time}</h4>
                </div>

        </div>
    )
};
 
export default RestaurantCard;