import React from 'react'
import { Element } from 'react-scroll'
import Project from './Projects'

const ProjectContainer = () => {
    const Projects = [
        {
            img: "https://www.codingnepalweb.com/wp-content/uploads/2022/02/Create-A-Todo-List-App-in-HTML-CSS-JavaScript.jpg",
            title: "to-do-list",
            desc: "The todo list. Todo lists are a staple in beginning web-dev tutorials, the implementation can be basic",
            Link: 'www.google.com'
        },
        {
            img: "https://www.codingnepalweb.com/wp-content/uploads/2022/02/Create-A-Todo-List-App-in-HTML-CSS-JavaScript.jpg",
            title: "to-do-list",
            desc: "The todo list. Todo lists are a staple in beginning web-dev tutorials, the implementation can be basic",
            Link: 'www.google.com'
        },
        {
            img: "https://www.codingnepalweb.com/wp-content/uploads/2022/02/Create-A-Todo-List-App-in-HTML-CSS-JavaScript.jpg",
            title: "to-do-list",
            desc: "The todo list. Todo lists are a staple in beginning web-dev tutorials, the implementation can be basic",
            Link: 'www.google.com'
        },
        {
            img: "https://www.codingnepalweb.com/wp-content/uploads/2022/02/Create-A-Todo-List-App-in-HTML-CSS-JavaScript.jpg",
            title: "to-do-list",
            desc: "The todo list. Todo lists are a staple in beginning web-dev tutorials, the implementation can be basic",
            Link: 'www.google.com'
        },
        {
            img: "https://www.codingnepalweb.com/wp-content/uploads/2022/02/Create-A-Todo-List-App-in-HTML-CSS-JavaScript.jpg",
            title: "to-do-list",
            desc: "The todo list. Todo lists are a staple in beginning web-dev tutorials, the implementation can be basic",
            Link: 'www.google.com'
        }
    ]

    return (
        <Element className='pro-container w-screen bg-black text-white p-8 ' id='projects'>
            <h1 className=  'text-orange-700 flex justify-center text-4xl font-bold font-serif p-4'>Projects</h1>
            <p className='text-orange-700 flex justify-center text-3xl font-bold font-serif p-4 my-2'>Here Are Some projects Which I done...</p>
            <div className='pro w-full flex flex-wrap justify-evenly '>
                {
                    Projects.map((project, index) => {
                        return (
                            <Project key={index}
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                Link={project.Link}
                            />
                        )
                    })
                }

            </div>

        </Element>
    )
}

export default ProjectContainer
