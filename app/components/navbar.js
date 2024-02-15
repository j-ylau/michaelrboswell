import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return (
    <nav className={`bg-white text-emerald-900 shadow-lg fixed w-full z-10 top-0 left-0 transition-opacity duration-300 ${!visible && 'opacity-0'}`} onMouseOver={() => setVisible(true)}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo with onClick event for scrolling to top */}
          <a href="#" onClick={scrollToTop} className="font-semibold font-sans text-emerald-900 text-lg">Michael R. Boswell</a>

          {/* CTA Button */}
          <a href="https://islandpress.org/books/climate-action-planning" className="bg-emerald-800 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition" target="_blank">
            See Book
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
