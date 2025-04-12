import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your existing validation logic
    
    // On successful login
    localStorage.setItem('userToken', 'dummy-token');
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('Login successful!');
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="container mx-auto -mt-10  p-4 min-h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div 
          className="hidden md:block w-1/2 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
          }}
        >
          <div className="h-full w-full bg-blue-900 bg-opacity-40 backdrop-blur-sm flex items-center">
            <div className="text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg">Sign in to access your account and explore our amazing products.</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="appearance-none h-4 w-4 bg-white border border-gray-300 rounded cursor-pointer
                      checked:bg-blue-600 checked:border-blue-600
                      focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
                      dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-blue-600"
                  />
                  <svg
                    className={`absolute left-[2px] top-[4px] h-3 w-3 text-white pointer-events-none ${
                      rememberMe ? 'block' : 'hidden'
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900 dark:text-gray-200 cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link
                to="/forget-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6"
            >
              Sign in
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;