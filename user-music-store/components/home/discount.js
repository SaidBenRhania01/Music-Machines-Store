import Image from 'next/image'
import React from 'react'
import Image1 from '@/images/djimage.jpg'
import Image2 from '@/images/pianoimage.jpg'
import Image3 from '@/images/guitar.jpg'

export const Discount = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-6 md:py-8 lg:py-10">
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Item */}
          <a href="#" className="group relative flex h-[200px] md:h-[250px] lg:h-[300px] items-end overflow-hidden rounded-lg">
            <div className="h-full w-full overflow-hidden">
              <Image
                width={400}
                height={400}
                src={Image1}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-black/75 text-white px-6 py-3">
              <p className="text-sm font-medium sm:text-xl">DJ Equipment</p>
            </div>
          </a>

          {/* Item */}
          <a href="#" className="group relative flex h-[200px] md:h-[250px] lg:h-[300px] items-end overflow-hidden rounded-lg">
            <div className="h-full w-full overflow-hidden">
              <Image
                width={400}
                height={400}
                src={Image1}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-black/75 text-white px-6 py-3">
              <p className="text-sm font-medium sm:text-xl">DJ Equipment</p>
            </div>
          </a>

          {/* Item */}
          <a href="#" className="group relative flex h-[200px] md:h-[250px] lg:h-[300px] items-end overflow-hidden rounded-lg">
            <Image
              width={400}
              height={400}
              src={Image2}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-black/75 text-white px-6 py-3">
              <p className="text-sm font-medium sm:text-xl">Keys & Synth</p>
            </div>
          </a>

          {/* Item */}
          <a href="#" className="group relative flex h-[200px] md:h-[250px] lg:h-[300px] items-end overflow-hidden rounded-lg">
            <Image
              width={400}
              height={400}
              src={Image3}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-black/75 text-white px-6 py-3">
              <p className="text-sm font-medium sm:text-xl">Guitars</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
