import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#e3ff7dff] text-black py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Description */}
          <div>
            <div className='flex flex-row gap-2'><img src={logo} className='w-10 h-10 rounded-full' alt="" />
            <h2 className="text-2xl font-bold">Astra</h2></div>
            
            <p className="text-black mt-2">
              Empowering freelancers & gig workers with AI-driven insights, secure transactions, and real-time job assistance.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link to="/marketplace" className="">Marketplace</Link>
            <Link to="/profile" className="">Profile</Link>
            <Link to="/dashboard" className="">Dashboard</Link>
            <Link to="/chatbot" className="">AI Chatbot</Link>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <p className="text-black">Email: support@freelanceconnect.com</p>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" target="_blank" className="hover:text-gray-200 text-xl"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" className="hover:text-gray-200 text-xl"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-gray-200 text-xl"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-gray-200 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-black text-sm">
          © {new Date().getFullYear()} Astra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;