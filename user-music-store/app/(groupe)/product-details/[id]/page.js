/* eslint-disable @next/next/no-img-element */
"use client";

import { Products } from "@/components/products";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [brand, setBrand] = useState({});
  const [category, setCategory] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1); // Local state for quantity
  const dispatch = useAppDispatch();

  // Function to add the product with the correct quantity to the cart
  const handleAddToCart = () => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    const productWithQuantity = { ...product, quantity }; // Add quantity to product data
    dispatch(addToCart(productWithQuantity)); // Dispatch to Redux
  };

  // Increment quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement quantity
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Fetch product details from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://user-music-store.vercel.app/api/products/product-details/${id}`
        );
        setProduct(response.data.product);
        setBrand(response.data.product.brand);
        setCategory(response.data.product.category);
        console.log(response.data.product);
        setSelectedImage(response.data.product.images[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`https://user-music-store.vercel.app/api/products/list-products?categoryId=${category.id}&limit=5`);
        setRelatedProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };
    fetchRelatedProducts();
  }, [category.id]);

  // Calculate the discounted price
  const discountedPrice = product.price * (1 - product.discount / 100);

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
              Product Details
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
              {product.title}
            </li>
          </ol>
        </nav>
      </div>
      <div className="px-4 w-full md:my-10 flex flex-col lg:flex-row items-center justify-evenly max-w-7xl mx-auto gap-x-10">
        <div className="px-4 grid gap-4 max-w-3xl">
          <div className="flex items-center justify-center">
            <Image
              width={1000}
              height={1000}
              src={selectedImage}
              alt="Selected product"
              className="w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] object-contain rounded-lg"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.images?.map((image, index) => (
              <Image
                width={1000}
                height={1000}
                key={index}
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`w-16 h-16 object-contain cursor-pointer rounded-lg transition-transform duration-300 ${
                  selectedImage === image ? "scale-105 border-2 border-yellow-500" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 lg:mt-0 md:max-w-2xl w-full flex flex-col px-4 pb-8 lg:p-0">
          <span className="uppercase text-yellow-500 text-sm font-bold tracking-widest">
            {brand.title}
          </span>
          <h1 className="text-3xl lg:text-5xl font-semibold transition-colors mt-4 lg:mt-7">
            {product.title}
          </h1>
          <p className="line-clamp-3 dark:text-grayish_blue-400 transition-colors mt-5 lg:mt-11">
            {product.description}
          </p>
          <div className="mt-7 flex justify-between items-center lg:flex-col lg:items-start">
            <div className="flex items-center gap-3 transition-colors">
              <strong className="text-3xl">{discountedPrice.toFixed(2)} Dhs</strong>
              <span className="bg-yellow-100 rounded px-2 text-base text-yellow-500 font-bold dark:bg-yellow-700 dark:text-yellow-200 transition-colors">
                %{product.discount}
              </span>
            </div>
            <del className="text-lg text-red-500 transition-colors">
              {product.price} Dhs
            </del>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-9">
            <div className="px-4 py-3 w-40 rounded-full flex items-center justify-between text-yellow-500 bg-gray-100 transition-colors">
              <button onClick={handleDecrement}>
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold">{quantity}</span>
              <button onClick={handleIncrement}>
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-8 py-3 inline-flex items-center justify-center gap-4 rounded-full bg-black active:scale-105 transition-all text-white shadow-button"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 mt-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-start border rounded-lg p-4">
          <h2 className="w-full text-xl font-semibold text-left">Description</h2>
          <p className="w-full text-sm text-muted-foreground mt-4">{product.description}</p>
        </div>
      </div>
      <h2 className="px-4 max-w-7xl mx-auto w-full text-3xl font-semibold text-start mt-28">Related Products</h2>
      <div className="px-4 max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 mb-16">
          {relatedProducts.map((product) => {
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
                  <Link
                    href={`/product-details/${product.title}`}
                    className="text-sm line-clamp-1 font-semibold hover:underline"
                  >
                    {product.title}
                  </Link>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold">${discountedPrice}</span>
                    {product.discount > 0 && (
                      <span className="text-sm text-muted-foreground line-through text-red-600">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
