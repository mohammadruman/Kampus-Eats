import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-blue-600">Kampus Eats</h1>
          <div className="flex space-x-6 items-center">
            <a href="#menu" className="text-black hover:text-blue-600">Menu</a>
            <a href="#orders" className="text-black hover:text-blue-600">My Orders</a>
            <a href="#profile" className="text-black hover:text-blue-600">Profile</a>
            <a href="#contact" className="text-black hover:text-blue-600">Contact Us</a>
            <a href="#login" className="text-black hover:text-blue-600">Login</a>
            <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
