import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BookOpen, Users, Star, Clock, ChevronRight, Code, 
  Layout, ShoppingCart, Globe, Shield, Zap, CheckCircle, 
  Award, BookmarkPlus, Coffee
} from 'lucide-react';

const WordPressPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const wordPressCourses = [
    {
      id: 1,
      title: "WordPress Theme Development Masterclass",
      category: "Development",
      level: "Intermediate",
      duration: "20 Hours",
      students: 15000,
      rating: 4.8,
      price: 49.99,
      image: "https://cdn.pixabay.com/photo/2016/09/15/14/23/coding-1671983_1280.jpg",
      instructor: "Sarah Johnson",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      highlights: ["Custom Theme Creation", "Advanced CSS/SASS", "Theme Options Panel"]
    },
    {
      id: 2,
      title: "Advanced Plugin Development",
      category: "Development",
      level: "Advanced",
      duration: "25 Hours",
      students: 12000,
      rating: 4.7,
      price: 59.99,
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Mike Smith",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: ["Plugin Architecture", "WordPress APIs", "Security Best Practices"]
    },
    {
      id: 3,
      title: "WordPress for Beginners 2024",
      category: "Basics",
      level: "Beginner",
      duration: "15 Hours",
      students: 25000,
      rating: 4.9,
      price: 29.99,
      image: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg",
      instructor: "Emma Davis",
      instructorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      highlights: ["Site Setup", "Content Management", "Basic Customization"]
    }
  ];

  const features = [
    { 
      icon: <Layout className="w-8 h-8" />, 
      title: "Theme Customization", 
      description: "Master the art of creating stunning WordPress themes from scratch",
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Plugin Development", 
      description: "Learn to build powerful plugins that extend WordPress functionality",
      color: "from-purple-400 to-purple-600"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Security", 
      description: "Implement robust security measures to protect WordPress sites",
      color: "from-green-400 to-green-600"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: "SEO Optimization", 
      description: "Master techniques to rank higher in search engines",
      color: "from-red-400 to-red-600"
    },
    { 
      icon: <ShoppingCart className="w-8 h-8" />, 
      title: "WooCommerce", 
      description: "Build professional e-commerce stores with WordPress",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Performance", 
      description: "Optimize WordPress sites for maximum speed and efficiency",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const benefits = [
    "Lifetime Access to Course Materials",
    "Real-world Project Experience",
    "Expert Code Reviews",
    "Private Community Access",
    "Certificate of Completion",
    "24/7 Support"
  ];

  const filteredCourses = wordPressCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -right-1/4 -top-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -left-1/4 -bottom-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-20"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500 bg-opacity-30 mb-6">
              <span className="text-yellow-300 font-semibold">🔥 Hot & New:</span>
              <span className="ml-2">WordPress 6.0 Features Included</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Become a WordPress
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text">
                Development Master
              </span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join over 50,000 students in mastering WordPress development. 
              From basics to advanced techniques, we've got you covered.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search WordPress courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our WordPress Courses?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="text-green-500 w-6 h-6" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid with Gradient Cards */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Master</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${feature.color} p-6 rounded-xl shadow-lg text-white`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Courses Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured WordPress Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={course.instructorImage} 
                    alt={course.instructor} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{course.instructor}</p>
                    <p className="text-xs text-gray-500">Course Instructor</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <span>Enroll Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "43%", label: "of the Web", icon: <Globe className="w-8 h-8" /> },
              { value: "75M+", label: "Websites", icon: <Layout className="w-8 h-8" /> },
              { value: "60K+", label: "Plugins", icon: <Code className="w-8 h-8" /> },
              { value: "10K+", label: "Themes", icon: <BookOpen className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-blue-400">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Chen",
                role: "Frontend Developer",
                image: "https://randomuser.me/api/portraits/men/54.jpg",
                content: "The WordPress Theme Development course transformed my career. I'm now building custom themes for clients worldwide.",
                rating: 5
              },
              {
                name: "Lisa Anderson",
                role: "Digital Entrepreneur",
                image: "https://randomuser.me/api/portraits/women/76.jpg",
                content: "Learning WooCommerce through this platform helped me launch my online store. The instructors are incredibly knowledgeable.",
                rating: 5
              },
              {
                name: "Mark Wilson",
                role: "Freelance Developer",
                image: "https://randomuser.me/api/portraits/men/88.jpg",
                content: "The advanced plugin development course is gold! It taught me everything I needed to know about WordPress plugin architecture.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do I need prior programming experience?",
                answer: "No prior programming experience is required for our beginner courses. However, basic computer skills and familiarity with web concepts are helpful."
              },
              {
                question: "How long do I have access to the courses?",
                answer: "Once enrolled, you have lifetime access to the course content, including all future updates and improvements."
              },
              {
                question: "Are the courses suitable for WordPress 6.0?",
                answer: "Yes, all our courses are regularly updated to cover the latest WordPress versions and features, including WordPress 6.0."
              },
              {
                question: "Do you offer support during the course?",
                answer: "Yes, we provide 24/7 support through our community forum, and instructors regularly host Q&A sessions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className="w-5 h-5 transform rotate-90" />
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Master WordPress?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers through our comprehensive WordPress courses.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Start Learning Today</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <p className="mt-4 text-blue-200 text-sm">30-day money-back guarantee</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WordPressPage;