"use client";

import React from 'react';
import Image from 'next/image';

const Contents = () => {
  return (
    <div className="px-4 md:mt-32">
      
      <div className="flex justify-center">
        <div className={`flex justify-center my-8 container px-1 md:px-8`}>
            <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
            A TALE OF TWO “CONTENTS”
            </h2>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src="/img/img20.png" 
          alt=""
          className="container w-full"
        />
      </div>

      <div className="max-w-2xl mx-auto mb-8 space-y-6">
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        
        <button className="inline-flex items-center px-6 py-2 bg-transparent border border-white rounded-full hover:bg-white hover:text-gray-900 transition">
            Read More
            <span className="ml-2">
              <Image src="/svg/ArrowRight.svg" alt="Arrow Right" width={24} height={24} />
            </span>
          </button>
      </div>

    </div>
  );
};

export default Contents;
