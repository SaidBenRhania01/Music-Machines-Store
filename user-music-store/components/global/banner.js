"use client";

// import React, { useState } from 'react';

const Banner = () => {
  // const [isVisible, setIsVisible] = useState(true);

  // const handleClose = () => {
  //   setIsVisible(false);
  // };

  // if (!isVisible) return null;

  return (
    <div className="relative text-xs bg-yellow-500 text-white py-2">
      <div className="container mx-auto text-center flex items-center justify-center">
        <p className="hover:underline">Don&apos;t miss out on our Halloween discount! Up to 70% off!</p>
      </div>
      {/* <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg"
        onClick={handleClose}
      >
        &times;
      </button> */}
    </div>
  );
};

export default Banner;
