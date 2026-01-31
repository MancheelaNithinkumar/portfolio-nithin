import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const handleScroll = (target) => {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <span className="highlight">Nithin Kumar Mancheela</span>
        </h1>
        <p className="hero-subtitle">Pre-Final Year Computer Science Student & Aspiring Web Developer</p>
        <p className="hero-description">
          Learning by building, growing through collaboration, and exploring the world of web development
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => handleScroll('projects')}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => handleScroll('contact')}>
            Contact Me
          </button>
        </div>
        <div className="social-links">
          <a href="https://github.com/MancheelaNithinkumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nithin-mancheela-80a1aa275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:nithinmancheela@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="scroll-down" onClick={() => handleScroll('about')}>
        <FaChevronDown />
      </div>
    </section>
  )
}

export default Hero
