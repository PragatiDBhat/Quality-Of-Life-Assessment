// Login.jsx

import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink and useNavigate from react-router-dom

export const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  
  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    // For example, if login is successful, navigate to the home page ("/")
    navigate("/postlogin"); // Navigate to home page
  };

  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" style={{ paddingTop: '100px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center gradientBg text-white py-10 px-8 rounded-l-3xl">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg text-center mb-4">Enter Your Credentials to Login</p>
          <h5 className="text-xl mb-4">OR</h5>
          <NavLink
            to="/register"
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
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                USN
              </label>
              <input
                type="text"
                id="usn"
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
              <button
                className="btnPrimary"
                type="button"
                onClick={handleLogin} // Call handleLogin function on button click
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
