import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    title: 'What is Kidjig API?',
    content:
      'KidJig API Provider - your gateway to multiple AI language models through a single, unified API interface. Our API allows you to interact with various AI models from different providers while maintaining a consistent request and response format.',
  },
  {
    title: 'How to get started?',
    content:
      'To get started with the KidJig API, please create an account and generate your unique API Key. This key will grant you access to our powerful AI functionalities.',
  },
  {
    title: 'How do I contact support?',
    content:
      "You can reach out to us for support through our Discord community or via email founder@kidjig.com. We're here to help!",
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
        <hr className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded" />
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-100 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800 text-left">{item.title}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-3 bg-gray-50 text-gray-700 text-sm"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
