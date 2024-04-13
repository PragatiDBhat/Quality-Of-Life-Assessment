import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
    degree: "",
    semester: "",
    gender: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
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
                <option value="">Select your degree</option>
                <option value="BE">BE</option>
                <option value="MBA">MBA</option>
                <option value="Mtech">Mtech</option>
                <option value="BBA">BBA</option>
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
