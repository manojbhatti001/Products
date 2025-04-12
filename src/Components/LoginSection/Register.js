import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'react-feather';
import { useTheme } from '../../context/ThemeContext';

const Register = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Save user data to localStorage
    const userProfile = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: {
        street: '',
        city: '',
        state: '',
        pincode: ''
      }
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    toast.success('Registration successful! Please login to continue.');
    
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className={`container mx-auto p-4 min-h-screen flex items-center justify-center ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-5xl w-full ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-2xl shadow-2xl overflow-hidden flex`}>
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')`
        }}>
          <div className="h-full w-full bg-blue-900 bg-opacity-40 backdrop-blur-sm flex items-center">
            <div className="text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg">Join our community and explore amazing products.</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6 text-center">
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Create an Account</h1>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Please fill in the information below</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="text-left">
              <label className={`block text-sm font-semibold mb-2 text-left ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`} htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="text-left">
              <label className={`block text-sm font-semibold mb-2 text-left ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="text-left">
              <label className={`block text-sm font-semibold mb-2 text-left ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`} htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="text-left">
              <label className={`block text-sm font-semibold mb-2 text-left ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`} htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  ) : (
                    <Eye className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  )}
                </button>
              </div>
            </div>

            <div className="text-left">
              <label className={`block text-sm font-semibold mb-2 text-left ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  ) : (
                    <Eye className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors duration-200`}
            >
              Create Account
            </button>

            <p className={`text-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Already have an account?{' '}
              <Link to="/login" className={`font-semibold ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}>
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;