import React from "react";
import PlusMinusButton from "./PlusMinusButton";

const CartTile = ({ restraunt }) => {
    return (
      <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden border-2 m-4">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-left">{restraunt.resName}</h3>
          <div className="border-2">
              {/* <p>{item.itemName}</p> */}
          </div>
        </div>
      </div>
    );
  };

function Items({ item }){
  return(
    <div>
        <h4>{item.name}</h4>
        <
    </div>
  )
}

export default CartTile