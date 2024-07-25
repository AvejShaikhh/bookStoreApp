import React from 'react'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Freebook from './Components/Freebook';
import Home from './Home/Home';
import Course from './Components/Course';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
    </>
  )
}

export default App;
