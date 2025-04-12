import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import {
  Search,
  BookOpen,
  Users,
  Star,
  Clock,
  ChevronRight,
  Layout,
  Smartphone,
  PenTool,
  Code,
  Globe,
  CheckCircle,
  Mail,
  Check,
} from "lucide-react";

const HTMLPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useTheme();
  const htmlCourses = [
    {
      id: 1,
      title: "HTML5 & CSS3 Fundamentals",
      category: "Frontend Development",
      level: "Beginner",
      duration: "15 Hours",
      students: 25000,
      rating: 4.9,
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Emma Thompson",
      instructorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      highlights: ["Semantic HTML5", "Modern CSS3", "Responsive Design"],
    },
    {
      id: 2,
      title: "Responsive Web Design Mastery",
      category: "Web Design",
      level: "Intermediate",
      duration: "18 Hours",
      students: 12000,
      rating: 4.7,
      price: 59.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Michael Chen",
      instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      highlights: ["Flexbox", "CSS Grid", "Media Queries"],
    },
    {
      id: 3,
      title: "Web Accessibility & SEO",
      category: "Web Development",
      level: "Advanced",
      duration: "12 Hours",
      students: 8000,
      rating: 4.8,
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Lisa Anderson",
      instructorImage: "https://randomuser.me/api/portraits/women/67.jpg",
      highlights: ["ARIA Labels", "SEO Best Practices", "Screen Readers"],
    },
    {
      id: 4,
      title: "HTML5 Game Development",
      category: "Game Development",
      level: "Advanced",
      duration: "20 Hours",
      students: 8500,
      rating: 4.7,
      price: 69.99,
      image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
      instructor: "Mike Chen",
      instructorImage: "https://randomuser.me/api/portraits/men/28.jpg",
      highlights: ["Canvas API", "Game Physics", "Sprite Animation", "Sound Effects"]
    },
    {
      id: 5,
      title: "Semantic HTML & Accessibility",
      category: "Web Accessibility",
      level: "Intermediate",
      duration: "15 Hours",
      students: 12000,
      rating: 4.9,
      price: 49.99,
      image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      instructor: "Emma Watson",
      instructorImage: "https://randomuser.me/api/portraits/women/33.jpg",
      highlights: ["ARIA Labels", "Screen Readers", "Semantic Elements", "Best Practices"]
    },
    {
      id: 6,
      title: "HTML Email Templates",
      category: "Email Development",
      level: "Intermediate",
      duration: "12 Hours",
      students: 7500,
      rating: 4.6,
      price: 44.99,
      image: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_1280.png",
      instructor: "Alex Thompson",
      instructorImage: "https://randomuser.me/api/portraits/men/42.jpg",
      highlights: ["Responsive Emails", "Cross-Client Support", "Template Design"]
    }
  ];
  const features = [
    {
      title: "Modern HTML5 Features",
      description: "Learn semantic elements, forms, multimedia, and canvas",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Responsive Design",
      description: "Create websites that work perfectly on all devices",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Web Standards",
      description: "Follow best practices and W3C standards",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
  ];
  const filteredCourses = htmlCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Hero Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gray-900 bg-opacity-95' 
          : 'bg-gradient-to-r from-blue-600 to-purple-600'
      } text-white py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-300`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* CSS grid pattern */}
          <div 
            className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)'} 1px, transparent 0)`,
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
            className={`absolute -right-1/4 -top-1/4 w-64 md:w-96 h-64 md:h-96 ${
              isDarkMode ? 'bg-blue-800/10' : 'bg-blue-400/30'
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
            className={`absolute -left-1/4 -bottom-1/4 w-64 md:w-96 h-64 md:h-96 ${
              isDarkMode ? 'bg-purple-800/10' : 'bg-purple-400/30'
            } rounded-full blur-3xl`}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/20 border-white/30'
              } backdrop-blur-sm border`}
            >
              <span className={`text-xs md:text-sm font-semibold ${
                isDarkMode ? 'text-gray-300' : 'text-white'
              }`}>🚀 The Most Comprehensive HTML5 Learning Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight ${
                isDarkMode ? 'text-white' : 'text-white'
              }`}
            >
              Master
              <span className="relative inline-block mx-2">
                <span className={`relative z-10 px-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-blue-400 to-purple-400'
                } rounded-lg`}>
                  HTML5
                </span>
                <motion.span
                  className={`absolute inset-0 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white/20'
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
              className={`text-base sm:text-lg md:text-xl mb-8 md:mb-12 ${
                isDarkMode ? 'text-gray-300' : 'text-white'
              } px-4`}
            >
              From fundamentals to advanced concepts, join over 50,000+ developers who've 
              mastered HTML5 with our industry-leading curriculum
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-0"
            >
              <div className={`absolute inset-0 ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-white/10'
              } rounded-full blur`}></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search HTML5 courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 sm:px-6 md:px-8 py-3 md:py-5 rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-800/80 text-gray-100 placeholder-gray-400 border-gray-700' 
                      : 'bg-white/90 text-gray-800 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl pl-12 md:pl-14 text-sm md:text-base border transition-colors duration-300`}
                />
                <Search className={`absolute left-4 md:left-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } w-4 h-4 md:w-5 md:h-5`} />
                <button className={`absolute right-2 md:right-3 ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap`}>
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
                  <div className={`text-2xl font-bold ${
                    isDarkMode ? 'text-blue-200' : 'text-white'
                  }`}>{stat.value}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-200'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Enhanced Stats Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} relative`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "50K+",
                label: "Students",
                icon: <Users className="w-8 h-8" />,
              },
              {
                number: "100+",
                label: "Video Lessons",
                icon: <BookOpen className="w-8 h-8" />,
              },
              {
                number: "4.8",
                label: "Average Rating",
                icon: <Star className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-center p-8 rounded-2xl transition-shadow duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 shadow-gray-900/50 border-gray-600' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                <div className={`${
                  isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Features Grid */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 relative ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            What You'll Learn
            <div className="absolute w-20 h-1 bg-blue-600 bottom--4 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${feature.color} p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Courses Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 relative ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Featured HTML Courses
            <div className="absolute w-20 h-1 bg-blue-600 bottom--4 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-white border-gray-100'
                } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border`}
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {course.level}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-6">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
                    />
                    <div>
                      <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        {course.instructor}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Course Instructor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={`${
                          isDarkMode 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-blue-50 text-blue-600'
                        } text-sm px-4 py-1.5 rounded-full font-medium`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center justify-between pt-6 border-t ${
                    isDarkMode ? 'border-gray-600' : 'border-gray-100'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {course.students}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Why Learn HTML Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 relative ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Why Learn HTML?
            <div className="absolute w-20 h-1 bg-blue-600 bottom--4 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Universal Language",
                description: "HTML is the foundation of all websites",
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Easy to Learn",
                description: "Simple syntax and structure for beginners",
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "High Demand",
                description: "Essential skill for web developers",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Future Proof",
                description: "Constantly evolving with modern features",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-8 ${
                  isDarkMode 
                    ? 'bg-gray-800 shadow-gray-900/50' 
                    : 'bg-white shadow-lg'
                } rounded-2xl hover:shadow-xl transition-all duration-300`}
              >
                <div className={`${
                  isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
                } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>{item.title}</h3>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } leading-relaxed`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
     

      {/* Career Opportunities Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Developer",
                salary: "$75,000 - $120,000",
                icon: <Code className="w-8 h-8" />,
                description: "Build user interfaces for web applications"
              },
              {
                title: "UI Developer",
                salary: "$70,000 - $110,000",
                icon: <Layout className="w-8 h-8" />,
                description: "Create responsive and interactive web designs"
              },
              {
                title: "Email Developer",
                salary: "$65,000 - $95,000",
                icon: <Mail className="w-8 h-8" />,
                description: "Develop responsive email templates"
              }
            ].map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-900 shadow-gray-900/50' 
                    : 'bg-white shadow-lg'
                } p-8 rounded-xl`}
              >
                <div className={`${
                  isDarkMode ? 'bg-blue-900/20' : 'bg-blue-100'
                } w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <div className="text-blue-600">{career.icon}</div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>{career.title}</h3>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-4`}>{career.description}</p>
                <p className="text-blue-600 font-semibold">{career.salary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className={`font-semibold text-sm uppercase tracking-wider ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>Step by Step Guide</span>
            <h2 className={`text-4xl font-bold mt-2 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>Your Learning Path</h2>
            <div className={`w-24 h-1 ${
              isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
            } mx-auto mt-4 rounded-full`}></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                level: "Beginner",
                description: "Build a strong foundation in HTML basics",
                topics: ["HTML Basics", "Document Structure", "Text Formatting", "Links & Images"],
                duration: "4 weeks",
                icon: "🚀",
                color: isDarkMode ? "from-green-600 to-green-800" : "from-green-400 to-green-600"
              },
              {
                level: "Intermediate",
                description: "Master essential HTML5 concepts",
                topics: ["Forms & Validation", "Semantic HTML", "Tables & Lists", "Media Elements"],
                duration: "6 weeks",
                icon: "⚡",
                color: isDarkMode ? "from-blue-600 to-blue-800" : "from-blue-400 to-blue-600"
              },
              {
                level: "Advanced",
                description: "Become an HTML expert",
                topics: ["Canvas & SVG", "Web Components", "Progressive Enhancement", "Performance"],
                duration: "8 weeks",
                icon: "👑",
                color: isDarkMode ? "from-purple-600 to-purple-800" : "from-purple-400 to-purple-600"
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                {/* Connection Line */}
                {index !== 2 && (
                  <div className={`absolute left-6 top-[95px] w-1 h-[100px] bg-gradient-to-b ${
                    isDarkMode ? 'from-blue-500 to-transparent' : 'from-blue-600 to-transparent'
                  }`}></div>
                )}

                <div className="flex items-start gap-6">
                  {/* Level Number */}
                  <div className="flex flex-col items-center">
                    <div className={`bg-gradient-to-r ${path.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                      isDarkMode ? 'shadow-lg shadow-black/30' : 'shadow-lg'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-4xl mt-2">{path.icon}</span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 shadow-xl shadow-black/20' 
                          : 'bg-white border-gray-100 shadow-lg'
                      } p-8 rounded-2xl border transition-colors duration-200`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold ${
                            isDarkMode ? 'text-gray-100' : 'text-gray-800'
                          }`}>{path.level}</h3>
                          <p className={`${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{path.description}</p>
                        </div>
                        <span className={`${
                          isDarkMode 
                            ? 'bg-blue-900/30 text-blue-400' 
                            : 'bg-blue-50 text-blue-600'
                        } px-4 py-2 rounded-full text-sm font-semibold`}>
                          {path.duration}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {path.topics.map((topic, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex items-center ${
                              isDarkMode 
                                ? 'bg-gray-700/50 text-gray-300' 
                                : 'bg-gray-50 text-gray-700'
                            } p-3 rounded-lg`}
                          >
                            <Check className={`w-5 h-5 ${
                              isDarkMode ? 'text-green-400' : 'text-green-500'
                            } mr-2 flex-shrink-0`} />
                            <span className="font-medium">{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wider text-blue-600">
              Got Questions?
            </span>
            <h2 className={`text-4xl font-bold mt-2 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need any prior experience to learn HTML?",
                answer: "No, HTML is perfect for beginners. It's one of the most basic and fundamental languages of web development, requiring no previous coding experience.",
                icon: "🌟"
              },
              {
                question: "How long will it take to learn HTML?",
                answer: "Basic HTML can be learned in 2-3 weeks. However, mastering HTML5 and its advanced features might take 2-3 months of dedicated practice.",
                icon: "⏱️"
              },
              {
                question: "Do I need to learn CSS along with HTML?",
                answer: "While you can learn HTML first, CSS is a natural companion to HTML. Together they form the foundation of web design. We recommend learning both for creating proper websites.",
                icon: "🎨"
              },
              {
                question: "What tools do I need to start learning HTML?",
                answer: "You only need a text editor (like VS Code, Sublime Text, or even Notepad) and a web browser. All our courses provide guidance on setting up these tools.",
                icon: "🛠️"
              },
              {
                question: "Can I get a job with just HTML knowledge?",
                answer: "While HTML alone might limit your opportunities, it's an essential skill that, combined with CSS and JavaScript, can lead to various web development roles.",
                icon: "💼"
              },
              {
                question: "Are the courses mobile-friendly?",
                answer: "Yes, all our courses are fully responsive and can be accessed on any device - desktop, tablet, or mobile phone.",
                icon: "📱"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 shadow-gray-900/50' 
                    : 'bg-white border-blue-50'
                } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border`}
              >
                <button
                  className={`w-full px-8 py-6 text-left font-semibold flex items-center justify-between group ${
                    isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {/* Add toggle functionality if needed */}}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className={`text-lg ${
                      isDarkMode 
                        ? 'text-gray-100 group-hover:text-blue-400' 
                        : 'text-gray-800 group-hover:text-blue-600'
                    } transition-colors`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </button>
                <div className="px-8 pb-6">
                  <div className={`h-px ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  } mb-4`}></div>
                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Still have questions?{" "}
              <a 
                href="#contact" 
                className={`${
                  isDarkMode 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700'
                } font-semibold transition-colors`}
              >
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Your HTML Journey Today</h2>
          <p className="text-xl mb-12 text-blue-100">Join thousands of successful developers who started with our HTML courses</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HTMLPage;