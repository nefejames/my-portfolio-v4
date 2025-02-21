import ContactForm from "@/components/ContactForm";

export default function ContactFormModal({ isModalOpen, toggleModal }) {
  return (
    <>
      {/* Contact Modal */}
      {isModalOpen && (
        <div
          onClick={toggleModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="container">
            <div className="bg-[#191B24] max-width md:w-5/6 text-white p-6 mx-4 sm:mx-auto relative">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Close modal</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
