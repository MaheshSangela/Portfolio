import React from 'react'
import About from './About'
import Education from './Education';
import Skill from './Skill';
import Contact from './Contact';
import Project from './Project';

const Home = () => {
  return (
    <>
      <About/>
      <Education/>
      <Skill />
      <Project />
      <Contact />
      <div className='flex justify-center items-center text-white text-lg p-5'>
        <h1><a href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261/">© 2025 Mahesh Sangela.</a>
        </h1>
      </div>
    </>
  )
}

export default Home
