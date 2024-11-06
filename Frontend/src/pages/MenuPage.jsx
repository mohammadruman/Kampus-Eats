import React from 'react';
import { mockData } from '../utils/mockData'; // Adjust path as necessary
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';

const MenuPage = () => {
  return (
    <>
      <div className="menu-page max-w-full flex flex-grow ">
        <div className="flex gap-2 my-2">
          <div className="p-4 items-center justify-evenly ">
            <input className="flex flex-grow w-[600px] py-1 pl-1 text-[14px] rounded-lg outline-none border-2  border-zinc-400 focus-within:border-blue-400" type="text" placeholder="Search for meals.." />
          </div>

          <div className="flex gap-1 items-center justify-between">
            <button className="flex flex-col-reverse bg-blue-600 text-white px-4 py-2 rounded-lg text-md ml-[550px] font-medium hover:bg-blue-700">Filters</button>
            <button className="flex flex-col-reverse bg-blue-600 text-white px-4 py-2 rounded-lg text-md font-medium hover:bg-blue-700">Categories</button>
          </div>
        </div>
      </div>

      <div className="flex">
        <MenuCard />
      </div>
    </>
  );
};

export default MenuPage;
