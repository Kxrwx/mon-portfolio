import React from 'react'
import '../styles/Home.css'
import StatsProjet from '../components/stats/StatsProjet'
import LanguageCalendar from '../components/stats/LanguageCalendar'
import Certifs from '../components/stats/Certifs'
import Scolaire from '../components/stats/Scolaire'

function Home({ setActiveComponent }) {
  return (
    <section id="home" className="home-section">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home section of my portfolio website.</p>

      <article className="stat">
        <div className="projets" onClick={() => setActiveComponent('projets')}>
          <h2>Mes projets</h2>
          <StatsProjet />
        </div>
        <div className="projets" onClick={() => setActiveComponent('certifs')}>
          <h2>Certifications</h2>
          < Certifs />
        </div>
        <div className='scolaire'>
            
            <Scolaire />
        </div>
        
      </article>
      <article className='calendar'>
        <div className="langages">
          <h2>Langages appris au fil des années</h2>
          <LanguageCalendar />
        </div>
      </article>
      
    </section>
  )
}

export default Home
