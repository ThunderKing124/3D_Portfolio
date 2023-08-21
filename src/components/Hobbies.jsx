import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { Anime, Book, Games} from ".";




const Hobbies = () => {
  

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
            When i am not studying
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
            Hobby.
        </h2>
    </motion.div>
    <Book />
    <Anime />
    <Games />
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");