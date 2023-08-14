import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

function Name() {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  useEffect(() => {
    Aos.init({ duration: 1000, });
  }, []);
  return (
    <header className="bg-gray-900 text-white flex flex-col items-center pt-16 h-full md:h-screen">
      <h1
        data-aos="zoom-in"
        className="font-tiltprism h-3/2 text-amber-100 selection:text-green-500"
        style={{ fontSize: "25vw" }}
      >
        Rochak
      </h1>
      <span
        className="text-amber-100 h-1/4 uppercase font-proxima selection:text-red-300"
        style={{ fontSize: "4vw", wordSpacing: "3vw", letterSpacing: "1.5vw" }}
      >
        {text}
      </span>
    </header>
  );
}

export default Name;
