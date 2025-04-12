import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Package, 
  List, 
  History, 
  CreditCard, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Users,
  Menu,
  FolderPlus,
  ShoppingBag,
  Settings,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/admin/dashboard',
      bgColor: isDarkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      title: 'User Management',
      icon: <Users size={20} />,
      path: '/admin/user-management',
      bgColor: isDarkMode ? 'hover:bg-purple-900/30' : 'hover:bg-purple-100',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Add Category',
      icon: <FolderPlus size={20} />,
      path: '/admin/add-category',
      bgColor: isDarkMode ? 'hover:bg-green-900/30' : 'hover:bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      title: 'Add Product',
      icon: <ShoppingBag size={20} />,
      path: '/admin/add-product',
      bgColor: isDarkMode ? 'hover:bg-yellow-900/30' : 'hover:bg-yellow-100',
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Product List',
      icon: <List size={20} />,
      path: '/admin/products',
      bgColor: isDarkMode ? 'hover:bg-pink-900/30' : 'hover:bg-pink-100',
      iconColor: 'text-pink-500'
    },
    {
      title: 'Transaction History',
      icon: <History size={20} />,
      path: '/admin/transactions',
      bgColor: isDarkMode ? 'hover:bg-indigo-900/30' : 'hover:bg-indigo-100',
      iconColor: 'text-indigo-500'
    },
    {
      title: 'Payment Settings',
      icon: <Settings size={20} />,
      path: '/admin/payment-settings',
      bgColor: isDarkMode ? 'hover:bg-teal-900/30' : 'hover:bg-teal-100',
      iconColor: 'text-teal-500'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    toast.success('Logged out successfully');
    navigate('/admin-login');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header - Made Responsive */}
      <header className={`fixed top-0 left-0 right-0 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } z-40 border-b transition-colors duration-300`}>
        <div className="flex items-center justify-between px-4 h-16 md:h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className={`p-2 md:hidden ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              } rounded-lg transition-colors`}
            >
              <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
            </button>
            <div className="flex items-center space-x-3">
              <Package className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
              <h1 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Admin Panel
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Additional Header Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`fixed top-0 left-0 h-screen ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } shadow-lg overflow-y-auto
            ${isCollapsed ? 'w-20' : 'w-64'} 
            transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            transition-all duration-300 ease-in-out z-40`}
        >
          {/* Sidebar Header */}
          <div className={`sticky top-0 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } z-20 border-b`}>
            <div className="flex items-center justify-between p-4">
              {!isCollapsed && (
                <div className="flex items-center space-x-3">
                  <Package className="h-8 w-8 text-blue-500" />
                  <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Admin
                  </h1>
                </div>
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`p-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors hidden md:block`}
              >
                {isCollapsed ? (
                  <ChevronRight size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                ) : (
                  <ChevronLeft size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                )}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="mt-6 px-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-200
                  ${item.bgColor}
                  ${location.pathname === item.path 
                    ? isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    : 'hover:scale-[1.02]'}`}
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <span className={`inline-flex items-center justify-center ${item.iconColor}`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className={`ml-3 font-medium ${
                    isDarkMode 
                      ? location.pathname === item.path ? 'text-white' : 'text-gray-300'
                      : location.pathname === item.path ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {item.title}
                  </span>
                )}
              </Link>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className={`flex items-center w-full px-4 py-3 mt-4 rounded-xl
                ${isDarkMode ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}
                transition-all duration-200
                ${isCollapsed ? 'justify-center' : ''}`}
            >
              <LogOut size={20} className="text-red-500" />
              {!isCollapsed && (
                <span className="ml-3 font-medium text-red-500">
                  Logout
                </span>
              )}
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 ease-in-out
            ${isCollapsed ? 'md:ml-20' : 'md:ml-64'} 
            w-full p-6 mt-16 md:mt-20`}
        >
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;