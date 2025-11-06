import React from 'react'
import Photo from '../components/me/Photo'
import Description from '../components/me/Description'
import Competence from './me/Competence'
import '../styles/PageMe.css'
import '../components/me/Description'


function PageMe({ setActiveComponent }) {
  return (
    <section id="me" className="me-section">
        <h1 className='me-title'>A Propos de moi</h1>
        <article className="me-placement">
            <Photo/>
            <div className='me-space'></div>
            <Description/>  
            <div className='me-space'></div>
            <Competence/>
      </article>
    </section>
  )
}

export default PageMe
