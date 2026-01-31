import { FaGithub, FaCodeBranch, FaBook, FaBug } from 'react-icons/fa'
import './OpenSource.css'

const OpenSource = () => {
  const contributions = [
    {
      icon: <FaGithub />,
      title: 'Exploring Open Source',
      description: 'Actively exploring open-source projects on GitHub to understand real-world codebases and best practices used by developers globally.'
    },
    {
      icon: <FaCodeBranch />,
      title: 'Contributing Through PRs',
      description: 'Learning to contribute by forking repositories, creating branches, and raising pull requests for bug fixes and UI improvements.'
    },
    {
      icon: <FaBug />,
      title: 'Small Bug Fixes',
      description: 'Working on beginner-friendly issues including small bug fixes, UI improvements, and minor logic enhancements to gain practical experience.'
    },
    {
      icon: <FaBook />,
      title: 'Documentation Updates',
      description: 'Contributing to project documentation by improving README files, adding code comments, and helping make projects more accessible to newcomers.'
    }
  ]

  const learningAreas = [
    'Forking and cloning repositories',
    'Understanding contribution guidelines',
    'Working with Git branches and commits',
    'Code review and feedback incorporation',
    'Collaborative development workflow',
    'Issue tracking and discussions'
  ]

  return (
    <section id="opensource" className="opensource">
      <div className="container">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="opensource-subtitle">
          Learning by contributing to the open-source community, one pull request at a time
        </p>
        
        <div className="contributions-grid">
          {contributions.map((contribution, index) => (
            <div key={index} className="contribution-card">
              <div className="contribution-icon">{contribution.icon}</div>
              <h3>{contribution.title}</h3>
              <p>{contribution.description}</p>
            </div>
          ))}
        </div>

        <div className="learning-section">
          <h3>What I'm Learning Through Open Source</h3>
          <div className="learning-grid">
            {learningAreas.map((area, index) => (
              <div key={index} className="learning-item">
                <span className="learning-bullet">✓</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="opensource-note">
          <p>
            <strong>My Approach:</strong> I focus on understanding codebases thoroughly before contributing, 
            starting with small issues to learn the workflow, and gradually taking on more complex tasks. 
            I believe that every contribution, no matter how small, helps me grow as a developer and gives 
            back to the community that has helped me learn.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OpenSource
