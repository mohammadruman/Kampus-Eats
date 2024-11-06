import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="block text-blue-600">You Don't</span>
            <span className="block text-black">Need To Wait For Food</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Pre-order your meals online and pick them up from the college canteen,
            saving time and skipping the lines.
          </p>
          <div className="mt-10">
            <Link
              to="/foodcourt"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            >
              Order Now
            </Link>
            <Link
              to="/foodcourt/menu"
              className="inline-block bg-blue-600 text-white ml-2 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
