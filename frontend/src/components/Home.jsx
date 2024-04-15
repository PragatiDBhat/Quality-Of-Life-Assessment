import React from 'react'
import background from '../assets/Photos/worklifebalance-removebg-preview.png'
import { Banner } from '../shared/Banner'
import { Explore } from './Explore'
import { About } from './About'
import { Navbar } from './Navbar'
export const Home = () => {
  return (
    <>
    <Navbar />
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
           <Banner background={background} heading={"Quality of Life"} subheading={"Quality of life is a measure of overall well-being, encompassing physical health, mental health, relationships, and fulfillment. It's subjective, influenced by various factors like health, safety, and personal preferences, aiming for a balanced and fulfilling life."} 
           btn1={"Get Started"} btn2={"Know More"} link1={"/select"} link2={"/select"}/>
    </div>
    <Explore/>
    <About />
    </>
  )
}