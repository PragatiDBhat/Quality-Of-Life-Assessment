import React from 'react'
import abtimg from '../assets/Photos/about.jpg'
import {motion} from "framer-motion"
import {fadeIn} from '../variants'
export const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto' id='about'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <motion.div 
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='md:w-1/2'>
            <img src={abtimg} alt=''/>
        </motion.div>

        <motion.div 
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='md:w-3/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We are the students of
            <span className='text-secondary'> KLE Technological University</span></h2>
            <p className='text-tertiary text-lg mb-7'>Our aim is to uplift the overall quality of life within the KLE University community by addressing key 
              concerns and implementing targeted initiatives. Our commitment to fostering a supportive and inclusive 
              environment ensures that every member can thrive academically, socially, and personally.</p>
              <button className='btnPrimary'>Get Started</button>
        </motion.div>
      </div>
    </div>
  )
}
