"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart/cartSlice";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        marginRight: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(250,204,21, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingLeft: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "26px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(250,204,21, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingRight: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
  );
}

export const Products = ({ products, title }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product) => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart(productWithQuantity));
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="px-4 py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-center justify-center pb-6">
          <div className="text-center pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              Discover the best skateboarding gear from stores around the world
            </p>
          </div>
        </div>
        <div className="mb-4 md:mb-8 space-x-4">
          <Slider {...settings} className="flex items-center gap-4">
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
                  className="group relative flex flex-col border px-5 py-3 mr-4"
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
          </Slider>
        </div>
        {/* <div className="flex items-center justify-end">
          <Link
            href={`/search?query=&sort=dateAdded.desc`}
            className="text-sm flex gap-1 text-gray-500 hover:translate-x-1 hover:text-black transition-all"
          >
            Shop the collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};