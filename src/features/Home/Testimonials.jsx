'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const Testimonial = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Content Writer',
      imageSrc: '/img/nefe.png',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
    },
    {
      name: 'Jane Smith',
      role: 'Technical Writer',
      imageSrc: '/img/nefe.png',
      description:
        'A highly skilled writer with several years of experience in creating content for reputable companies around the world.',
    },
    {
      name: 'Alex Johnson',
      role: 'SEO Specialist',
      imageSrc: '/img/nefe.png',
      description:
        'An SEO expert with significant achievements in improving search engine rankings for various clients across different industries.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12">

      <div className="container mx-auto px-4">
        
        <div className="flex justify-center">
            <Header align={'center'} content={'Testimonials'} />
        </div>

        <div className="relative flex flex-col items-center justify-center my-12 pt-12">
          <div className="relative w-full max-w-2xl flex flex-col lg:flex-row justify-between items-center bg-gray-800 overflow-hiddken shadow-lg">

            {/* Overlapping stacked effect */}
            {/* <div className="absolute w-full h-full top-0 left-0 -z-[10] transform -translate-y-4 "></div> */}
            <div className="absolute w-full h-full top-0 left-0 -z-20 transform -translate-y-8 flex justify-center">
                <div className="flex flex-col lg:flex-row w-[90%]">
                  <div className="lg:w-1/2 w-full">
                    <Image
                      src='/img/nefe.png'
                      alt=''
                      width={500}
                      height={500}
                      className="object-cover w-full md:h-[408px]"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-start bg-gray-800">
                  </div>
                </div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 -z-30 transform -translate-y-16 flex justify-center">
                <div className="flex flex-col lg:flex-row w-[77%]">
                  <div className="lg:w-1/2 w-full">
                    <Image
                      src='/img/nefe.png'
                      alt=''
                      width={500}
                      height={500}
                      className="object-cover w-full md:h-[408px]"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-start bg-gray-800">
                  </div>
                </div>
            </div>

            {/* Image + Text Container */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'block'
                    : 'hidden'
                }`}
              >
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-1/2 w-full">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      className="object-cover w-full md:h-[408px]"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-center">
                    <div className="rounded-full bg-white h-[38px] w-[38px] mb-4"></div>
                    <h3 className="text-[20px] leading-[32px] font-[600] mb-2">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
                    <p className="text-[20px] leading-[32px] font-[400] text-center">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows Below */}
          <div className="mt-6 flex justify-between space-x-4">
            <button
              onClick={handlePrev}
              className=" p-3 focus:outline-none hover:bg-gray-600 transition"
            >
              <Image src="/svg/ArrowLeft.svg" alt="Arrow Right" width={24} height={24} />
            </button>
            <button
              onClick={handleNext}
              className=" p-3 focus:outline-none hover:bg-gray-600 transition"
            >
              <Image src="/svg/ArrowRight.svg" alt="Arrow Right" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="text-center space-x-4">
          <button className="my-1 inline-flex items-center px-6 py-2 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition">
            More testimonials
          </button>
          <button className="my-1 inline-flex items-center px-6 py-2 bg-transparent border border-white rounded-full hover:bg-white hover:text-gray-900 transition">
            Work with me
            <span className="ml-2">
              <Image src="/svg/ArrowRight.svg" alt="Arrow Right" width={24} height={24} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
