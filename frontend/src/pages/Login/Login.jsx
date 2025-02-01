import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../public/images/login.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl max-h-7xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-9 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Welcome Back!</h2>
          <p className="text-gray-600 text-center mb-4">Login to continue your health journey</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" 
              />
            </div>
            
            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">Forgot Password?</Link>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
          
          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account? <Link to="/signup" className="text-green-600 font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="hidden md:flex md:w-1/2 bg-green-200 items-center justify-center p-8">
          <img src={loginImage} alt="Login" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Login;