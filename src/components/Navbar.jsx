import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleClick = (e, target) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, 'home')}>
          Nithin
        </a>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item) => (
            <li key={item.target} className="nav-item">
              <a
                href={`#${item.target}`}
                className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                onClick={(e) => handleClick(e, item.target)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
