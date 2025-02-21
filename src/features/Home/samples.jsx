// components/MyServicesSection.js
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const Samples = () => {
    const samples = [
      { role: 'Content Writer', image: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
      { role: 'Content Writer', image: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
      { role: 'Content Writer', image: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
      ];
    
      return (
        <div className=" py-12">
          <div className="container mx-auto px-4">
            <div className="w-full flex justify-center">
              <div className={`flex justify-between items-center text-left my-8 container bg-[#191B24] px-1 md:px-8`}>
                  <div className="flex">
                    <Image src="/svg/ArrowRightIcon.svg" alt="Arrow Down" width={48} height={48} />
                      <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
                          Samples
                      </h2>
                  </div>
                  <div className="">
                    <button className="border border-white text-white px-6 py-2 rounded-lg flex items-center hidden md:block">
                      See all samples <img src="/svg/ArrowRight.svg" className='h-[18px]' />
                    </button>
                  </div>
              </div>
            </div>
      
            <div className="">
              <div className="md:flex justify-between">
                <div className="md:w-1/2 md:mr-4 bg-[#191B24] p-4 mt-2">
                  <img src="/img/img2.png" alt="" className='mb-2' />
                  <b className='text-[24px]'>Title of sample</b>
                  <div className='flex mt-2 text-[16px]'>
                    <div className="w-5 h-5 bg-white mr-1"></div>
                    Company
                  </div>
                </div>
                <div className="md:w-1/2 md:ml-4 bg-[#191B24] p-4 mt-2">
                  <img src="/img/img2.png" alt=""  className='mb-2' />
                  <b className='text-[24px]'>Title of sample</b>
                  <div className='flex mt-2 text-[16px]'>
                    <div className="w-5 h-5 bg-white mr-1"></div>
                    Company
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#191B24] p-4 mt-2 md:mt-8">
                <img src="/img/img4.png" alt=""  className='mb-2' />
                  <b className='text-[24px]'>Title of sample</b>
                  <div className='flex mt-2 text-[16px]'>
                    <div className="w-5 h-5 bg-white mr-1"></div>
                    Company
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Samples;
