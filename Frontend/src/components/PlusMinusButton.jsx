import React from "react";

function Button({ sign}){
    return (
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        // onClick={(e) => handleAddToCart(e, cuisine, index)}
      >
        <h3>{sign}</h3>
      </button>
    );
  };
  
  export default function PlusMinusButton( {value} ){
    return (
      <div className="flex items-center gap-4">
        <Button sign="+" />
        <h3>{value}</h3>
        <Button sign="-" />
      </div>
    );
  };