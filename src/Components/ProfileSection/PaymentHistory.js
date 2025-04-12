import React, { useState } from 'react';
import { Calendar, Download, Search, Filter } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const PaymentHistory = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const payments = JSON.parse(localStorage.getItem('paymentHistory') || '[]');

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800';
      case 'pending':
        return isDarkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800';
      default:
        return isDarkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-full overflow-hidden px-2 sm:px-6 py-4 sm:py-8">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-3 sm:p-6`}>
        <h1 className={`text-lg sm:text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Payment History
        </h1>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-4 h-4`} />
            <input
              type="text"
              placeholder="Search transactions..."
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full sm:w-48">
            <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-4 h-4`} />
            <select
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="block sm:hidden">
          {filteredPayments.length === 0 ? (
            <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No payment records found
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPayments.map((payment) => (
                <div 
                  key={payment.id} 
                  className={`p-4 rounded-lg border ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      {payment.productName}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Transaction ID:</span>
                      <span className={`font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{payment.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Amount:</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-900'}>${payment.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Date:</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-900'}>
                        {new Date(payment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      className={`w-full mt-3 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                        ${isDarkMode 
                          ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                    >
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Transaction ID</span>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Product</span>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Date</span>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Amount</span>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Status</span>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-500'}>Invoice</span>
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan="6" className={`px-4 py-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    No payment records found
                  </td>
                </tr>
              ) : (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                        {payment.transactionId}
                      </span>
                    </td>
                    <td className={`px-4 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      {payment.productName}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                          {new Date(payment.date).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className={`px-4 py-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      ${payment.amount}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                          ${isDarkMode 
                            ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;