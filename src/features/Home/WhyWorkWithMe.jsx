import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const WhyWorkWithMe = () => {
  const benefits = [
    {
      title: 'BENEFIT ONE',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
      imgSrc: '/img/blog.png',
    },
    {
      title: 'BENEFIT ONE',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
      imgSrc: '/img/blog.png',
    },
    {
      title: 'BENEFIT ONE',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
      imgSrc: '/img/blog.png',
    },
    {
      title: 'BENEFIT ONE',
      description:
        'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.',
      imgSrc: '/img/blog.png',
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        
        <div className="w-full flex justify-center">
            <Header align={'left'} content={'Why Work with Me?'} />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="">
              <h3 className="text-[24px] leading-[28px] font-[600] mb-4">{benefit.title}</h3>
              <p className="text-[16px] leading-[24px] font-[400] mb-4">{benefit.description}</p>
              <div className="w-full h-48 mx-auto mb-4">
                <img src={benefit.imgSrc} alt={`Image for ${benefit.title}`} className='w-full' />
                {/* <Image
                  src={benefit.imgSrc}
                  alt={`Image for ${benefit.title}`}
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                /> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="">
          <button className="inline-flex items-center px-6 py-2 bg-transparent border border-white rounded-full hover:bg-white hover:text-gray-900 transition">
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

export default WhyWorkWithMe;
