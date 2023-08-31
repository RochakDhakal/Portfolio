import React from "react";
import ProjectCard from "../utilities/ProjectCard";
import project from "../data/projects.js"
import GoToTop from "../utilities/GoToTop";
function Projects() {
  return (
    
    <section className="bg-gray-900 text-amber-100 md:h-full py-16 selection:text-red-300" id="projects">
      <h1 className="text-center text-3xl font-handlee md:text-4xl">
        Projects
      </h1>
      <div className="block p-2 lg:p-10">
       {project.length?project.map((items,index)=>{
        return(
          <ProjectCard src={items.image} alt={items.alt} title={items.title} description={items.description} url={items.url} id={items.id}/>
        )
       }):null}
      </div>
    </section>
  );
}

export default Projects;
