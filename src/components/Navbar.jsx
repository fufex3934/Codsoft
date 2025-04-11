import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen,setIsOpen]  = useState(false);
  const toggleMenu = ()=>setIsOpen(!isOpen);

  const navLinkClasses = ({isActive})=>isActive ? "text-blue-400":"hover:text-blue-300 transition"
  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"} className='text-2xl font-bold'>Fufa Portifolio</Link>

        {/* for Desktop */}
        <div className='hidden md:flex space-x-6'>
          <NavLink to={"/"} className={navLinkClasses}>Home</NavLink>
          <NavLink to={"/projects"}className={navLinkClasses}>Projects</NavLink>
          <NavLink to={"/about"} className={navLinkClasses}>About</NavLink>
          <NavLink to={"/contact"} className={navLinkClasses}>Contact</NavLink>
        </div>
        
      </div>
    </nav>
  )
}
