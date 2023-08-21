import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { styles } from "../styles";
// import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { faGitAlt, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`${
    //     styles.paddingX
    //   } w-full flex items-center py-5 fixed bottom-0 z-20 ${
    //     scrolled ? "bg-primary" : "bg-transparent"
    //   }`}
    // >
      <div className='bg-primary w-full bottom-0 h-auto'>
        <div className="-mt-10">
        <p className={`${styles.sectionSubText} mt-2 text-white-100 text-center pt-10 `}>
          Developed by Keshav Goel
        </p>
        </div>
        <div className="inline text-right">

        <ul >
          <li className="inline ">
              <a target="_blank" rel='noreferer' href="https://www.linkedin.com/in/keshav-goel-8a2b25133/">
                  <FontAwesomeIcon className="w-auto h-8 py-3 flex-1" icon = {faLinkedin} color ="#4d4d4e" />
              </a>
          </li>
          <li className="inline  px-2">
              <a target="_blank" rel='noreferer' href="https://www.instagram.com/thunderking124/">
                  <FontAwesomeIcon className="w-auto h-8 py-3 flex-1" icon = {faInstagram} color ="#4d4d4e" />
              </a>
          </li>
          <li className="inline ">
              <a target="_blank" rel='noreferer' href="https://github.com/ThunderKing124">
                  <FontAwesomeIcon className="w-auto h-8 py-3 flex-1" icon = {faGithub} color ="#4d4d4e" />
              </a>
          </li>
        </ul>
        </div>
      </div>
    // </nav>
  );
};

export default Footer;