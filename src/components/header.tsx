import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // for toggling search bar on mobile
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Tutorials", link: "/tutorials" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#E7ECEF] text-black shadow-md">
      <div className="flex items-center justify-between p-6 lg:p-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl lg:text-2xl font-mono tracking-wider text-black hover:text-gray-700 transition-all"
        >
          SyntixDesigner
        </Link>

        {/* Navigation Links on Desktop */}
        <div className="hidden lg:flex items-center justify-center space-x-8 flex-grow">
          {navItems.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className="text-md text-black hover:text-gray-700 px-3 py-1 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Search Bar on Desktop */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 pl-12 border border-gray-300 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0l4 4"
            />
          </svg>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0l4 4"
              />
            </svg>
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center space-y-4 px-6 py-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            className="text-md text-black hover:text-gray-700 px-3 py-1 transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close the menu after clicking a link
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Search Bar on Mobile (with animation on toggle) */}
      <div
        className={`lg:hidden flex justify-center transition-all duration-500 ease-in-out ${
          isSearchOpen ? "block mt-3" : "hidden"
        }`} // Fixed margin to adjust gap
      >
        <div className="relative w-48">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 pl-10 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0l4 4"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
