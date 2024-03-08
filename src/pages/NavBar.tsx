import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 px-2 py-2">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold px-2">
          Sports Live
        </Link>
        <div className="flex space-x-4 text-white text-lg items-center">
          <Link to="/home">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/teams">Teams</Link>
          <div className="relative inline-block group">
            <button
              onClick={toggleDropdown}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none group-hover:bg-gray-700"
            >
              <span >&#x2314;</span>
            </button>
            <div
              className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="py-1">
                <Link
                  to="/home"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
