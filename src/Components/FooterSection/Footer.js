import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
              <p className="text-gray-300">Stay updated with our latest products and offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full md:w-64 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              We are dedicated to providing the best shopping experience with quality products and excellent customer service.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition duration-300">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition duration-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Sundar Nagar, Hisar, HRY (125001)
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:meharetech420@gmail.com" className="hover:text-white transition duration-300">
                  meharetech420@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+919992796623" className="hover:text-white transition duration-300">
                  +91 9992796623
                </a>
              </p>
            </div>
          </div>
          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`${process.env.PUBLIC_URL}/documents/Terms of Service.pdf`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href={`${process.env.PUBLIC_URL}/documents/privacy-policy.pdf`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white transition duration-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-white transition duration-300">
                  Disclaimer
                </Link>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Your Store Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;