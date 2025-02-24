import { LinearProgress } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'


const SkillContainer = () => {
    return (
        <Element className='skillContainer w-screen   flex justify-evenly items-center   bg-black text-white ' id='skills'>
            <div className='skill-img w-2/5  mt-28 ml-2' >
                <img className=' object-contain  ' src="https://img.freepik.com/free-photo/view-3d-man-using-laptop_23-2150709796.jpg" width={850} height={450} alt="skill-image" />
            </div>
            <div className='Skill-set w-3/5 p-8  '>
                <div className='skill-heading  py-9 font-serif  font-bold text-4xl text-orange-600  flex justify-start cursor-pointer rounded '>
                    Skill_SET
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>HTML 5</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress  variant='determinate'  value={90} />
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>CSS 3</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={85} /> 
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>Java_Script</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress  variant='determinate'  value={80} />
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>React_Js</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={75} />
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>GIT_HUB</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>TailWind CSS</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={85} />
                    </div>
                </div>
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>Bootstrap</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={80}  />
                    </div>
                </div>
                {/* <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>MongoDB</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={70}  />
                    </div>
                </div> */}
                <div className='skill-details mb-4 font-serif  font-bold text-3xl'>
                    <h5 className='mb-3'>SQL</h5>
                    <div className='skill-percent mb-8'>
                        <LinearProgress variant='determinate' value={60}  />
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default SkillContainer
