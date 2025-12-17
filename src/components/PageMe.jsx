import React from 'react'
import Photo from '../components/me/Photo'
import Description from '../components/me/Description'
import Competence from './me/Competence'
import '../styles/PageMe.css'
import '../components/me/Description'
import { useEffect } from 'react'


function PageMe({ activeSection }) {
  useEffect(() => {
    if (activeSection) { 
      const el = document.getElementById(`${activeSection}-section`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" }); 
      }
    }
  }, [activeSection]);
  return (
    <section id="me" className="me-section">
        <h1 className='me-section-title'>A PROPOS DE MOI</h1>
        <article className="me-placement">
            <Photo/>
            <div className='me-space'></div>
              <Description/>  
            
            <div className='me-space'></div>
            <div className='skills-section'>
              <Competence/>
            </div>
            
      </article>
    </section>
  )
}

export default PageMe
