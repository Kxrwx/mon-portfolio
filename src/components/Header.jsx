import React from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className="header">
      <div className='container-contact'>
        <button onClick={() => window.open("https://github.com/Kxrwx", "_blank", "noopener,noreferrer")}>
                 <FontAwesomeIcon icon={faGithub} />
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/maxime-iffland-3178b82b6/", "_blank", "noopener,noreferrer")}><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></button>
        <button onClick={() => window.location.href = "mailto:maxime.iffland@icloud.com"}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>
      </div>
      <h1>MON PORTFOLIO</h1>
    </header>
  )
}


export default Header
