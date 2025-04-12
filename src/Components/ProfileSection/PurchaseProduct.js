import React from 'react';
import { Download, ExternalLink, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const PurchaseProduct = () => {
  const { isDarkMode } = useTheme();
  // Get purchased products from localStorage
  const purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts') || '[]');

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
        <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          My Purchased Products
        </h1>

        {purchasedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              You haven't purchased any products yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {purchasedProducts.map((product) => (
              <div 
                key={product.id} 
                className={`border rounded-xl p-6 ${
                  isDarkMode 
                    ? 'border-gray-700 hover:border-gray-600' 
                    : 'border-gray-200 hover:border-blue-200'
                } transition-colors`}
              >
                <div className="flex items-start gap-6">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-24 object-cover rounded-lg"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.name}
                    </h3>
                    
                    <div className={`flex items-center gap-4 text-sm mb-4 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Purchased on {new Date(product.purchaseDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{product.duration}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      {product.downloadUrl && (
                        <button className={`flex items-center gap-2 ${
                          isDarkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-blue-600 hover:text-blue-700'
                        } transition-colors`}>
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      )}
                      {product.accessUrl && (
                        <a 
                          href={product.accessUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 ${
                            isDarkMode 
                              ? 'text-green-400 hover:text-green-300' 
                              : 'text-green-600 hover:text-green-700'
                          } transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Access Course
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseProduct;