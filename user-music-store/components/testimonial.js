"use client"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1
          }
        },
    ]
  };

  const testimonials = [
    {
        name: 'John Doe',
        role: 'Founder of Rubik',
        image: 'https://readymadeui.com/team-2.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive  amazing. And the delivery was impressively prompt.',
        rating: 4
    },
    {
        name: 'Mark Adair',
        role: 'Founder of Alpha',
        image: 'https://readymadeui.com/team-1.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
        rating: 5
    },
    {
        name: 'Simon Konecki',
        role: 'Founder of Labar',
        image: 'https://readymadeui.com/team-4.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
        rating: 4
    },
    {
        name: 'Lily Smith',
        role: 'Founder of PixelCo',
        image: 'https://readymadeui.com/team-3.webp',
        feedback: 'Amazing service and product. Very responsive staff and a smooth process. I would definitely recommend it.',
        rating: 5
    },
    {
        name: 'Carlos Martinez',
        role: 'Founder of Nexus',
        image: 'https://readymadeui.com/team-5.webp',
        feedback: 'Top-notch service! Everything was quick and easy, and I was really impressed with the quality of the product and the service.',
        rating: 3
    }
  ];

  return (
    <div className="px-4 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24 bg-white max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold">What our happy clients say</h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
            <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
          
                <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed italic">
                  &quot;{testimonial.feedback}&quot;
                </blockquote>
          
                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex-shrink-0">
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};