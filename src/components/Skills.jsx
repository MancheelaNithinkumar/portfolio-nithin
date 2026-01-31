import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef(null)

  const allSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'Flask',
    'PostgreSQL',
    'Git',
    'GitHub'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
