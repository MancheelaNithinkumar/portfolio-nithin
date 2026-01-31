import { FaGraduationCap, FaSchool } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Technology in Computer Science',
      date: '2022 - 2026 (Expected)',
      location: 'Kakinada Institute of Engineering & Technology, Kakinada',
      description: 'Currently in Pre-Final Year. Learning core computer science concepts including Data Structures, Algorithms, Web Development, Database Management, and Software Engineering. Actively participating in coding activities and project-based learning.',
      status: 'Pre-Final Year Student'
    },
    {
      icon: <FaSchool />,
      title: 'Intermediate Education',
      date: '2020 - 2022',
      location: 'India',
      description: 'Focused on Mathematics, Physics, and Chemistry with a strong foundation in analytical thinking and problem-solving skills.'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
                {item.location && <p className="timeline-location">{item.location}</p>}
                {item.description && <p>{item.description}</p>}
                {item.status && <p><strong>Status:</strong> {item.status}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
