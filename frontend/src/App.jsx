import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import Books from './pages/books'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyBookings from './pages/MyBookings'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import Galary from "./components/Galary"
import TermsAndConditions from "./components/TermsAndConditions"
import Hapscale from "./pages/hapscaleTool"
import Contactform from "./pages/PersonalDetailsForm"
import Careers from "./pages/careers"


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/what-we-do' element={<WhatWeDo />} />
        <Route path='/what-we-do/:speciality' element={<WhatWeDo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/events/:docId' element={<Appointment />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
        <Route path="/galary" element={<Galary />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/hapscale-tool" element={<Hapscale />} />
        <Route path="/contact-form" element={<Contactform />} />
        <Route path="/what-we-do/books" element={<Books />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App