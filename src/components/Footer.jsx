import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Nithin Kumar Mancheela. All rights reserved.</p>
        <p>
          Built with <FaHeart className="heart" /> by Nithin Kumar Mancheela
        </p>
      </div>
    </footer>
  )
}

export default Footer
