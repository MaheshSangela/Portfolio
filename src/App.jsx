import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import About from './Pages/About'
import Education from './Pages/Education';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';

function App() {

 
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      

    </>
  )
}

export default App
