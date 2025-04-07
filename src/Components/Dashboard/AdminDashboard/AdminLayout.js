import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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
  Bell,
  Search,
  Menu
} from 'lucide-react';
import Navbar from '../../Navbar';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/admin/dashboard'
    },
    {
      title: 'Add Product',
      icon: <Package size={20} />,
      path: '/admin/add-product'
    },
    {
      title: 'Product List',
      icon: <List size={20} />,
      path: '/admin/products'
    },
    {
      title: 'Transaction History',
      icon: <History size={20} />,
      path: '/admin/transactions'
    },
    {
      title: 'Payment Settings',
      icon: <CreditCard size={20} />,
      path: '/admin/payment-settings'
    },
    {
      title: 'User Management',
      icon: <Users size={20} />,
      path: '/admin/user-management'
    }
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Navbar - Fixed at the very top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Dashboard Content */}
      <div className="flex pt-16">
        {/* Sidebar - Fixed position */}
        <div 
          className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-gray-900 text-white overflow-y-auto
            ${isCollapsed ? 'w-16' : 'w-64'} 
            ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            transition-all duration-300 z-40`}
        >
          {/* Sidebar Header - Sticky */}
          <div className="sticky top-0 bg-gray-900 z-20">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 hidden md:block"
              >
                {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="mt-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-gray-800 text-white' : ''}`}
              >
                <span className="inline-flex items-center justify-center">
                  {item.icon}
                </span>
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}

            {/* Logout Button */}
            <button
              className="flex items-center w-full px-4 py-3 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
              onClick={handleLogout}
            >
              <span className="inline-flex items-center justify-center">
                <LogOut size={20} />
              </span>
              {!isCollapsed && <span className="ml-3">Logout</span>}
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
          <main className="p-6 bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
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