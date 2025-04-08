import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, UserPlus, LogOut, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Update cart count whenever localStorage changes
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItemsCount(cart.length);
    };

    // Initial count
    updateCartCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const categories = [
    {
      name: 'JavaScript',
      route: '/javascript',
      icon: '⚡',
      
    },
    {
      name: 'WordPress',
      route: '/wordpress',
      icon: '🎨',
     
    },
    {
      name: 'PHP',
      route: '/php',
      icon: '🔧',
      
    },
    {
      name: 'Mobile',
      route: '/mobile',
      icon: '📱',
    },
    {
      name: 'HTML5',
      route: '/html',
      icon: '🌐',
      
    },
    {
      name: 'Plugins',
      route: '/plugins',
      icon: '🔌',
   
    },
  ];

  const navigationLinks = [
    { path: '/', label: 'Home' },
    
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

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
                className="h-20 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                  isActive(link.path) ? 'bg-gray-100' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Desktop Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md inline-flex items-center">
                <span>Categories</span>
                <ChevronDown className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.route}
                      className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 ${
                        isActive(category.route) ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{category.icon}</span>
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-xs text-gray-500">{category.description}</div>
                        </div>
                      </div>
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

            {/* Updated Cart Icon */}
            <Link
              to="/cart"
              className="relative inline-flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Auth Links */}
            <div className="flex items-center space-x-2">
              <Link 
                to="/login" 
                className={`flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                  isActive('/login') ? 'bg-gray-100' : ''
                }`}
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link 
                to="/register" 
                className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${
                  isActive('/register') ? 'bg-blue-600' : ''
                }`}
              >
                <UserPlus className="w-5 h-5" />
                <span>Register</span>
              </Link>
              <Link 
                to="/admin-login" 
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                  location.pathname === '/admin-login' ? 'bg-gray-100' : ''
                }`}
              >
                Admin Login
              </Link>
            </div>
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
                {/* Add Cart Link in mobile menu */}
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </Link>

                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                      isActive(link.path) ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Categories Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex justify-between items-center"
                  >
                    <span>Categories</span>
                    <ChevronDown className={`h-5 w-5 transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isCategoryDropdownOpen && (
                    <div className="bg-gray-50 rounded-md mt-1">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to={category.route}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                            isActive(category.route) ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setCategoryDropdownOpen(false);
                          }}
                        >
                          {category.name}
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
                <Link 
                  to="/login" 
                  className={`block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                    isActive('/login') ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className={`block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                    isActive('/register') ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
                <Link 
                  to="/admin-login" 
                  className={`block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                    location.pathname === '/admin-login' ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Login
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
