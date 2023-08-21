import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {Tech, Prog} from "./index";

import { styles } from "../styles";
import { skillLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";




const Skill = () => {
  const [active, setActive] = useState("Web Technologies");
  
  useEffect ( () => {
    active === "Web Technologies" ? <Tech /> : <Prog />;
  }, []);
  
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What can I do</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
          {skillLinks.map((nav) => (
            <div key={nav.id}
            className={`mt-10 pt-10 px-5 ${
              active === nav.title ? "text-white border-4 border-y-white bg-indigo-950" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`} > <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title) }
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li> </div>
          ))}
        </ul>
        </motion.div>
      </div>
      
    </div>
  );
};

export default SectionWrapper(Skill, "");