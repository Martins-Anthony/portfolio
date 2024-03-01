import React from 'react'
import linkedin from '../../assets/icons/icon _LinkedIn.svg'
import github from '../../assets/icons/icon _GitHub.svg'
function SocialMediaIcons() {
  return (
    <div className="icons-container">
      <a href="https://linkedin.com/in/martins-anthony" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Linkedin"></img>
      </a>
      <a href="https://github.com/martins-anthony" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Github"></img>
      </a>
    </div>
  )
}

export default SocialMediaIcons
