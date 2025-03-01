"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import HeroImage1 from "@/images/HeroImage1.png";
import HeroImage2 from "@/images/HeroImage2.png";
import HeroImage3 from "@/images/HeroImage3.png";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        marginRight: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingLeft: "3px",
        boxShadow: isHovered ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        backgroundColor: isHovered ? "rgba(250,204,21, 1)" : "transparent",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ChevronRight className="w-10 h-10 text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "40px",
        zIndex: 10,
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(250,204,21, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingRight: "3px",
        boxShadow: isHovered ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        backgroundColor: isHovered ? "rgba(250,204,21, 1)" : "transparent",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ChevronLeft className='w-10 h-10 text-white'/>
    </div>
  );
}

export const Slide = () => {
  const slides = [HeroImage1, HeroImage2, HeroImage3];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />, // Use custom arrow component
    prevArrow: <SamplePrevArrow />  // Use custom arrow component
  };

  return (
    <div className="relative max-w-full mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <section
            key={index}
            className="relative flex items-center justify-center w-full h-auto overflow-hidden"
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              width={1920} // Set to the width of your images
              height={1080} // Set to the height of your images
              priority
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
          </section>
        ))}
      </Slider>
    </div>
  );
};
