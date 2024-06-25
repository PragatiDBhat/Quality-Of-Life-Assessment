import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const RegisterTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emp_id: '',
    password: '',
    repeatPassword: '',
    dob: '',
    age: '',
    qualification: '',
    experience: '',
    gender: '',
    university_role: '',
    designation: '',
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
      const response = await axios.post('http://localhost:8080/teacher/register', formData);
      console.log('Teacher registered successfully', response.data);
      // Handle success (e.g., show a success message or redirect to another page)
      alert('Teacher registered successfully');
      // Optionally, redirect to login page or another route
    } catch (error) {
      console.error('Error registering teacher', error);
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
  
  
  const populateDesignationOptions = () => {
    const { university_role } = formData;
    switch (university_role) {
      case 'teaching':
        return (
          <>
            <option value="">Select designation</option>
            <option value="associateprofessor">Associate Professor</option>
            <option value="assistantprofessor">Assistant Professor</option>
            <option value="professor">Professor</option>
            <option value="professorandhead">Professor & Head</option>
            <option value="teachingassistant">Teaching Assistant(T.A.)</option>
          </>
        );
      case 'non-teaching':
        return (
          <>
            <option value="">Select designation</option>
            <option value="foreman">Foreman</option>
            <option value="instructor">Instructor</option>
            <option value="assistantinstructor">Assistant Instructor</option>
          </>
        );
      case 'office-staff':
        return (
          <>
            <option value="">Select designation</option>
            <option value="attender">Attenders</option>
          </>
        );
      default:
        return <option value="">Select designation</option>;
    }
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center bg-gray-100 py-10 px-8 rounded-l-3xl">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
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
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
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
            <div className="mb-4">
              <label htmlFor="emp_id" className="block text-gray-700 font-bold mb-2">Employee ID</label>
              <input
                type="text"
                id="emp_id"
                name="emp_id"
                value={formData.emp_id}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your employee ID"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
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
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="block text-gray-700 font-bold mb-2">Repeat Password</label>
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
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
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
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
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
              <label htmlFor="qualification" className="block text-gray-700 font-bold mb-2">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your qualification"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="form-control w-full px-4 py-2"
                placeholder="Enter your experience"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="university_role" className="block text-gray-700 font-bold mb-2">University Role</label>
              <select
                id="university_role"
                name="university_role"
                value={formData.university_role}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                <option value="">Select university role</option>
                <option value="teaching">Teaching Staff</option>
                <option value="non-teaching">Non-Teaching Staff</option>
                <option value="office-staff">Office Staff</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">Designation</label>
              <select
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-select w-full px-4 py-2"
                required
              >
                {populateDesignationOptions()}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button className="btnPrimary" type="submit">Register</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-r-3xl">
          <h1 className="text-3xl font-bold mb-8">Already Registered?</h1>
          <p className="text-lg text-center mb-4">Login Here</p>
          <NavLink to="/loginteacher" className="btnPrimary bg-white text-primary rounded-pill pb-2 w-50 hover:text-white">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeacher;
