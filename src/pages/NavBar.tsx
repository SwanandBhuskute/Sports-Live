import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Sport Live
        </Link>
        <div className="flex space-x-4 text-white">
          <Link to="/articles">Articles</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/teams">Teams</Link>
          <div className="relative inline-block text-left">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none">
              Profile
            </button>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
              <div className="py-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
