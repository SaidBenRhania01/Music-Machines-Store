import React from 'react';
import Bg from "@/images/News.jpg";
import Image from "next/image";

export const News = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      {/* Component */}
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl p-8 text-center sm:p-10 md:p-16"
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>

        {/* Title */}
        <h2 className="relative mb-4 text-3xl font-bold md:text-5xl text-gray-100">
          Join the Flowspark Community
        </h2>
        <p className="relative mx-auto mb-6 max-w-2xl text-sm text-gray-300 sm:text-base md:mb-10 lg:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna
        </p>
        <div className="relative mx-auto mb-4 flex max-w-lg justify-center">
          <form
            name="email-form"
            method="get"
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              className="border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"
              placeholder="Enter your email"
            />
            <input
              type="submit"
              value="Notify me"
              className="cursor-pointer rounded-full bg-black px-6 py-2 font-semibold text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
