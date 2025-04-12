import React, { useState } from 'react';
import { Calendar, Download, Search, Filter } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const PaymentHistory = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Get payment history from localStorage
  const payments = JSON.parse(localStorage.getItem('paymentHistory') || '[]');

  // Filter payments based on search and status
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
    <div className="container mx-auto px-4 py-8">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Payment History
        </h1>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
            <input
              type="text"
              placeholder="Search transactions..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
            <select
              className={`pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none
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

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Transaction ID</th>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Product</th>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Date</th>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Amount</th>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Status</th>
                <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan="6" className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    No payment records found
                  </td>
                </tr>
              ) : (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      <span className="font-mono text-sm">{payment.transactionId}</span>
                    </td>
                    <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{payment.productName}</td>
                    <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        {new Date(payment.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      <span className="font-semibold">
                        ₹{payment.amount.toLocaleString('en-IN')}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {payment.status === 'completed' && (
                        <button className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                          <Download className="w-4 h-4" />
                          Invoice
                        </button>
                      )}
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