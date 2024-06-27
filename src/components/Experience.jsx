
import React from 'react'
import { Element } from 'react-scroll'



const Experience = () => {
    return (
        <Element className='Exp-container w-screen bg-black text-white ' id='exp'>
            <h1 className='heading  text-4xl font-serif font-bold text-orange-600 flex justify-center p-4'>Experience</h1>
            <div className='exp-box w-9/12 h-40  border-2 bg-orange-600 flex justify-evenly items-center ml-64 '>
                <div className='w-28 border-dotted cursor-pointer border-2 border-stone-200  bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-4'> 15+ <span>Projects</span>  </div>
                <div className='w-34 border-dotted cursor-pointer border-2 border-stone-200   bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-4'> 6+ Month <span >Experience</span>  </div>
                <div className='w-64 border-dotted cursor-pointer border-2 border-stone-200  bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-2'> Full Stack Web Development Course Certificate </div>
            </div>
        </Element>
    )
}

export default Experience
