import React, { useState } from 'react';
import '../App.css';
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar2 = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Overview", path: "/" },
        { link: "Explore", path: "explore" },
        { link: "About", path: "about" },
        { link:"Statistic", path:"statistic"},
        { link:"Personal", path:"personal"},
    ];

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center space-x-14'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>WHOQOL</a>
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => <Link key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)}
                        </ul>
                    </div>

                    <div className='space-x-12 hidden md:flex items-center'>
                        <Link to="/" className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Logout</Link>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenuOpen} className='text-white focus:outline-none text-xl focus:text-gray-300 '>
                            {isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary'/>) : (<TiThMenu className='w-6 h-6 text-primary'/>)}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => <Link key={link} to={path} className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>{link}</Link>)}
            </div>
        </>
    );
};
