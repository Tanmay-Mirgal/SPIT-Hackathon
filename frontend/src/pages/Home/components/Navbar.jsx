import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex gap-2 items-center">
            <img
              src={logo}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
            />
            <span className="font-semibold">Astra</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/chat" className="hover:text-gray-600 transition-colors">Chat</Link>
            <Link to="/dashboard" className="hover:text-gray-600 transition-colors">Dashboard</Link>
            <Link to="/doctor-list" className="hover:text-gray-600 transition-colors">Doctors</Link>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <select className="bg-transparent focus:outline-none">
            <option>EN</option>
            <option>HI</option>
            <option>MR</option>
            <option>GU</option>
            <option>PA</option>
          </select>
          <Link to="/login">
            <button className="px-4 py-2 hover:bg-gray-100 rounded-full transition-colors">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-[#e3ff7dff] text-black rounded-full hover:bg-[#d4f06d] transition-colors">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>
            <Link 
              to="/dashboard" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/doctor-list" 
              className="hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            
            <div className="pt-4 border-t">
              <select className="bg-transparent w-full mb-4 focus:outline-none">
                <option>EN</option>
                <option>HI</option>
                <option>MR</option>
                <option>GU</option>
                <option>PA</option>
              </select>
              <div className="flex flex-col gap-2">
                <Link to="/login" className="w-full">
                  <button 
                    className="w-full px-4 py-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup" className="w-full">
                  <button 
                    className="w-full px-4 py-2 bg-[#e3ff7dff] text-black rounded-full hover:bg-[#d4f06d] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;