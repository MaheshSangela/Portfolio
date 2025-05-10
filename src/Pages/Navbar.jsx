import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
// import About from './About';
// import Education from './Education';
const Navbar = () => {
    return (

        <div className=' text-white nav outline w-full py-2 px-6 fixed top-0 z-50 outline'>
            <div className=' p-1 flex  w-full items-center justify-around flex-wrap'>
                <div className='portfolio mx-10 flex justify-center items-center'>
                    <h1 className='text-3xl '>Portfolio</h1>
                </div>
                <div className='flex gap-3  flex-wrap mt-2 justify-center '>

                    {/* <button className='btn rounded-2xl w-[80px]'><Link to="/">Home</Link></button> */}
                    <button className='btn rounded-2xl w-[80px]'><Link to="/about">About</Link></button>
                    <button className='btn rounded-2xl w-[80px]'><Link to='/education'>Education</Link></button>
                    <button className='btn rounded-2xl w-[80px]'><Link to="/skill">Skills</Link></button>
                    <button className='btn rounded-2xl w-[80px]'> <Link to="/project">Projects</Link></button>
                    <button className='btn rounded-2xl w-[80px]'><Link to="/contact">Contact</Link></button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
