import React from 'react';

const ExploreArticle = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
              Explore, Create and Discover in <br/> Our AI Playground
            </h2>
            <button className="mt-4 px-6 py-3  bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              AI Playground
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2">
            <img src="../../../explore.png" alt="AI Playground" className="w-full max-w-md mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreArticle;
