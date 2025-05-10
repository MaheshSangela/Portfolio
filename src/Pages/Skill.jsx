import React from 'react'
// import htmllogo from'../assets/html1.png'

const Skill = () => {
    return (
        <div className=' w-full mt-20 py-10  flex items-center justify-center  flex-wrap flex-col z-10'>
            <div>
                <h1 className='text-4xl mt-5 mb-20 text-white'>Skills</h1>
            </div>
            <div className='flex flex-wrap gap-8 items-center justify-center rounded text-center'>
                <div className='card  p-7 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/html.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>HTML</h1>
                </div>
                <div className='card  p-5 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/CSS.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>CSS</h1>
                </div>
                <div className='card  p-5 flex flex-col  w-[150px] mx-5 items-center'>
                    <img src="src/assets/javascript.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>JavaScript</h1>
                </div>
                <div className='card  p-5 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/react.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>ReactJs</h1>
                </div>
                <div className='card  p-5 flex flex-col  w-[150px] mx-5 items-center'>
                    <img src="src/assets/tailwind.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>TailwindCss</h1>
                </div>
                <div className='card  p-5 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/SQL.png" alt="" className='w-[130px] skill' />
                    <h1 className='text-xl font-bold text-white'>SQL</h1>
                </div>
                {/* <div className='card p-5 flex flex-col w-[200px] mx-5 items-center'>
                    <img src="src/assets/php.png" alt="" />
                    <h1 className='text-xl font-bold text-white'>PHP</h1>
                </div> */}
                <div className='card p-5 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/bootstrap.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>Bootstarp</h1>
                </div>
                <div className='card p-5 flex flex-col w-[150px] mx-5 items-center'>
                    <img src="src/assets/github.png" alt="" className='skill' />
                    <h1 className='text-xl font-bold text-white'>Github</h1>
                </div>
            </div>

        </div>
    )
}

export default Skill
