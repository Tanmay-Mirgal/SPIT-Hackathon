import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.jpg'

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
          <Link to='/'> <img src={logo} alt=""className='w-10 h-10 object-cover rounded-full' /></Link>
            <span className="font-semibold">Astra</span>
          </div>
          <div className="flex gap-6">
           <Link to='/'> <span>Home</span></Link>
           <Link to='/services'>  <span>Services</span></Link>
           <Link to='/dashboard'><span>Dashboard</span></Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-transparent">
            <option>EN</option>
            <option>HI</option>
            <option>MR</option>
            <option>GU</option>
            <option>PA</option>
          </select>
          <Link to='/login'><button className="px-4 py-2">Login</button></Link>
          <Link to='/signup'><button className="px-4 py-2 bg-[#e3ff7dff] text-black rounded-full">Register</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
