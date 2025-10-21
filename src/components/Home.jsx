import React from 'react'
import '../styles/Home.css'
import StatsProjet from '../components/stats/StatsProjet'
import LanguageCalendar from '../components/stats/LanguageCalendar'
import Certifs from '../components/stats/Certifs'
import TimelineScolaire from '../components/stats/Scolaire'
import Interet from '../components/stats/Interet'
import DashboardSkills from '../components/stats/DashboardSkills'
import ExperienceWidget from '../components/stats/ExperienceWidget'
import ToolsWidget from '../components/stats/ToolsWidget'
import VeilleWidget from '../components/stats/VeilleWidget'

function Home({ setActiveComponent }) {
  return (
    <section id="home" className="home-section">
      <h1>Bienvenu sur mon Portfolio</h1>
      <p>Je suis IFFLAND Maxime et voici mon dashboard !</p>
      <div className='stat-placement'>
      <article className="stat">
        <div className="container-click" onClick={() => setActiveComponent('projet')}>
          <h2>MES PROJETS</h2>
          <div className="box">
            <StatsProjet />
          </div>

        </div>
        <div className="container-click" onClick={() => setActiveComponent('certif')}>
          <h2>CERTIFICATIONS</h2>
          <div className="box">
          < Certifs />
            </div>
        </div>
        <div className="container">
          <h2>LES METIERS QUI M'INTERESSE</h2>
          <div className="box">
          < Interet />
            </div>
        </div>
        <div className="container-skills">
          <h2>MES COMPETENCES</h2>
          <div className="box"> 
            < DashboardSkills />
            </div>
        </div>
        <div className="container-veille" onClick={() => setActiveComponent('veille')}>
          <h2>VEILLE TECHNO</h2>
          < VeilleWidget />
        </div>
         <div className="container-outils">
          <h2>OUTILS & ENVIRONNEMENTS</h2>
          < ToolsWidget />
        </div>
        <div className="container">
          <h2>MES EXPERIENCES PROFESSIONNELS </h2>
          < ExperienceWidget />
        </div>
        
        
      </article>
      </div>
      <article className='scolaire-timeline'>
      <div className='scolaire'>
            <TimelineScolaire/>
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
