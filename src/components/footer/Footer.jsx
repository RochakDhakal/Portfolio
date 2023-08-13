import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center text-amber-200 bg-gray-800">
      <div className="pt-5">
        <a href="https://www.linkedin.com/in/rochak-dhakal/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="py-2 px-5 text-3xl hover:scale-125 ease-in-out duration-300"
            title="Linkedin"
          />
        </a>
        <a href="mailto:rochakdhakal@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="py-2 px-5 text-3xl hover:scale-125 ease-in-out duration-300"
            title="Mail"
          />
        </a>
        <a href="https://github.com/RochakDhakal" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="py-2 px-5 text-3xl hover:scale-125 ease-in-out duration-300"
            title="Github"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
