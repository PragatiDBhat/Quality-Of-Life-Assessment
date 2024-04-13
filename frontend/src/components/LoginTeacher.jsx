import React from 'react';
import { NavLink } from "react-router-dom"; 
const LoginTeacher=()=> {
  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-l-3xl">
        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg text-center mb-4">Enter Your Credentials to Login</p>
        <h5 className="text-xl mb-4">OR</h5>
        <NavLink
          to="/registerteacher"
          className="btnPrimary bg-white text-primary rounded-pill pb-2 w-50 hover:text-white"
        >
          Register
        </NavLink>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center items-center bg-gray-100 py-10 px-8 rounded-r-3xl">
        <h1 className="text-3xl font-bold mb-8">LOGIN</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="employId"
              className="block text-gray-700 font-bold mb-2"
            >
              Employee Id
            </label>
            <input
              type="text"
              id="username"
              className="form-control w-full md:w-auto px-4 py-2"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control w-full md:w-auto px-4 py-2"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <NavLink
             to='/homepage'
              className="btnPrimary"
              type="button"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
export default LoginTeacher