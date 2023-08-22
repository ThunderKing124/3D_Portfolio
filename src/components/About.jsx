import { motion } from "framer-motion";

import { styles } from "../styles";
import { Asteroid2Canvas } from "./canvas";
import { Education, Contact, Hobbies, Feedbacks, Navbar, Tech, Works, StarsCanvas, Footer } from ".";
import { Loader } from "@react-three/drei";


const About = () => {
  return (
    <>
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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

      
      <Asteroid2Canvas />

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      <div className='relative z-0 bg-primary'>
        <Education/>
        <Hobbies />
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          {/* <Contact />          */}
        </div>
        <StarsCanvas />
        {/* <div>
        <h1 className={`${styles.heroHeadText} text-white text-center`}>Say Hello</h1>
      </div> */}
      </div>
      <Loader/>
      <Footer />
      <StarsCanvas />
      
    </section>
    {/* <Loader type="pacman" /> */}
              
    </>
  );
};

export default About;