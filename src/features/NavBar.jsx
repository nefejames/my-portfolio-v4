"use client";
import { useState } from "react";
import ContactFormModal from "@/components/Modal";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="custombg customfg border-gray-200">
        <div className="max-w-screenjj-xl flex flex-wrap items-center justify-between container mx-auto px-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/svg/logo.svg" className="" alt="Nefa Logo" />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-700 font-[400]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/samples"
                  className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 font-[400] md:p-0"
                >
                  Samples
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 font-[400] md:p-0"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 font-[400] md:p-0"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  className="block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 font-[400] md:p-0"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ContactFormModal {...{ isModalOpen, toggleModal }} />
    </>
  );
}
