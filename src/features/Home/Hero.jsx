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
          <span className='geostar text-[24px] xl:text-[96px] lg:text-7xl lg:font-[400] lg:leading-[110.21px]'>Nefe</span>
          <span className="inline-block bg-pink-300 h-4 lg:h-10 w-28 lg:w-[24rem] xl:w-[30rem] mx-2"></span>
          <span className='geostar text-[24px] xl:text-[96px] lg:text-7xl lg:font-[400] lg:leading-[110.21px]'>James</span>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        {/* <div className="flex whitespace-nowrap animate-marquee"> */}
        <div  className=" whitespace-nowrap animate-marquee">
            <div className="flex pr-64">
                <div className="bg-transparent text-black text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    T
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#D09292] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#C094CC] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#090B11] text-[white] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#DDD3CE] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A5BBB6] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A37067] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#D09292] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#C094CC] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
            </div>
          
            <div className="flex">
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#D09292] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#C094CC] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#090B11] text-[white] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#DDD3CE] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A5BBB6] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A37067] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#A2D0C0] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#D09292] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
                <div className="bg-[#C094CC] text-[#0E0A0E] text-[14px] font-[600] px-1 py-0.5 m-0.5 rounded">
                    TECHNICAL WRITER
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
