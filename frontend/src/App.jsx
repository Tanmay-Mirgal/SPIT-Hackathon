import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'
import HealthDashboard from '@/pages/Dashboard/Dashboard'
import Navbar from './pages/Home/components/Navbar'
// import About from '@/pages/About'

function App() {
  return (
     <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<HealthDashboard />} />
       
      </Routes>
      </>
   
  )
}

export default App

