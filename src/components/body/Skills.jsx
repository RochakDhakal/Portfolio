import React, { useEffect } from "react";
import ImageCard from "../utilities/ImageCard";
import html from "../../assets/html.png";
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import redux from "../../assets/Redux.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import Aos from "aos";
import "aos/dist/aos.css";
function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-10 pt-10 bg-gray-900 text-amber-100 lg:h-full w-full">
      <h3 className="text-center text-3xl font-handlee md:text-4xl h-1/2 w-full" id="skills">Skills</h3>
      <div className="flex justify-center items-center">
        <div className="w-3/4 grid md:grid-cols-4 h-full m-5 p-5">
          <ImageCard src={html} alt={"HTML"} title={"HTML"} data-aos="fade-up"/>
          <ImageCard src={css} alt={"CSS3"} title={"CSS3"} data-aos="fade-up"/>
          <ImageCard src={javascript} alt={"Javascript"} title={"Javascript"} data-aos="fade-up" />
          <ImageCard src={react} alt={"React JS"} title={"React JS"} data-aos="fade-up"/>
          <ImageCard src={bootstrap} alt={"Bootstrap"} title={"Bootstrap"} data-aos="fade-up"/>
          <ImageCard src={tailwind} alt={"Tailwind"} title={"Tailwind"} data-aos="fade-up"/>
          <ImageCard src={redux} alt={"Redux"} title={"React Redux"} data-aos="fade-up"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
