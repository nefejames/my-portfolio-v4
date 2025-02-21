import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-[250px]  md:h-[450px]">
      {/* Name Section */}
      <div className="text-center space-y-4 mb-[50px]">
        <div className="relative ">
          <span className="absolute -top-2 left-10 bg-red-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-[15deg]">B2B, SAAS</span>
          <span className="geostar text-[24px] xl:text-[96px] lg:text-7xl lg:font-[400] lg:leading-[110.21px]">Emadamerho-Atori</span>
          <span className="absolute top-7 right-[50%] bg-red-500 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-[18deg]">SEO</span>
          <span className="absolute top-20 right-12 bg-blue-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-[10deg]">COPYWRITER</span>
        </div>
        <div className="relative text-[24px] font-bold">
        <span className="absolute -top-2 -left-12 bg-green-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-[5deg]">TECHNICAL WRITER</span>
        <span className="absolute -top-1 right-4 bg-[#CCCCCC] text-xs px-2 py-1 rounded animate-pulse hidden sm:block">COPY WRITER</span>
          <span className='geostar text-[24px] xl:text-[96px] lg:text-7xl lg:font-[400] lg:leading-[110.21px]'>Nefe</span>
          <span className="inline-block bg-pink-300 h-4 lg:h-10 w-28 lg:w-[24rem] xl:w-[30rem] mx-2"></span>
          <span className='geostar text-[24px] xl:text-[96px] lg:text-7xl lg:font-[400] lg:leading-[110.21px]'>James</span>
        </div>
      </div>

    </div>
  );
};

export default Hero;
