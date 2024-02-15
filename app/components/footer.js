// components/Footer.js
"use client";
import React from "react";

// Consider using a utility like this to dynamically update the year
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-emerald-900 text-white py-8 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Company Info Section with more accessible markup */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Michael R. Boswell</h5>
            <p className="text-base">
              Empowering communities for a sustainable future.
            </p>
          </div>

          {/* Useful Links Section with navigation role for better accessibility */}
          <nav>
            <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
            <ul className="text-base space-y-2">
              {/* Enhance these list items with links */}
              <li>
                <a
                  href="https://ucm.calpoly.edu/faculty-experts/michael-boswell"
                  className="hover:text-emerald-300 transition-colors duration-300"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="https://islandpress.org/books/climate-action-planning"
                  className="hover:text-emerald-300 transition-colors duration-300"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Climate Action
                </a>
              </li>
              <li>
                <a
                  href="https://ucm.calpoly.edu/faculty-experts/michael-boswell"
                  className="hover:text-emerald-300 transition-colors duration-300"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Section with more defined structure */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <p className="text-base">Building 005, Room 313</p>
            <p className="text-base">mboswell@calpoly.edu</p>
            <p className="text-base">+1 805 756 1315</p>
          </div>
        </div>

        <div className="border-t border-white opacity-50 text-left py-6 mt-8">
          {/* Dynamic year and improved readability */}
          <p className="text-base">
            © {currentYear} Michael R. Boswell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
