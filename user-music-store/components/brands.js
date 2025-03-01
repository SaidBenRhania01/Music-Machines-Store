"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('https://user-music-store.vercel.app/api/brands/list-brands');
        const data = await response.json();
        setBrands(data.brands);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);
  return (
    <section className="py-6 bg-white md:py-9 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-xl md:px-6 lg:px-8">

        <div className="text-center pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">
              Buy by Brands
            </h1>
            <p className="mt-4 text-muted-foreground">
              Discover the best skateboarding gear from stores around the world
            </p>
          </div>

        <div className="grid items-center w-full grid-cols-3 mx-auto mt-4 md:mt-5 lg:mt-6 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {brands.map((brand, index) => (
            <Link href={`/brands/${brand.title}`} key={index} className="group px-6 py-4 border border-gray-300 hover:border-gray-400 overflow-hidden">
              <Image
                width={120}
                height={60}
                className="object-contain w-full h-8 mx-auto transform transition-transform duration-300 group-hover:scale-110"
                src={brand.image}
                alt={`Brand logo ${index + 1}`}
              />
            </Link>
          ))}
        </div>

        <div className='w-full inline-flex justify-center'>
          <Link href={`/brands`} className="mt-4 text-sm md:text-base text-center text-gray-500 hover:text-black hover:underline md:mt-5 lg:mt-6">
            and, 1000+ more companies
          </Link>
        </div>
      </div>
    </section>
  );
};
