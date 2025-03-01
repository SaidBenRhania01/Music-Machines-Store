"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import SearchContent from "@/components/content/search-content";
import { useSearchParams } from "next/navigation";

export default function BrandsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <nav aria-label="breadcrumb" className="py-6 px-4 mx-auto w-full max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-black font-medium">
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
              Search
            </li>
          </ol>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchQueryWrapper />
      </Suspense>
    </div>
  );
}

function SearchQueryWrapper() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  return <SearchContent query={query} />;
}
