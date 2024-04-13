import React from 'react'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white '>
      <div className='my-12 flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2 space-y-8'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary '><span className='text-white'>WHOQOL</span></a>
          <p className='md:w-1/2'>Here a few sentences on what this is</p>
        </div>
        <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
          <div className='space-y-6 mt-5'>
            <h4 className='text-xl'>Platform</h4>
            <ul className='space-y3'>
              <Link to='home' className='block hover-text-gray-300'>Overview</Link>
              <Link to='explore' className='block hover-text-gray-300'>Explore</Link>
              <Link to='about' className='block hover-text-gray-300'>About</Link>
            </ul>
          </div>
          <div className='space-y-6 mt-5'>
            <h4 className='text-xl'>Contacts</h4>
            <ul className='space-y3'>
              <p className='hover-text-gray-300'>email</p>
              <p className='hover-text-gray-300'>github</p>
              <p className='hover-text-gray-300'>phone number</p>
            </ul>
          </div>
        </div>
      </div>
        <hr />
        <div>
          <p className='text-center'>@WHOQOL All rights reserved</p>
        </div>
    </div>
  )
}
