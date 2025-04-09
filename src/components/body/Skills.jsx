import React, { useEffect } from "react";
import SkillCard from "../utilities/SkillCard";
import skill from "../data/skills.js";
import Aos from "aos";
import "aos/dist/aos.css";
function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="px-10 pt-10 bg-gray-900 text-amber-100 lg:h-full w-full"
      id="skills"
    >
      <h3 className="text-center text-3xl font-handlee md:text-4xl h-1/2 w-full">
        Skills
      </h3>
      <div className="flex justify-center items-center">
        <div
          className="md:w-3/4 grid md:grid-cols-4 grid-cols-2 md:m-5 md:p-5"
          data-aos="fade-up"
        >
          {skill.length?skill.map((items, index) => {
            return (
              <SkillCard
                src={items.image}
                alt={items.alt}
                title={items.title}
                key={items.id}
              />
            );
          }):null}
        </div>
      </div>
    </section>
  );
}

export default Skills;
