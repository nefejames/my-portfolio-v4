import Header from '@/components/Header';
import React from 'react';

const Experience = () => {
  const experiences = [
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
  ];
  const experiences2 = [
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
    { role: 'Content Writer', company: 'Company Name', yearRange: 'Year - Year' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        
      <div className="w-full flex justify-center">
            <Header align={'center'} content={'Work Experience'} />
        </div>

        <div className="relative mt-8 hidden md:block">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
            {experiences.map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-1 bg-[#62636A] h-20"></div>
                <div className="w-[80px] h-[80px] bg-[#191B24] rounded-full border-[4px] border-[#62636A]"></div>
              </React.Fragment>
            ))}
            <div className="w-1 bg-[#62636A] h-22"></div>
          </div>

          {/* Work Experience Items */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-20 mt-20">
              <div className="text-right w-1/2 pr-16 flex justify-end">
                <div className="bg-[#191B24] p-4 rounded-lg w-3/4 relative">
                  <p className="text-white text-xl">{experiences[0].role}</p>
                  <p className="text-gray-400">{experiences[0].company}</p>
                </div>
              </div>
              <div className="w-1/2 pl-16">
                <p className="text-gray-400">{experiences[0].yearRange}</p>
              </div>
            </div>

            {/* Second Experience */}
            <div className="flex items-center justify-between mb-20">
              <div className="text-right w-1/2 pr-16">
                <p className="text-gray-400">{experiences[1].yearRange}</p>
              </div>
              <div className="text-left w-1/2 pl-16 flex justify-start">
                <div className="bg-[#191B24] p-4 rounded-lg md:w-3/4  relative">
                  <p className="text-white text-xl">{experiences[1].role}</p>
                  <p className="text-gray-400">{experiences[1].company}</p>
                </div>
              </div>
            </div>

            {/* Third Experience */}
            <div className="flex items-center justify-between mb-20">
              <div className="text-right w-1/2 pr-16 flex justify-end">
                <div className="bg-[#191B24] p-4 rounded-lg w-3/4 relative">
                  <p className="text-white text-xl">{experiences[2].role}</p>
                  <p className="text-gray-400">{experiences[2].company}</p>
                </div>
              </div>
              <div className="w-1/2 pl-16">
                <p className="text-gray-400">{experiences[2].yearRange}</p>
              </div>
            </div>

            {/* Download CV */}
            <div className="flex items-center justify-between mb-20">
              <div className="text-right w-1/2 pr-16">
                <p className="text-gray-400"></p>
              </div>
              <div className="text-left w-1/2 pl-16 flex justify-start">
                <div className="bg-[#191B24] p-4 rounded-lg md:w-3/4  relative flex justify-center">
                <button className="border border-white text-white px-6 py-2 rounded-lg flex items-center">
                  Download my CV <img src="/svg/ArrowDown.svg" className='h-[18px]' />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        




        <div className="relative mt-8 block md:hidden">
          <div className="absolute left-8 transform -translate-x-1/2 h-full flex flex-col items-center">
                {experiences.map((_, index) => (
                  <React.Fragment key={index}>
                    <div className="w-[40px] h-[40px] bg-[#191B24] rounded-full border-[4px] border-[#62636A] "></div>
                    <div className={`w-1 bg-[#62636A] h-28 ${index === 3 ? 'hidden' : ''}`}></div> 
                  </React.Fragment>
                ))}
          </div>

          {/* Experience Items */}
          <div className="ml-16 flex flex-col space-y-10">
            {experiences2.map((exp, index) => (
              <div key={index} className="bg-[#191B24] p-6 rounded-lg max-w-md">
                <p className="text-white text-xl">{exp.role}</p>
                <p className="text-gray-400">{exp.company}</p>
              </div>
            ))}
          </div>
          
              <div className="ml-16 bg-[#191B24] p-6 rounded-lg max-w-md mt-8 flex justify-center">
                <button className="border border-white text-white px-6 py-2 rounded-lg flex items-center">
                  Download my CV <img src="/svg/ArrowDown.svg" className='h-[18px]' />
                </button>
              </div>
        </div>






      </div>
    </div>
  );
};

export default Experience;
