import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-[250px]  md:h-[450px]">
      {/* Name Section */}
      <div className="text-center space-y-4 mb-[50px]">
        <div className="relative ">
          <span className="absolute -top-0 left-0 bg-red-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-12">FANTASTIC</span>
          <span className="geostar text-[22px] xl:text-[75px] lg:text-5xl lg:font-[400] lg:leading-[110.21px]">Testimonials</span>
          <span className="absolute top-8 left-72 bg-red-500 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-6">TERRIFIC</span>
          <span className="absolute top-20 right-40 bg-blue-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-12">IT WORKS!</span>
          <span className="absolute top-4 right-0 bg-blue-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block">EFFECTIVE</span>
        </div>
        {/* <div className="relative text-[24px] font-bold">
          <span className="absolute -top-8 -left-12 bg-green-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block">TECHNICAL WRITER</span>
          <span className='geostar text-[22px] xl:text-[75px] lg:text-5xl lg:font-[400] lg:leading-[110.21px]'>Services</span>
        </div> */}
      </div>

      <div className="">
        <h5>TESTED AND TRUSTED BY MULTIPLE BRANDS</h5>
        <div className="flex justify-center mt-3">
                <img src="/img/stripe.png" alt="" className="mx-1 w-[80px] h-[56px]" />
                <img src="/img/google.png" alt="" className="mx-1 w-[80px] h-[56px]" />
                <img src="/img/airbnb.png" alt="" className="mx-1 w-[80px] h-[56px]" />
        </div>
        <div className="flex justify-center mt-2">
                <img src="/img/apple.png" alt="" className="mx-1 w-[80px] h-[56px]" />
                <img src="/img/spotify.png" alt="" className="mx-1 w-[80px] h-[56px]" />
                <img src="/img/slack.png" alt="" className="mx-1 w-[80px] h-[56px]" />
                <img src="/img/figma.png" alt="" className="mx-1 w-[80px] h-[56px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
