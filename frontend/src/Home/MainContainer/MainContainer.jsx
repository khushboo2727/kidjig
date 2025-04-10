import React, { useState } from 'react';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState('JavaScript');

  const codeSnippets = {
    JavaScript: `const axios = require('axios');

const baseUrl = 'https://api.kidjig.com/provider';

const response = await axios.post(
  \`\${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo\`,
  {
    prompt: "What is the capital of France?",
    stream: false,
    config: {
      temperature: 0.7,
      maxOutputTokens: 4096,
      topP: 1,
      topK: 40
    }
  },
  {
    headers: {
      'X-Api-Key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`,

    Python: `import requests

base_url = 'https://api.kidjig.com/provider'

response = requests.post(
  f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",
  json={
    "prompt": "What is the capital of France?",
    "stream": False,
    "config": {
      "temperature": 0.7,
      "maxOutputTokens": 4096,
      "topP": 1,
      "topK": 40
    }
  },
  headers={
    'X-Api-Key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
)

print(response.json())`,

    Curl: `curl -X POST 'https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo' \\
  -H 'X-Api-Key: YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "prompt": "What is the capital of France?",
    "stream": false,
    "config": {
      "temperature": 0.7,
      "maxOutputTokens": 4096,
      "topP": 1,
      "topK": 40
    }
  }'`
  };

  return (
    <main className="p-6 md:p-12 bg-white text-gray-800">
      <section className="max-w-6xl mx-auto space-y-12">

        {/* Header and Docs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-3xl font-bold">Quick Start</h2>
          <a href="https://kidjig.gitbook.io/kidjig-docs" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer">
              Full Documentation
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </button>
          </a>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Create Account', 'Sign up and create your account to get started with KidJig API.'],
            ['Get API Key', 'Generate your API key from the API Keys section in your dashboard.'],
            ['Make API Calls', 'Use your API key to authenticate and start making API calls.'],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{i + 1}. {title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        {/* Base URL */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Base URL</h3>
          <div className="bg-gray-100 p-4 rounded flex items-center justify-between">
            <code className="text-sm break-all">https://api.kidjig.com/provider</code>
            <button type="button" className="text-gray-500 hover:text-indigo-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Language Tabs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Make Your First API Call</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.keys(codeSnippets).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  activeTab === lang ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <img
                  src="https://www.svgrepo.com/show/522062/code.svg"
                  alt={`${lang} Icon`}
                  className="w-5"
                />
                {lang}
              </button>
            ))}
          </div>

          {/* Code Snippet Display */}
          <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-x-auto">
            {codeSnippets[activeTab]}
          </pre>
        </div>

        {/* Authorization */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Authorization</h3>
          <p className="mb-2">
            Include your API key in the <code className="font-mono bg-gray-100 px-2 py-1 rounded">X-Api-Key</code> header for all requests:
          </p>
          <code className="block bg-gray-200 p-2 rounded text-sm">X-Api-Key: YOUR_API_KEY</code>
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
