/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from 'axios';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [type, setType] = useState();
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://user-music-store.vercel.app/api/categories/category-details/${id}`
        );

        if (response.data && response.data.products) {
          setProducts(response.data.products);
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://user-music-store.vercel.app/api/products/list-products?typeId=${id}`
        );

        if (response.data && response.data.products) {
          setProducts(response.data.products);
          console.log(response.data.products);
          setType(response.data.products[0].category.type.title || "Not found");
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://user-music-store.vercel.app/api/categories/list-categories?limit=20&typeId=${id}`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id) fetchData();
  }, [id]);

  console.log(type);

  return (
    <div className='min-h-screen'>
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
                {type ? type : 'Loading...'}
              </li>
            </ol>
        </nav>
      </div>
      <section className='space-y-16 px-6 pb-10 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-12 mb-10'>
        <div className="mx-auto md:max-w-4xl lg:max-w-7xl">
          {/* Featured Types */}
          <div className="text-center pb-9">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">
              Featured Products
            </h1>
            <p className="mt-4 text-muted-foreground">
              Discover the best skateboarding gear from stores around the world
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {categories.map((category) => (
              <div key={category.id}>
                <Link href={`/products/${category.id}`} className="grid">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 flex items-center justify-center rounded-full bg-slate-100 overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={category.image}
                      alt={category.title}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-2 text-center text-base font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>

          <hr className='my-20 border-gray-300' />

          {/* New Products */}
          <div className="text-center pb-9">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">
              Featured Products
            </h1>
            <p className="mt-4 text-muted-foreground">
              Discover the best skateboarding gear from stores around the world
            </p>
          </div>

          {/* Products */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {products.map((product) => {
              const discountedPrice = (
                product.price * (1 - product.discount / 100)
              ).toFixed(2);
              const imageSrc =
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "/placeholder-image.png";

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col border px-5 py-3"
                >
                  {product.discount > 0 && (
                    <div className="absolute z-20 top-2 right-2 bg-[#F5C872] text-black text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={imageSrc}
                      alt={product.title || "Product Image"}
                      className="w-full h-full object-contain"
                      width={250}
                      height={250}
                    />
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-0 right-0 bg-black hover:bg-black/80 text-white text-sm font-semibold p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                  <hr />
                  <div className="space-y-1.5 mt-2">
                    <div className="text-sm text-muted-foreground">
                      {product.category.title}
                    </div>
                    <Link href={`/product-details/${product.title}`} className="text-sm line-clamp-1 font-semibold hover:underline">{product.title}</Link>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">{discountedPrice} Dhs</span>
                      {product.discount > 0 && (
                        <span className="text-sm text-muted-foreground line-through text-red-600">
                          {product.price.toFixed(2)} Dhs
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
