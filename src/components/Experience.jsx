
import React from 'react'
import { Element } from 'react-scroll'

const Experience = () => {
    return (
        <Element className='Exp-container w-screen  bg-black text-white py-8 ' id='exp'>
            <h1 className='heading  text-4xl font-serif font-bold text-orange-600 flex justify-center py-8  my-2'>Experience</h1>
            <div className='exp-box w-9/12 h-60 border-indigo-800 border-2 flex justify-evenly items-center ml-64  my-16'>
                <div className='w-28 border-dotted cursor-pointer border-2 border-stone-200  bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-4'> 15+ <span>Projects</span>  </div>
                <div className='w-34 border-dotted cursor-pointer border-2 border-stone-200   bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-4'> 6+ Month <span >Experience</span>  </div>
                <div className='w-64 border-dotted cursor-pointer border-2 border-stone-200  bg-white text-orange-600 font-serif font-bold text-xl flex justify-center flex-col items-center p-2'> Full Stack Web Development Course Certificate </div>
            </div>
        </Element>


    )
}

export default Experience
