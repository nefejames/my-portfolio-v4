import Header from '@/components/Header';
import React from 'react';

const Process = () => {
  const processes = [
    { title: 'RESEARCH', process: 'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.' },
    { title: 'RESEARCH', process: 'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.' },
    { title: 'RESEARCH', process: 'A technical and content writer from Nigeria who has considerable work experience that would be useful for a reputable company.' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        
        <div className="w-full flex justify-center">
            <Header align={'center'} content={'My Work Process'} />
        </div>

        <div className="flex justify-center">
          <div className="flex justify-center process">
            <div className="relative mt-8">
              {/* Timeline */}
              <div className="absolute transform -translate-x-1/2 h-full flex flex-col items-center">
                {/* Line and Circles */}
                {processes.map((_, index) => (
                  <React.Fragment key={index}>
                    <div className="w-[80px] h-[80px] bg-[#191B24] rounded-full border-[4px] border-[#62636A] flex justify-center items-center text-[32px] geostar">{index + 1}</div>
                    <div className={`w-1 bg-[#62636A] h-32 ${index === 2 ? 'hidden' : ''}`}></div> 
                  </React.Fragment>
                ))}
                <div className="w-1 bg-[#62636A] h-22"></div> {/* Extra line for the end */}
              </div>

              {/* Work Experience Items */}
              <div className="flex flex-col">
                {/* First Experience */}
                <div className="flex items-center justify-between mb-20">
                  <div className="text-left w-1/2 pl-16 flex justify-start">
                    <div className="bg-[#191B24] p-4 rounded-lg md:w-3/4  relative">
                      <p className="text-white text-xl">{processes[1].title}</p>
                      <p className="text-gray-400">{processes[1].process}</p>
                    </div>
                  </div>
                </div>

                {/* Second Experience */}
                <div className="flex items-center justify-between mb-20">
                  <div className="text-left w-1/2 pl-16 flex justify-start">
                    <div className="bg-[#191B24] p-4 rounded-lg md:w-3/4  relative">
                      <p className="text-white text-xl">{processes[1].title}</p>
                      <p className="text-gray-400">{processes[1].process}</p>
                    </div>
                  </div>
                </div>

                {/* Third Experience */}
                <div className="flex items-center justify-between mb-20">
                  <div className="text-left w-1/2 pl-16 flex justify-start">
                    <div className="bg-[#191B24] p-4 rounded-lg md:w-3/4  relative">
                      <p className="text-white text-xl">{processes[1].title}</p>
                      <p className="text-gray-400">{processes[1].process}</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
