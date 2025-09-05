import React from "react";
import PlusMinusButton from "./PlusMinusButton";

const CartTile = ({ restraunt }) => {

    //display the items in a tile
    function renderITems(){
      return restraunt.items.map( item => <Item key={`${item.itemId}-${item.itemName}`} resId={restraunt.resId} item={item}/>)
    }

    return (
      <div className="w-full max-w-lg bg-white/90 border border-orange-100 rounded-2xl shadow-lg m-4 overflow-hidden">
        <div className="px-6 py-4">
          <h3 className="text-xl font-extrabold text-orange-500 mb-4 text-left">{restraunt.resName}</h3>
          <div className="divide-y divide-orange-100">
            {renderITems()}
          </div>
        </div>
      </div>
    );
  };

function Item({ resId, item }){
  return(
    <div className="flex justify-between items-center py-3">
      <span className="text-orange-400 font-semibold text-base truncate">{item.itemName}</span>
      <PlusMinusButton 
        resId={resId}
        itemId={item.itemId}
        quantity={item.quantity}
      />
    </div>
  )
}

export default CartTile