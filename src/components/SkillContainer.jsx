import { LinearProgress } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'


const SkillContainer = () => {
    return (
        <Element className='skillContainer w-screen   flex justify-evenly items-center  bg-black text-white ' id='skills'>
            <div className='skill-img w-2/5 '>
                <img className='' src="https://www.barraiser.com/wp-content/uploads/2024/02/most-demanded-developer-skill-in-2024.png" width={850} height={450} alt="skill-image" />
            </div> 
            <div className='Skill-set w-3/5 p-8'>
                <div className='skill-heading  flex mb-4  '>
                    Skill_SET
                </div>
            <div className='skill-details'>
                <h5>HTML</h5>
                <div className='skill-percent'>
                    <LinearProgress variant='determine' value={85} />
                </div>
            </div>
            <div className='skill-details'>
                <h5>CSS</h5>
                <div className='skill-percent'>
                    <LinearProgress variant='determine' value={80} />
                </div>
            </div>
            <div className='skill-details'>
                <h5>Java_Script</h5>
                <div className='skill-percent'>
                    <LinearProgress variant='determine' value={75} />
                </div>
            </div>
            <div className='skill-details'>
                <h5>React_Js</h5>
                <div className='skill-percent'>
                    <LinearProgress variant='determine' value={75} />
                </div>
            </div>
            <div className='skill-details'>
                <h5>GIT_HUB</h5>
                <div className='skill-percent'>
                    <LinearProgress variant='determine' value={80} />
                </div>
                <div className='skill-details'>
                    <h5>MS-Word</h5>
                    <div className='skill-percent'>
                        <LinearProgress variant='determine' value={75} />
                    </div>
                </div>
                <div className='skill-details'>
                    <h5>MS_Excel</h5>
                    <div className='skill-percent'>
                        <LinearProgress variant='determine' value={70} />
                    </div>
                </div>
            </div>
            
            </div>
        </Element>
    )
}

export default SkillContainer
