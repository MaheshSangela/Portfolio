import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';
// import About from './About';
// import Education from './Education';
const Navbar = () => {
    return (

        <div className=' text-white nav outline w-full py-2 px-6 fixed top-0 z-50 outline'>
            <div className=' p-1 flex  w-full items-center justify-evenly flex-wrap flex-wrap'>
                <div className='portfolio mx-10 flex justify-center items-center'>
                    <h1 className='text-3xl '>Portfolio</h1>
                </div>
                <div className='flex gap-5  flex-wrap mt-2 justify-center '>

                    {/* <button className={({ isActive }) => isActive ? ' btn border-2 bg-blue-500 px-2 rounded-xl' : ''}><NavLink to="/">Home</NavLink></button> */}
                    <NavLink to="/about" className={({ isActive }) => isActive ? '  border-1 bg-yellow-500 px-2 rounded-xl text-black' : ''} >About</NavLink>
                    <NavLink to='/education' className={({ isActive }) => isActive ? '  border-1 bg-yellow-500 px-2 rounded-xl text-black' : ''}>Education</NavLink>
                    <NavLink to="/skill" className={({ isActive }) => isActive ? '  border-1 bg-yellow-500 px-2 rounded-xl text-black' : ''}>Skills</NavLink>
                    <NavLink to="/project" className={({ isActive }) => isActive ? '  border-1 bg-yellow-500 px-2 rounded-xl text-black' : ''}>Projects</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? '  border-1 bg-yellow-500 px-2 rounded-xl text-black' : ''}>Contact</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
