import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar2 = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isStatisticDropdownOpen, setStatisticDropdownOpen] = useState(false);
    const [isPersonalDropdownOpen, setPersonalDropdownOpen] = useState(false);
    const [isTeacherDropdownOpen, setTeacherDropdownOpen] = useState(false);
    const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleStatisticDropdown = () => {
        setStatisticDropdownOpen(!isStatisticDropdownOpen);
        setPersonalDropdownOpen(false);
    };

    const togglePersonalDropdown = () => {
        setPersonalDropdownOpen(!isPersonalDropdownOpen);
        setStatisticDropdownOpen(false);
    };

    const toggleTeacherDropdown = () => {
        setStudentDropdownOpen(false);
        setTeacherDropdownOpen(!isTeacherDropdownOpen);
    };

    const toggleStudentDropdown = () => {
        setTeacherDropdownOpen(false);
        setStudentDropdownOpen(!isStudentDropdownOpen);
    };

    const statisticDropdownRef = useRef(null);
    const personalDropdownRef = useRef(null);

    useEffect(() => {
        const closeDropdowns = (e) => {
            if (
                statisticDropdownRef.current &&
                !statisticDropdownRef.current.contains(e.target) &&
                !personalDropdownRef.current.contains(e.target)
            ) {
                setStatisticDropdownOpen(false);
                setPersonalDropdownOpen(false);
                setStudentDropdownOpen(false);
                setTeacherDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdowns);

        return () => {
            document.removeEventListener('mousedown', closeDropdowns);
        };
    }, []);

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center space-x-14'>
                        <Link to="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>WHOQOL</Link>
                        <ul className='md:flex space-x-5 hidden'>
                            <li>
                                <Link to="explore" className='block hover:text-gray-300 cursor-pointer'>Explore</Link>
                            </li>
                            <li>
                                <Link to="about" className='block hover:text-gray-300 cursor-pointer'>About</Link>
                            </li>
                            <li className="relative">
                                <div className='block hover:text-gray-300 cursor-pointer' onClick={toggleStatisticDropdown}>Statistic</div>
                                <ul ref={statisticDropdownRef} className={`absolute top-full left-0 bg-white shadow-md rounded-md py-1 mt-1 ${isStatisticDropdownOpen ? 'block' : 'hidden'}`}>
                                    <li><Link to="overall" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleTeacherDropdown}>Teacher</div>
                                        <ul className={`absolute top-0 left-full bg-white shadow-md rounded-md py-1 mt-0 ml-5 ${isTeacherDropdownOpen ? 'block' : 'hidden'}`}>
                                            <li><Link to="overallfaculty" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                            <li><Link to="teaching" className="block px-4 py-2 hover:bg-gray-100">Teaching</Link></li>
                                            <li><Link to="nonteaching" className="block px-4 py-2 hover:bg-gray-100">Non-Teaching</Link></li>
                                            <li><Link to="officestaff" className="block px-4 py-2 hover:bg-gray-100">Office Staff</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100" onClick={toggleStudentDropdown}>Student</div>
                                        <ul className={`absolute top-0 left-full bg-white shadow-md rounded-md py-1 mt-0 ml-5 ${isStudentDropdownOpen ? 'block' : 'hidden'}`}>
                                            <li><Link to="overallstudents" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                            <li><Link to="be" className="block px-4 py-2 hover:bg-gray-100">BE</Link></li>
                                            <li><Link to="mtech" className="block px-4 py-2 hover:bg-gray-100">MTech</Link></li>
                                            <li><Link to="mca" className="block px-4 py-2 hover:bg-gray-100">MCA</Link></li>
                                            <li><Link to="bba" className="block px-4 py-2 hover:bg-gray-100">BBA</Link></li>
                                            <li><Link to="bca" className="block px-4 py-2 hover:bg-gray-100">BCA</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className='block hover:text-gray-300 cursor-pointer' onClick={togglePersonalDropdown}>Personal</div>
                                <ul ref={personalDropdownRef} className={`absolute top-full left-0 bg-white shadow-md rounded-md py-1 mt-1 ${isPersonalDropdownOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <Link to="myscores" className="block px-4 py-2 hover:bg-gray-100">My Scores</Link>
                                    </li>
                                    <li>
                                        <Link to="comparison" className="block px-4 py-2 hover:bg-gray-100">Comparison</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className='space-x-10 hidden md:flex items-center'>
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
            <Link to="/explore" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Explore</Link>
            <Link to="/about" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>About</Link>
            <Link to="" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Statistics</Link>
            <Link to="" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Personal</Link>
                <Link to="/" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Logout</Link>
            </div>
        </>
    );
};

export default Navbar2;
