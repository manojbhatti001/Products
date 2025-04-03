import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
const HTMLPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
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
            className="absolute -right-1/4 -top-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/30 rounded-full blur-3xl"
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
            className="absolute -left-1/4 -bottom-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-xs md:text-sm font-semibold">🚀 The Most Comprehensive HTML5 Learning Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Master
              <span className="relative inline-block mx-2">
                <span className="relative z-10 px-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                  HTML5
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
              className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-blue-100 px-4"
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
              <div className="absolute inset-0 bg-white/5 rounded-full blur"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search HTML5 courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-6 md:px-8 py-3 md:py-5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl pl-12 md:pl-14 text-sm md:text-base"
                />
                <Search className="absolute left-4 md:left-5 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <button className="absolute right-2 md:right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Enhanced Stats Section */}
      <div className="py-20 bg-white relative">
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
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Features Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
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
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
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
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
                  <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                  <div className="flex items-center mb-6">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
                    />
                    <div>
                      <p className="text-base font-medium">{course.instructor}</p>
                      <p className="text-sm text-gray-500">Course Instructor</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 text-sm px-4 py-1.5 rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{course.students}</span>
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
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
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
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLPage;