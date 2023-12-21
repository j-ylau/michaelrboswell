// components/footer.js
'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-gray-800 text-white text-center">
      <p>© {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
