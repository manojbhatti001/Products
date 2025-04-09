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
  Bell,
  Search,
  Menu,
  FolderPlus
} from 'lucide-react';
import toast from 'react-hot-toast';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      title: 'Add Category',
      icon: <FolderPlus size={20} />,
      path: '/admin/add-category'
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
    // Clear admin-specific data from localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    
    // Show success message
    toast.success('Logged out successfully');
    
    // Redirect to admin login page
    navigate('/admin-login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Admin Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-40 border-b md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`fixed top-0 md:top-0 left-0 h-screen bg-gray-900 text-white overflow-y-auto
            ${isCollapsed ? 'w-16' : 'w-64'} 
            transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            transition-transform duration-300 ease-in-out z-40`}
        >
          {/* Sidebar Header */}
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
                onClick={() => setIsMobileSidebarOpen(false)}
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
        </aside>

        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 ease-in-out
            ${isCollapsed ? 'md:ml-16' : 'md:ml-64'} 
            w-full p-6 mt-14 md:mt-0`}
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