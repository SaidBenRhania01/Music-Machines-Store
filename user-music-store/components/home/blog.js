/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

export const Blog = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image
                width={1000}
                height={1000}
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image
                width={1000}
                height={1000}
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image
                width={1000}
                height={1000}
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
              </div>
            </a>
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
