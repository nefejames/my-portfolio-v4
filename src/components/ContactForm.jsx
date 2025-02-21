"use client";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className=" text-white py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="flex">
              <h2 className="my-4 geostar lg:text-[32px] font-[400] tracking-widest ml-3 uppercase">
                Contact Me
              </h2>
              <Image
                src="/svg/ArrowRightIcon.svg"
                alt="Arrow Down"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full px-8 rounded-lg">
          <form>
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type in your name"
                className="w-full p-3 bg-[#2E3242]  rounded-md text-gray-400 focus:outline-none focus:border-white transition"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type in your email"
                className="w-full p-3 bg-[#2E3242]  rounded-md text-gray-400 focus:outline-none focus:border-white transition"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Your message
              </label>
              <textarea
                id="message"
                placeholder="Type in your message"
                rows={5}
                className="w-full p-3 bg-[#2E3242]  rounded-md text-gray-400 focus:outline-none focus:border-white transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center px-6 py-3  border border-white rounded-full hover:bg-white hover:text-[black] transition"
            >
              Send a message
              <span className="ml-2">
                <Image
                  src="/svg/ArrowRight.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
