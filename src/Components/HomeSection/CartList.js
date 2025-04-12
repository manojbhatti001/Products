import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, Clock, Users, BookOpen, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';

const CartList = ({ cartItems, setCartItems, calculateTotal }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Dummy data
  const dummyCartItems = [
    {
      id: 1,
      name: "Complete Web Development 2024",
      description: "Master modern web development with HTML, CSS, JavaScript, React & Node.js",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      price: 4999,
      quantity: 1,
      duration: "40 hours",
      students: 15000,
      instructor: "John Smith",
      rating: 4.8,
      features: ["Lifetime Access", "Mobile App", "Certificate"]
    }
  ];

  useEffect(() => {
    // For demo purposes, always set the dummy data
    setCartItems(dummyCartItems);
    localStorage.setItem('cart', JSON.stringify(dummyCartItems));
    setIsLoading(false);
  }, [setCartItems]);

  // Show loading state
  if (isLoading) {
    return <div className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Loading...</div>;
  }

  // Ensure cartItems is an array
  const items = Array.isArray(cartItems) ? cartItems : [];

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!', {
        duration: 2000,
        position: 'top-right',
        style: {
          background: '#333',
          color: '#fff',
          padding: '16px',
        },
      });
      return;
    }
    navigate('/checkout');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const removeItem = (id) => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Shopping Cart
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {items.map((item) => (
              <div key={item.id} className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-xl shadow-lg overflow-hidden`}>
                {/* Mobile View */}
                <div className="block sm:hidden">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 bg-red-500/80 text-white rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{item.name}</h3>
                    
                    <div className="flex items-center mt-2 space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.rating}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-2 mt-3 text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.features.map((feature, index) => (
                        <span key={index} className={`px-2 py-1 rounded-full ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-3 mt-4 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{item.instructor}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={`p-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={`p-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                          {formatPrice(item.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden sm:flex flex-col md:flex-row">
                  <div className="w-48 h-48 md:h-auto flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow p-6 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>{item.name}</h3>
                        <p className={`mt-1 text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center mt-2 space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.rating}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-2 mt-3 text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.features.map((feature, index) => (
                        <span key={index} className={`px-2 py-1 rounded-full ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-4 mt-4 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>By {item.instructor}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={`p-1.5 rounded-full ${
                            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={`p-1.5 rounded-full ${
                            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                          {formatPrice(calculateSubtotal(item.price, item.quantity))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary - Mobile Optimized */}
          <div className="lg:col-span-1">
            <div className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-4 sm:p-6 sticky top-4`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>Order Summary</h3>
              
              <div className="space-y-3">
                <div className={`flex justify-between text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Course Price</span>
                  <span>{formatPrice(cartItems[0]?.price || 0)}</span>
                </div>
                
                <div className={`flex justify-between text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Quantity</span>
                  <span>{cartItems[0]?.quantity || 0}</span>
                </div>

                <div className={`border-t ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } pt-3 mt-3`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Total</span>
                    <span className={`text-xl font-bold ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {formatPrice(calculateTotal())}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className={`w-full py-3 rounded-lg text-white font-medium mt-4 ${
                    isDarkMode 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Proceed to Checkout
                </button>

                <p className={`text-xs text-center mt-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;