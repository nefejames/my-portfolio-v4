import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const MyServices = () => {
  const services = [
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
          <div className={`flex justify-between items-center text-left my-8 container px-1 bg-[#191B24]`}>
              <div className="flex">
                <Image src="/svg/ArrowDownIcon.svg" alt="Arrow Down" width={48} height={48} />
                  <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
                      MY BLOG
                  </h2>
              </div>
              <div className="flex">
              <a href="#" className='mx-2'>Content Writing</a>
              <a href="#" className='mx-2'>Copy Writing</a>
              <a href="#" className='mx-2'>SEO</a>
              <a href="#" className='mx-2'>Technical Writing</a>
              </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 mt-8">
          {services.map((blog, index) => (
            <div key={index} className="md:flex justify-between mb-12">
              <div className="md:w-1/2">
                <h3 className="geostar uppercase text-[24px]">Content Writing</h3>
                <div className="bg-[#191B24] rounded-[12px] p-4 max-w-[400px] my-4">
                  <p className='text-[16px]'>This is a standard rate per word</p>
                  <h4><b>20$</b></h4>
                </div>
                <p className="md:max-w-[400px] text-[16px]">A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.
                </p>
                <ul className='md:max-w-[400px] text-[16px] my-4' style={{ listStyleType: 'disc', color: 'white', paddingLeft: '20px' }}>
                  <li style={{ color: 'white' }}>Offering</li>
                  <li style={{ color: 'white' }}>Offering</li>
                  <li style={{ color: 'white' }}>Offering</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <b>Samples</b>
                <div className="md:flex">
                  <div className="md:w-1/2 m-1">
                    <img src="/img/img5.png" alt="" />
                  </div>
                  <div className="md:w-1/2 m-1">
                    <img src="/img/img6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
                // <div key={index} className='bg-[#191B24] p-4'>
                //   <img src="/img/img2.png" alt="" className='mb-2' />
                //   <b className='text-[24px]'>Title of sample</b>
                //   <div className='flex mt-2 text-[16px]'>
                //     <div className="w-5 h-5 bg-white mr-1"></div>
                //     Company
                //   </div>
                // </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyServices;
