
import React from 'react'
import { Element } from 'react-scroll'



const Experience = () => {
    return (
        <Element className='Exp-container w-screen bg-black text-white ' id='exp'>
            <h1 className='heading  text-4xl font-serif font-bold text-orange-600 flex justify-center p-4'>Experience</h1>
            <div className='exp-box w-9/12 h-40 border-dotted border-2 border-stone-200 flex justify-evenly items-center ml-64 bg-[url("./assets/bg-expr.jpg")]'>
                <div className='w-28 border-dotted border-2 border-stone-200 bg-black flex justify-center flex-col items-center p-4'> 15+ <span>Projects</span>  </div>
                <div className='w-28 border-dotted border-2 border-stone-200 bg-black flex justify-center flex-col items-center p-4'> 6+ Month <span >Experience</span>  </div>
                <div className='w-64 border-dotted border-2 border-stone-200 bg-black flex justify-center flex-col items-center p-4'> Full Stack Web Development Course Certificate </div>
            </div>
        </Element>
    )
}

export default Experience
