import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full h-20 flex justify-between items-center px-6 md:px-12 text-[#203834] bg-white relative z-50">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img src="logo.png" alt="Healthy Recipe Finder Logo" className="w-14" />
          <h1 className="font-extrabold text-lg sm:text-xl">Healthy Recipe Finder</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-bold">
          <li className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
            <a href="/about">About</a>
          </li>
          <li className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
            <a href="/recipes">Recipes</a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-[#203834] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[#1a2f2b] transition">
          Browse recipes
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-6 gap-4 font-bold text-center">
            <a href="/" className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
              Home
            </a>
            <a href="/about" className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
              About
            </a>
            <a href="/recipes" className="hover:underline decoration-amber-400 decoration-4 underline-offset-4">
              Recipes
            </a>
            <button className="bg-[#203834] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[#1a2f2b] transition">
              Browse recipes
            </button>
          </div>
        )}
      </nav>
      <hr className="bg-gray-200" />
    </>
  );
}

export default Navbar;
