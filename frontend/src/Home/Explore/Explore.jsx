import React from 'react';
import ExploreArticle from './ExploreArtical';
import ExploreView from './ExploreView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faImage, faComment, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Explore = () => {
   
        const [active, setActive] = useState('all');
      
        const getButtonClass = (name) =>
          `flex items-center gap-2 px-4 py-2 rounded-full transition ${
            active === name
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`;
  return (
    <>
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        <hr className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded" />
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore Available Models
          </h2>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4">
      <button
        onClick={() => setActive('all')}
        className={getButtonClass('all')}
      >
        <FontAwesomeIcon icon={faBolt} /> All
      </button>

      <button
        onClick={() => setActive('chat')}
        className={getButtonClass('chat')}
      >
        <FontAwesomeIcon icon={faComment} /> Chat
      </button>

      <button
        onClick={() => setActive('image')}
        className={getButtonClass('image')}
      >
        <FontAwesomeIcon icon={faImage} /> Image
      </button>
    </div>
  

            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-2.5 text-gray-500"
              />
            </div>
          </div>

          {/* Article & View */}
          <ExploreArticle />
          <ExploreView />
        </div>
      </section>
    </>
  );
};

export default Explore;
