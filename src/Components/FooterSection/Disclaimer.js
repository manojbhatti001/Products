import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Disclaimer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200`}>
      <div className={`max-w-3xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg transition-colors duration-200`}>
        <div className="p-4 sm:p-8">
          <h1 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 sm:mb-8`}>
            Disclaimer
          </h1>
          
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-sm sm:text-base`}>
            By accessing and using MehareTech (the "Site"), you acknowledge that you have read, 
            understood, and agree to the following disclaimer.
          </p>

          {/* Sections wrapper */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "General Information",
                content: "All content, products, and services provided on this Site are for general informational and educational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any information or product. Any reliance you place on such information is strictly at your own risk."
              },
              {
                title: "No Professional Advice",
                content: "The digital products sold on this website are not intended as professional advice (legal, financial, medical, etc.) unless clearly stated otherwise. Always consult with a qualified professional before making any decisions based on the content provided in our products."
              },
              {
                title: "No Guarantees",
                content: "We make no guarantees or warranties that the digital products will meet your expectations, achieve specific outcomes, or be error-free. Performance and results may vary based on usage and external factors beyond our control."
              },
              {
                title: "Product Usage",
                content: "All digital products sold are provided \"as is\" without any warranties or guarantees. It is your responsibility to ensure that your device or system is compatible with the product before purchase. Unauthorized redistribution, resale, or modification of the product is strictly prohibited."
              },
              {
                title: "Third-Party Links",
                content: "Our products or website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of these external sites."
              },
              {
                title: "Limitation of Liability",
                content: "We shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or misuse of our digital products or the information contained on this site."
              }
            ].map((section, index) => (
              <section key={index} className="space-y-2 sm:space-y-4">
                <h2 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {section.title}
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <section className={`mt-8 sm:mt-12 p-4 sm:p-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
            <h2 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>
              Contact Us
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm sm:text-base`}>
              If you have any questions regarding this Disclaimer, feel free to contact us:
            </p>
            <div className="space-y-3">
              <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <a href="mailto:meharetech420@gmail.com" 
                   className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors break-all`}>
                  meharetech420@gmail.com
                </a>
              </div>
              <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <a href="https://meharetech.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
                  meharetech.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;