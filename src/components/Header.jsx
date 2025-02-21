import React from 'react'
import Image from 'next/image';

export default function Header({align, content}) {
    
    return (
        <div className={`flex ${align === 'center' ? 'justify-center' : 'text-left'} my-8 container bg-[#191B24] px-1 md:px-8`}>
            {align === 'center' ? 
            <Image src="/svg/ArrowDownIcon.svg" alt="Arrow Down" width={48} height={48} /> : 
            <Image src="/svg/ArrowRightIcon.svg" alt="Arrow Down" width={48} height={48} />}
            <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
                {content}
            </h2>
        </div>
    )
}