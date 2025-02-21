'use client'
import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#05060A] text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="lg:flex justify-between items-start mb-6">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="">
              <Image src="/svg/logo.svg" alt="Logo" width={32} height={32} />
              <h1 className="text-[24px] geostar my-3">
                Emedamehro-Atori Nefe
              </h1>
            </div>
            <p className="text-gray-400 text-[16px]">A technical and content writer from Nigeria.</p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-xl text-gray-400 hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-xl text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/3 grid grid-cols-2 gap-6 lg:flex lg:justify-between text-gray-400">
            <div>
              <ul>
                <li className="mb-3 hover:text-white transition"><a href="#">Services</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Testimonials</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Blog</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Contact me</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3 hover:text-white transition"><a href="#">View my work</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Download my CV</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Work with me</a></li>
                <li className="mb-3 hover:text-white transition"><a href="#">Experience</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
        <div className="text-center border-t border-gray-700 pt-4 text-gray-400">
          Made with love by <span className="font-bold text-white">Scrum Universe</span>
        </div>
    </footer>
  );
};

export default Footer;
