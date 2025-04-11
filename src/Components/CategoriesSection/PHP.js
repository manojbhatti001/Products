import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import { 
  BarChart, Activity, TrendingUp, BarChart2, 
  Target, Award, Search, Code, Database, Server, 
  Globe, Shield, BookOpen, Users, Star, Clock, 
  ChevronRight, Terminal, CheckCircle, Zap, Coffee, 
  Brain, FileCode, Rocket, Tool, GitBranch
} from 'lucide-react';
const PHPPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useTheme();
  
  // Enhanced course data with more details
  const phpCourses = [
    {
      id: 1,
      title: "PHP & MySQL Complete Course",
      category: "Backend Development",
      level: "Intermediate",
      duration: "25 Hours",
      students: 18000,
      rating: 4.8,
      price: 59.99,
      image: "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
      instructor: "David Wilson",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: [
        "Database Integration",
        "REST APIs",
        "Security Best Practices",
        "Real-world Projects",
        "Performance Optimization"
      ],
      topics: [
        "Advanced MySQL Queries",
        "API Authentication",
        "Caching Strategies",
        "Error Handling",
        "Deploy to Production"
      ]
    },
    {
      id: 2,
      title: "Laravel Framework Masterclass",
      category: "Framework",
      level: "Advanced",
      duration: "30 Hours",
      students: 12000,
      rating: 4.9,
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      instructor: "Emily Chen",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      highlights: ["MVC Architecture", "Eloquent ORM", "Authentication"],
    },
    {
      id: 3,
      title: "PHP for Beginners 2024",
      category: "Basics",
      level: "Beginner",
      duration: "20 Hours",
      students: 25000,
      rating: 4.7,
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      instructor: "Michael Brown",
      instructorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      highlights: ["Syntax Basics", "Functions", "Object-Oriented PHP"],
    },
  ];
  const filteredCourses = phpCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const advancedStats = [
    {
      title: "Market Share",
      value: "78.9%",
      change: "+2.3%",
      description: "Of websites use PHP",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/20",
      metric: "Growing steadily",
      trend: "positive"
    },
    {
      title: "Job Market",
      value: "127K+",
      change: "+12.5%",
      description: "Open positions worldwide",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/20",
      metric: "High demand",
      trend: "positive"
    },
    {
      title: "Average Salary",
      value: "$94K",
      change: "+8.4%",
      description: "Annual PHP developer salary",
      icon: <Activity className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/20",
      metric: "Above industry average",
      trend: "positive"
    },
    {
      title: "Framework Usage",
      value: "45.4%",
      change: "+5.7%",
      description: "Use modern PHP frameworks",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      shadowColor: "shadow-red-500/20",
      metric: "Rapid adoption",
      trend: "positive"
    },
    {
      title: "Enterprise Usage",
      value: "83%",
      change: "+3.2%",
      description: "Of Fortune 500 companies use PHP",
      icon: <Target className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/20",
      metric: "Enterprise ready",
      trend: "positive"
    },
    {
      title: "Developer Satisfaction",
      value: "4.5/5",
      change: "+0.3",
      description: "Developer satisfaction score",
      icon: <Award className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/20",
      metric: "Highly rated",
      trend: "positive"
    }
  ];
  const renderAdvancedStatsSection = () => (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Industry Insights</span>
          <h2 className="text-4xl font-bold mt-2 text-white">PHP by the Numbers</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} ${stat.shadowColor} shadow-xl`}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                    <span className="text-white text-sm">{stat.change}</span>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {stat.trend === 'positive' ? '↑' : '↓'}
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white/80">
                    {stat.title}
                  </h3>
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-white/70">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">
                      Current Trend
                    </span>
                    <span className="text-sm font-medium text-white">
                      {stat.metric}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Data sourced from industry reports and market analysis
          </p>
          <button className="mt-6 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            View Detailed Report
          </button>
        </motion.div>
      </div>
    </div>
  );
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>


      {/* Hero Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800'
        } text-white py-32 overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* CSS grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
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
            className="absolute -right-1/4 -top-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
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
            className="absolute -left-1/4 -bottom-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-semibold">🚀 The Most Comprehensive PHP Learning Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold mb-6 leading-tight"
            >
              Master
              <span className="relative">
                <span className="relative z-10 px-2 mx-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                  PHP
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-lg -rotate-2"
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
              className="text-xl mb-12 text-blue-100"
            >
              From fundamentals to advanced concepts, join over 50,000+ developers who've 
              mastered PHP with our industry-leading curriculum
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 bg-white/5 rounded-full blur"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search PHP courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-8 py-5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl pl-14"
                />
                <Search className="absolute left-5 text-gray-400 w-5 h-5" />
                <button className="absolute right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                  Search
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-8 mt-12"
            >
              {[
                { label: "Active Students", value: "50K+" },
                { label: "Video Hours", value: "1,200+" },
                { label: "5-Star Reviews", value: "15K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-200'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>


      {/* Stats Section */}
      <div className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl font-bold text-center mb-12 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            PHP BY THE NUMBERS
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "78.9%",
                label: "Server-side Websites",
                icon: <Server className="w-8 h-8" />,
                color: "from-pink-500 to-rose-600",
                shadowColor: "shadow-rose-500/20"
              },
              {
                value: "45M+",
                label: "Websites Using PHP",
                icon: <Globe className="w-8 h-8" />,
                color: "from-amber-400 to-orange-500",
                shadowColor: "shadow-orange-500/20"
              },
              {
                value: "8K+",
                label: "PHP Libraries",
                icon: <Code className="w-8 h-8" />,
                color: "from-cyan-400 to-teal-500",
                shadowColor: "shadow-teal-500/20"
              },
              {
                value: "25K+",
                label: "Active Developers",
                icon: <Users className="w-8 h-8" />,
                color: "from-fuchsia-500 to-purple-600",
                shadowColor: "shadow-purple-500/20"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} ${stat.shadowColor} shadow-xl p-8`}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-white/80 font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Courses Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured PHP Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-900'
                      }`}>
                        {course.instructor}
                      </p>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Course Instructor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={`${
                          isDarkMode 
                            ? 'bg-blue-900/50 text-blue-300' 
                            : 'bg-blue-50 text-blue-600'
                        } text-xs px-2 py-1 rounded-full`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center justify-between text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  } mb-4`}>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" /> {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" /> {course.rating}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      ${course.price}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


     { /* Why Choose PHP Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-blue-400">PHP?</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Learn",
                description: "Simple syntax and extensive documentation make PHP perfect for beginners",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-pink-500 to-rose-600",
                shadowColor: "shadow-rose-500/20"
              },
              {
                title: "Huge Community",
                description: "Access to vast resources, frameworks, and community support",
                icon: <Users className="w-6 h-6" />,
                color: "from-amber-400 to-orange-500",
                shadowColor: "shadow-orange-500/20"
              },
              {
                title: "Market Demand",
                description: "High demand for PHP developers in the job market",
                icon: <Globe className="w-6 h-6" />,
                color: "from-cyan-400 to-teal-500",
                shadowColor: "shadow-teal-500/20"
              },
              {
                title: "Versatility",
                description: "Build anything from simple websites to complex web applications",
                icon: <Code className="w-6 h-6" />,
                color: "from-fuchsia-500 to-purple-600",
                shadowColor: "shadow-purple-500/20"
              },
              {
                title: "Database Integration",
                description: "Seamless integration with various database systems",
                icon: <Database className="w-6 h-6" />,
                color: "from-green-400 to-emerald-500",
                shadowColor: "shadow-emerald-500/20"
              },
              {
                title: "Security Features",
                description: "Built-in security features and regular updates",
                icon: <Shield className="w-6 h-6" />,
                color: "from-blue-400 to-indigo-500",
                shadowColor: "shadow-indigo-500/20"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.color} ${feature.shadowColor} shadow-xl p-8`}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
                      <div className="text-white transition-transform">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className={`font-semibold text-sm uppercase tracking-wider ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Got Questions?
            </span>
            <h2 className={`text-4xl font-bold mt-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
            <div className={`w-24 h-1 ${
              isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
            } mx-auto mt-4 rounded-full`}></div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Is PHP still relevant in 2024?",
                answer: "Yes, PHP remains highly relevant with modern frameworks like Laravel and Symfony keeping it competitive in web development.",
                icon: "🚀"
              },
              {
                question: "What can I build with PHP?",
                answer: "PHP is versatile - you can build websites, web applications, APIs, CMS systems, e-commerce platforms, and more.",
                icon: "🛠"
              },
              {
                question: "Do I need to know MySQL?",
                answer: "While not mandatory to start, learning MySQL alongside PHP is highly recommended as they're commonly used together.",
                icon: "💾"
              },
              {
                question: "What are the job prospects?",
                answer: "PHP developers are in high demand, with opportunities in web development, backend development, and full-stack roles.",
                icon: "💼"
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 shadow-gray-900/30' 
                    : 'bg-white border-blue-50 shadow-lg'
                } rounded-xl hover:shadow-xl transition-all duration-300 border`}
              >
                <button
                  className="w-full px-8 py-6 text-left font-semibold flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className={`text-lg ${
                      isDarkMode 
                        ? 'text-gray-200 group-hover:text-blue-400' 
                        : 'text-gray-800 group-hover:text-blue-600'
                    } transition-colors`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transform rotate-90 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  } group-hover:rotate-[270deg] transition-transform duration-300`} />
                </button>
                <div className="px-8 pb-6">
                  <div className={`h-px ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  } mb-4`}></div>
                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Still have questions?{" "}
              <a href="#contact" className={`font-semibold ${
                isDarkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
              } transition-colors`}>
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>


      {/* CTA Section */}
      <div className={`${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800'
      } py-16`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-gray-100' : 'text-white'
            }`}>
              Ready to Start Your PHP Journey?
            </h2>
            <p className={`text-lg mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-white/90'
            }`}>
              Join thousands of students already learning PHP with us
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                isDarkMode 
                  ? 'bg-blue-500 hover:bg-blue-400 text-white' 
                  : 'bg-white hover:bg-gray-100 text-blue-700'
              } px-8 py-3 rounded-full font-bold shadow-lg transition-colors duration-300`}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PHPPage;