import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = ({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-300 transition"

  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"} className='text-2xl font-bold flex items-center'>
         
          <span className="mr-2 text-3xl font-bold text-blue-400">F</span>
          Fufa Portfolio
        </Link>

        <div className='hidden md:flex space-x-6'>
          <NavLink to={"/"} className={navLinkClasses}>Home</NavLink>
          <NavLink to={"/projects"} className={navLinkClasses}>Projects</NavLink>
          <NavLink to={"/about"} className={navLinkClasses}>About</NavLink>
          <NavLink to={"/contact"} className={navLinkClasses}>Contact</NavLink>
        </div>

        <button
          className='md:hidden'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {isOpen && (
        <div className='md:hidden bg-gray-800 px-4 pb-4'>
          <div className='flex flex-col space-y-4'>
            <NavLink to={"/"} className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to={"/projects"} className={navLinkClasses} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to={"/about"} className={navLinkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to={"/contact"} className={navLinkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
