import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center flex-wrap bg-gray-800 p-6">
      <div className="block lg:hidden font-bold">
        <button
          className="flex items-center font-bold py-2 border rounded text-amber-100 border-gray-800 hover:text-amber-100"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
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
