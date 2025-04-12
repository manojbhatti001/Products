import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';

const ForgotPassword = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    // Add your OTP sending logic here
    setIsOtpSent(true);
    toast.success('OTP sent successfully!');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error('Please enter OTP');
      return;
    }
    // Add your OTP verification logic here
    setIsOtpVerified(true);
    toast.success('OTP verified successfully!');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    // Validation checks
    if (!newPassword || !confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      // Add your password reset logic here
      // For example, API call to update password

      // Show success message
      toast.success('Password reset successful!');

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 1500);

    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
        }}>
          <div className="h-full w-full bg-blue-900 bg-opacity-40 backdrop-blur-sm flex items-center">
            <div className="text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Reset Password</h2>
              <p className="text-lg">Don't worry! We'll help you recover your password.</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Forgot Password</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {!isOtpSent 
                ? "Enter your email to receive OTP" 
                : !isOtpVerified 
                  ? "Enter the OTP sent to your email" 
                  : "Create your new password"}
            </p>
          </div>

          <form className="space-y-4" onSubmit={!isOtpSent ? handleSendOtp : !isOtpVerified ? handleVerifyOtp : handleResetPassword}>
            {!isOtpSent && (
              <div className="text-left">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            )}

            {isOtpSent && !isOtpVerified && (
              <div className="text-left">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="otp">
                  Enter OTP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter OTP"
                    required
                  />
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            )}

            {isOtpVerified && (
              <>
                <div className="text-left">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="newPassword">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 py-2 pl-10 pr-10 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter new password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 pl-10 pr-10 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {!isOtpSent ? "Send OTP" : !isOtpVerified ? "Verify OTP" : "Reset Password"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link 
              to="/login" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;