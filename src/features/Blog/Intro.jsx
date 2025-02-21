"use client";

import React from 'react';
import Header from '@/components/Header';

const tags = [
  { text: 'B2B, SAAS', color: 'bg-pink-300' },
  { text: 'COPYWRITER', color: 'bg-blue-300' },
  { text: 'SEO', color: 'bg-red-300' },
  { text: 'TECHNICAL WRITER', color: 'bg-green-300' },
  { text: 'CONTENT WRITER', color: 'bg-gray-300' },
  { text: 'B2B, SAAS', color: 'bg-pink-300' },
];

const tags2 = [
  { text: 'B2B, SAAS', color: 'bg-pink-300' },
  { text: 'COPYWRITER', color: 'bg-blue-300' },
  { text: 'SEO', color: 'bg-red-300' },
  { text: 'TECHNICAL WRITER', color: 'bg-green-300' },
  { text: 'CONTENT WRITER', color: 'bg-gray-300' },
  { text: 'B2B, SAAS', color: 'bg-pink-300' },
];

const Intro = () => {
  return (
    <div className="px-4 relative overflow-hidden md:h-[450px]">
      <style jsx>{`
        @keyframes tilt {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
          
        @keyframes tilt2 {
          0%, 100% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(-5deg);
          }
        }

        .animate-tilt {
          animation: tilt 3s ease-in-out infinite;
        }
        .animate-tilt2 {
          animation: tilt2 3s ease-in-out infinite;
        }
      `}</style>

      <div className="flex justify-center">
        <Header align={'center'} content={'A QUICK INTRO'} />
      </div>
      
      <p className="text-center text-white mt-4 text-lg leading-relaxed">
        Hey there! Welcome to my blog. My name is <br />Nefe James and I have tons of useful stuff <br /> on here.
      </p>
      
      {/* Tilting scattered tags container */}
      {/* <div className="absolute left-0 right-0 bottom-0 z-10 mt-8 flex justify-center items-center space-x-32 hidden md:flex">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`inline-block px-3 py-1 text-xs font-semibold text-black ${tag.color} rounded animate-tilt`}
            style={{
              animationDelay: `${index * 0.3}s`,
              transformOrigin: 'center center',
              marginTop: `${(index % 3) * 10}px`
            }}
          >
            {tag.text}
          </span>
        ))}
      </div> */}

      
      <div className="absolute left-0 right-0 bottom-0 z-10 md:mt-8 flex justify-center items-center space-x-32 hidden md:flex">
        {tags.map((tag, index) => (
          
            index % 2 === 0 ? (
              <div className=""><span
              key={index}
              className={`inline-block px-3 py-1 text-xs font-semibold text-black ${tag.color} rounded animate-tilt`}
              style={{
                animationDelay: `${index * 0.3}s`,
                transformOrigin: 'center center',
                marginTop: `${(index % 3) * 10}px`
              }}
            >
              {tag.text}
            </span></div>
            ):(
              <div className="h-[100px] flex flex-col justify-between">
                <div className="">
                  <span
                    key={index}
                    className={`inline-block px-3 py-1 text-xs font-semibold text-black ${tag.color} rounded animate-tilt`}
                    style={{
                      animationDelay: `${index * 0.3}s`,
                      transformOrigin: 'center center',
                      marginTop: `${(index % 3) * 10}px`
                    }}
                  >
                    {tag.text}
                  </span>
                </div>
              <div className="">
                <span
                  key={index}
                  className={`inline-block px-3 py-1 text-xs font-semibold text-black ${tag.color} rounded animate-tilt2`}
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    transformOrigin: 'center center',
                    marginTop: `${(index % 3) * 10}px`
                  }}
                >
                  {tag.text}
                </span>
                </div>
              </div>
            )
        ))}
      </div>

      
    </div>
  );
};

export default Intro;
