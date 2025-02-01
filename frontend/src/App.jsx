import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
// import About from '@/pages/About'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
   
  )
}

export default App

