import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for purchasing from MehareTech. We strive to provide high-quality digital products 
            and ensure customer satisfaction. However, due to the nature of digital products, 
            we have a <span className="font-semibold">strict refund policy</span> as outlined below:
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">No Refunds</h2>
            <p className="text-gray-600">
              All sales are final. Once a digital product has been purchased and delivered, 
              we do not offer refunds or exchanges. This is because digital products are 
              <span className="font-semibold"> non-returnable</span> and 
              <span className="font-semibold"> non-refundable</span> once downloaded or accessed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Exceptions to Our Policy</h2>
            <p className="text-gray-600 mb-4">
              We may consider a refund under the following exceptional circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>The product was <span className="font-semibold">not delivered</span> (e.g., download link not sent or inaccessible)</li>
              <li>The product is <span className="font-semibold">significantly different</span> from its description or demo</li>
              <li>The file is <span className="font-semibold">corrupted</span> or <span className="font-semibold">not working</span>, 
                  and we are <span className="font-semibold">unable to resolve the issue</span> after investigation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Refund Request Process</h2>
            <p className="text-gray-600 mb-4">To request a refund under these exceptions, you must:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Contact us at meharetech420@gmail.com within <span className="font-semibold">7 days</span> of purchase</li>
              <li>Provide your order number, proof of purchase, and a detailed explanation of the issue</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Unauthorized Transactions</h2>
            <p className="text-gray-600">
              If you believe your payment was made without your permission, please contact your payment 
              provider or bank immediately. We do not entertain refund requests for unauthorized 
              transactions unless confirmed by the payment gateway.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Chargebacks</h2>
            <p className="text-gray-600">
              We discourage chargebacks and consider them a breach of our terms. If you are facing 
              any issues, please contact us first for resolution.
            </p>
          </section>

          <section className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions regarding this Refund Policy, feel free to contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:meharetech420@gmail.com" className="hover:text-blue-600 transition-colors">
                  meharetech420@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+919992796623" className="hover:text-blue-600 transition-colors">
                  +91 9992796623
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

export default RefundPolicy;