import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <p className="text-gray-600 mb-6">
            By accessing and using MehareTech (the "Site"), you acknowledge that you have read, 
            understood, and agree to the following disclaimer.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-600">
              All content, products, and services provided on this Site are for general informational 
              and educational purposes only. We do not guarantee the accuracy, completeness, or 
              usefulness of any information or product. Any reliance you place on such information 
              is strictly at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">No Professional Advice</h2>
            <p className="text-gray-600">
              The digital products sold on this website are not intended as professional advice 
              (legal, financial, medical, etc.) unless clearly stated otherwise. Always consult 
              with a qualified professional before making any decisions based on the content 
              provided in our products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
            <p className="text-gray-600">
              We make no guarantees or warranties that the digital products will meet your 
              expectations, achieve specific outcomes, or be error-free. Performance and results 
              may vary based on usage and external factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Usage</h2>
            <p className="text-gray-600">
              All digital products sold are provided "as is" without any warranties or guarantees. 
              It is your responsibility to ensure that your device or system is compatible with 
              the product before purchase. Unauthorized redistribution, resale, or modification 
              of the product is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600">
              Our products or website may contain links to third-party websites. We are not 
              responsible for the content, accuracy, or privacy practices of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              We shall not be held liable for any direct, indirect, incidental, or consequential 
              damages resulting from the use or misuse of our digital products or the information 
              contained on this site.
            </p>
          </section>

          <section className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions regarding this Disclaimer, feel free to contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:meharetech420@gmail.com" className="hover:text-blue-600 transition-colors">
                  meharetech420@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-3" />
                <a href="https://meharetech.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
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