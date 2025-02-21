export default function Hero() {
  return (
    <div className="px-4 flex flex-col items-center justify-center relative h-[250px]  md:h-[500px]">
      {/* Name Section */}
      <div className="space-y-4 mb-[50px]">
        <div className="relative ">
          <span className="absolute -top-1 -left-12 bg-red-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-12">
            B2B, SAAS
          </span>
          <span className="geostar text-[22px] xl:text-[75px] lg:text-5xl lg:font-[400]">
            Welcome to my
          </span>
          <span className="absolute top-2 left-80 bg-red-500 text-xs px-2 py-1 rounded animate-pulse hidden sm:block rotate-[20deg]">
            SEO
          </span>
          <span className="absolute top-2 right-36 bg-blue-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-6">
            COPYWRITER
          </span>
        </div>
        <div className="relative text-[24px] font-bold">
          <span className="absolute -top-1 -left-16 bg-green-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-6">
            TECHNICAL WRITER
          </span>
          <span className="geostar text-[22px] xl:text-[75px] lg:text-5xl lg:font-[400]">
            Content playground
          </span>
          <span className="absolute -bottom-3 right-44 bg-green-300 text-xs px-2 py-1 rounded animate-pulse hidden sm:block -rotate-2">
            CONTENT WRITER
          </span>
        </div>
        <div className="md:pt-16">
          <p className="md:w-[600px] md:text-[30px] font-[400] md:line-[40px]">
            Hey there! All my work lives here, I sabi die!! Read and be
            impressed... “Insert quote on how content drives business growth”
          </p>
        </div>
      </div>
    </div>
  );
}
