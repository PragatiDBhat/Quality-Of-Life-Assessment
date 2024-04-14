// PreLogin.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { About } from './components/About';
import { Login } from './components/Login';
import { Register } from './components/Register';
import LoginTeacher from './components/LoginTeacher';
import RegisterTeacher from './components/RegisterTeacher';
import Select from './components/Select';
import { Navbar } from './components/Navbar';

function PreLogin() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loginteacher" element={<LoginTeacher />} />
      <Route path="/registerteacher" element={<RegisterTeacher />} />
      <Route path="/select" element={<Select />} />
    </Routes>
    </>
  );
}

export default PreLogin;
