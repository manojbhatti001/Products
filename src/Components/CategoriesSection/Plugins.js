import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Star, 
  Clock, 
  Code, 
  Shield, 
  ShoppingCart, 
  Settings, 
  Globe, 
  Check,
  Package,
  CheckCircle,
  ChevronRight 
} from "react-feather";
import { useTheme } from '../../context/ThemeContext';

const PluginsPage = () => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const pluginCourses = [
    {
      id: 1,
      title: "WordPress Plugin Development Masterclass",
      category: "Development",
      level: "Intermediate",
      duration: "22 Hours",
      students: 12000,
      rating: 4.8,
      price: 59.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      instructor: "Alex Johnson",
      instructorImage: "https://randomuser.me/api/portraits/men/42.jpg",
      highlights: [
        "Plugin Architecture",
        "WordPress APIs",
        "Security Best Practices",
      ],
    },
    {
      id: 2,
      title: "WooCommerce Plugin Development",
      category: "E-commerce",
      level: "Advanced",
      duration: "25 Hours",
      students: 8000,
      rating: 4.7,
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
      instructor: "Sarah Wilson",
      instructorImage: "https://randomuser.me/api/portraits/women/42.jpg",
      highlights: [
        "Custom Extensions",
        "Payment Gateways",
        "Product Management",
      ],
    },
    {
      id: 3,
      title: "SEO Plugin Development",
      category: "Marketing",
      level: "Intermediate",
      duration: "18 Hours",
      students: 15000,
      rating: 4.9,
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      instructor: "Mike Brown",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: ["SEO Optimization", "Analytics Integration", "Performance"],
    },
  ];
  const features = [
    {
      title: "Plugin Architecture",
      description: "Learn to build scalable and maintainable plugin structures",
      icon: <Package className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "WordPress Integration",
      description: "Master WordPress hooks, filters, and APIs",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Security",
      description: "Implement robust security measures in your plugins",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "E-commerce",
      description: "Build WooCommerce extensions and payment gateways",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Configuration",
      description: "Create user-friendly plugin settings and options",
      icon: <Settings className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Distribution",
      description: "Learn to publish and monetize your plugins",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];
  const benefits = [
    "Real-world Project Experience",
    "WordPress Plugin Standards",
    "Code Review & Best Practices",
    "Plugin Marketplace Knowledge",
    "Security Implementation",
    "Performance Optimization",
  ];
  const filteredCourses = pluginCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors duration-200`}>
      {/* Hero Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800'
      } text-white py-16 sm:py-20 lg:py-32 overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* CSS grid pattern */}
          <div 
            className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
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
            className={`absolute -right-1/4 -top-1/4 w-64 sm:w-96 h-64 sm:h-96 ${
              isDarkMode ? 'bg-blue-900/20' : 'bg-blue-500/30'
            } rounded-full blur-3xl`}
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
            className={`absolute -left-1/4 -bottom-1/4 w-64 sm:w-96 h-64 sm:h-96 ${
              isDarkMode ? 'bg-purple-900/20' : 'bg-purple-500/30'
            } rounded-full blur-3xl`}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-white/10'
              } backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-white/20'}`}
            >
              <span className="text-xs sm:text-sm font-semibold">🚀 The Most Comprehensive Plugin Development Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Master
              <span className="relative">
                <span className={`relative z-10 px-2 mx-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-blue-400 to-purple-400'
                } rounded-lg`}>
                  Plugin
                </span>
                <motion.span
                  className={`absolute inset-0 ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-white/20'
                  } rounded-lg -rotate-2`}
                  animate={{ rotate: [2, -2, 2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </span>
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 ${
                isDarkMode ? 'text-gray-300' : 'text-blue-100'
              } px-4`}
            >
              From fundamentals to advanced concepts, learn to create powerful plugins 
              that extend functionality and create new possibilities
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto px-4 sm:px-0"
            >
              <div className={`absolute inset-0 ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-white/5'
              } rounded-full blur`}></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search plugin development courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 sm:px-8 py-3 sm:py-5 rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-800/90 text-gray-100 placeholder-gray-400 border border-gray-700' 
                      : 'bg-white/90 text-gray-800 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl pl-12 sm:pl-14 text-sm sm:text-base`}
                />
                <Search className={`absolute left-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } w-4 h-4 sm:w-5 sm:h-5`} />
                <button className={`absolute right-2 sm:right-3 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                } text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}>
                  Search
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 sm:mt-12"
            >
              {[
                { label: "Active Students", value: "30K+" },
                { label: "Video Hours", value: "800+" },
                { label: "5-Star Reviews", value: "12K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                  <div className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-blue-200'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Features Grid */}{" "}
      <div className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          {" "}
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            What You'll Learn{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl bg-gradient-to-r ${feature.color} text-white`}
              >
                {" "}
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>{" "}
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>
      {/* Courses Section */}{" "}
      <div className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          {" "}
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Featured Plugin Courses{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-100'
                } rounded-xl overflow-hidden shadow-lg border transition-colors duration-200`}
              >
                {" "}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />{" "}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.category}{" "}
                  </div>
                </div>{" "}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>{course.title}</h3>{" "}
                  <div className="flex items-center mb-4">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full mr-3"
                    />{" "}
                    <div>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-900'
                      }`}>{course.instructor}</p>{" "}
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>Course Instructor</p>
                    </div>{" "}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {" "}
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={`${
                          isDarkMode 
                            ? 'bg-purple-900/50 text-purple-300' 
                            : 'bg-purple-50 text-purple-600'
                        } text-xs px-2 py-1 rounded-full`}
                      >
                        {highlight}{" "}
                      </span>
                    ))}{" "}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    {" "}
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />{" "}
                      <span className={`ml-1 text-sm font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-900'
                      }`}>
                        {course.rating}{" "}
                      </span>
                    </div>{" "}
                    <div className={`flex items-center text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </div>{" "}
                    <div className="text-lg font-bold text-purple-600">
                      ${course.price}{" "}
                    </div>
                  </div>{" "}
                </div>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>


      {/* Benefits Section */}
      <div className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      } transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className={`font-semibold text-sm uppercase tracking-wider ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>Benefits</span>
            <h2 className={`text-4xl font-bold mt-2 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Why Learn Plugin Development?
            </h2>
            <div className={`w-24 h-1 ${
              isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
            } mx-auto mt-4 rounded-full`}></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                className={`group flex items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 shadow-black/20' 
                    : 'bg-white border-purple-100'
                }`}
              >
                <div className="flex-shrink-0">
                  <Check className={`w-6 h-6 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                <span className={`ml-4 font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className={`py-16 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className={`${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            } font-semibold text-sm uppercase tracking-wider`}>Learning Path</span>
            <h2 className={`text-3xl font-bold mt-2 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>Master Plugin Development</h2>
            <p className={`mt-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-2xl mx-auto text-sm`}>
              Follow our structured path from basics to advanced concepts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                level: "Beginner",
                description: "Start with strong foundations",
                topics: ["Plugin Basics", "WordPress Hooks", "Plugin Structure", "Basic Security"],
                duration: "4 weeks",
                icon: "🚀",
                color: isDarkMode ? "from-green-600 to-green-800" : "from-green-400 to-green-600",
                badge: "Foundation"
              },
              {
                level: "Intermediate",
                description: "Build complex functionality",
                topics: ["Custom Post Types", "Database Operations", "REST API", "Advanced Hooks"],
                duration: "6 weeks",
                icon: "⚡",
                color: isDarkMode ? "from-blue-600 to-blue-800" : "from-blue-400 to-blue-600",
                badge: "Professional"
              },
              {
                level: "Advanced",
                description: "Master enterprise development",
                topics: ["Architecture Patterns", "Performance", "Security", "Integration"],
                duration: "8 weeks",
                icon: "👑",
                color: isDarkMode ? "from-purple-600 to-purple-800" : "from-purple-400 to-purple-600",
                badge: "Expert"
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 relative"
              >
                {index !== 2 && (
                  <div className={`absolute h-full w-0.5 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-b from-current to-transparent'
                  } left-[1.8rem] top-16 -z-10 opacity-20`} />
                )}
                <div 
                  className={`bg-gradient-to-r ${path.color} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl mr-3">{path.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{path.level}</h3>
                          <p className="text-sm text-white/80">{path.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                          {path.duration}
                        </span>
                        <span className="text-xs text-white/80 mt-1">{path.badge} Level</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {path.topics.map((topic, i) => (
                        <div key={i} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                          <CheckCircle className="w-4 h-4 mr-2 text-white/90" />
                          <span className="text-sm text-white/90">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 hover:bg-white text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors duration-300"
                      >
                        Start Path
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
     
      {/* FAQ Section */}
      <div className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What prerequisites do I need for plugin development?",
                answer: "Basic knowledge of PHP and WordPress core concepts is recommended. Familiarity with HTML, CSS, and JavaScript is also helpful.",
                icon: "📚"
              },
              {
                question: "Can I sell the plugins I create during the courses?",
                answer: "Yes! You own all the code you write. We even teach you how to properly monetize and distribute your plugins through various marketplaces.",
                icon: "💰"
              },
              {
                question: "How often is the course content updated?",
                answer: "Our courses are regularly updated to reflect the latest WordPress versions and best practices. You'll always have access to the most current information.",
                icon: "🔄"
              },
              {
                question: "Do you provide support during learning?",
                answer: "Yes, we offer comprehensive support through our community forum, live Q&A sessions, and code review services for premium students.",
                icon: "🤝"
              },
              {
                question: "Is plugin development still profitable in 2024?",
                answer: "Absolutely! The WordPress plugin market continues to grow, with increasing demand for specialized and well-maintained plugins.",
                icon: "📈"
              },
              {
                question: "What tools will I need for development?",
                answer: "A code editor (VS Code recommended), local development environment (we'll help you set up), and basic debugging tools - all covered in our courses.",
                icon: "🛠"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 shadow-lg' 
                    : 'bg-white shadow-sm'
                } rounded-xl p-6`}
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{faq.question}</h3>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluginsPage;