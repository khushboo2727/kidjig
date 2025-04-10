import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Kidjig</h2>
            <p className="text-gray-400">Powering intelligent API services for your future-ready apps.</p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">API Status</a></li>
            </ul>
          </div>
  
          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay in the loop</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors rounded p-2 font-semibold">
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 py-4 text-center text-gray-500 text-sm">
          © 2025 Kidjig. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  