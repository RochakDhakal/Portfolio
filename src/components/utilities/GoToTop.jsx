import React, { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
function GoToTop() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

/**
 * The `scrollTop` function scrolls the window to the top.
 */
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
/* The code block you provided is a React functional component that creates a "GoToTop" button that
appears when the user scrolls down the page. */
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 1;

      if (window.scrollY > scrollThreshold) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <a onClick={scrollTop} className={`${visibility ? "block" : "hidden"} `}>
        <FontAwesomeIcon
          icon={faArrowUp}
          data-aos="fade-up"
          className="z-50 fixed bottom-10 right-8 bg-gray-500 text-amber-100 rounded-full p-2 w-7 h-7 flex items-center justify-center shadow-slate-100 shadow-md animate-bounce ease-in-out duration-300"
          title="Top"
        />
      </a>
    </div>
  );
}

export default GoToTop;
