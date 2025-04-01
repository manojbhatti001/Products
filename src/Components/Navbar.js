import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const categories = [
    'Wordpress',
    'PHP',
    'Moblie',
    'HTML5',
    'JavaScript',
    'Plugins',
  ];

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/images/mainlogo.webp" 
                alt="Company Logo" 
                className="h-20 w-auto" // Increased height from h-8 to h-12
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md inline-flex items-center"
              >
                <span>Categories</span>
                <svg
                  className={`ml-2 h-5 w-5 transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isCategoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/categories/${category.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <UserPlus className="w-5 h-5" />
              <span>Register</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  Home
                </Link>
                
                {/* Mobile Categories Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex justify-between items-center"
                  >
                    <span>Categories</span>
                    <svg
                      className={`h-5 w-5 transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {isCategoryDropdownOpen && (
                    <div className="bg-gray-50 rounded-md mt-1">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to={`/categories/${category.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setCategoryDropdownOpen(false);
                          }}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Link to="/login" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  Login
                </Link>
                <Link to="/register" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  Register
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
