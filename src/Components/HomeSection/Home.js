import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, Play, Users, Clock, Star, BookOpen, Award, TrendingUp } from 'lucide-react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import Loader from '../LoaderSection/Loader';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Add popularProducts state
  const [popularProducts] = useState([
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Master full-stack web development with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, and Node.js.",
      thumbnail: "https://placehold.co/600x400/3498db/FFFFFF/png?text=Web+Dev",
      price: 79.99,
      originalPrice: 199.99,
      rating: 4.9,
      duration: "40h",
      students: 35000,
      badge: "Bestseller",
      techStack: [
        { name: "React", icon: "https://placehold.co/30x30/61DAFB/000000/png?text=R" },
        { name: "Node.js", icon: "https://placehold.co/30x30/339933/FFFFFF/png?text=NJ" },
        { name: "JavaScript", icon: "https://placehold.co/30x30/F7DF1E/000000/png?text=JS" }
      ]
    },
    {
      id: 2,
      title: "Python Programming Masterclass",
      description: "Learn Python from scratch and advance to professional level with practical projects and real-world applications.",
      thumbnail: "https://placehold.co/600x400/FFD43B/000000/png?text=Python",
      price: 69.99,
      originalPrice: 169.99,
      rating: 4.8,
      duration: "35h",
      students: 28000,
      badge: "Popular",
      techStack: [
        { name: "Python", icon: "https://placehold.co/30x30/FFD43B/000000/png?text=PY" },
        { name: "Django", icon: "https://placehold.co/30x30/092E20/FFFFFF/png?text=DJ" },
        { name: "Flask", icon: "https://placehold.co/30x30/000000/FFFFFF/png?text=FL" }
      ]
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      description: "Master data analysis, visualization, and machine learning with Python, Pandas, and scikit-learn.",
      thumbnail: "https://placehold.co/600x400/9B59B6/FFFFFF/png?text=Data+Science",
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.7,
      duration: "45h",
      students: 22000,
      badge: "Trending",
      techStack: [
        { name: "Pandas", icon: "https://placehold.co/30x30/150458/FFFFFF/png?text=PD" },
        { name: "NumPy", icon: "https://placehold.co/30x30/013243/FFFFFF/png?text=NP" },
        { name: "Scikit", icon: "https://placehold.co/30x30/F7931E/FFFFFF/png?text=SK" }
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

  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expert-Led Courses",
      description: "Learn from industry veterans with years of practical experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lifetime Access",
      description: "Study at your own pace with unlimited access to course content"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn verified certificates upon course completion"
    }
  ];

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { 
    once: true, 
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '-50px'
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 text-white py-24 rounded-3xl">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute transform -right-20 -top-20 w-96 h-96 bg-white dark:bg-gray-200 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -left-20 -bottom-20 w-96 h-96 bg-white dark:bg-gray-200 rounded-full"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/20 to-blue-900/30 dark:from-transparent dark:via-purple-800/20 dark:to-blue-900/40" />

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="text-left lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-lg mb-6"
                >
                  <span className="text-yellow-300 dark:text-yellow-200 font-semibold">🎉 New:</span>
                  <span className="ml-2 dark:text-gray-200">Advanced TypeScript Course Launch</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white"
                >
                  Master Modern
                  <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 dark:from-yellow-200 dark:via-pink-200 dark:to-yellow-200 text-transparent bg-clip-text">
                    Web Development
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl mb-8 text-gray-100 dark:text-gray-200 leading-relaxed"
                >
                  Join our comprehensive learning platform and transform your career. 
                  Get hands-on experience with real-world projects and learn from industry experts.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/register')}
                    className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Learning Now
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white dark:border-gray-300 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    Watch Demo
                    <Play className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Stats with Animations */}
                <div ref={statsRef} className="grid grid-cols-3 gap-8">
                  {[
                    { number: 50000, suffix: "+", label: "Students", icon: <Users className="w-6 h-6" /> },
                    { number: 100, suffix: "+", label: "Courses", icon: <BookOpen className="w-6 h-6" /> },
                    { number: 4.8, decimals: 1, label: "Rating", icon: <Star className="w-6 h-6" /> }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center"
                    >
                      {stat.icon}
                      <h3 className="text-3xl font-bold mt-2">
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2.5}
                          separator=","
                          decimals={stat.decimals || 0}
                          suffix={stat.suffix || ""}
                          useEasing={true}
                          enableScrollSpy={true}
                          scrollSpyDelay={200}
                          scrollSpyOnce={false}
                        >
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                      </h3>
                      <p className="text-gray-200">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Content - Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2 relative"
              >
                <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { name: 'React', icon: '/images/react.png', delay: 0, color: '#61DAFB' },
                      { name: 'Node.js', icon: '/images/nodejs.webp', delay: 0.2, color: '#339933' },
                      { name: 'MongoDB', icon: '/images/mongodb.png', delay: 0.4, color: '#47A248' },
                      { name: 'JavaScript', icon: '/images/javascript.png', delay: 0.6, color: '#F7DF1E' },
                      { name: 'TypeScript', icon: '/images/typescript.webp', delay: 0.8, color: '#3178C6' },
                      { name: 'Python', icon: '/images/python.png', delay: 1, color: '#3776AB' }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ delay: tech.delay }}
                        className="flex flex-col items-center p-4 bg-white/5 dark:bg-gray-700/50 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all duration-300"
                      >
                        <div className="w-16 h-16 mb-4 relative">
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium dark:text-gray-200">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
    </div>
  );
};

export default Home;