// components/footer.js
'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-emerald-900 text-white py-6 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* Company Info Section */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Michael R. Boswell</h5>
            <p className="text-sm mr-6">Empowering communities for a sustainable future.</p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Useful Links</h5>
            <ul className="text-sm">
              <li>About Us</li>
              <li>Climate Action</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact</h5>
            <p className="text-sm">123 New York, NY 10012, US</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">+01 234 567 88</p>
          </div>
        </div>

        <div className="border-t border-white text-left py-4 mt-4">
          {/* <p className="text-sm">© {new Date().getFullYear()} COMPANY NAME. All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
