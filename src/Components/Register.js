import React from 'react';

const Register = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{
          backgroundImage:` url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')`
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create an Account</h1>
            <p className="text-sm text-gray-600">Please fill in the information below</p>
          </div>

          <form className="space-y-4">
            <div className="text-left">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a password"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-semibold ml-1">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;