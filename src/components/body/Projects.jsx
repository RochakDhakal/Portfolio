import React, { useEffect } from "react";
import calculator from "../../assets/Calculator.gif";
import shopping from "../../assets/Shopping.gif";
import covid from "../../assets/Covid.gif";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-gray-900 text-amber-100 md:h-full py-16 selection:text-red-300" id="projects">
      <h1 className="text-center text-3xl font-handlee md:text-4xl">
        Projects
      </h1>
      <div className="block p-2 lg:p-10">
        <div
          className="w-full m-1 bg-gray-800 rounded-3xl flex justify-evenly items-center"
          data-aos="fade-up"
        >
          <div className="w-2/5 text-center lg:1/4 p-5">
            <img
              src={shopping}
              alt="Shopping"
              className="h-20 grayscale hover:grayscale-0 rounded-3xl md:h-full ease-in-out duration-500"
            />
          </div>
          <div
            className="w-2/5 h-full text-left p-5 lg:w-2/4"
            data-aos="fade-up"
          >
            <div className="h-1/2 font-wixmadefor text-base md:text-3xl text-amber-300">
              Shopping Cart
            </div>
            <div className="h-1/2 font-wixmadefor text-xs md:text-xl">
              ReactJS, Redux, React Router and Bootstrap
            </div>
          </div>
          <div
            className="w-1/4 text-center text-sm lg:w-1/4 lg:text-xl"
            data-aos="fade-up"
          >
            <a
              href="https://github.com/RochakDhakal/ShoppingCart"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>
        <div
          className="w-full m-1 bg-gray-800 rounded-3xl flex justify-evenly items-center"
          data-aos="fade-up"
        >
          <div className="w-2/5 text-center lg:1/4 p-5">
            <img
              src={covid}
              alt="Covid"
              className="h-20 grayscale hover:grayscale-0 rounded-3xl md:h-full ease-in-out duration-500"
            />
          </div>
          <div
            className="w-2/5 h-full text-left p-5 lg:w-2/4"
            data-aos="fade-up"
          >
            <div className="h-1/2 font-wixmadefor text-base md:text-3xl text-amber-300">
              Covid Report
            </div>
            <div className="h-1/2 font-wixmadefor text-xs md:text-xl">
              ReactJS, React Bootstrap, React Router and Axios
            </div>
          </div>
          <div
            className="w-1/4 text-center text-sm lg:w-1/4 lg:text-xl"
          >
            <a href="https://github.com/RochakDhakal/Covid-19-Report">
              View Code
            </a>
          </div>
        </div>
        <div
          className="w-full m-1 bg-gray-800 rounded-3xl flex justify-evenly items-center"
          data-aos="fade-up"
        >
          <div className="w-2/5 text-center lg:1/4 p-5">
            <img
              src={calculator}
              alt="Calculator"
              className="h-20 grayscale hover:grayscale-0 rounded-3xl md:h-full ease-in-out duration-500"
            />
          </div>
          <div
            className="w-2/5 h-full text-left p-5 lg:w-2/4"
            data-aos="fade-up"
          >
            <div className="h-1/2 font-wixmadefor text-base md:text-3xl text-amber-300">
              Calculator
            </div>
            <div className="h-1/2 font-wixmadefor text-xs md:text-xl">
              HTML, CSS and JavaScript
            </div>
          </div>
          <div
            className="w-1/4 text-center text-sm lg:w-1/4 lg:text-xl"
            data-aos="fade-up"
          >
            <a
              href="https://github.com/RochakDhakal/Web-Calculator"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
