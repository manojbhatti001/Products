import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
  Globe, 
  Smartphone, 
  Bot,
  CreditCard, 
  Brain,
  Check,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      description: "Custom web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Frontend Development",
        "Backend Integration",
        "CMS Development",
        "E-commerce Solutions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "WordPress", "Laravel"],
      gradient: "from-sky-400 to-blue-500",
      shadowColor: "shadow-sky-500/20",
      Status: "Completed"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "App Store Deployment",
        "App Maintenance"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      gradient: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-500/30",
      Status: "Completed"
    },
    {
      id: 3,
      title: "Automation & Bots",
      icon: <Bot className="w-8 h-8" />,
      description: "Automated solutions for business processes",
      features: [
        "Process Automation",
        "Chat Bots",
        "Task Automation",
        "Data Scraping",
        "Workflow Optimization"
      ],
      technologies: ["Python", "Node.js", "Selenium", "DialogFlow", "UiPath"],
      gradient: "from-purple-400 to-fuchsia-500",
      shadowColor: "shadow-purple-500/30",
      Status: "Completed"
    },
    {
      id: 4,
      title: "Payment Integration",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Secure payment gateway integration solutions",
      features: [
        "Multiple Payment Gateways",
        "Subscription Management",
        "Invoice Generation",
        "Payment Analytics",
        "Secure Transactions"
      ],
      Status: "Completed",
      technologies: ["Stripe", "PayPal", "Square", "Razorpay", "Blockchain"],
      gradient: "from-amber-400 to-orange-500",
      shadowColor: "shadow-amber-500/30"
    },
    {
      id: 5,
      title: "AI Tools",
      icon: <Brain className="w-8 h-8" />,
      description: "Intelligent solutions powered by AI",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "scikit-learn", "BERT"],
      gradient: "from-rose-400 to-pink-500",
      shadowColor: "shadow-rose-500/30",
      Status: "Completed"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? 'rgb(75 85 99)' : 'rgb(209 213 219)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Hero Section with Gradient Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
            isDarkMode ? 'from-sky-400 via-blue-500 to-indigo-500' : 'from-sky-600 via-blue-600 to-indigo-600'
          }`}>
            Our Services
          </h1>
          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Transforming ideas into powerful digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-3xl overflow-hidden ${
                isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
              } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 ${service.shadowColor}`}
            >
              {/* Service Header with Glassmorphism */}
              <div className={`p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-10 ${service.gradient}"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                        isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'
                      }`}>
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        {service.Status}
                      </span>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features & Technologies with Hover Effects */}
              <div className="p-8 border-t border-gray-100/10">
                <div className="space-y-6">
                  {/* Features List */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group">
                          <div className={`p-1 rounded-full mr-3 bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white transform hover:scale-105 transition-transform duration-300 shadow-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? 'shadow-sky-500/30' : 'shadow-blue-600/30'
            }`}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;