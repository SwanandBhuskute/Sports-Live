import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PreferencesModal from './Preferences/PreferencesModal';
import useAuthentication from '../hooks/useAuthentication';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPreferencesModalOpen, setPreferencesModalOpen] = useState(false);
  const isLoggedIn = useAuthentication();
  const { t } = useTranslation();

  useEffect(() => {
    // Load the language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const togglePreferencesModal = () => {
    setPreferencesModalOpen(!isPreferencesModalOpen);
  };

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Saves the selected language to localStorage
    // throw new Error("An error occured while changing locale");
  };

  return (
    <nav className="bg-gray-800 px-2 py-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap justify-center items-center">
          <Link to="/" className="flex items-center text-white text-3xl font-bold px-2">
            Sports Live
          </Link>
        </div>
        <div className="flex flex-wrap space-x-4 text-white text-lg items-center">
          {isLoggedIn && (
            <button
              onClick={togglePreferencesModal}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none group-hover:bg-gray-700"
            >
              {t('Preferences')}
            </button>
          )}
          <Link to="/home">{t('Home')}</Link>
          <Link to="/articles">{t('Articles')}</Link>
          <Link to="/matches">{t('Matches')}</Link>
          <Link to="/teams">{t('Teams')}</Link>
          <div className="relative inline-block group">
            <button
              onClick={toggleDropdown}
              onBlur={() => setDropdownOpen(false)}
              className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none group-hover:bg-gray-700 ${isDropdownOpen ? 'focus:ring focus:ring-gray-400' : ''}`}
            >
              <span>&#x2314;</span>
            </button>
            <div
              className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="py-1 font-semibold">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/user"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t('My Profile')}
                    </Link>
                    <hr />
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {t('Sign Up')}
                    </Link>
                    <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {t('Sign In')}
                    </Link>
                  </>
                )}
                <div className="py-1">
                  <button
                    onClick={() => switchLanguage('en')}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLanguage('es')}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPreferencesModalOpen && <PreferencesModal />}
    </nav>
  );
};

export default Navbar;
