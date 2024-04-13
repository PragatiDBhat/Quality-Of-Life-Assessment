import React from 'react'
import background from '../assets/Photos/worklifebalance-removebg-preview.png'
import { Banner } from '../shared/Banner'
import { Explore } from './Explore'
import { About } from './About'
export const Home = () => {
  return (
    <>
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
           <Banner background={background} heading={"WHO Quality of Life"} subheading={"WHO defines quality of life as an individual's perception of their well-being in relation to their culture, values, and life goals. It encompasses physical, psychological, social, and environmental aspects, crucial for holistic health care."} 
           btn1={"Get Started"} btn2={"Know More"}/>
    </div>
    <Explore/>
    <About />
    </>
  )
}