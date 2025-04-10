import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1. This project is about...",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2. This project is about...",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3. This project is about...",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Project 4",
      description: "A brief description of Project 4. This project is about...",
      link: "https://github.com/fufex3934/Codsoft",
    },
  ];
  return (
    <section className='py-10 px-4'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>My Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {
          projects.map((project,index)=>(
            <div key={index}
            className='bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-300 ease-in-out hover:scale-105
'
            >
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-700 mb-4'>{project.description}</p>
              <a href={project.link} target='_blank'  rel="noopener noreferrer" 
              className='text-blue-500 hover:un'
              >
                View Project
              </a>
            </div>
          ))
        }
      </div>
      
    </section>
  )
}
