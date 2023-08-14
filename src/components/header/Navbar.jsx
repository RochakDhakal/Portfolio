import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-screen z-50 flex items-center flex-wrap bg-gray-800 py-3 px-5 selection:text-red-400">
      <div className="flex w-full lg:hidden font-bold">
        <button
          className="w-2/12 flex  font-bold border rounded text-amber-100 border-gray-800 hover:text-amber-100"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-1/3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <span className="w-10/12 px-5 flex justify-end items-center text-green-500 font-handlee">
          <div className="flex justify-center items-center">
            <span className="inline-block h-4 w-4 bg-green-500 border rounded-full"></span>
            <span className="px-2 font-thin">Available for Work</span>
          </div>
        </span>
      </div>
      <span className="hidden lg:flex justify-center items-center">
        <div className="h-4 w-4 bg-green-500 rounded-full border"></div>
        <div className="text-green-500 px-2 font-handlee">
          Available for Work
        </div>
      </span>
      <div
        className={`w-full flex flex-grow lg:flex lg:items-center lg:w-auto ${
          menuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 lg:px-20 hover:text-amber-100 hover:scale-125 duration-150 mr-4"
          >
            About
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 lg:px-20 hover:text-amber-100 hover:scale-125 duration-150 mr-4"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 lg:px-20 hover:text-amber-100 hover:scale-125 duration-150 mr-4"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 lg:px-20 hover:text-amber-100 hover:scale-125 duration-150 mr-4"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 lg:px-20 hover:text-amber-100 hover:scale-125 duration-150"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
