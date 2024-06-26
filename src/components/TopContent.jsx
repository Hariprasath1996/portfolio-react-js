import React from 'react'
import { Link } from 'react-scroll'

const TopContent = () => {
    return (
        <div className='Top-Content text-white font-serif font-bold text-4xl relative top-80 left-96'>
            <div className='top-content-container  '>
                <h1 className='p-2 '>Mr.HariPrasath</h1>
                <p className='p-2 '>A Professional Web Developer</p>
                <a href="www.google.com">
                    <button className='btn-cv p-2 mr-4 text-xl mt-6 border-2 border-white hover:border-2 hover:border-orange-600 bg-orange-600 text-white hover:text-orange-600 rounded hover:bg-white'>
                        Download CV
                    </button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='btn-work p-2 ml-4 text-xl  border-2 border-white hover:border-2 hover:border-orange-600 bg-orange-600 text-white hover:text-orange-600 rounded hover:bg-white' >
                        My Work
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent
