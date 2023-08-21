import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { DestinyCanvas, BeerusCanvas, BooksCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import {dbz, naruto, onepiece, steinsgate} from "../assets";

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
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl z-1'
      >
        <h3 className='text-white text-[40px] font-bold'>Anime.</h3>

        <div className="mt-12 gap-8 ">
            <div className="my-7">
                <img src={dbz} alt = "dbz" className="float-left w-16 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 pt-2 tracking-wider">My Favourite Anime</p>
                <h5 className='text-white text-[24px] font-bold'>Dragon Ball Z</h5>
            </div>
            <div className="mb-10 " >               
                <img src={steinsgate} alt = "steins;gate" className="float-left w-16 h-auto rounded mr-5" />
                <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider">It's the choice of Steins Gate.</p>
                <h5 className='text-white text-[24px] font-bold'>Steins;Gate</h5>
            </div>
            <div className="mt-10">
                <img src={naruto} alt = "naruto" className="float-left w-16 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider">Dattebayo</p>
                <h5 className='text-white text-[24px] font-bold'>Naruto</h5>
            </div>
            <div className="my-9">
                <img src={onepiece} alt = "onepiece" className="float-left w-16 h-auto rounded mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 pt-3 tracking-wider">Nothing Happened</p>
                <h5 className='text-white text-[24px] font-bold'>One Piece</h5>
            </div>
        </div>

      </motion.div>

      
    </div>
    )
}

export default SectionWrapper(Anime, "anime");