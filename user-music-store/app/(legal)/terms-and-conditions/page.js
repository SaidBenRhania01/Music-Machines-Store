import Link from 'next/link';
import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="">
      <div className="bg-gray-50 border-b">
        <nav aria-label="breadcrumb" className="py-6 px-4 mx-auto w-full max-w-7xl">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-black font-medium" >
                  Home
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li aria-current="page" className="text-black">
                Terms And Conditions
              </li>
            </ol>
        </nav>
      </div>
      <div className="py-20 px-4 max-w-3xl mx-auto rounded-lg">
        <h1 className="text-4xl font-bold text-gray-600 mb-6">Terms & Conditions</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. General</h2>
        <p className="text-gray-600">
          These Terms & Conditions govern your use of Music Store services and website. By engaging with us, you agree to these terms.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Purchase Policy</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li className="mb-2">All purchases are subject to availability.</li>
          <li className="mb-2">Payment must be made in full before delivery.</li>
          <li>Prices are subject to change without prior notice.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Intellectual Property</h2>
        <p className="text-gray-600">
          All content, including images, text, and logos, is the property of Music Store and may not be used without permission.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-600">
        Music Store is not liable for indirect damages, including lost profits, caused by the use or inability to use our services.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Governing Law</h2>
        <p className="text-gray-600">
          These terms are governed by the laws of <span className="italic">[Insert Jurisdiction]</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
