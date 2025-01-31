import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-2 w-full fixed top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">LOGO</a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-6 absolute md:static bg-slate-600 md:bg-transparent top-12 left-0 w-full md:w-auto text-center md:text-left`}
        >
          <li><a href="#home" className="block md:inline hover:text-gray-300 p-2">Home</a></li>
          <li><a href="#about" className="block md:inline hover:text-gray-300 p-2">About</a></li>
          <li><a href="#education" className="block md:inline hover:text-gray-300 p-2">Education</a></li>
          <li><a href="#experiences" className="block md:inline hover:text-gray-300 p-2">Experiences</a></li>
          <li><a href="#certifications" className="block md:inline hover:text-gray-300 p-2">Certifications</a></li>
          <li><a href="#contact" className="block md:inline hover:text-gray-300 p-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
