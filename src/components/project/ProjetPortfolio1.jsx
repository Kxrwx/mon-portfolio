import React from 'react'
import '../../styles/project/ProjetPortfolio1.css'
import TimelinePortfolio1 from './ProjetPortfolio1/TimelinePortfolio1'
import TechPortfolio1 from './ProjetPortfolio1/TechPortfolio1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ProjectPortfolio1() {
  return (
    <div className='project-content-main'>
        <h1>Mon portfolio 1</h1>
        <TimelinePortfolio1/>
        <TechPortfolio1/>
    </div>
  )
}


