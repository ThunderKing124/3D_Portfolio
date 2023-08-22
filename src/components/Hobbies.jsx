import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { BeerusCanvas, BooksCanvas, DestinyCanvas } from "./canvas";
import { chess, dbz, destiny, gita, hitman, meluha, naruto, nfs, onepiece, steinsgate, tbate, thinking } from "../assets";



const Games = () => {
  return (
      <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      {/* <p className={styles.sectionSubText}>Games</p> */}
      <h3 className='text-white text-[40px] font-bold'>Games.</h3>

      <div className="mt-12 gap-8 z-1 h-auto">
          <div className="my-5 h-20">
              <img src={chess} alt = "chess" className="float-left max-h-full w-16  rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 tracking-wider ">Most hours spent</p>
              <h5 className='text-white text-[24px] font-bold'>Chess</h5>
          </div>
          <div className="my-5 h-20" >               
              <img src={destiny} alt = "destiny2" className="float-left  max-h-full w-16 rounded mr-5" />
              <p className="text-white-100 text-[14px] pl-1 tracking-wider ">Amazing Graphics and Storyline</p>
              <h5 className='text-white text-[24px] font-bold'>Destiny 2</h5>
          </div>
          <div className="my-5 h-20">
              <img src={nfs} alt = "nfs" className="float-left max-h-full w-16  rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 tracking-wider ">Need For Speed</p>
              <h5 className='text-white text-[24px] font-bold'>Most Wanted</h5>
          </div>
          <div className="my-5 h-20">
              <img src={hitman} alt = "hitman" className="float-left max-h-full w-16  rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 tracking-wider ">All Time Favourite</p>
              <h5 className='text-white text-[24px] font-bold'>Freedom Fighters</h5>
          </div>
      </div>

    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}  
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] md:-mt-40 xs:-mt-39'
    >
      <DestinyCanvas />
    </motion.div>
  </div>
  )
}


const Anime = () => {
  return (
      <div
    className={`xl:mt-12 flex xl:flex-row flex-col gap-10`}
  >
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[700px] h-[350px]  md:-mt-40 md:-mt-40'
    >
      <BeerusCanvas />
    </motion.div>
    
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-7 rounded-2xl '
    >
      <h3 className='text-white text-[40px] font-bold'>Anime.</h3>

      <div className="mt-12 gap-8 ">
          <div className="my-5 h-20">
              <img src={dbz} alt = "dbz" className="float-left max-h-full w-16 rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 pt-2 tracking-wider ">My Favourite Anime</p>
              <h5 className='text-white text-[24px] font-bold'>Dragon Ball Z</h5>
          </div>
          <div className="my-5 h-20 " >               
              <img src={steinsgate} alt = "steins;gate" className="float-left max-h-full w-16 rounded mr-5" />
              <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider ">It's the choice of Steins Gate.</p>
              <h5 className='text-white text-[24px] font-bold'>Steins; Gate</h5>
          </div>
          <div className="my-5 h-20">
              <img src={naruto} alt = "naruto" className="float-left max-h-full w-16 rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider ">Dattebayo</p>
              <h5 className='text-white text-[24px] font-bold'>Naruto</h5>
          </div>
          <div className="my-5 h-20">
              <img src={onepiece} alt = "onepiece" className="float-left max-h-full w-16 rounded mr-5"/>
              <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider ">Nothing Happened</p>
              <h5 className='text-white text-[24px] font-bold'>One Piece</h5>
          </div>
      </div>

    </motion.div>

    
  </div>
  )
}


const Book = () => {
    return (
        <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className='text-white text-[40px] font-bold'>Books.</h3>

        <div className="mt-12 gap-8 z-1">
            <div className="my-10 h-20">
                <img src={gita} alt = "bhagwad gita" className="float-left max-h-full w-16 rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider ">The Song of the God</p>
                <h5 className='text-white text-[20px] font-bold'>Bhagwad Gita</h5>
            </div>
            <div className="my-10 h-20" >               
                <img src={meluha} alt = "the immortals of meluha" className="float-left max-h-full w-16 rounded mr-5" />
                <p className="text-white-100 text-[20px] pl-1 tracking-wider ">Shiva's Trilogy - 1</p>
                <h5 className='text-white text-[20px] font-bold'>The Immortals of Meluha</h5>
            </div>
            <div className="my-5 h-20">
                <img src={tbate} alt = "tbate" className="float-left max-h-full w-16 rounded pt-1 mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">Peak Fiction</p>
                <h5 className='text-white text-[24px] font-bold'>The Beginning After The End</h5>
            </div>
            <div className="my-10 h-20">
                <img src={thinking} alt = "thinking fast and slow" className="float-left max-h-full w-16 rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider ">Fast vs Slow</p>
                <h5 className='text-white text-[20px] font-bold'>Thinking Fast And Slow</h5>
            </div>
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] md:-mt-40 md:-mt-40 '
      >
        <BooksCanvas />
      </motion.div>
    </div>
    )
}


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