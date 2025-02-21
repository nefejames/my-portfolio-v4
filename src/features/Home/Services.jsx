// components/MyServicesSection.js
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const Services = () => {
    const platforms = [
        { image: null }, { image: null }, { image: null }, { image: null }, { image: null }, { image: null }, { image: null },
        { image: '/img/slack.png' }, { image: '/img/apple.png' }, { image: null }, { image: null }, { image: '/img/spotify.png' }, { image: '/img/google.png' }, { image: '/img/figma.png' }, { image: null }, { image: null },
        { image: '/img/airbnb.png' }, { image: '/img/figma.png' }, { image: null }, { image: null }, { image: null }, { image: null }, { image: null }, { image: null },
      ];
    
      return (
        <div className=" py-12">
          <div className="container mx-auto px-4">
            <div className="w-full flex justify-center">
                <Header align={'left'} content={'Services'} />
            </div>
            <p className="text-gray-400 mb-6 md:ml-8">Tested and trusted by multiple brands</p>
      
            <div className="md:flex justify-between">
              {/* Social Media Logos Grid (50% width) */}
              <div className="md:w-1/2 flex justify-center items-center md:pt-8">
                <div className="grid grid-cols-5 gap-2">
                  {platforms.map((platform, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center h-[79px] rounded-lg w-[58px] mx-[-2px] ${
                        platform.image ? 'bg-black' : 'bg-gray-700'
                      } ${index === 0 || index === 2 || index === 4 ? 'mt-8' : 'mt-0'} ${index === 6 || index === 8 || index === 11  || index === 13  || index === 16  || index === 18  || index === 21  || index === 23   ? 'mt-[-2.2rem]' : 'mt-0'} ${index === 20 && 'opacity-0'} `}
                    >
                      {platform.image && (
                        <img src={platform.image} alt="logo" className=" w-[58px] h-[79px] rounded-lg" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Services List (50% width) */}
              <div className="md:w-1/2 flex flex-col space-y-4">
                {platforms.slice(0, 5).map((service, index) => (
                  <li
                      key={index}
                      className="flex justify-between py-4 px-8 hover:bg-gray-700 h-[64px] md:h-[88px] border-b-2 border-dotted"
                  >
                      <div className="flex items-center">
                          <Image
                              src="/svg/ArrowRightIcon.svg"
                              alt="Arrow Down"
                              width={24}
                              height={24}
                          />
                          <span className="font-[600] text-[16px] leading-[19px] md:text-[20px] md:leading-[23px] ml-6">Content Writing Services</span>
                      </div>
                      <Image
                          src="/svg/ArrowRight.svg"
                          alt="Arrow Down"
                          width={24}
                          height={24}
                      />
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Services;
