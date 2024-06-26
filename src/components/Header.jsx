import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className='Header flex  w-screen h-auto p-2 m-0 justify-around bg-black font-serif fixed top-0 z-50 '>
            <div className='header-left w-2/5 pl-10 flex items-center'>
                <h1 className='heading text-4xl  text-white '>Develop<span className='span text-orange-600'>er</span></h1>
            </div>
            <div className='header-right flex justify-between items-center text-2xl text-white w-3/5 p-2 pr-16'>
                <Link to='about' smooth={true} duration={500}>
                    <h4 className='  hover:text-orange-600 text-center  rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>About_Me</h4>
                </Link>
                <Link to='skills' smooth={true} duration={500}>
                    <h4 className='  hover:text-orange-600 text-center p-1 rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>Skills</h4>
                </Link>
                <Link to='projects' smooth={true} duration={500}>
                    <h4 className='  hover:text-orange-600 text-center    p-1 rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>Projects</h4>
                </Link>
                <Link to='exp' smooth={true} duration={500}>
                    <h4 className='  hover:text-orange-600 text-center    p-1 rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>Experience</h4>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <h4 className='  hover:text-orange-600 text-center    p-1 rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>Contact</h4>
                </Link>
                {/* <h4 className='contact-me font-bold border-2 border-white  text-white bg-orange-600 text-center  p-2 rounded cursor-pointer transition-transform duration-200 ease-out hover:scale-110'>Join With Me</h4> */}
            </div>
        </div>
    )
}

export default Header
