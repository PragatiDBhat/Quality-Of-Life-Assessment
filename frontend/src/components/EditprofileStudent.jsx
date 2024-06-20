import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditprofileStudent = () => {
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
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/student/displaystudent');
        if (response.status === 200) {
          console.log('Fetched student details:', response.data);
          setFormData({
            ...response.data,
            password: '',
            repeatPassword: '',
          });
        }
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, []);

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

    try {
      const updatedStudent = { ...formData };
      delete updatedStudent.repeatPassword;

      const response = await axios.put('http://localhost:8080/student/update', updatedStudent);
      if (response.status === 200) {
        alert('Student information updated successfully');
      } else {
        console.error('Error updating student information:', response);
      }
    } catch (error) {
      console.error('Error updating student information:', error);
    }
  };
  const populateDegreeOptions = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
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
                disabled
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
                <option value="">Select your status</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>
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
                {populateDegreeOptions()}
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

export default EditprofileStudent;
