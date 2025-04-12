import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const RefundPolicy = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Main container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Content wrapper with max width and centering */}
        <div className={`max-w-4xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
          
          {/* Header Section */}
          <div className={`w-full px-6 py-8 md:px-8 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Refund Policy
            </h1>
            <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-base md:text-lg`}>
              Thank you for choosing MehareTech. We value your satisfaction and want to ensure clarity 
              regarding our refund policies for digital products.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="px-6 py-8 md:px-8 space-y-8">
            {/* No Refunds Section */}
            <section className="space-y-4">
              <h2 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                No Refunds Policy
              </h2>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                <p>All sales are final. Due to the digital nature of our products:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>No refunds are provided once the digital product is downloaded</li>
                  <li>No exchanges are available for digital items</li>
                  <li>Each purchase is for single-use license only</li>
                </ul>
              </div>
            </section>

            {/* Exceptions Section */}
            <section className="space-y-4">
              <h2 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Exceptions
              </h2>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                <p>We may consider refunds in these specific cases:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Product not delivered after confirmed payment</li>
                  <li>Technical issues preventing product access</li>
                  <li>Significant discrepancy between product description and delivered item</li>
                </ul>
              </div>
            </section>

            {/* Process Section */}
            <section className="space-y-4">
              <h2 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Refund Process
              </h2>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Contact us within 7 days of purchase</li>
                  <li>Provide order number and transaction details</li>
                  <li>Explain the reason for refund request</li>
                  <li>Wait for our team's review (24-48 hours)</li>
                </ol>
              </div>
            </section>

            {/* Contact Section */}
            <section className={`mt-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6 md:p-8`}>
              <h2 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {/* Email */}
                <a href="mailto:meharetech420@gmail.com" 
                   className={`flex items-center group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-200`}>
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="break-all text-sm md:text-base">meharetech420@gmail.com</span>
                </a>

                {/* Phone */}
                <a href="tel:+919992796623" 
                   className={`flex items-center group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-200`}>
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base">+91 9992796623</span>
                </a>

                {/* Website */}
                <a href="https://meharetech.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={`flex items-center group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-200`}>
                  <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base">meharetech.com</span>
                </a>
              </div>
            </section>

            {/* Footer Note */}
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-8 text-center`}>
              This policy was last updated on January 1, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;