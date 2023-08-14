import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <div className="md:h-screen bg-gray-900 text-amber-100 md:p-10 selection:text-red-300" id="skills">
      <h1 className="font-handlee text-3xl text-center md:text-4xl">Skills</h1>
      <div className="font-wixmadefor">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center "data-aos="fade-left">HTML</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "99%" }}
              >99%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">CSS</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "96%" }}
              >96%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">JavaScript</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "87%" }}
              >87%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">React JS</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "78%" }}
              >79%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">Redux</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "60%" }}
              >60%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">Bootstrap</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "89%" }}
              >89%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">Tailwind</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center">
              <div
                className="bg-amber-600 h-full  p-0"
                style={{ width: "80%" }}
              >80%</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 text-xl flex justify-center" data-aos="fade-left">Axios</div>
          <div className="w-1/2 p-5" data-aos="fade-right">
            <div className="w-11/12 bg-amber-100  h-full text-center" >
              <div
                className="bg-amber-600 h-full  p-0"
                
                style={{ width: "89%" }}
              >75%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
