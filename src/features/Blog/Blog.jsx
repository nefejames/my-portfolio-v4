import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const Blog = () => {
  const blogs = [
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
    <section className=" py-12 mb-20">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center">
          <div className={`flex justify-between items-center text-left my-8 container px-1`}>
              <div className="flex">
                <Image src="/svg/ArrowDownIcon.svg" alt="Arrow Down" width={48} height={48} />
                  <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
                       MORE STUFFS
                  </h2>
              </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-4">
          {blogs.map((blog, index) => (
                <div key={index} className='bg-[#191B24] p-4'>
                  <img src="/img/img2.png" alt="" className='mb-2' />
                  <b className='text-[24px]'>Title of sample</b>
                  <div className='flex mt-2 text-[16px]'>
                    <div className="w-5 h-5 bg-white mr-1"></div>
                    Company
                  </div>
                </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
