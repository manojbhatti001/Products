import React from 'react';
import { motion } from 'framer-motion';

const ButtonLoader = ({ size = 'small' }) => {
  const sizeClasses = {
    small: 'w-4 h-4 border',
    medium: 'w-6 h-6 border-2',
    large: 'w-8 h-8 border-2'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`${sizeClasses[size]} border-white/30 border-t-white rounded-full`}
    />
  );
};

export default ButtonLoader;