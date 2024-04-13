import React from 'react';
import student from '../assets/Photos/student2.jpg';
import teacher from '../assets/Photos/teacher.jpg';
import '../App.css';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom'; 
const Select = () => {
  return (
    <div className='my-24 md:px-12 px-4 max-w-screen-2xl p-4 mx-auto mt-24' id='explore'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Select Your Profession</h2>
      <div className='flex justify-center'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <motion.div 
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='card'
              style={{ maxWidth: '500px', margin: 'auto' }} // Adjust size and centering
            >
              <img src={teacher} alt='' style={{ maxWidth: '80%', height: '60%' }} />
              <h5 className='text-3xl font-semibold text-primary px-5 mt-5'>
                Lecturer
              </h5>
              <p className='text-xl px-5 mt-2'>
                Get started and check your quality of life.
              </p>
              <Link to='/loginteacher' className='btnPrimary'>Login</Link>
            </motion.div>
            <motion.div 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='card'
              style={{ maxWidth: '500px', margin: 'auto' }} // Adjust size and centering
            >
              <img src={student} alt='' style={{ maxWidth: '80%', height: '60%' }} />
              <h5 className='text-3xl font-semibold text-primary px-5 mt-5'>
                Student
              </h5>
              <p className='text-xl px-5 mt-2'>
                Know your quality of life and improve your way of living for a healthy future.
              </p>
              <Link to='/login' className='btnPrimary'>Login</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
