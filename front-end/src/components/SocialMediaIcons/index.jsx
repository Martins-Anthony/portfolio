import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/icons/icon _LinkedIn.svg'
import github from '../../assets/icons/icon _GitHub.svg'
function SocialMediaIcons() {
  return (
    <div className="icons-container">
      <span>
        <Link
          to={'https://linkedin.com/in/martins-anthony'}
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin"></img>
        </Link>
      </span>
      <span>
        <Link to={'https://github.com/martins-anthony'} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github"></img>
        </Link>
      </span>
    </div>
  )
}

export default SocialMediaIcons
