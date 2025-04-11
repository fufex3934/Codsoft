import React from 'react'

export default function About() {
  return (
    <section className='text-center p-10'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>About Me</h1>
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-lg text-gray-700 mb-4'>
          Hi, I'm Fufa, a passionate web developer with a focus on building high-quality and scalable applications. I sepcialize in creating modern web applications using technologies like React, Node.js and Tailwind CSS.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          My goal is to constantly improve my skills and work on innovative projects that make an impact. I love collaborating with teams and learning new technologies to stay ahead in this eve-loading field.
        </p>
        <h3 className='text-2xl font-semibold mt-8 mb-4 text-gray-800'>Skills</h3>
        <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-700'>
          <li>React</li>
          <li>Node. js</li>
          <li>Tailwind CSS</li>
          <li>JavaSkript</li>
          <li>HTML/CSS</li>
          <li>Git & Github</li>
          <li>API Development</li>
          <li>MongoDB</li>
          <li>MYSQL</li>
          <li>Python</li>
        </ul>
      </div>
    </section>
  )
}
