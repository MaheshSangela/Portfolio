// import React from 'react'
// import SkillData from './Data'

// const Skill = () => {
//     return (
//         <div className=' w-full mt-20 py-10  flex items-center justify-center  flex-wrap flex-col z-10'>
//             <div>
//                 <h1 className='text-4xl mt-5 mb-20 text-white'>Skills</h1>
//             </div>
//             <div className='flex flex-wrap gap-8 items-center border justify-center rounded text-center w-6xl border'>
//                 {SkillData.map((data, idx) => {
//                 return (    <div key={idx} className='card  p-7 flex flex-col w-[150px] mx-5  items-center'>
//                         <img src={data.image} alt="" className='skill' />
//                         <h1 className='text-xl font-bold text-white'>{data.skill}</h1>
//                     </div>
//                 );
//                 })}
//             </div>

//         </div>
//     )
// }

// export default Skill

import React from 'react'
import SkillData from './Data';
import '../index.css'

const Skill = () => {
    return (
        <div className='w-full mt-20 py-10 flex items-center justify-center flex-wrap flex-col z-10 px-4'>
            <div>
                <h1 className='text-4xl mt-5 mb-10 text-white text-center'>Skills</h1>
            </div>

            <div className='flex flex-wrap gap-6 items-center justify-center rounded text-center w-full max-w-7xl mt-10'>
                {SkillData.map((data, idx) => {
                    return (
                        <div
                            key={idx}
                            className='card p-5 flex flex-col w-[140px] sm:w-[150px] md:w-[160px] lg:w-[180px] mx-2 items-center bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow'
                        >
                            <img src={data.image} alt={data.skill} className=' object-contain mb-2 skill rounded-xl' />
                            <h1 className='text-lg font-bold text-white'>{data.skill}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
