import Link from 'next/link';
import React from 'react';

const LicensesPage = () => {
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
                Licenses
              </li>
            </ol>
        </nav>
      </div>
      <div className="py-20 px-4 max-w-3xl mx-auto rounded-lg">    
        <h1 className="text-4xl font-bold text-gray-600 mb-6">Licenses</h1>
        <p className="text-gray-600">
          Music Store holds all required licenses to purchase and distribute music-related materials. Any third-party licenses required for specific products are the responsibility of the supplier.
        </p>
        <p className="text-gray-600">
          For further information, contact us at [Insert Contact Information].
        </p>
      </div>
    </div>
  );
};

export default LicensesPage;
