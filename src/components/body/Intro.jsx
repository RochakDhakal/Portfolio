import React, { useEffect } from "react";
import avatar from "../../assets/avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1000, });
  }, []);
  return (
    <div
      className="bg-gray-900 text-amber-100 md:h-screen py-16 md:p-10"
      id="about"
    >
      <div className="w-full block lg:flex md:flex pl-10 pr-4 md:p-10">
        <div className="md:w-1/2 m-1 md:justify-center md:flex md:items-center">
          <img
            src={avatar}
            alt="Avatar"
            data-aos="zoom-out"
            className="w-1/4 rounded-full md:w-1/2 grayscale hover:grayscale-0 ease-in-out duration-500"
          />
        </div>
        <div className="block md:w-1/2 md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl p-1 font-oldstandardtt md:text-4xl">
            About Me
          </h1>
          <p className="text-lg p-1 font-wixmadefor md:text-xl">
            Passionate beginner frontend developer, diving into web development,
            creating interactive experiences with HTML, CSS, Javascript, and
            ReactJs through personal projects, aiming to transform designs into
            dynamic digital interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
