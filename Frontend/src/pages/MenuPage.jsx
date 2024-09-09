import React from 'react';
import { restaurants } from '../utils/mockData'; // Adjust path as necessary

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1 className='font-bold my-6 text-2xl'>{restaurants[0].name}</h1>
      <p className='font-bold text-lg'>{restaurants[0].cuisines[0].name}</p>
    </div>
  );
};

export default MenuPage;
