import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  CheckCircle, 
  Code, 
  Layout,
  Users,
  Clock,
  TrendingUp,
  Star,
  Database,
  Smartphone,
  DollarSign,
  Download,
  Monitor
} from 'react-feather';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

const MobileAppDevelopment = () => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showAllTech, setShowAllTech] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const { ref: statsRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const mobileCourses = [
    {
      id: 1,
      title: "React Native Masterclass 2024",
      category: "React Native",
      level: "Intermediate",
      duration: "30 Hours",
      students: 15000,
      rating: 4.8,
      price: 89.99,
      image: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
      instructor: "Sarah Johnson",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      highlights: ["Cross-Platform Development", "Native Components", "Redux Integration"],
      tech: "react-native"
    },
    {
      id: 2,
      title: "Flutter Complete Developer Course",
      category: "Flutter",
      level: "Beginner to Advanced",
      duration: "40 Hours",
      students: 12000,
      rating: 4.9,
      price: 94.99,
      image: "https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_1280.jpg",
      instructor: "David Chen",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: ["Dart Programming", "Material Design", "State Management"],
      tech: "flutter"
    },
    {
      id: 3,
      title: "iOS App Development with Swift",
      category: "iOS",
      level: "Advanced",
      duration: "35 Hours",
      students: 8000,
      rating: 4.7,
      price: 99.99,
      image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/apps-647504_1280.jpg",
      instructor: "Emily Parker",
      instructorImage: "https://randomuser.me/api/portraits/women/28.jpg",
      highlights: ["Swift Programming", "UIKit", "App Store Deployment"],
      tech: "ios"
    },
    {
      id: 4,
      title: "Android Development with Kotlin",
      category: "Android",
      level: "Intermediate",
      duration: "38 Hours",
      students: 10000,
      rating: 4.6,
      price: 84.99,
      image: "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-2017980_1280.jpg",
      instructor: "Alex Turner",
      instructorImage: "https://randomuser.me/api/portraits/men/55.jpg",
      highlights: ["Kotlin Fundamentals", "Android Studio", "Material Design"],
      tech: "android"
    },
    {
      id: 5,
      title: "Kotlin Multiplatform Mobile",
      category: "Cross-Platform",
      level: "Advanced",
      duration: "45 Hours",
      students: 5000,
      rating: 4.8,
      price: 99.99,
      image: "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.jpg",
      instructor: "Maria Rodriguez",
      instructorImage: "https://randomuser.me/api/portraits/women/56.jpg",
      highlights: ["Shared Code Architecture", "Native Integration", "Multiplatform Testing"],
      tech: "kotlin-multiplatform"
    },
    {
      id: 6,
      title: "Progressive Web Apps Masterclass",
      category: "PWA",
      level: "Intermediate",
      duration: "28 Hours",
      students: 7500,
      rating: 4.7,
      price: 79.99,
      image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
      instructor: "James Wilson",
      instructorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      highlights: ["Service Workers", "Offline Functionality", "Push Notifications"],
      tech: "pwa"
    }
  ];

  const initialTechnologies = [
    {
      name: "React Native",
      icon: "/images/react-native-logo.png",
      color: "from-blue-400 to-blue-600",
      description: "Build native apps using React"
    },
    {
      name: "Flutter",
      icon: "/images/flutter-logo.png",
      color: "from-cyan-400 to-cyan-600",
      description: "Google's UI toolkit for mobile"
    },
    {
      name: "iOS",
      icon: "/images/ios-logo.png",
      color: "from-gray-600 to-gray-800",
      description: "Native iOS development"
    }
  ];

  const additionalTechnologies = [
    {
      name: "Android",
      icon: "/images/android-logo.png",
      color: "from-green-400 to-green-600",
      description: "Native Android development"
    },
    {
      name: "Kotlin Multiplatform",
      icon: "/images/kotlin-logo.png",
      color: "from-purple-400 to-purple-600",
      description: "Share code between platforms"
    },
    {
      name: "PWA",
      icon: "/images/pwa-logo.png",
      color: "from-orange-400 to-red-600",
      description: "Progressive Web Apps"
    }
  ];

  // Combine technologies based on showAllTech state
  const visibleTechnologies = showAllTech 
    ? [...initialTechnologies, ...additionalTechnologies]
    : initialTechnologies;

  const getTechFeatures = (techName) => {
    const features = {
      "React Native": ["Cross-Platform", "Native Components", "Redux Integration"],
      "Flutter": ["Dart Programming", "Material Design", "State Management"],
      "iOS": ["Swift Programming", "UIKit", "App Store Deployment"],
      "Android": ["Kotlin Fundamentals", "Android Studio", "Material Design"],
      "Kotlin Multiplatform": ["Shared Code Architecture", "Native Integration", "Multiplatform Testing"],
      "PWA": ["Service Workers", "Offline Functionality", "Push Notifications"]
    };
    return features[techName] || [];
  };

  const filteredCourses = mobileCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800'
      } text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden`}>
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
            className="absolute -right-1/4 -top-1/4 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-blue-500/30 rounded-full blur-3xl"
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
            className="absolute -left-1/4 -bottom-1/4 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-purple-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Master
              <span className="relative inline-block">
                <span className="relative z-10 px-1 sm:px-2 mx-1 sm:mx-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                  Mobile
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
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-blue-100 px-4"
            >
              From native to cross-platform, join over 45,000+ developers who've 
              mastered mobile app development with our industry-leading curriculum
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto px-4 sm:px-6"
            >
              <div className="absolute inset-0 bg-white/5 rounded-full blur"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 sm:px-8 py-3 sm:py-5 rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-100 placeholder-gray-400 border-gray-700' 
                      : 'bg-white text-gray-800 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl pl-10 sm:pl-14 text-sm sm:text-base`}
                />
                <Search className={`absolute left-3 sm:left-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-4 h-4 sm:w-5 sm:h-5`} />
                <button className="absolute right-2 sm:right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
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
                { label: "Active Students", value: "45K+" },
                { label: "Course Hours", value: "150+" },
                { label: "5-Star Reviews", value: "12K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-white to-gray-50'
      } py-24 overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Choose Your Technology Path
            </h2>
            <p className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Explore the most in-demand mobile development technologies and start your journey to becoming a professional mobile developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative ${
                  isDarkMode 
                    ? 'bg-gray-800 shadow-gray-900/50' 
                    : 'bg-white'
                } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon container with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-full blur-xl`}
                  />
                  <div className="relative h-20 w-20 mx-auto">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-3 text-center group-hover:text-purple-600 transition-colors ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {tech.name}
                </h3>
                <p className={`text-center mb-6 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {tech.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {getTechFeatures(tech.name).map((feature, idx) => (
                    <div key={idx} className={`flex items-center ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 px-6 rounded-xl bg-gradient-to-r ${tech.color} text-white font-semibold 
                    hover:shadow-lg hover:shadow-${tech.color.split('-')[1]}/20 transition-all duration-300`}
                >
                  Start Learning
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mb-4  mt-12"
          >
            <motion.button
              onClick={() => setShowAllTech(!showAllTech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-800 border-purple-500 text-purple-400 hover:bg-gray-700' 
                  : 'bg-white border-purple-500 text-purple-600 hover:bg-purple-50'
              } border-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <span className="flex items-center">
                {showAllTech ? 'Show Less' : 'See More Technologies'}
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom stats section */}
          <div className={`py-24 ${
            isDarkMode 
              ? 'bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800' 
              : 'bg-gradient-to-b from-gray-50/50 to-white'
          } relative overflow-hidden`}>
            
            {/* Background decoration - adjusted for dark mode */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
                isDarkMode 
                  ? 'bg-purple-900/20' 
                  : 'bg-purple-100/30'
              }`}></div>
              <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
                isDarkMode 
                  ? 'bg-blue-900/20' 
                  : 'bg-blue-100/30'
              }`}></div>
            </div>

            <div className={`container mx-auto -mb-16 px-4 relative ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
              >
                {/* Badge with dark/light mode gradients */}
                <span className={`inline-block px-4 py-1.5 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400' 
                    : 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700'
                } rounded-full font-medium text-sm mb-4`}>
                  Our Growth & Impact
                </span>

                {/* Title with adaptive gradient text */}
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-gray-100 via-purple-200 to-gray-100'
                    : 'bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900'
                } bg-clip-text text-transparent`}>
                  Milestones & Achievements
                </h2>

                {/* Description with dark/light text */}
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                  Track our progress and impact in the mobile development education space
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    label: "Active Learners",
                    value: "50000",
                    icon: Users,
                    color: "from-blue-500 to-blue-600",
                    lightColor: "from-blue-50 to-blue-100/50",
                    darkColor: "text-blue-600",
                    description: "Engaged students worldwide",
                    trend: "+12% this month",
                    trendUp: true
                  },
                  {
                    label: "Course Hours",
                    value: "1000",
                    icon: Clock,
                    color: "from-purple-500 to-purple-600",
                    lightColor: "from-purple-50 to-purple-100/50",
                    darkColor: "text-purple-600",
                    description: "In-depth learning content",
                    trend: "+5 hours weekly",
                    trendUp: true
                  },
                  {
                    label: "Projects Built",
                    value: "25000",
                    icon: Code,
                    color: "from-indigo-500 to-indigo-600",
                    lightColor: "from-indigo-50 to-indigo-100/50",
                    darkColor: "text-indigo-600",
                    description: "Real-world applications",
                    trend: "+8% this week",
                    trendUp: true
                  },
                  {
                    label: "Success Rate",
                    value: "94",
                    icon: TrendingUp,
                    color: "from-emerald-500 to-emerald-600",
                    lightColor: "from-emerald-50 to-emerald-100/50",
                    darkColor: "text-emerald-600",
                    description: "Student completion rate",
                    trend: "Industry leading",
                    trendUp: true
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Stat Card with dark/light backgrounds */}
                    <div className={`${
                      isDarkMode 
                        ? 'bg-gray-800 shadow-gray-900/50' 
                        : 'bg-white'
                    } rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                      
                      {/* Icon Header with adaptive colors */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-lg ${
                          isDarkMode 
                            ? `bg-gradient-to-r from-${stat.darkColor}-900 to-${stat.darkColor}-800` 
                            : `bg-gradient-to-r ${stat.lightColor}`
                        } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className={`w-6 h-6 ${isDarkMode ? 'text-white' : stat.darkColor}`} />
                        </div>

                        {/* Trend indicator with adaptive styling */}
                        <div className={`text-sm font-medium ${
                          isDarkMode 
                            ? `text-${stat.darkColor}-400 bg-${stat.darkColor}-900/30` 
                            : `${stat.darkColor} bg-gradient-to-r ${stat.lightColor}`
                        } px-3 py-1 rounded-full`}>
                          {stat.trend}
                        </div>
                      </div>

                      {/* Counter section with adaptive text colors */}
                      <div className="space-y-2">
                        <div className="relative">
                          <div className={`text-4xl font-bold ${
                            isDarkMode 
                              ? 'text-white' 
                              : `bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`
                          }`}>
                            <CountUp
                              start={0}
                              end={parseFloat(stat.value)}
                              duration={2.5}
                              separator=","
                              decimal="."
                              suffix={stat.label === "Success Rate" ? "%" : "+"}
                              useEasing={true}
                              key={inView ? Date.now() : 'static'}
                            >
                              {({ countUpRef }) => (
                                <motion.span
                                  ref={countUpRef}
                                  initial={{ scale: 0.5, opacity: 0 }}
                                  whileInView={{ scale: 1, opacity: 1 }}
                                  transition={{ type: "spring", duration: 1, delay: index * 0.1 }}
                                />
                              )}
                            </CountUp>
                          </div>
                        </div>

                        {/* Label and description with dark/light text */}
                        <h3 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                          {stat.label}
                        </h3>
                        <p className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        } text-sm`}>
                          {stat.description}
                        </p>
                      </div>

                      {/* Progress bar with adaptive opacity */}
                      <div className="mt-6 pt-4">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.5, duration: 1 }}
                          className={`h-1 bg-gradient-to-r ${stat.color} rounded-full ${
                            isDarkMode ? 'opacity-70' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className={`container mx-auto px-4 py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          Featured Courses
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
                  ? 'bg-gray-800 shadow-gray-900/50' 
                  : 'bg-white'
              } rounded-xl overflow-hidden shadow-lg`}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
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
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className={`text-sm ml-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`flex items-center justify-between text-sm mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-2xl font-bold ${
                    isDarkMode 
                      ? 'text-purple-400' 
                      : 'text-purple-600'
                  }`}>
                    ${course.price}
                  </span>
                  <button className={`${
                    isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white px-4 py-2 rounded-lg transition-colors`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className={`container mx-auto px-4 py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          Your Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code className="w-8 h-8" />,
              title: "Fundamentals",
              description: "Master programming basics and mobile development concepts",
              color: "from-pink-500 to-rose-600"
            },
            {
              icon: <Layout className="w-8 h-8" />,
              title: "UI/UX Design",
              description: "Learn to create beautiful and intuitive user interfaces",
              color: "from-purple-500 to-indigo-600"
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: "Data Management",
              description: "Handle data storage, API integration, and state management",
              color: "from-blue-500 to-cyan-600"
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Deployment",
              description: "Deploy your apps to App Store and Google Play",
              color: "from-green-500 to-emerald-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${item.color} p-6 rounded-xl shadow-xl ${
                isDarkMode ? 'shadow-gray-900/50' : ''
              }`}
            >
              <div className="text-white mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Stats Section */}
      <div className={`${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-gray-50 to-gray-100'
      } py-20`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-4xl font-bold ${
                isDarkMode
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
              } bg-clip-text text-transparent mb-4`}>
                Mobile Development Landscape 2024
              </h2>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } text-lg`}>
                Emerging trends and market insights in mobile development
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "7.1B",
                label: "Mobile Users",
                description: "Active smartphone users",
                trend: "+5.8% YoY",
                icon: Users,
                color: isDarkMode ? "from-blue-400 to-blue-500" : "from-blue-500 to-blue-600",
                iconBg: isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
              },
              {
                value: "$542B",
                label: "App Store Revenue",
                description: "Combined iOS & Android",
                trend: "+22.5% YoY",
                icon: DollarSign,
                color: isDarkMode ? "from-green-400 to-green-500" : "from-green-500 to-green-600",
                iconBg: isDarkMode ? "bg-green-900/30" : "bg-green-100"
              },
              {
                value: "285B",
                label: "App Downloads",
                description: "Global downloads in 2024",
                trend: "+15.3% YoY",
                icon: Download,
                color: isDarkMode ? "from-purple-400 to-purple-500" : "from-purple-500 to-purple-600",
                iconBg: isDarkMode ? "bg-purple-900/30" : "bg-purple-100"
              },
              {
                value: "48.5M",
                label: "Developer Count",
                description: "Mobile developers worldwide",
                trend: "+12.8% YoY",
                icon: Code,
                color: isDarkMode ? "from-rose-400 to-rose-500" : "from-rose-500 to-rose-600",
                iconBg: isDarkMode ? "bg-rose-900/30" : "bg-rose-100"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400 }
                }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 shadow-gray-900/50' 
                    : 'bg-white'
                } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`${stat.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} ${
                    isDarkMode ? 'text-white' : 'bg-clip-text text-transparent'
                  }`} />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-2"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-xl font-semibold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  } text-sm`}>
                    {stat.description}
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className={`w-4 h-4 ${
                      isDarkMode ? 'text-green-400' : 'text-green-500'
                    }`} />
                    <span className={`${
                      isDarkMode ? 'text-green-400' : 'text-green-500'
                    } font-medium`}>
                      {stat.trend}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} mt-4 rounded-full ${
                    isDarkMode ? 'opacity-70' : ''
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional insights banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`mt-12 ${
              isDarkMode
                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20'
                : 'bg-gradient-to-r from-purple-600 to-blue-600'
            } rounded-xl p-8 text-white text-center`}
          >
            <h3 className="text-2xl font-bold mb-2">Looking Ahead: 2025 Projections</h3>
            <p className={`${
              isDarkMode ? 'text-gray-300' : 'text-white/90'
            }`}>
              The mobile development industry is expected to grow by 25% with emerging technologies like AR/VR and AI integration leading the way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`${
        isDarkMode 
          ? 'bg-gray-800' 
          : 'bg-white'
      } py-16`}>
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {[
            {
              question: "Which platform should I learn first?",
              answer: "We recommend starting with React Native or Flutter for cross-platform development, as they allow you to build for both iOS and Android with a single codebase.",
              icon: <Smartphone className="w-6 h-6" />,
              color: "from-blue-500 to-blue-600"
            },
            {
              question: "Do I need a Mac for iOS development?",
              answer: "For native iOS development with Swift, yes. However, you can use React Native or Flutter on Windows/Linux for cross-platform development that includes iOS.",
              icon: <Monitor className="w-6 h-6" />,
              color: "from-purple-500 to-purple-600"
            },
            {
              question: "How long does it take to learn mobile development?",
              answer: "With dedicated study, you can build basic apps in 3-4 months. Becoming proficient typically takes 6-12 months of consistent practice and learning.",
              icon: <Clock className="w-6 h-6" />,
              color: "from-pink-500 to-pink-600"
            },
            {
              question: "What are the job prospects in mobile development?",
              answer: "The mobile development field offers excellent career opportunities with high demand and competitive salaries. The average mobile developer salary ranges from $85,000 to $150,000+ depending on experience and location.",
              icon: <TrendingUp className="w-6 h-6" />,
              color: "from-green-500 to-green-600"
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${
                isDarkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              } p-6 rounded-xl border`}
            >
              <div className={`flex items-center mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {faq.icon}
                <h3 className="text-xl font-semibold ml-4">{faq.question}</h3>
              </div>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className={`${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gray-50'
      } py-16`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className={`mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Still have questions? We're here to help!
          </p>
          <button className={`${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
          } px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
