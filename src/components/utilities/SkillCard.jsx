import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function SkillCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-gray-800 rounded-xl p-5 m-3" data-aos="fade-up" key={props.id}>
      <div className="h-full w-full flex-col flex justify-center items-center grayscale hover:grayscale-0 duration-300 ease-in-out">
        <img
          src={props.src}
          alt={props.alt}
          className=" h-3/5 p-1 flex items-center justify-center md:h-4/5 md:w-2/3 hover:scale-105"
        />
        <h3 className="font-wixmadefor h-2/5 text-center mt-2 flex items-center justify-center md:h-1/5">
          {props.title}
        </h3>
      </div>
    </section>
  );
}

export default SkillCard;
