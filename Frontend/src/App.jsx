import React from 'react'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Freebook from './Components/Freebook';
import Home from './Home/Home';
import Course from './Components/Course';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
    
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App;
