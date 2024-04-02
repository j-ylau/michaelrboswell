// components/Footer.js
"use client";
import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-emerald-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-white">Michael R. Boswell</h5>
            <p className="text-base text-white">
              California Climate Action Planning Database
            </p>
          </div>

          <nav className="flex flex-col md:flex-row items-start md:items-center">
            <h5 className="text-xl font-semibold text-white mb-4 md:mb-0 md:mr-8">Useful Links</h5>
            <ul className="flex flex-col md:flex-row md:space-x-6 text-white">
              <li>
                <a
                  href="https://www.linkedin.com/in/mrboswell/"
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
                  CAP Guide
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
        </div>

        <div className="border-t border-gray-700 text-gray-300 py-6 mt-8">
          <p className="text-base">
            © {currentYear} Michael R. Boswell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
