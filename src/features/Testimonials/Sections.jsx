import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const Sections = () => {
  const testimonials = [
    {
      title: 'BENEFIT ONE',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
      imgSrc: '/img/nefe.png',
    },
    {
      title: 'BENEFIT TWO',
      description:
        'Another benefit description goes here.',
      imgSrc: '/img/nefe.png',
    },
    {
      title: 'BENEFIT THREE',
      description:
        'A third benefit description goes here.',
      imgSrc: '/img/nefe.png',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Benefits Grid */}
        <div className="mb-12 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="md:flex justify-between">
              {index % 2 === 0 ? (
                <div className="md:w-full">
                  <div className="md:flex">
                    <div className="md:w-1/2 m-1">
                      <img src={testimonial.imgSrc} alt={testimonial.title} className='w-full' />
                    </div>
                    <div className="md:w-1/2 m-1 bg-[#191B24] flex flex-col justify-center items-center p-8">
                      <div className="bg-white rounded-full h-[37px] w-[37px] mb-5"></div>
                      <h3 className='font-[600] text-[20px]'>{testimonial.title}</h3>
                      <p className='font-[400] text-[16px] my-4'>Role</p>
                      <p className='font-[400] text-[20px] text-center'>{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="md:w-full">
                  <div className="md:flex">
                    <div className="md:w-1/2 m-1 bg-[#191B24] flex flex-col justify-center items-center p-8">
                      <div className="bg-white rounded-full h-[37px] w-[37px] mb-5"></div>
                      <h3 className='font-[600] text-[20px]'>{testimonial.title}</h3>
                      <p className='font-[400] text-[16px] my-4'>Role</p>
                      <p className='font-[400] text-[20px] text-center'>{testimonial.description}</p>
                    </div>
                    <div className="md:w-1/2 m-1">
                      <img src={testimonial.imgSrc} alt={testimonial.title} className='w-full' />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
