import React from 'react'
import Education from './Education';
import Skill from './Skill';
import Contact from './Contact';
import Project from './Project';
import '../index.css'
const About = () => {
    return (
        // <div className='flex w-full p-4'>
       <>
        <div className=' w-full mt-20 pt-10 flex items-center justify-center   flex-wrap '>
       
            <div className=' text-white w-[100%] flex mt-10 gap-20  items-center justify-center  flex-wrap'>
          
                
                <div className='text-white p-4 w-2xl  items-center '>
                <p className='mb-4'>Hello, I am </p>
                <div className=' flex flex-wrap w-full'>
                    <h1 className='mb-4 text-5xl '>Mahesh Singh Sangela</h1>
                    <h1 className='text-sky-600 text-4xl font-bold'>Web Developer</h1>
                </div>
                <div className='mt-4 text-lg'>
                    <h1>Creating websites that combine functionality with a smooth user experience.</h1>
                    <p>As a 
                        <span className='font-bold'>  frontend developer,  </span>
                        I design, develop, and maintain websites that are both visually striking and fully functional, ensuring smooth performance across any device or browser.</p>
                </div>
                <button className='btn mt-4 p-2 text-xl bg-yellow-500 text-black rounded-xl'><a href="/MS_Resume.pdf">View Resume</a>

                </button>
            </div>
            <div className=' rounded-full bg-white outline-5 overflow-hidden'>
                    <img src="src/assets/profilepic.jpg" alt="profile" className='h-[400px] w-[400px]' />
                </div> 
            
                </div>
               
                
        </div>
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

export default About
