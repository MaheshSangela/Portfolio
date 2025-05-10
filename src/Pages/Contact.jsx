import React from 'react'

const Contact = () => {
    return (
        <div className=' w-full mt-20 py-10  flex items-center justify-center  flex-wrap flex-col z-10 border-b border-gray-500'>
            <div>
                <h1 className='text-4xl mt-5 mb-20 text-white '>Contact</h1>
            </div>
       <div className='flex gap-5 flex-wrap items-center justify-center'>
       <div className='card flex m-5 gap-3 flex-wrap items-center justify-center flex-col p-3 '>
                <div className=' w-sm text-white p-4 flex flex-col'>
                    <h1 className='text-4xl text-sky-500 mb-3'>Get in Touch</h1>
                    <p className='text-xl mb-3'>Thanks for visiting!</p>
                    <p className='text-md '> "I'm open to freelance work, full-time opportunities, or project discussions."</p>
                </div>
                <div className='flex gap-5 text-sky-500'>
                    <button className="btn text-black rounded-lg p-1  bg-yellow-500"><a href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261/">LinkdeIN</a></button>
                    <button className="btn text-black rounded-lg p-1 bg-yellow-500"><a href="https://github.com/MaheshSangela">GitHub</a></button>
                    <button className="btn text-black rounded-lg p-1 bg-yellow-500"><a href="mailto:maheshsinghsangela7@gamil.com">Email</a></button>
                </div>

            </div>
            
            <div className='card m-5 flex gap-3 flex-wrap items-center justify-center flex-col p-3'>
                <div className=' w-sm text-white p-4 flex flex-col  my-3 '>
                    <h1 className='text-4xl text-sky-500 mb-3'>Contact info</h1>
                    <p className='text-md mb-3'>Phone: +91 9870259356</p>
                    <p className='text-md mb-3'>Mail: <a href="mailto:maheshsinghsangela7@gamil.com"> maheshsinghsangela7@gamil.com</a></p>
                    <p className='text-md mb-3'>Dehradun, Uttrakhand, India</p>
                </div>
            </div>
       </div>
        </div>
   
    )
}

export default Contact
