import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material'
const Contact = () => {
    return (
        <Element className='Contact bg-black flex justify-center items-center flex-col py-8 ' id='contact'>
            <h1 className='contact my-2 text-orange-600 text-5xl font-serif flex justify-center'>Contact</h1>
            <div className=' w-96  bg-back text-white flex flex-col justify-center items-center border-2 border-indigo-800 m-8 py-16 gap-4 '>
                <div className='person-details my-4 font-serif'>
                    <h2 className='p-4 text-xl ' >Email : <span className='text-orange-600'>hasathphy96@gmail.com</span></h2>
                    <h2 className='p-4 text-xl '>Github UserName : <span className='text-orange-600'>Hariprasath1996</span></h2>
                </div>
                <div className='contact-icons text-white text-xl flex justify-evenly  '>
                    <a href="">
                        <IconButton>
                            <Facebook className=' text-white ' />
                        </IconButton>
                    </a>
                    <a href="" target='_blank'>
                        <IconButton>
                            <Instagram className=' text-white ' />
                        </IconButton>
                    </a>
                    <a href="">
                        <IconButton>
                            <LinkedIn className=' text-white ' />
                        </IconButton>
                    </a>
                    <a href="https://github.com/Hariprasath1996" target='_blank'>
                        <IconButton>
                            <GitHub className=' text-white ' />
                        </IconButton>
                    </a>

                </div>
            </div>
        </Element>
    )
}

export default Contact
