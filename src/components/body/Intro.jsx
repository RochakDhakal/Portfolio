import React, { useEffect } from "react";
import avatar from "../../assets/avatar.png";
import resume from "../../assets/Rochak-Dhakal-CV.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  console.log(
    "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100"
  );
  return (
    <div
      className="bg-gray-900 text-amber-100 md:h-screen py-16 md:p-10"
      id="about"
    >
      <main className="w-full block lg:flex md:flex pl-10 pr-4 md:p-10">
        <section
          className="md:w-1/2 m-1 md:h-1/2 rounded-full md:justify-center md:flex md:items-center"
          data-aos="zoom-out"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-1/4 rounded-full md:w-1/2 grayscale hover:grayscale-0 transition-all ease-in-out duration-500"
          />
        </section>
        <article className="block md:w-1/2 md:flex md:flex-col md:justify-center selection:text-red-300">
          <header>
            <h1 className="text-3xl p-1 font-handlee md:text-4xl ">About Me</h1>
          </header>
          <p className="text-lg p-1 font-wixmadefor md:text-xl">
            Passionate beginner frontend developer, diving into web development,
            creating interactive experiences with HTML, CSS, Javascript, and
            ReactJs through personal projects, aiming to transform designs into
            dynamic digital interfaces.
          </p>
          <div className="p-5 flex justify-center items-center ">
            <a
              href={resume}
              download="Rochak Dhakal CV"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className=" font-handlee bg-amber-200 rounded-3xl p-4 text-gray-900 hover:scale-105 uppercase active:scale-90 focus:outline-none outline-none ease-in-out duration-200">
                Download My CV
              </button>
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Intro;
