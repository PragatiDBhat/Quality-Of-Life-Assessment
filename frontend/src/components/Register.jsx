import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'; // Import Axios

export const Register = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usn: "",
    password: "",
    repeatPassword: "",
    dob: "",
    age: "",
    status: "",
    degree: "",
    semester: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    // Convert age to number
    formData.age = parseInt(formData.age);

    try {
      const response = await axios.post('http://localhost:8080/student/register', formData);
      console.log('Student registered successfully', response.data);
      // Handle success (e.g., show a success message or redirect to another page)
      alert('Student registered successfully');
      // Optionally, redirect to login page or another route
    } catch (error) {
      console.error('Error registering student', error);
      if (error.response && error.response.status === 409) {
        alert('Email already registered');
      } else {
        alert('Error registering teacher. Please try again later.');
      }
    } finally {
      // Clear password fields
      setFormData({
        ...formData,
        password: '',
        repeatPassword: ''
      });
    }
  };


  // Function to populate degree options based on status
  const populateDesignationOptions = () => {
    const { status } = formData;
    switch (status) {
      case "graduate":
        return (
          <>
            <option value="">Select degree</option>
            <option value="mtech">MTech</option>
            <option value="mca">MCA</option>
            <option value="mba">MBA</option>
          </>
        );
      case "undergraduate":
        return (
          <>
            <option value="">Select degree</option>
            <option value="be">BE</option>
            <option value="bba">BBA</option>
            <option value="bca">BCA</option>
            <option value="architecture">Architecture</option>
          </>
        );
      default:
        return <option value="">Select degree</option>;
    }
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center bg-gray-100 py-10 px-8 rounded-l-3xl">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your full name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* USN */}
            <div className="mb-4">
              <label htmlFor="usn" className="block text-gray-700 font-bold mb-2">
                USN
              </label>
              <input
                type="text"
                id="usn"
                name="usn"
                value={formData.usn}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your USN"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Repeat Password */}
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="block text-gray-700 font-bold mb-2">
                Repeat Password
              </label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Repeat your password"
                required
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                required
              />
            </div>
            {/* Age */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your age"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                Select your status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                <option value="">Select your degree</option>
                <option value="undergraduate">Under graduate</option>
                <option value="graduate">Post-Graduate</option>
              </select>
            </div>
            {/* Degree Dropdown */}
            <div className="mb-4">
              <label htmlFor="degree" className="block text-gray-700 font-bold mb-2">
               Degree
              </label>
              <select
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                {populateDesignationOptions()}
              </select>
            </div>
            {/* Semester */}
            <div className="mb-4">
              <label htmlFor="semester" className="block text-gray-700 font-bold mb-2">
                Semester
              </label>
              <input
                type="number"
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your semester"
                required
              />
            </div>
            {/* Gender Dropdown */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Register Button */}
            <div className="flex items-center justify-between">
              <button
                className="btnPrimary"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-r-3xl">
          <h1 className="text-3xl font-bold mb-8">Already Registered?</h1>
          <p className="text-lg text-center mb-4">Login Here</p>
          <NavLink
            to="/login"
            className="btnPrimary bg-white text-primary rounded-pill pb-2 w-50 hover:text-white"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};