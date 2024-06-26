import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className='Header flex   '>
            <div className='header-left'>
                <h1>Develop<span>er</span></h1>
            </div>
            <div className='header-right'>
                <Link to='about' smooth={true} duration={500}>
                    <h4>About Me</h4>
                </Link>
                <Link to='skills' smooth={true} duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to='projects' smooth={true} duration={500}>
                    <h4>Projects</h4>
                </Link>
                <Link to='exp' smooth={true} duration={500}>
                    <h4>Experience</h4>
                </Link>
                <h4>Join With Me</h4>
            </div>
        </div>
    )
}

export default Header
