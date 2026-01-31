import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Map My Culture',
      description: 'A digital platform for collecting and exploring cultural heritage data. Users can upload text, images, audio, and video related to culture. Features admin review system and AI/NLP for content classification, location detection, translation, and summarization. Interactive map-based exploration makes it easy to discover regional culture.',
      image: '/images/project1.jpg',
      tags: ['React', 'AI/NLP', 'Maps', 'Cultural Heritage'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'To-Do List Application',
      description: 'A simple and clean task management app built to understand JavaScript and React fundamentals. Users can add tasks, delete tasks, and mark them as completed. Focused on learning core concepts like state management and event handling.',
      image: '/images/project2.jpg',
      tags: ['JavaScript', 'React', 'CSS'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Project+Image'
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} onError={handleImageError} />
                <div className="project-overlay">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
