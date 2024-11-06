import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap space-y-4 sm:space-y-0">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Kampus Eats</h2>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Quick Links</h3>
            <ul>
              <li><a href="/foodcourt" className="hover:underline">Menu</a></li>
              <li><a href="#orders" className="hover:underline">My Orders</a></li>
              <li><a href="#profile" className="hover:underline">Profile</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Support</h3>
            <ul>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Developers</h3>
            <ul>
              <li><a href="https://github.com/your-profile" className="hover:underline">GitHub Profile</a></li>
              <li><a href="https://linkedin.com/in/your-profile" className="hover:underline">LinkedIn</a></li>
              <li><a href="mailto:developer@example.com" className="hover:underline">Contact Developer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4">
          <p className="text-center">© 2024 Kampus Eats. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
