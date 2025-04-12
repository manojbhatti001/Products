import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const ProductList = () => {
  // Sample product data with added date
  const [products] = useState([
    {
      id: 'PRD001',
      title: 'React Complete Guide',
      category: 'JavaScript',
      price: 4999,
      date: '2024-01-15'
    },
    {
      id: 'PRD002',
      title: 'Python Masterclass',
      category: 'Python',
      price: 3499,
      date: '2024-01-14'
    },
    {
      id: 'PRD003',
      title: 'Angular Essentials',
      category: 'JavaScript',
      price: 2999,
      date: '2024-01-13'
    },
    {
      id: 'PRD004',
      title: 'Node.js Backend Development',
      category: 'JavaScript',
      price: 5499,
      date: '2024-01-12'
    },
    {
      id: 'PRD005',
      title: 'Django Web Framework',
      category: 'Python',
      price: 4299,
      date: '2024-01-11'
    },
  ]);

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="p-2 sm:p-4 bg-white dark:bg-gray-800">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Product List
        </h2>
        
        {/* Search and Add Product Section */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-4">
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Products Table with Horizontal Scroll for Mobile */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {['Product ID', 'Title', 'Category', 'Price', 'Date', 'Actions'].map((head, idx) => (
                  <th key={idx} className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                  <td className="px-3 sm:px-6 py-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {product.id}
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-sm dark:text-gray-300">
                    <div className="max-w-[200px] truncate">
                      {product.title}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-sm">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-sm dark:text-gray-300 whitespace-nowrap">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-sm whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {formatDate(product.date)}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-sm whitespace-nowrap">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 transition">
                        Edit
                      </button>
                      <button className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination - Made Responsive */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 text-gray-900 dark:text-white">
        <div className="text-sm text-center sm:text-left">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
          <span className="font-medium">5</span> results
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Previous
          </button>
          <button
            className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;