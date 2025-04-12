import React, { useState } from 'react';
import { Search, ArrowUpIcon, ArrowDownIcon, UserCheck, UserX, Filter, Users, UserPlus, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

const UserManagement = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  // Removed selectedStatus state

  // Sample user data
  const [users] = useState([
    {
      userId: 'USR20240001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user',
      phone: '+1 (555) 123-4567',
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      userId: 'USR20240002',
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      role: 'user',
      phone: '+1 (555) 987-6543',
      joinDate: '2024-01-14',
      status: 'active'
    },
   
  ]);

  // Add stats for the header cards
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: Users,
      change: '+12%',
      positive: true,
      color: 'blue'
    },
    
    {
      title: 'New Users',
      value: '145',
      icon: UserPlus,
      change: '+22%',
      positive: true,
      color: 'purple'
    },
    {
      title: 'Purchase User',
      value: '87',
      icon: Activity,
      change: '3%',
      positive: true,
      color: 'orange'
    }
  ];

  // Filter users based on search term and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      {/* Enhanced Page Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl"></div>
          
          {/* Header Content */}
          <div className={`relative rounded-xl shadow-sm border ${
            isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-900'
          } p-6`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  User Management
                </h1>
                <p className={`mt-2 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                  Monitor and manage user accounts across the platform
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Add New User
              </motion.button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-lg p-4 border transition-shadow duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 hover:shadow-gray-700/50 text-white' 
                      : 'bg-white border-gray-100 hover:shadow-md text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={isDarkMode ? 'text-white' : 'text-gray-600'}>
                        {stat.title}
                      </p>
                      <h3 className={`text-2xl font-bold mt-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        {stat.value}
                      </h3>
                    </div>
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className={`text-sm ml-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-500'
                    }`}>
                      vs last month
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Search and Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl shadow-sm border p-6 ${
            isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-900'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-white' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'
                  }`}
                  placeholder="Search by name, email, or ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Role Filter */}
            <div>
              <select
                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'
                }`}
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Users Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl shadow-lg overflow-hidden border ${
          isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-900'
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-gray-50 to-gray-100'}>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>User Details</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Name</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Email</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Role</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Phone</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Join Date</th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
              {filteredUsers.map((user, index) => (
                <motion.tr 
                  key={user.userId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ID:</span>
                      <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-500'} font-mono`}>{user.userId}</span>
                      <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-400'} mt-1`}>Created:</span>
                      <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>
                        {new Date(user.joinDate).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</span>
                        <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-500'} mt-1`}>Last active: 2h ago</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.email}</span>
                      <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-500'} mt-1`}>Verified ✓</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.phone}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {new Date(user.joinDate).toLocaleDateString()}
                      </span>
                      <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-500'} mt-1`}>
                        {Math.floor((new Date() - new Date(user.joinDate)) / (1000 * 60 * 60 * 24))} days ago
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className={`text-sm font-medium ${isDarkMode ? 'text-white hover:text-blue-400' : 'text-blue-600 hover:text-blue-800'}`}>
                      Edit
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <UserX className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <p className={isDarkMode ? 'text-white text-lg' : 'text-gray-500 text-lg'}>No users found</p>
              <p className={isDarkMode ? 'text-white text-sm mt-1' : 'text-gray-400 text-sm mt-1'}>Try adjusting your search criteria</p>
            </div>
          )}
        </div>

        {/* Table Footer */}
        {filteredUsers.length > 0 && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {filteredUsers.length} users
              </p>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UserManagement;