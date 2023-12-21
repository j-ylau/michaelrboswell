// components/footer.js
'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Company Name Section */}
        <div>
          <h5 className="text-xl font-bold mb-2">COMPANY NAME</h5>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        {/* Products Section */}
        <div>
          <h5 className="text-xl font-bold mb-2">PRODUCTS</h5>
          <ul>
            <li>MDBootstrap</li>
            <li>MDWordPress</li>
            <li>BrandFlow</li>
            <li>Bootstrap Angular</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h5 className="text-xl font-bold mb-2">USEFUL LINKS</h5>
          <ul>
            <li>Your Account</li>
            <li>Become an Affiliate</li>
            <li>Shipping Rates</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h5 className="text-xl font-bold mb-2">CONTACT</h5>
          <p>123 New York, NY 10012, US</p>
          <p>info@example.com</p>
          <p>+01 234 567 88</p>
          <p>+01 234 567 89</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 mt-4">
        <p>© {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
