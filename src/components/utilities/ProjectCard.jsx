import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function ProjectCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <article key={props.id}>
    <div
        className="w-full m-1 bg-gray-800 rounded-3xl flex justify-evenly items-center"
        
        data-aos="fade-up"
      >
        <div className="w-2/5 text-center lg:1/4 p-5">
          <img
            src={props.src}
            alt={props.alt}
            className="h-20 grayscale hover:grayscale-0 rounded-3xl md:h-full ease-in-out duration-500"
          />
        </div>
        <div className="w-2/5 h-full text-left p-5 lg:w-2/4" data-aos="fade-up">
          <div className="h-1/2 font-wixmadefor text-base md:text-3xl text-amber-300">
            {props.title}
          </div>
          <div className="h-1/2 font-wixmadefor text-xs md:text-xl">
            {props.description}
          </div>
        </div>
        <div
          className="w-1/4 text-center text-sm lg:w-1/4 lg:text-xl"
          data-aos="fade-up"
        >
          <a href={props.url} target="_blank">
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
