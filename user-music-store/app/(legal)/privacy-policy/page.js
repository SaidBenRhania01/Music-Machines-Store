import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage = () => {
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
                Privacy Policy
              </li>
            </ol>
        </nav>
      </div>
      <div className="py-20 px-4 max-w-3xl mx-auto rounded-lg">
        <h1 className="text-4xl font-bold text-gray-600 mb-6">Privacy Policy</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. General</h2>
        <p className="text-gray-600">
            This Privacy Policy outlines how Music Store collects, uses, and protects your personal information. By using our services, you agree to the terms outlined in this policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Information Collection</h2>
        <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">We may collect personal information such as name, email address, and payment details when you make a purchase.</li>
            <li className="mb-2">We may collect non-personal information such as IP addresses, browser types, and access times.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Use of Information</h2>
        <p className="text-gray-600">
            We use the collected information to process purchases, improve our services, and communicate with you.
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

export default PrivacyPolicyPage;
