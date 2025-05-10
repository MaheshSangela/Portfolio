import React from 'react'

const Project = () => {
    return (
        <div className=' w-full mt-20 py-10 gap-10 flex items-center  flex-col z-10'>
            <div>
                <h1 className='text-4xl mt-5 mb-20 text-white '>Projects</h1>
            </div>
            { /* First project */}
            <div className='flex w-full flex-wrap  justify-center gap-10 p-2'>
                <div className="  card p-4 flex items-center justify-between flex-wrap">
                    <div className=" text-white flex flex-col w-xs ">
                        <h1 className="text-2xl mb-2 text-sky-500"> Food Recipy App</h1>
                        <p className="text-md"><span className='text-lg text-gray-400'>About Project:</span> A dynamic Recipe App that displays a variety of meals with smooth user experience. </p>
                        <p className="text-md"><span className='text-lg text-gray-400'>Tach Use:</span> Bootstrap, JavaScript</p>
                        <p className="text-md"><span className='text-lg text-gray-400'>API Use:</span> TheMealDB </p>

                        <div className='flex items-center m-2 gap-5'>
                            <button className='btn mt-2 p-1 text-lg bg-yellow-500 text-black rounded-lg'><a href="https://kitchen-notes-recipeapp.netlify.app/">Live Demo</a></button>
                            <button className='btn mt-2 p-1 text-lg bg-sky-500 text-black rounded-lg'><a href="https://github.com/MaheshSangela/Recipe-App.git">View Project</a></button>
                        </div>

                    </div>
                    <div className=" flex items-center justify-center  w-[250px] rounded-xl">

                        <img src="src/assets/recipi.png" alt="Recipe App" className="rounded-xl  " /></div>
                </div>
                {/* 2ns project */}
                <div className=" card  p-4 flex items-center justify-between flex-wrap">
                    <div className=" text-white flex flex-col w-xs">
                        <h1 className="text-2xl mb-2 text-sky-500"> Appie-React Landing Page</h1>
                        <p className="text-md"><span className='text-lg text-gray-400'>About Project:</span> This project was purely for practice, to sharpen my front-end skills with responsive design principles. </p>
                        <p className="text-md"><span className='text-lg text-gray-400'>Tach Use:</span> HTML, CSS, JavaScript</p>
                        <div className='flex items-center m-2 gap-5'>
                            <button className='btn mt-2 p-1 text-lg bg-yellow-500 text-black rounded-lg'><a href="https://appiereact.netlify.app">Live Demo</a></button>
                            <button className='btn mt-2 p-1 text-lg bg-sky-500 text-black rounded-lg'><a href="https://github.com/MaheshSangela/Appie-React-.git">View Project</a></button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center  w-[250px]  rounded-xl outline">

                        <img src="src/assets/appieReact.png" alt="Appie React" className="rounded-xl  " /></div>
                </div>
                {/* 3rd project  */}
                <div className=" card p-4 flex items-center justify-between flex-wrap">
                    <div className=" text-white flex flex-col w-xs ">
                        <h1 className="text-2xl mb-2 text-sky-500"> Shopping E-commerce Website</h1>
                        <p className="text-md"><span className='text-lg text-gray-400'>About Project:</span> An interactive E-Commerce platform that allows users to explore with a user-friendly interface.</p>
                        <p className="text-md"><span className='text-lg text-gray-400'>Tach Use:</span> HTML, ReactJs, TailwindCss </p>
                        <div className='flex items-center m-2 gap-5'>
                            <button className='btn mt-2 p-1 text-lg bg-yellow-500 text-black rounded-lg '><a href="https://shop24-7.netlify.app/">Live Demo</a></button>
                            <button className='btn mt-2 p-1 text-lg bg-sky-500 text-black rounded-lg'><a href="https://github.com/MaheshSangela/Shopping_E-commerce_site.git">View Project</a></button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center  w-[250px]  rounded-xl">

                        <img src="src/assets/shopping.png" alt="Appie React" className="rounded-xl  " /></div>
                </div>
                {/* 4th project */}
                <div className=" card p-4 flex items-center justify-between flex-wrap">

                    

                    <div className=" text-white flex flex-col w-xs ">
                        <h1 className="text-2xl mb-2 text-sky-500">Portfolio Website</h1>
                        <p className="text-md"> A personal portfolio website showcasing my web development projects with live demos, and an easy way to get in touch for collaborations or opportunities.</p>
                        <p className="text-md"><span className='text-lg text-gray-400'>Tach Use:</span> ReactJs, TailwindCss </p>
                        <div className='flex items-center m-2 gap-5'>
                            <button className='btn mt-2 p-1 text-lg bg-yellow-500 text-black rounded-lg  pointer-events-none opacity-60'><a href="https://appiereact.netlify.app">Live Demo</a></button>
                            <button className='btn mt-2 p-1 text-lg bg-sky-500 text-black rounded-lg'><a href="https://github.com/MaheshSangela/Shopping_E-commerce_site.git">View Project</a></button>
                        </div>
                    </div>
                    <div className=" flex items-center   w-[250px]  rounded-xl">
                        <img src="src/assets/profile.png" alt="Appie React" className="rounded-xl  " />                       
                    </div>

                </div>
            </div>
            <p className='text-gray-500'>For More Projects, You Can Check My
                <a href="https://github.com/MaheshSangela" className='text-blue-500 '> GitHub </a>
                and
                <a href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261/" className='text-blue-500 '> LinkedIn</a>
            </p>

        </div>
    )
}

export default Project;