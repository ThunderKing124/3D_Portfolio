import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BooksCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import {gita, meluha, tbate, thinking} from "../assets";


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
                {/* <p className="text-white-100 text-[14px] pl-1 tracking-wider">The Song of the God</p> */}
                <h5 className='text-white text-[20px] font-bold'>Bhagwad Gita</h5>
            </div>
            <div className="my-10 h-20" >               
                <img src={meluha} alt = "the immortals of meluha" className="float-left max-h-full w-16 rounded mr-5" />
                <p className="text-white-100 text-[20px] pl-1 tracking-wider hidden">Shiva's Trilogy - 1</p>
                <h5 className='text-white text-[20px] font-bold'>The Immortals of Meluha</h5>
            </div>
            {/* <div className="my-5 h-20">
                <img src={tbate} alt = "tbate" className="float-left max-h-full w-16 rounded pt-1 mr-5"/>
                <p className="text-white-100 text-[14px] pl-1 tracking-wider">Peak Fiction</p>
                <h5 className='text-white text-[24px] font-bold'>The Beginning After The End</h5>
            </div> */}
            <div className="my-10 h-20">
                <img src={thinking} alt = "thinking fast and slow" className="float-left max-h-full w-16 rounded mr-5"/>
                {/* <p className="text-white-100 text-[14px] pl-1 tracking-wider">Fast vs Slow</p> */}
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

export default SectionWrapper(Book, "books")