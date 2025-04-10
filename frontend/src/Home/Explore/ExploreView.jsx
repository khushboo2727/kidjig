import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSignal } from '@fortawesome/free-solid-svg-icons';

const ExploreView = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
      <hr className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded" />
        <h2 className="text-3xl font-bold text-center mb-10">Explore Features</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <FontAwesomeIcon icon={faGear} size="2x" className="text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple Integration</h3>
            <p className="text-gray-600 mb-4">
              Simply change the endpoints in your existing setup, and you're ready to go.
            </p>
            <img src="easy-to-intgr.png" alt="Easy to Integrate" className="w-64 h-auto rounded" />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <FontAwesomeIcon icon={faSignal} size="2x" className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infinity Scalability</h3>
            <p className="text-gray-600 mb-4">
              Experience low latency with our AI API, deploy instantly, and surpass rate limits without impact.
            </p>
            <img src="graph-pic.svg" alt="Graph illustration" className="w-64 h-auto rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreView;
