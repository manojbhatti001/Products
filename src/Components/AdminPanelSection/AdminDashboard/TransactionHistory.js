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

  const filteredTransactions = transactions.filter(transaction =>
    transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Transaction History
        </h2>
        
        {/* Responsive Search Input */}
        <div className="w-full sm:w-64 relative">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full p-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-white border-gray-200 dark:border-gray-700
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="text-left text-gray-700 dark:text-white border-b dark:border-gray-700">
              <th className="p-2 sm:p-4">Order ID</th>
              <th className="p-2 sm:p-4">Buyer</th>
              <th className="p-2 sm:p-4">Amount</th>
              <th className="p-2 sm:p-4">Status</th>
              <th className="p-2 sm:p-4">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            {filteredTransactions.map((transaction, index) => (
              <motion.tr 
                key={transaction.orderId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="p-2 sm:p-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {transaction.orderId}
                  </span>
                </td>
                <td className="p-2 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="hidden sm:flex h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center text-white text-sm font-medium">
                      {transaction.buyerName.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {transaction.buyerName}
                    </span>
                  </div>
                </td>
                <td className="p-2 sm:p-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatAmount(transaction.amount)}
                  </span>
                </td>
                <td className="p-2 sm:p-4">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'
                    } mr-1.5`}></span>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
                <td className="p-2 sm:p-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
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
      </div>

      {/* Empty State - Responsive */}
      {filteredTransactions.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 sm:py-12"
        >
          <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
            <Search className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 dark:text-gray-300" />
          </div>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">No transactions found</p>
          <p className="text-sm mt-1 text-gray-400 dark:text-gray-500">Try adjusting your search criteria</p>
        </motion.div>
      )}

      {/* Table Footer - Responsive */}
      {filteredTransactions.length > 0 && (
        <div className="mt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-2 sm:px-6 gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredTransactions.length} transactions
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 sm:px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Previous
              </button>
              <button className="px-3 sm:px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;