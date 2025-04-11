import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import {
  Search,
  BookOpen,
  Users,
  Star,
  Clock,
  Code,
  Package,
  Settings,
  Shield,
  Globe,
  CheckCircle,
  FolderGit,
  GitBranch,
  Terminal,
  Database,
  Layout,
  Cpu,
  Server,
  Zap
} from "lucide-react";

const JavaScriptPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useTheme();

  const jsCourses = [
    {
      id: 1,
      title: "Modern JavaScript Complete Course",
      category: "Frontend Development",
      level: "Intermediate",
      duration: "30 Hours",
      students: 25000,
      rating: 4.9,
      price: 59.99,
      image: "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
      instructor: "Sarah Johnson",
      instructorImage: "https://randomuser.me/api/portraits/women/32.jpg",
      highlights: [
        "ES6+ Features",
        "Async Programming",
        "Modern JS Frameworks",
        "Real-world Projects",
        "Performance Optimization"
      ]
    },
    {
      id: 2,
      title: "React & Redux Masterclass",
      category: "Framework",
      level: "Advanced",
      duration: "35 Hours",
      students: 18000,
      rating: 4.8,
      price: 69.99,
      image: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      instructor: "Mike Chen",
      instructorImage: "https://randomuser.me/api/portraits/men/44.jpg",
      highlights: ["Component Architecture", "State Management", "React Hooks"]
    },
    {
      id: 3,
      title: "JavaScript Data Structures & Algorithms",
      category: "Computer Science",
      level: "Advanced",
      duration: "28 Hours",
      students: 15000,
      rating: 4.7,
      price: 54.99,
      image: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      instructor: "Alex Thompson",
      instructorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      highlights: ["Algorithm Design", "Data Structures", "Problem Solving"]
    }
  ];

  const features = [
    {
      title: "Modern JavaScript",
      description: "Master ES6+ features and modern JavaScript concepts",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Frontend Frameworks",
      description: "Learn popular frameworks like React, Vue, and Angular",
      icon: <Layout className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend Development",
      description: "Build servers with Node.js and Express",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Performance",
      description: "Optimize JavaScript applications for speed",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Management",
      description: "Work with APIs, databases, and state management",
      icon: <Database className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Advanced Concepts",
      description: "Deep dive into closures, prototypes, and async programming",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const filteredCourses = jsCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Hero Section */}
      <div className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500'
        } text-white py-16 sm:py-20 lg:py-32 overflow-hidden`}>
        <div className="absolute inset-0">
          <div 
            className={`absolute inset-0 ${isDarkMode ? 'opacity-30' : 'opacity-20'}`}
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
            className="absolute -right-1/4 -top-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/30 rounded-full blur-3xl"
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
            className="absolute -left-1/4 -bottom-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-xs sm:text-sm font-semibold text-white">
                🚀 The Complete JavaScript Learning Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Master
              <span className="relative">
                <span className="relative z-10 px-2 mx-2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg">
                  JavaScript
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
              className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-yellow-100 px-4"
            >
              From fundamentals to advanced concepts, learn to build powerful web applications
              with modern JavaScript and popular frameworks
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto px-4 sm:px-0"
            >
              <div className="absolute inset-0 bg-white/5 rounded-full blur"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search JavaScript courses, topics, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-8 py-3 sm:py-5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-xl pl-12 sm:pl-14 text-sm sm:text-base"
                />
                <Search className="absolute left-5 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <button className="absolute right-2 sm:right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                  Search
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-8 sm:mt-12 px-4"
            >
              {[
                { label: "Active Students", value: "45K+", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                { label: "Video Hours", value: "1000+", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
                { label: "5-Star Reviews", value: "20K+", icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" /> },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 w-full sm:w-auto 
                    px-6 py-4 sm:py-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 
                    transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-200">{stat.icon}</span>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                      bg-gradient-to-r from-white to-yellow-200">{stat.value}</div>
                  </div>
                  <div className="text-sm sm:text-base text-yellow-200/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-50 border-gray-100'
                } hover:shadow-xl transition-all duration-300 border`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Levels / Learning Path Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>Learning Path</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                level: "Beginner",
                description: "Start your JavaScript journey",
                topics: ["JS Fundamentals", "DOM Manipulation", "Basic ES6", "Functions & Objects"],
                duration: "4 weeks",
                icon: "🚀",
                color: isDarkMode ? "from-green-600 to-green-800" : "from-green-400 to-green-600",
                badge: "Foundation"
              },
              {
                level: "Intermediate",
                description: "Build real-world applications",
                topics: ["Advanced ES6+", "Async Programming", "Error Handling", "API Integration"],
                duration: "6 weeks",
                icon: "⚡",
                color: isDarkMode ? "from-blue-600 to-blue-800" : "from-blue-400 to-blue-600",
                badge: "Professional"
              },
              {
                level: "Advanced",
                description: "Master complex concepts",
                topics: ["Design Patterns", "Testing", "Performance", "Full-stack JS"],
                duration: "8 weeks",
                icon: "👑",
                color: isDarkMode ? "from-purple-600 to-purple-800" : "from-purple-400 to-purple-600",
                badge: "Expert"
              }
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-8 last:mb-0"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-r ${level.color} text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{level.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{level.level}</h3>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded">
                        {level.badge}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4">{level.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {level.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need prior programming experience?",
                answer: "No prior experience is needed for our beginner courses. We start from the basics and gradually progress to advanced concepts.",
                icon: "📚"
              },
              {
                question: "Which JavaScript framework should I learn first?",
                answer: "We recommend starting with React as it has the largest community and job market. However, our courses cover multiple frameworks to give you a broad perspective.",
                icon: "🔨"
              },
              {
                question: "How long will it take to become job-ready?",
                answer: "With dedicated study and practice, most students become job-ready in 4-6 months. Our career track includes real-world projects and interview preparation.",
                icon: "💼"
              },
              {
                question: "What tools will I need?",
                answer: "A modern web browser and a code editor (we recommend VS Code). All other tools and resources are provided in the courses.",
                icon: "🛠"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-100' 
                    : 'bg-white text-gray-800'
                } rounded-xl p-6 shadow-sm`}
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
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

      {/* CTA Section */}
      <div className={`${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500'
        } py-16`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-gray-100' : 'text-white'
          }`}>
            Ready to Start Your JavaScript Journey?
          </h2>
          <p className={`mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Join thousands of students already learning JavaScript with us
          </p>
          <button className={`px-8 py-3 ${
            isDarkMode 
              ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
              : 'bg-white text-yellow-600 hover:bg-gray-50'
            } rounded-full font-bold transition-colors duration-200 shadow-md hover:shadow-lg`}>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPage;