import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import feedbackpic from '../assets/Photos/contact-removebg-preview.png'; // Import your image
import { fadeIn } from '../variants'
const Feedback = () => {
  const [username, setUsername] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the feedback submission here
    console.log('Username:', username);
    console.log('Feedback:', feedback);
    // Reset the form fields
    setUsername('');
    setFeedback('');
  };

  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='feedback'>
      <div className='gradientBg rounded-3xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={feedbackpic} alt='hello' className='lg:h-[386px]' />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='md:w-3/5'
          >
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>
              Feedback
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='username'
                  className='block text-white text-xl mb-2'
                >
                  Username:
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='bg-gray-200 rounded-lg py-2 px-4 w-full focus:outline-none'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='feedback'
                  className='block text-white text-xl mb-2'
                >
                  Feedback:
                </label>
                <textarea
                  id='feedback'
                  name='feedback'
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className='bg-gray-200 rounded-lg py-2 px-4 w-full h-32 focus:outline-none'
                  required
                ></textarea>
              </div>
              <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5'>
                <button
                  type='submit'
                  className='btnPrimary'
                >
                  Submit
                </button>
                {/* Add a cancel button if needed */}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
