import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, Clock, Users, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

const CartList = ({ cartItems, setCartItems, calculateTotal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage and keep only the first item
    const savedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // Take only the first item if exists
    const limitedItems = savedCartItems.slice(0, 1);
    setCartItems(limitedItems);
    // Update localStorage to keep only one item
    localStorage.setItem('cart', JSON.stringify(limitedItems));
  }, [setCartItems]);

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

  // Add null check for cartItems
  if (!cartItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Show only the first item */}
            {cartItems.slice(0, 1).map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="w-full md:w-48 h-48 md:h-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t md:rounded-none md:rounded-l"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration || "8 hours"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{(item.students || 0).toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{item.instructor || "Expert Instructor"}</span>
                      </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity === 1}
                            className={`p-1 rounded-full ${item.quantity === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {formatPrice(item.price)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Subtotal: {formatPrice(calculateSubtotal(item.price, item.quantity))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 lg:top-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span>1</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Total Courses</span>
                  <span>{cartItems[0]?.quantity || 0}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(calculateTotal())}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-6"
                >
                  Proceed to Checkout
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
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