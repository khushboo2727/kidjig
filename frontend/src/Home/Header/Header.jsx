import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className=" text-gray-900 px-6 py-12 bg-white md:py-20  ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 ">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 flex-1 px-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Enterprise AI Gateway
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Unify, secure, and scale your enterprise AI infrastructure through a single, powerful gateway.
            Access and manage multiple AI providers with enterprise-grade security.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition">
              Get API Key
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition">
              Schedule Demo
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/MainAI.jpg"
            alt="AI Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
