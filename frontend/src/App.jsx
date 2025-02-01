import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'
import HealthDashboard from '@/pages/Dashboard/Dashboard'
import Schedule from '@/pages/Meeting/page'
import Navbar from '@/pages/Home/components/Navbar'
import MeetingPage from './pages/Meeting/Meeting'
import Footer from './pages/Home/components/Footer'
import MeetingPage from '@/pages/Meeting/Meeting'
import ChatInterface from './pages/Chat/ChatPage'
import Doctors from './pages/DoctorList/Doctors'


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
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/conference" element={<MeetingPage/>} />
        <Route path='/chat' element={<ChatInterface/>}/>
        <Route path="/doctor-list" element={<Doctors/>} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
      </>
   
  )
}

export default App

