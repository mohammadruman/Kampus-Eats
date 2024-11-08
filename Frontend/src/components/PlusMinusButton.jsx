import React from "react";
  
  export default function PlusMinusButton( { addFn, removeFn, value, restProps} ){
    const { restaurantId, index, cuisine} = {...restProps}
    return (
      <div className="flex items-center gap-4">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={e => addFn(e, cuisine, index)}
          >
            +
          </button>
            <h3>{value}</h3>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={e => removeFn(e,restaurantId, index)}
          >
            -
          </button>
      </div>
    );
  };