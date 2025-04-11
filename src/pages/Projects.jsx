import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Online Pizza Ordering System",
      description: "This project is a full-stack application built with React.js, Node.js, MongoDB, and TailwindCSS. It allows users to order pizzas, customize toppings, and track their orders.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Afan Oromo Spell Checker",
      description: "A backend application that checks the spelling of Afan Oromo words using machine learning techniques. It was developed as a capstone project during my final year.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Harar Innovation Agency Website",
      description: "A MERN stack-based website built for the Harar Innovation and Technology Agency. It features news posting, admin functionalities, and a content management system (CMS).",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "MERN E-commerce Application",
      description: "This e-commerce website built with React, Express, and MongoDB allows users to browse and purchase products. It includes features like shopping cart, payment gateway integration, and order management.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website built with Next.js and TailwindCSS to showcase my skills, projects, and experience. It's responsive and optimized for all devices.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Task Management System",
      description: "A web-based task management system for teams to organize and manage tasks. Features include task creation, assignment, deadlines, and notifications.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app built with React.js and the OpenWeatherMap API. It shows current weather conditions, forecasts, and maps based on user location.",
      link: "https://github.com/fufex3934/Codsoft",
    },
    {
      title: "Blogging Platform",
      description: "A full-stack blogging platform where users can create, edit, and comment on blog posts. Built with Node.js, Express, MongoDB, and Handlebars for templating.",
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
