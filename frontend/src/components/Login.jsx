import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Service from "../services/service"; // Import the service instance

export const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  // Function to handle login
  const handleLogin = async () => {
    try {
      const studentCheck = { email, password };
      const service = new Service(); // Create an instance of the Service class
      const response = await service.checkStudent(studentCheck);
      if (response.status === 200) {
        // If login is successful, navigate to the post-login page
        navigate("/postlogin");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Please Check Username or Password");
    }
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
          <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
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
                className="form-control w-full md:w-auto px-4 py-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

export default Login;
