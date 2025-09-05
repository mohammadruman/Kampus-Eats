import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 via-orange-100 to-pink-100 text-orange-700 border-t border-orange-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="space-y-4 min-w-[180px]">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <h2 className="text-xl font-extrabold text-orange-500">Kampus Eats</h2>
            </div>
            <p className="text-sm text-orange-400 max-w-xs">Order your favorite campus meals online. Fast, easy, and always fresh!</p>
          </div>
          <div className="space-y-2 min-w-[140px]">
            <h3 className="font-semibold text-orange-500">Quick Links</h3>
            <ul className="text-orange-600 text-sm space-y-1">
              <li><a href="#menu" className="hover:underline hover:text-pink-500">Menu</a></li>
              <li><a href="#orders" className="hover:underline hover:text-pink-500">My Orders</a></li>
              <li><a href="#profile" className="hover:underline hover:text-pink-500">Profile</a></li>
              <li><a href="#contact" className="hover:underline hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-2 min-w-[140px]">
            <h3 className="font-semibold text-orange-500">Support</h3>
            <ul className="text-orange-600 text-sm space-y-1">
              <li><a href="#faq" className="hover:underline hover:text-pink-500">FAQ</a></li>
              <li><a href="#terms" className="hover:underline hover:text-pink-500">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:underline hover:text-pink-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="space-y-2 min-w-[180px]">
            <h3 className="font-semibold text-orange-500">Developers</h3>
            <ul className="text-orange-600 text-sm space-y-1">
              <li><a href="https://github.com/your-profile" className="hover:underline hover:text-pink-500">GitHub Profile</a></li>
              <li><a href="https://linkedin.com/in/your-profile" className="hover:underline hover:text-pink-500">LinkedIn</a></li>
              <li><a href="mailto:developer@example.com" className="hover:underline hover:text-pink-500">Contact Developer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-orange-200 pt-4">
          <p className="text-center text-orange-400 text-sm">© 2024 Kampus Eats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
