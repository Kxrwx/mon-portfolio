import React from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className="header">
      <div className='container-contact'>
        <button><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button>
        <button><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></button>
        <button><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>
      </div>
      <h1>MON PORTFOLIO</h1>
    </header>
  )
}


export default Header
