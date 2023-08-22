import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { DestinyCanvas, BeerusCanvas, BooksCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import {chess, hitman, nfs, destiny} from "../assets";

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

        <div className="mt-12 gap-8 z-1">
            <div className="my-5">
                <img src={chess} alt = "chess" className="float-left w-12 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">Most hours spent</p>
                <h5 className='text-white text-[24px] font-bold'>Chess</h5>
            </div>
            <div className="my-5" >               
                <img src={destiny} alt = "destiny2" className="float-left w-12 h-auto rounded mr-5" />
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">Amazing Graphics and Storyline</p>
                <h5 className='text-white text-[24px] font-bold'>Destiny 2</h5>
            </div>
            <div className="my-5">
                <img src={nfs} alt = "nfs" className="float-left w-12 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">Need For Speed</p>
                <h5 className='text-white text-[24px] font-bold'>Most Wanted</h5>
            </div>
            <div className="my-5">
                <img src={hitman} alt = "hitman" className="float-left w-12 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">All Time Favourite</p>
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

export default SectionWrapper(Games, "games");