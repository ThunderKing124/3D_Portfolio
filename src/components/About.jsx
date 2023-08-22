import { motion } from "framer-motion";

import { styles } from "../styles";
import { Asteroid2Canvas } from "./canvas";
import { Education, Contact, Hobbies, Feedbacks, Navbar, Tech, Works, StarsCanvas, Footer } from ".";
import { Loader } from "@react-three/drei";
import { keshav } from "../assets";



const AboutMe = () => {
  return (
    <>
    
      <div
        className={`pt-20 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row  gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
            Introduction
          </p>
          <h1 className={`${styles.sectionHeadText} text-white`}> ABOUT
            <span className='text-[#915EFF]'> ME.</span>
          </h1>
          <p className={`${styles.SubText} mt-2 text-white-80`}>
          I'm a skilled software developer with experience in many programming languages like C, C++, python, java and javascript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and can create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>
      </div>

      <div className="h-96 w-full text-center mt-5">
        <img src={keshav} alt="Keshav" className="max-h-full w-50% mx-auto content-center" />
      </div>
              
    </>
  );
};


const About = () => {
  return (
    <>
    
      <div className='relative z-0 bg-primary'>
        <AboutMe/>
        <Education/>
        <Hobbies />
        <div className='relative z-0'>
        </div>
        <StarsCanvas />
      </div>
      <Footer />

              
    </>
  );
};

export default About;