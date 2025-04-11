import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className='text-center max-w-2xl'>
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4'>Hi, I'm Fufa</h1>
      <p className='text-lg sm:text-xl text-gray-600 mb-6'>  I'm a frontend developer who loves building modern, responsive, and user-friendly websites using React and Tailwind CSS.</p>

      <div className='flex justify-center gap-4'>
       <Link to={"/projects"}
       className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
       >View Projects</Link>
       <Link to={"/contact"}
       className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
       >Contact Me</Link>
      </div>
      </div>
    </section>
  )
}
