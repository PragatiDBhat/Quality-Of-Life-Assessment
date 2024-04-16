import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
export const Navbar2 = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isStatisticDropdownOpen, setStatisticDropdownOpen] = useState(false);
    const [isPersonalDropdownOpen, setPersonalDropdownOpen] = useState(false);
    const [isTeacherDropdownOpen, setTeacherDropdownOpen] = useState(false);
    const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleDropdownDesktop = (dropdownType) => {
        switch (dropdownType) {
            case 'statistic':
                setStatisticDropdownOpen(!isStatisticDropdownOpen);
                setPersonalDropdownOpen(false);
                break;
            case 'personal':
                setPersonalDropdownOpen(!isPersonalDropdownOpen);
                setStatisticDropdownOpen(false);
                break;
            case 'teacher':
                setStudentDropdownOpen(false);
                setTeacherDropdownOpen(!isTeacherDropdownOpen);
                break;
            case 'student':
                setTeacherDropdownOpen(false);
                setStudentDropdownOpen(!isStudentDropdownOpen);
                break;
            case 'profile':
                setProfileDropdownOpen(!isProfileDropdownOpen);
                break;
            default:
                break;
        }
    };

    const toggleDropdownMobile = (dropdownType) => {
        switch (dropdownType) {
            case 'statistic':
                setStatisticDropdownOpen(!isStatisticDropdownOpen);
                break;
            case 'personal':
                setPersonalDropdownOpen(!isPersonalDropdownOpen);
                break;
            case 'teacher':
                setTeacherDropdownOpen(!isTeacherDropdownOpen);
                break;
            case 'student':
                setStudentDropdownOpen(!isStudentDropdownOpen);
                break;
            case 'profile':
                setProfileDropdownOpen(!isProfileDropdownOpen);
                break;
            default:
                break;
        }
    };

    const statisticDropdownRef = useRef(null);
    const personalDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    useEffect(() => {
        const closeDropdowns = (e) => {
            if (
                statisticDropdownRef.current &&
                !statisticDropdownRef.current.contains(e.target) &&
                !personalDropdownRef.current.contains(e.target) &&
                !profileDropdownRef.current.contains(e.target)
            ) {
                setStatisticDropdownOpen(false);
                setPersonalDropdownOpen(false);
                setStudentDropdownOpen(false);
                setTeacherDropdownOpen(false);
                setProfileDropdownOpen(false);
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
                        <Link to="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>QOLA</Link>
                        <ul className='md:flex space-x-5 hidden'>
                            <li>
                                <Link to="explore" className='block hover:text-gray-300 cursor-pointer'>Explore</Link>
                            </li>
                            <li>
                                <Link to="about" className='block hover:text-gray-300 cursor-pointer'>About</Link>
                            </li>
                            <li className="relative">
                                <div className='block hover:text-gray-300 cursor-pointer' onClick={() => toggleDropdownDesktop('statistic')}>Statistic</div>
                                <ul ref={statisticDropdownRef} className={`absolute top-full left-0 bg-white shadow-md rounded-md py-1 mt-1 ${isStatisticDropdownOpen ? 'block' : 'hidden'}`} style={{ width: "180px" }}>
                                    <li><Link to="overall" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100" onClick={() => toggleDropdownDesktop('teacher')}>Teacher</div>
                                        <ul className={`absolute top-0 left-full bg-white shadow-md rounded-md py-1 mt-0 ml-5 ${isTeacherDropdownOpen ? 'block' : 'hidden'}`} style={{ width: "180px" }}>
                                            <li><Link to="overallfaculty" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                            <li><Link to="teaching" className="block px-4 py-2 hover:bg-gray-100">Teaching</Link></li>
                                            <li><Link to="nonteaching" className="block px-4 py-2 hover:bg-gray-100">Non-Teaching</Link></li>
                                            <li><Link to="officestaff" className="block px-4 py-2 hover:bg-gray-100">Office Staff</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100" onClick={() => toggleDropdownDesktop('student')}>Student</div>
                                        <ul className={`absolute top-0 left-full bg-white shadow-md rounded-md py-1 mt-0 ml-5 ${isStudentDropdownOpen ? 'block' : 'hidden'}`} style={{ width: "180px" }}>
                                            <li><Link to="overallstudents" className="block px-4 py-2 hover:bg-gray-100">Overall</Link></li>
                                            <li><Link to="graduate" className="block px-4 py-2 hover:bg-gray-100">Post-Graduate</Link></li>
                                            <li><Link to="undergraduate" className="block px-4 py-2 hover:bg-gray-100">Undergraduate</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <div className='block hover:text-gray-300 cursor-pointer' onClick={() => toggleDropdownDesktop('personal')}>Personal</div>
                                <ul ref={personalDropdownRef} className={`absolute top-full left-0 bg-white shadow-md rounded-md py-1 mt-1 ${isPersonalDropdownOpen ? 'block' : 'hidden'}`} style={{ width: "180px" }}>
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

                    <div className='space-x-10 hidden md:flex items-center relative'>
                        <div className="relative">
                            <button onClick={() => toggleDropdownDesktop('profile')} className='focus:outline-none'>
                                {/* <img src={Profile} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" /> */}
                                <CgProfile className='w-10 h-10 rounded-full cursor-pointer' />
                            </button>
                            <ul ref={profileDropdownRef} className={`absolute top-full right-0 bg-white shadow-md rounded-md py-1 mt-1 px-3 ${isProfileDropdownOpen ? 'block' : 'hidden'}`} style={{ width: "180px" }}>
                                <li>
                                    <Link to="editprofile" className="block px-4 py-2 hover:bg-gray-100">Edit Profile</Link>
                                </li>
                                <li>
                                    <Link to="settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                                </li>
                                <li>
                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenuOpen}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenuOpen} className='text-white focus:outline-none text-xl focus:text-gray-300 '>
                            {isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary'/>) : (<TiThMenu className='w-6 h-6 text-primary'/>)}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
                <Link to="explore" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Explore</Link>
                <Link to="about" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>About</Link>
                <Link to="overall" className="block px-4 py-2 hover:bg-gray-100">Overall</Link>
                <Link to="overallfaculty" className="block px-4 py-2 hover:bg-gray-100">Overall of faculty</Link>
                <Link to="teaching" className="block px-4 py-2 hover:bg-gray-100">Teaching</Link>
                <Link to="nonteaching" className="block px-4 py-2 hover:bg-gray-100">Non-Teaching</Link>
                <Link to="officestaff" className="block px-4 py-2 hover:bg-gray-100">Office Staff</Link>
                <Link to="overallstudents" className="block px-4 py-2 hover:bg-gray-100">Overall of Student</Link>
                <Link to="graduate" className="block px-4 py-2 hover:bg-gray-100">Post-Graduate</Link>
                <Link to="undergraduate" className="block px-4 py-2 hover:bg-gray-100">Undergraduate</Link>
                <Link to="myscores" className="block px-4 py-2 hover:bg-gray-100">My Scores</Link>
                <Link to="comparison" className="block px-4 py-2 hover:bg-gray-100">Comparison</Link>
                <Link to="editprofile" className="block px-4 py-2 hover:bg-gray-100">Edit Profile</Link>
                <Link to="/" className='block text-white hover:text-gray-300' onClick={toggleMenuOpen}>Logout</Link>
            </div>
        </>
    );
};

export default Navbar2;
