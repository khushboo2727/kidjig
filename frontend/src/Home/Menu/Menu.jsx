import React from 'react';
// import React, { useState } from 'react';
import { useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
// import { Menu, X } from 'lucide-react';


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Features', 'Docs', 'Pricing', 'Contact'];

  return (
    <nav className="bg-blue-950 shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
            <img src="kidjiglogo.png" alt="KidJig Logo" className="w-8 h-8 bg-black" />
                 KidJig
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-100 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-primary transition cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
            {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}

          {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="px-4 hover:text-indigo-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
