import { FaDownload } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profile.jpg" alt="Profile Picture" onError={(e) => {
              e.target.src = 'https://via.placeholder.com/350x350/667eea/ffffff?text=Your+Photo'
            }} />
          </div>
          <div className="about-text">
            <h3>Hi there! I'm Nithin Kumar Mancheela</h3>
            <p>
              I'm a Pre-Final Year Computer Science student at Kakinada Institute of Engineering & 
              Technology, passionate about web development and creating meaningful digital experiences. 
              I believe in learning by doing – every project I build teaches me something new about 
              coding, problem-solving, and clean UI/UX design.
            </p>
            <p>
              When I'm not coding, I'm exploring open-source projects on GitHub and learning from real-world 
              codebases, practicing Data Structures & Algorithms on LeetCode, or learning new frontend 
              technologies. I'm interested in open source contributions and collaborative development. 
              I enjoy the process of taking an idea from concept to deployment, and I'm constantly working 
              to improve my skills one commit at a time.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>5+</h4>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Learning</p>
              </div>
              <div className="stat">
                <h4>8+</h4>
                <p>Technologies</p>
              </div>
            </div>
            <a href="/resume.pdf" className="btn btn-primary" download>
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
