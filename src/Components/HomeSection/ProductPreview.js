import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, CreditCard } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ProductPreview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Get product from localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const foundProduct = products.find(p => p.id.toString() === id.toString());
    
    if (foundProduct) {
      // Generate additional images based on the main image
      foundProduct.allImages = [
        foundProduct.imageUrl || foundProduct.thumbnail,
        'https://placehold.co/600x400/21759b/FFFFFF/png?text=Additional+1',
        'https://placehold.co/600x400/21759b/FFFFFF/png?text=Additional+2',
        'https://placehold.co/600x400/21759b/FFFFFF/png?text=Additional+3',
        'https://placehold.co/600x400/21759b/FFFFFF/png?text=Additional+4',
        'https://placehold.co/600x400/21759b/FFFFFF/png?text=Additional+5',
      ];
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      image: product.imageUrl || product.thumbnail,
      description: product.description || "",
      duration: product.duration || "8 hours",
      students: product.students || 0,
      instructor: product.instructor || "Expert Instructor",
      quantity: 1
    };

    // Get existing cart items
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item.id === cartItem.id);
    
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item if it doesn't exist
      existingCart.push(cartItem);
    }

    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Show success notification
    toast.success('Course added to cart!', {
      icon: '🛒',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        padding: '16px',
        fontSize: '16px'
      },
      duration: 2000,
      position: 'top-right',
    });
  };

  const handleBuyNow = () => {
    const cartItem = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      image: product.imageUrl || product.thumbnail,
      description: product.description || "",
      duration: product.duration || "8 hours",
      students: product.students || 0,
      instructor: product.instructor || "Expert Instructor",
      quantity: 1
    };

    // Replace any existing items with this single item
    localStorage.setItem('cart', JSON.stringify([cartItem]));
    
    // Navigate directly to checkout
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Add Toaster component */}
      <Toaster position="top-right" />
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Column */}
          <div className="md:w-1/2 p-6">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-video rounded-lg overflow-hidden mb-4"
            >
              <img
                src={product.imageUrl || product.thumbnail} // Always show main thumbnail
                alt={product.name || product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Description - Directly under main image */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Description</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-base">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Column - Rest of the content remains the same */}
          <div className="md:w-1/2 p-6 bg-white">
            <div className="sticky top-24">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name || product.title}
              </h1>
              
              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category || 'Course'}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= (product.rating || 4) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.rating || 4.0})</span>
              </div>

              {/* Included Features */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Included: Quality checked by Envato</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Included: Future updates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Included: 6 months support from corbitaltech</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 -ml-96">
                <span className="text-3xl font-bold text-blue-600">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-semibold bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  className="flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-semibold bg-green-600 hover:bg-green-700"
                >
                  <CreditCard className="w-5 h-5" />
                  Buy Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images Section - Full Width */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Views</h3>
          <div className="space-y-6">
            {/* First Row */}
            <div className="flex gap-6">
              <div className="flex-1 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-200 shadow-md">
                <img
                  src={product.allImages[1]}
                  alt="Product view 1"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-lg bg-black/60 px-6 py-2 rounded-full font-medium">
                      View 1
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-200 shadow-md">
                <img
                  src={product.allImages[2]}
                  alt="Product view 2"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-lg bg-black/60 px-6 py-2 rounded-full font-medium">
                      View 2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-6">
              <div className="flex-1 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-200 shadow-md">
                <img
                  src={product.allImages[3]}
                  alt="Product view 3"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-lg bg-black/60 px-6 py-2 rounded-full font-medium">
                      View 3
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-200 shadow-md">
                <img
                  src={product.allImages[4]}
                  alt="Product view 4"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-lg bg-black/60 px-6 py-2 rounded-full font-medium">
                      View 4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;