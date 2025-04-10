import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
