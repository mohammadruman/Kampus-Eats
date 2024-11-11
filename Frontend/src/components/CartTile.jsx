import React from "react";
import PlusMinusButton from "./PlusMinusButton";

const CartTile = ({ restraunt }) => {

    //display the items in a tile
    function renderITems(){
      return restraunt.items.map( item => <Item key={`${item.itemId}-${item.itemName}`} resId={restraunt.resId} item={item}/>)
    }

    return (
      <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden border-2 m-4">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-left">{restraunt.resName}</h3>
          <div className="border-2">
              {renderITems()}
          </div>
        </div>
      </div>
    );
  };

function Item({ resId, item }){
  return(
    <div className="flex justify-between items-center p-4">
        <h4>{item.itemName}</h4>
        <PlusMinusButton 
          resId={resId}
          itemId={item.itemId}
          quantity={item.quantity}
        />
    </div>
  )
}

export default CartTile