import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, UserPlus, LogOut, ShoppingCart, UserCog, ShoppingBag, History } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check login status when component mounts and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loginStatus);
    };

    checkLoginStatus();
    
    // Add event listener for localStorage changes
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const categories = [
    {
      name: 'JavaScript',
      route: '/javascript',
      icon: '⚡',
      description: 'Modern JS frameworks and tools'
    },
    {
      name: 'WordPress',
      route: '/wordpress',
      icon: '🎨',
      description: 'CMS and theme development'
    },
    {
      name: 'PHP',
      route: '/php',
      icon: '🔧',
      description: 'Backend development with PHP'
    },
    {
      name: 'Mobile',
      route: '/mobile',
      icon: '📱',
      description: 'iOS and Android development'
    },
    {
      name: 'HTML5',
      route: '/html',
      icon: '🌐',
      description: 'Web fundamentals and CSS'
    },
    {
      name: 'Plugins',
      route: '/plugins',
      icon: '🔌',
      description: 'Extensions and add-ons'
    }
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
        <div className="flex justify-between items-center h-16">
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
                className="h-12 w-auto sm:h-16 md:h-20"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-gray-900 px-2 py-2 text-sm xl:text-base xl:px-3 rounded-md ${
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
              <button className="text-gray-700 hover:text-gray-900 px-2 py-2 text-sm xl:text-base xl:px-3 rounded-md inline-flex items-center">
                <span>Categories</span>
                <ChevronDown className={`ml-1 h-4 w-4 xl:h-5 xl:w-5 transform transition-transform duration-600 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg py-4 z-50 border border-gray-100" 
                     style={{ width: 'max-content', minWidth: '600px' }}>
                  <div className="px-4">
                    <div className="flex items-center space-x-6">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to={category.route}
                          className="flex items-center hover:text-blue-600 transition-colors duration-200"
                        >
                          <span className="text-xl mr-2">{category.icon}</span>
                          <span className="font-medium whitespace-nowrap">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Search Bar */}
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 xl:w-64 pl-9 pr-4 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Auth Links */}
            <div className="flex items-center space-x-2">
              {!isLoggedIn ? (
                <>
                  <Link 
                    to="/login" 
                    className={`flex items-center gap-1 text-gray-700 hover:text-gray-900 px-2 py-2 text-sm xl:text-base xl:px-3 rounded-md ${
                      isActive('/login') ? 'bg-gray-100' : ''
                    }`}
                  >
                    <User className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span className="hidden xl:inline">Login</span>
                  </Link>
                  <Link 
                    to="/register" 
                    className={`flex items-center gap-1 bg-blue-500 text-white px-3 py-2 text-sm xl:text-base rounded-md hover:bg-blue-600 ${
                      isActive('/register') ? 'bg-blue-600' : ''
                    }`}
                  >
                    <UserPlus className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span className="hidden xl:inline">Register</span>
                  </Link>
                  
                </>
              ) : (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsProfileDropdownOpen(false), 200)}
                    className={`flex items-center gap-1 text-gray-700 hover:text-gray-900 px-2 py-2 text-sm xl:text-base xl:px-3 rounded-md ${
                      isActive('/profile') ? 'bg-gray-100' : ''
                    }`}
                  >
                    <User className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span className="hidden xl:inline">Profile</span>
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                      isProfileDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Profile Dropdown Menu */}
                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
                      >
                        <Link
                          to="/profile/details"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <UserCog className="w-4 h-4 mr-3 text-gray-500" />
                          Register Details
                        </Link>
                        
                        <Link
                          to="/profile/purchases"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4 mr-3 text-gray-500" />
                          Purchase Products
                        </Link>
                        
                        <Link
                          to="/profile/payment-history"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <History className="w-4 h-4 mr-3 text-gray-500" />
                          Payment History
                        </Link>
                        
                        <div className="h-px bg-gray-200 my-2"></div>
                        
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Cart Icon and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Link
              to="/cart"
              className="relative inline-flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
              <ShoppingCart className="w-5 h-5 xl:w-6 xl:h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 xl:w-5 xl:h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
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
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Search Bar for Mobile */}
                <div className="px-3 py-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Keep existing mobile menu items */}
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
