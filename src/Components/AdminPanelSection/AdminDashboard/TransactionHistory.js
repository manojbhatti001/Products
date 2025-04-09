import React, { useState } from 'react';
import { Search, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TransactionHistory = () => {
  const [transactions] = useState([
    {
      orderId: "ORD-2024-0001",
      buyerName: "John Doe",
      amount: 4999,
      status: "completed",
      date: "2024-01-15"
    },
    {
      orderId: "ORD-2024-0002",
      buyerName: "Sarah Smith",
      amount: 2499,
      status: "pending",
      date: "2024-01-14"
    },
    {
      orderId: "ORD-2024-0003",
      buyerName: "Michael Johnson",
      amount: 7999,
      status: "completed",
      date: "2024-01-14"
    },
    {
      orderId: "ORD-2024-0004",
      buyerName: "Emily Brown",
      amount: 3499,
      status: "pending",
      date: "2024-01-13"
    },
    {
      orderId: "ORD-2024-0005",
      buyerName: "David Wilson",
      amount: 5999,
      status: "completed",
      date: "2024-01-13"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800';
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Enhanced Header Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-lg blur-xl"></div>
        <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transaction History
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              View and manage all transactions
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-blue-600 text-2xl font-bold">
                {transactions.length}
              </p>
              <p className="text-gray-600">Total Transactions</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-green-600 text-2xl font-bold">
                {transactions.filter(t => t.status === 'completed').length}
              </p>
              <p className="text-gray-600">Completed</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <p className="text-yellow-600 text-2xl font-bold">
                {transactions.filter(t => t.status === 'pending').length}
              </p>
              <p className="text-gray-600">Pending</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Search Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <div className="relative max-w-2xl mx-auto">
          {/* Decorative gradient blur effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
          
          {/* Search container */}
          <div className="relative bg-white rounded-full shadow-lg p-2">
            <div className="flex items-center">
              {/* Search icon with gradient */}
              <div className="pl-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Search input */}
              <input
                type="text"
                placeholder="Search by Order ID or Buyer Name"
                className="w-full px-4 py-3 text-gray-700 bg-transparent focus:outline-none placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Search button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 mr-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
              >
                Search
              </motion.button>
            </div>
          </div>

          {/* Search stats */}
          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 right-0 mt-2 text-center text-sm text-gray-600"
            >
              Found {filteredTransactions.length} results
            </motion.div>
          )}
        </div>

        {/* Quick filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 mt-4"
        >
          {['All', 'Completed', 'Pending'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1 text-sm rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-600 border border-gray-200"
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Table Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-600">Order ID</span>
                    <div className="flex flex-col">
                      <ArrowUpIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                      <ArrowDownIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-600">Buyer Name</span>
                    <div className="flex flex-col">
                      <ArrowUpIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                      <ArrowDownIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-600">Amount</span>
                    <div className="flex flex-col">
                      <ArrowUpIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                      <ArrowDownIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <span className="text-sm font-semibold text-gray-600">Status</span>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-600">Date</span>
                    <div className="flex flex-col">
                      <ArrowUpIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                      <ArrowDownIcon className="w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.map((transaction, index) => (
                <motion.tr 
                  key={transaction.orderId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{transaction.orderId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {transaction.buyerName.charAt(0)}
                      </div>
                      <span className="ml-3 text-sm text-gray-900">{transaction.buyerName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{formatAmount(transaction.amount)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'
                      } mr-1.5`}></span>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredTransactions.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No transactions found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </div>

        {/* Table Footer */}
        {filteredTransactions.length > 0 && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {filteredTransactions.length} transactions
              </p>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Previous</button>
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

export default TransactionHistory;