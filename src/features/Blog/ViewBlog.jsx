"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const BlogView = () => {
    const { id } = useParams();
  return (
    <div className="px-4 mb-36">
        <div className="flex justify-center">
            <Header align={'center'} content={'A TALE OF TWO CONTENTS'} />
        </div>

        <div className="flex justify-center">
            <div className="container max-w-3xl">
                <div className="flex justify-between mb-4">
                    <div className="">
                        <button className="hover:text-gray-300 text-1xl"><FaLinkedin /></button>
                        <button className="hover:text-gray-300 text-xl mx-2"><FaTwitter /></button>
                        <button className="hover:text-gray-300"><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.502 19.5C13.8087 19.5 13.2183 19.2567 12.731 18.77C12.2437 18.2847 12 17.6947 12 17C12 16.8667 12.0113 16.729 12.034 16.587C12.0573 16.4443 12.092 16.31 12.138 16.184L4.396 11.623C4.15133 11.899 3.86667 12.114 3.542 12.268C3.21733 12.422 2.87 12.4993 2.5 12.5C1.80533 12.5 1.21533 12.2573 0.73 11.772C0.243333 11.286 0 10.696 0 10.002C0 9.308 0.243333 8.71767 0.73 8.231C1.21667 7.74433 1.80667 7.50067 2.5 7.5C2.87067 7.5 3.218 7.57733 3.542 7.732C3.866 7.88667 4.15067 8.10167 4.396 8.377L12.139 3.815C12.0923 3.68967 12.0577 3.55567 12.035 3.413C12.0117 3.271 12 3.13333 12 3C12 2.30533 12.243 1.71533 12.729 1.23C13.2143 0.743333 13.804 0.5 14.498 0.5C15.192 0.5 15.7823 0.743 16.269 1.229C16.7557 1.715 16.9993 2.30467 17 2.998C17.0007 3.69133 16.7573 4.28167 16.27 4.769C15.7853 5.25633 15.1953 5.5 14.5 5.5C14.1293 5.5 13.782 5.42267 13.458 5.268C13.134 5.11333 12.8493 4.89833 12.604 4.623L4.862 9.185C4.908 9.31033 4.94233 9.44367 4.965 9.585C4.98833 9.727 5 9.864 5 9.996C5 10.128 4.98833 10.2663 4.965 10.411C4.94167 10.5557 4.907 10.6907 4.861 10.816L12.604 15.377C12.8487 15.1017 13.1333 14.8867 13.458 14.732C13.7827 14.5773 14.13 14.5 14.5 14.5C15.1947 14.5 15.7847 14.743 16.27 15.229C16.7567 15.7143 17 16.304 17 16.998C17 17.692 16.7573 18.2823 16.272 18.769C15.7867 19.2557 15.1967 19.4993 14.502 19.5ZM14.5 4.5C14.9113 4.5 15.2643 4.353 15.559 4.059C15.853 3.76433 16 3.41133 16 3C16 2.58867 15.853 2.23567 15.559 1.941C15.2643 1.647 14.9113 1.5 14.5 1.5C14.0887 1.5 13.7357 1.647 13.441 1.941C13.147 2.23567 13 2.58867 13 3C13 3.41133 13.147 3.76433 13.441 4.059C13.7357 4.353 14.0887 4.5 14.5 4.5ZM2.5 11.5C2.91133 11.5 3.26433 11.353 3.559 11.059C3.853 10.7643 4 10.4113 4 10C4 9.58867 3.853 9.23567 3.559 8.941C3.265 8.64633 2.912 8.49933 2.5 8.5C2.088 8.50067 1.735 8.64767 1.441 8.941C1.147 9.23567 1 9.58867 1 10C1 10.4113 1.147 10.7643 1.441 11.059C1.735 11.3537 2.088 11.5007 2.5 11.5ZM14.5 18.5C14.9113 18.5 15.2643 18.353 15.559 18.059C15.853 17.7643 16 17.4113 16 17C16 16.5887 15.853 16.2357 15.559 15.941C15.2643 15.647 14.9113 15.5 14.5 15.5C14.0887 15.5 13.7357 15.647 13.441 15.941C13.147 16.2357 13 16.5887 13 17C13 17.4113 13.147 17.7643 13.441 18.059C13.7357 18.353 14.0887 18.5 14.5 18.5Z" fill="white"/>
                        </svg>
                        </button>
                    </div>
                    <span className="ml-4 text-[14px] font-[600]">2 MIN READ</span>
                </div>
            </div>
        </div>

      <div className="flex justify-center mb-8">
        <img
          src="/img/img5.png"
          alt="Blog Content Image"
          className="w-full max-w-3xl rounded-md"
        />
      </div>

      <div className="max-w-2xl mx-auto mb-8 space-y-6 text-gray-300 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper purus egestas morbi dictumst fermentum placerat at.
          Consequat tempor tincidunt pharetra gravida dictum porttitor consectetur lacus. Eget semper fermentum
          eleifend penatibus pellentesque. Suspendisse nulla rhoncus accumsan sit aenean tortor dui condimentum
          etiam
        </p>
      </div>
    </div>
  );
};

export default BlogView;
