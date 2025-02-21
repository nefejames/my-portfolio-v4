import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const Intro = () => {
  return (
    <div className='px-4 mt-16'>
        <div className="flex justify-center">
            <Header align={'center'} content={'A QUICK INTRO'} />
        </div>
        <div className='w-full flex justify-center p-6 px-4 md:p-12 md:pt-4'>
            <div className="container flex flex-col md:flex-row justify-between">

                <div className="flex flex-col justify-center md:w-[50%] mb-6">
                    <p className="text-[16px] leading-[32px] md:text-[32px] font-[400] md:leading-[64px] mb-4">
                        A technical and content writer from Nigeria who has{' '}
                        <span className="bg-[#C37892] px-6 py-1 rounded">
                            considerable work experience
                        </span>{' '}
                        that would be useful for a reputable company.
                    </p>
                    <div className=""><img src="/img/nefe.png" alt="" className='md:w-[80%] md:h-[24rem] rounded-3xl' /></div>
                </div>

                <div className="w-full md:w-[48%] max-w-xl">
                    <ul className="space-y-4 pt-10">
                    {[
                        'WHY WORK WITH ME?',
                        'MY SERVICES',
                        'MY EXPERIENCE',
                        'WORK SAMPLES',
                        'CONTACT ME',
                    ].map((text, idx) => (
                        <li
                            key={idx}
                            className="flex justify-between py-4 px-8 hover:bg-gray-700 h-[64px] md:h-[88px] border-b-2 border-dotted"
                        >
                            <div className="flex items-center">
                                <Image
                                    src="/svg/ArrowRightIcon.svg"
                                    alt="Arrow Down"
                                    width={24}
                                    height={24}
                                />
                                <span className="font-[600] text-[16px] leading-[19px] md:text-[20px] md:leading-[23px] ml-6">{text}</span>
                            </div>
                            <Image
                                src="/svg/ArrowDown.svg"
                                alt="Arrow Down"
                                width={24}
                                height={24}
                            />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Intro;
