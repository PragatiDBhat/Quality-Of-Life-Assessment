import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

export const Register = () => {
  return (
    <div className="container mx-auto my-10 px-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center bg-gray-100 py-10 px-8 rounded-l-3xl">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="form-control w-full px-4 py-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control w-full px-4 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 font-bold mb-2"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="form-control w-full px-4 py-2"
                placeholder="Enter your age"
              />
            </div>
            {/* Add more fields here */}
            <div className="flex items-center justify-between">
              <button
                className="btnPrimary"
                type="button"
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
