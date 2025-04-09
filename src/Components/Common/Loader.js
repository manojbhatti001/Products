import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Main rotating circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
        />
        
        {/* Inner pulsing circle */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 m-auto w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
        />

        {/* Floating dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-4, 4, -4],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-blue-500 font-medium"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;