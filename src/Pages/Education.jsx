import React from 'react'

const Education = () => {
    return (

        <div className=' w-full mt-30 py-10  flex items-center justify-center  flex-wrap flex-col '>

            <div>
                <h1 className='text-4xl mt-5 mb-15 text-white'>Education</h1>
            </div>
            <div className='flex flex-wrap item-center justify-center '>
                <div className=' card flex m-10 p-5 rounded-3xl w-xs'>
                    <div className='p-4 '>
                        <h1 className='text-2xl text-sky-500 mb-2'><span className='text-2xl' >10th</span> - UK Board</h1>
                        <p className='text-xl text-gray-300 mb-2'><span >Year: </span> 2019-20</p>
                        <p className='text-xl text-gray-500 mb-2'><span>Percentage: </span> 63%</p>
                        <p className='text-xl text-white mb-2'>G I C kheera Almora</p>
                    </div>

                </div>
                <div className=' card flex m-10 p-5 rounded-3xl w-xs'>
                    <div className='p-4 '>
                        <h1 className='text-2xl text-sky-500 mb-2'><span className='text-2xl' >12th</span>
                            <span className='text-2xl' > - Science</span> <br /> UK Board</h1>
                        <p className='text-xl text-gray-300 mb-2'><span >Year: </span> 2021-22</p>
                        <p className='text-xl text-gray-500 mb-2'><span>Percentage: </span> 60%</p>
                        <p className='text-xl text-white mb-2'>G I C kheera Almora</p>
                    </div>

                </div>
                <div className=' card flex m-10 p-5 rounded-3xl w-xs'>
                    <div className='p-4 '>
                        <h1 className='text-2xl text-sky-500 mb-2'>Bachelor of Science in Information Technology</h1>
                        <p className='text-xl text-gray-300 mb-2'><span >Year: </span> 2022-25</p>
                        <p className='text-xl text-gray-500 mb-2'><span>CGPA: </span>7.8</p>
                        <p className='text-xl text-white mb-2'>Hemvati Nandan Bahuguna Garhwal University</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education
