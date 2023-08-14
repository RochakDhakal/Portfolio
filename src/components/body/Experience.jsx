import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(()=>{
    Aos.init({
      duration:100
    })
  })
  return (
    <section
      className="bg-gray-900 flex flex-col justify-center items-center text-amber-100 py-16 md:h-screen selection:text-red-300"
      id="experience"
    >
      <h1 className="font-handlee text-3xl md:text-4xl">Experience</h1>
      {/* Work and Education */}
      <article className="container p-5 pt-10">
        {/* Work */}
        <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2" >
          <div className="col-span-1 px-10 py-5" data-aos="fade-up">
            <h1 className="text-2xl">
              <span className="border-b">Volunteer</span>{" "}
              <span className="text-sm text-amber-400 uppercase">
                JUL 2023 - Present
              </span>
            </h1>
            <p>
              Volunteering as a web developer for the{" "}
              <a
                href="https://www.aimlnepal.com/"
                target="_blank"
                className="text-blue-400"
              >
                AIML Nepal
              </a>{" "}
              Community to update and maintain the website.
            </p>
          </div>
          <div className="col-span-1 px-10 py-5" data-aos="fade-up">
            <h1 className="text-2xl">
              <span className="border-b ">Internship</span>{" "}
              <span className="text-sm text-amber-400 uppercase">
                Feb 2023 - Jun 2023
              </span>
            </h1>
            <p>
              Interned as a frontend developer at Cloudyfox, gaining valuable
              experience and knowledge on various aspects of web development.
            </p>
          </div>
          <div className="col-span-1 px-10 py-5" data-aos="fade-up">
            <h1 className="text-2xl">
              <span className="border-b ">
                Bachelor of Computer Application
              </span>{" "}
              <span className="block text-sm text-amber-400 uppercase md:inline">
                JUN 2019 - Jul 2022
              </span>
            </h1>
            <p>
              Completed my BCA from AIMS Institute, Bangalore with a 8.0 GPA.
            </p>
          </div>
          <div className="col-span-1 px-10 py-5" data-aos="fade-up">
            <h1 className="text-2xl">
              <span className="border-b ">Bachelor of Commerce</span>{" "}
              <span className="block md:inline text-sm text-amber-400 uppercase">
                Jul 2016 - Jun 2019
              </span>
            </h1>
            <p>
              Completed my B.com from Dr NSAM First Grade College, Bangalore
              with a 7.98 GPA.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Experience;
