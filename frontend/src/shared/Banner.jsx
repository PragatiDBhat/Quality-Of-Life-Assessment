import React from 'react'
import background from '../assets/Photos/worklifebalance-removebg-preview.png'
import { Link } from 'react-router-dom'; 
import { motion } from "framer-motion"
import { fadeIn } from '../variants'

export const Banner = ({ background, heading, subheading, btn1, btn2, link1, link2 }) => {
  return (
    <div className='gradientBg rounded-3xl rounded-br-[80px] md:p-9 px-4 py-9'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={background} alt="hello" className='lg:h-[386px]'></img>
        </motion.div>
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-3/5'>
          <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'> {heading}</h2>
          <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
          <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5'>
            <Link to={link1} className='btnPrimary' target="_self">{btn1}</Link>
            <Link to={link2} className='btnPrimary' target="_self">{btn2}</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
