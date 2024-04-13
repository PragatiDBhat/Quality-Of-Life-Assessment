import React from 'react';
import eh from '../assets/Photos/environmentalhealth.jpg';
import sh from '../assets/Photos/socialhealth.jpg';
import mh from '../assets/Photos/mentalhealth.jpg';
import ph from '../assets/Photos/physicalhealth.jpg';
import '../App.css'
import {motion} from "framer-motion"
import {fadeIn} from '../variants'
import { About } from './About'
export const Explore = () => {
  return (
    <>
    <div className='my-24 md:px-12 px-4 max-w-screen-2xl  p-4  mx-auto mt-24' id='explore'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <motion.div 
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='card'>
          <img src={eh} alt='' />
          <h5 className='text-xl font-semibold text-primary px-5 mt-5'>
            Environmental Health
          </h5>
          <p className='text-sm px-5 mt-2'>
            Concerned with surroundings' impact on health, covering pollution,
            safety, and access to resources.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='card'>
          <img src={mh} alt='' />
          <h5 className='text-xl font-semibold text-primary px-5 mt-5'>
            Mental Health
          </h5>
          <p className='text-sm px-5 mt-2'>
            Emotional and psychological well-being, encompassing mood, stress
            management, and coping skills.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='card'>
          <img src={sh} alt='' />
          <h5 className='text-xl font-semibold text-primary px-5 mt-5'>
            Social Health
          </h5>
          <p className='text-sm px-5 mt-2'>
            Relates to relationships and interactions within communities,
            including social support, communication, and cultural connections.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className='card'>
          <img src={ph} alt='' />
          <h5 className='text-xl font-semibold text-primary px-5 mt-5'>
            Physical Health
          </h5>
          <p className='text-sm px-5 mt-2'>
            The body's condition and functionality, including exercise,
            nutrition, and disease prevention.
          </p>
        </motion.div>
      </div>
    </div>
    {/* <About /> */}
    </>
  );
};
