import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Users, ChevronRight, ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  const formatIndianPrice = (price) => {
    const priceInRupees = Math.round(price * 83);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(priceInRupees);
  };

  const navigate = useNavigate();

  const handleViewCourse = () => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const existingProduct = products.find(p => p.id === product.id);
    
    if (!existingProduct) {
      products.push({
        id: product.id,
        name: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        category: product.badge || 'Course',
        description: product.description,
        imageUrl: product.thumbnail,
        rating: product.rating
      });
      localStorage.setItem('products', JSON.stringify(products));
    }
    
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="absolute top-4 left-4 z-10"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            {product.badge}
          </span>
        </motion.div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm dark:text-gray-300">{product.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm dark:text-gray-300">{product.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm dark:text-gray-300">{product.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatIndianPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                {formatIndianPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewCourse}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            Buy Now
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* See More Link */}
        <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-3">
          <motion.button
            onClick={handleViewCourse}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 text-sm font-medium flex items-center justify-center w-full group"
          >
            See More Details
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;