import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const EditProfile = () => {
  // State variables to store form data
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

  // Function to dynamically populate designation options based on university role
  const populateDesignationOptions = () => {
    const { university_role } = formData;
    switch (university_role) {
      case 'teaching':
        return (
          <>
            <option value="">Select designation</option>
            <option value="Associate Professor">Associate Professor</option>
            <option value="Assistant Professor">Assistant Professor</option>
            <option value="Professor">Professor</option>
            <option value="Professor & Head">Professor & Head</option>
            <option value="Teaching Assistant(T.A.)">Teaching Assistant(T.A.)</option>
          </>
        );
      case 'non-teaching':
        return (
          <>
            <option value="">Select designation</option>
            <option value="Foreman">Foreman</option>
            <option value="Instructor">Instructor</option>
            <option value="Assistant Instructor">Assistant Instructor</option>
          </>
        );
      case 'office-staff':
        return (
          <>
            <option value="">Select designation</option>
            <option value="Attenders">Attenders</option>
          </>
        );
      default:
        return <option value="">Select designation</option>;
    }
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center bg-secondary py-10 px-8 rounded-l-3xl">
          <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
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
            {/* Employee ID */}
            <div className="mb-4">
              <label htmlFor="emp_id" className="block text-gray-700 font-bold mb-2">
                Employee ID
              </label>
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
            {/* Qualification */}
            <div className="mb-4">
              <label htmlFor="qualification" className="block text-gray-700 font-bold mb-2">
                Qualification
              </label>
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
            {/* Experience */}
            <div className="mb-4">
              <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
                Experience
              </label>
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
            {/* University Role Dropdown */}
            <div className="mb-4">
              <label htmlFor="university_role" className="block text-gray-700 font-bold mb-2">
                University Role
              </label>
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
            
            {/* Designation Dropdown */}
            <div className="mb-4">
              <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">
                Designation
              </label>
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
            {/* Register Button */}
            <div className="flex items-center justify-between">
              <button
                className="btnPrimary border border-gray-300 shadow-md"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
