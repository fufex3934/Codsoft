import React, { useState } from 'react'

export default function Contact() {
  const[formData,setFormData] =  useState({
    name:"",
    email:"",
    message:"",
  });

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prevState)=>({
      ...prevState,
      [name]:value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Form Submitted!!");
  }
  return (
    <section className='py-10 px-4'>
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <div className='max-w-lg mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="name"
              className='block text-lg font-medium text-gray-700 '
              >Name</label>
              <input type="text"
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full mt-2 p-2 border border-gray-300 rounded-md'
               />
            </div>
            <div>
              <label htmlFor="email" className='block text-lg font-medium text-gray-700 '>Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} 
              className='w-full mt-2 p-2 border border-gray-300 rounded-md'
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-lg font-medium text-gray-700 '>Message</label>
              <textarea name="message" id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className='w-full mt-2 p-2 border border-gray-300 rounded-md'
              ></textarea>
            </div>

            <div>
              <button type='submit' className='w-full mt-2 p-2 border border-gray-300 rounded-md'>Send Message</button>
            </div>
          </form>
        </div>
    </section>
  )
}
