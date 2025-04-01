import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import ProductCard from './ProductCard';

const Home = () => {
  const [popularProducts] = useState([
    {
      id: 1,
      title: "WordPress Theme Development",
      description: "Master WordPress theme development from scratch. Learn PHP, WordPress hooks, custom post types, and theme customization.",
      thumbnail: "https://placehold.co/600x400/21759b/FFFFFF/png?text=WordPress",
      price: 49.99,  // Will be converted to ₹4,149
      originalPrice: 199.99,  // Will be converted to ₹16,599
      rating: 4.8,
      duration: "20h",
      students: 15000,
      badge: "Bestseller",
      techStack: [
        { name: "WordPress", icon: "https://placehold.co/30x30/21759b/FFFFFF/png?text=WP" },
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "MySQL", icon: "https://placehold.co/30x30/4479A1/FFFFFF/png?text=SQL" }
      ]
    },
    {
      id: 2,
      title: "PHP & MySQL Development",
      description: "Complete PHP programming course with MySQL database integration. Build dynamic web applications from ground up.",
      thumbnail: "https://placehold.co/600x400/777BB3/FFFFFF/png?text=PHP+Course",
      price: 59.99,
      originalPrice: 149.99,
      rating: 4.7,
      duration: "25h",
      students: 12000,
      badge: "New",
      techStack: [
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "MySQL", icon: "https://placehold.co/30x30/4479A1/FFFFFF/png?text=SQL" },
        { name: "Laravel", icon: "https://placehold.co/30x30/FF2D20/FFFFFF/png?text=LV" }
      ]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Learn to build cross-platform mobile apps using React Native and Flutter. Deploy to iOS and Android.",
      thumbnail: "https://placehold.co/600x400/61DAFB/000000/png?text=Mobile+Dev",
      price: 79.99,
      originalPrice: 299.99,
      rating: 4.9,
      duration: "40h",
      students: 8000,
      badge: "Popular",
      techStack: [
        { name: "React Native", icon: "https://placehold.co/30x30/61DAFB/000000/png?text=RN" },
        { name: "Flutter", icon: "https://placehold.co/30x30/02569B/FFFFFF/png?text=FL" },
        { name: "Firebase", icon: "https://placehold.co/30x30/FFCA28/000000/png?text=FB" }
      ]
    }
  ]);

  const [latestProducts] = useState([
    {
      id: 4,
      title: "HTML5 & CSS3 Mastery",
      description: "Complete guide to modern HTML5, CSS3, and responsive web design. Build beautiful, responsive websites.",
      thumbnail: "https://placehold.co/600x400/E34F26/FFFFFF/png?text=HTML5",
      price: 44.99,
      originalPrice: 129.99,
      rating: 4.6,
      duration: "15h",
      students: 20000,
      badge: "Hot",
      techStack: [
        { name: "HTML5", icon: "https://placehold.co/30x30/E34F26/FFFFFF/png?text=H5" },
        { name: "CSS3", icon: "https://placehold.co/30x30/1572B6/FFFFFF/png?text=CSS" },
        { name: "Sass", icon: "https://placehold.co/30x30/CC6699/FFFFFF/png?text=SASS" }
      ]
    },
    {
      id: 5,
      title: "JavaScript Advanced Concepts",
      description: "Deep dive into advanced JavaScript concepts, ES6+, async programming, and modern JS frameworks.",
      thumbnail: "https://placehold.co/600x400/F7DF1E/000000/png?text=JavaScript",
      price: 54.99,
      originalPrice: 179.99,
      rating: 4.8,
      duration: "25h",
      students: 11000,
      badge: "Advanced",
      techStack: [
        { name: "JavaScript", icon: "https://placehold.co/30x30/F7DF1E/000000/png?text=JS" },
        { name: "TypeScript", icon: "https://placehold.co/30x30/3178C6/FFFFFF/png?text=TS" },
        { name: "Node.js", icon: "https://placehold.co/30x30/339933/FFFFFF/png?text=NJ" }
      ]
    },
    {
      id: 6,
      title: "WordPress Plugin Development",
      description: "Learn to create custom WordPress plugins. Master plugin architecture, security, and best practices.",
      thumbnail: "https://placehold.co/600x400/21759b/FFFFFF/png?text=WP+Plugins",
      price: 49.99,
      originalPrice: 159.99,
      rating: 4.7,
      duration: "18h",
      students: 9000,
      badge: "Featured",
      techStack: [
        { name: "WordPress", icon: "https://placehold.co/30x30/21759b/FFFFFF/png?text=WP" },
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "JavaScript", icon: "https://placehold.co/30x30/F7DF1E/000000/png?text=JS" }
      ]
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -right-20 -top-20 w-80 h-80 bg-white rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Level Up Your Skills with Our
                <span className="block mt-2 text-yellow-300">
                  Premium Tech Courses
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 text-gray-100"
              >
                Master modern web development with industry experts. Join over 50,000+ developers who have transformed their careers.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  View Courses
                  <Play className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold">50K+</h3>
                  <p className="text-gray-200">Students</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">100+</h3>
                  <p className="text-gray-200">Courses</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">4.8</h3>
                  <p className="text-gray-200">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content - Tech Stack Animation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-3 gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
                {[
                  { name: 'React', icon: '/icons/react.svg', delay: 0 },
                  { name: 'Node.js', icon: '/icons/nodejs.svg', delay: 0.2 },
                  { name: 'MongoDB', icon: '/icons/mongodb.svg', delay: 0.4 },
                  { name: 'JavaScript', icon: '/icons/javascript.svg', delay: 0.6 },
                  { name: 'TypeScript', icon: '/icons/typescript.svg', delay: 0.8 },
                  { name: 'Python', icon: '/icons/python.svg', delay: 1 }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: tech.delay }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-lg"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-yellow-300/20 rounded-full backdrop-blur-lg"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-300/20 rounded-full backdrop-blur-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Courses</h2>
          <a href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
            View All 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Latest Courses</h2>
          <a href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;