import React from 'react'
import { Element } from 'react-scroll'
import TopContent from './TopContent'

const TopContainer = () => {
    return (
        // Element for id access from header component 
        <Element name='about' className='about w-screen h-screen bg-center bg-cover bg-no-repeat  bg-[url("./assets/bg-img-two.jpg")]  shadow-inner '>
            <TopContent />
        </Element>
    )
}

export default TopContainer
