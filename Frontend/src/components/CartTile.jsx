import React from "react";
// import PlusMinusButton from "./PlusMinusButton";

const CartTile = ({ resName }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 m-4">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{resName}</h3>
          <div className="">
              {/* <p>{item.itemName}</p> */}
          </div>
        </div>
      </div>
    );
  };

export default CartTile