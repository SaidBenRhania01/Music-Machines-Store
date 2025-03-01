"use client";

import Link from "next/link";
import ProductsContent from "@/components/content/products-content";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();
  const [type, setType] = useState();
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://user-music-store.vercel.app/api/products/list-products?categoryId=${id}`);

        if (response.data && response.data.products) {
          setProducts(response.data.products);
          setType(response.data.products[0]?.category?.type || "Not found");
          setCategory(response.data.products[0]?.category || "Not found");
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to load data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <nav
          aria-label="breadcrumb"
          className="py-6 px-4 mx-auto w-full max-w-7xl"
        >
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
              {loading ? "Loading..." : type.title || "Not found"}
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
              {loading ? "Loading..." : category.title || "Not found"}
            </li>
          </ol>
        </nav>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <span className="text-gray-500">Loading products...</span>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-96">
          <span className="text-red-500">Error: {error}</span>
        </div>
      ) : (
        <ProductsContent category={category} />
      )}
    </div>
  );
}
