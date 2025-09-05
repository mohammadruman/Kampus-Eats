
import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../Image/hero.jpg';

const features = [
  {
    title: 'Lightning Fast Delivery',
    desc: 'Get your food delivered to your table or for pickup in minutes.',
    icon: '🚀',
  },
  {
    title: 'Exclusive Offers',
    desc: 'Enjoy student-only discounts and daily deals.',
    icon: '🎁',
  },
  {
    title: 'Live Order Tracking',
    desc: 'Track your order status in real-time from kitchen to pickup.',
    icon: '📱',
  },
];

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 pt-20 pb-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            <span className="text-orange-500">Order Food</span> <br className="hidden md:block" />
            <span className="text-gray-800">in Seconds,</span> <span className="text-pink-500">Skip the Line!</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-xl">
            Discover the fastest way to enjoy your favorite campus meals. Pre-order, pay online, and pick up with zero wait.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/foodcourt"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Order Now
            </Link>
            <Link
              to="/register"
              className="inline-block border-2 border-orange-400 text-orange-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-colors duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <img
            src={heroimage}
            alt="Delicious food delivery"
            className="w-[350px] h-[350px] object-cover rounded-3xl shadow-2xl border-4 border-white bg-white/80"
          />
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="relative z-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -z-10" style={{animationDelay: '0s'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -z-10" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Home;
