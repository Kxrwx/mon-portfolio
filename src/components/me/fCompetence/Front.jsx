import React from 'react'
import "../../../styles/me/fCompetence/Front.css"
import { color, motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faReact, faCss3, faJs, faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import { faCode, faBrush, faTable, faChartPie } from '@fortawesome/free-solid-svg-icons'
import ViteLogo from '../../../assets/vite-logo.svg'
import NextLogo from '../../../assets/nextjs-logo.svg'
import ReactLogo from '../../../assets/react-logo.svg'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'




export default function Front() {

  return (
       <div className='widget-front'>
        <div className='title-front'><h1>Front-End</h1></div>
        <div className='langage-front'>
          <h2>Les langages</h2>
          <ul>
            <li><FontAwesomeIcon icon={faHtml5} /> <div><h3>HTML</h3><p>Appris au milieu de ma seconde, je commence a connaitre tout ces suptilités</p></div></li>
            <li><FontAwesomeIcon icon={faCss3} /> <div><h3>CSS</h3><p>Appris au milieu de ma seconde avec le HTML je continue de le pratiquer</p></div></li>
            <li><FontAwesomeIcon icon={faJs} /> <div><h3>JavaScript</h3><p>Appris lors de ma premiere année de BTS, je l'utilise surtout avec le framework React</p></div></li>
            <li><FontAwesomeIcon icon={faCode} /> <div><h3>TypeScript</h3><p>Appris en autodidacte, je l'utilise principalement avec le framework React</p></div></li>
          </ul>
        </div>
        <div className='framework-front'>
          <h2>Les Frameworks</h2>
          <ul>
            <li><img src={ReactLogo} alt="Logo React" className="logo-react" /><div><h3>React</h3><p>Appris lors de ma deuxieme année de BTS, je l'utilise pour la plupart de mes projets front-end</p></div></li>
            <li><img src={NextLogo} alt="Logo Next.js" className="logo-nextjs" /><div><h3>Next.js</h3><p>Appris en autodidacte, je l'utilise principalement pour des projets fullstack</p></div></li>
          </ul>
       </div>
       <div className='librairy-react'>
          <h2>Les Librairies React</h2>
          <ul>
            <li><FontAwesomeIcon icon={faBrush} /><div><h3>Framer Motion</h3><p>Appris en autodidacte, je l'utilise pour ajouter des animations a mes projets React</p></div></li>
            <li><FontAwesomeIcon icon={faTable} /><div><h3>Zod</h3><p>Appris en autodidacte, je l'utilise pour valider les données de mes projets React</p></div></li>
            <li><FontAwesomeIcon icon={faChartPie}/><div><h3>Recharts</h3><p>Appris en autodidacte, je l'utilise pour créer des graphiques dans mes projets React</p></div></li>
            <li><FontAwesomeIcon icon={faFontAwesome}/><div><h3>Font Awesome</h3><p>Appris en autodidacte, je l'utilise pour ajouter des icônes dans mes projets React</p></div></li>
          </ul>
       </div>
       <div className='builder-cms'>
        <div className='builder'>
        <h2>Vite</h2>
        <div><img src={ViteLogo} alt="Logo Vite" className="logo-vite" /><p>Vite est le seul builder que j'utilise, je l'utilise donc pour tout mes projets</p></div>
        </div>
        <div className='cms'>
          <h2>CMS</h2>
          <p>Le seul CMS que je maitrise est WordPress</p>
        </div>
       </div>
       
       </div>
  )
}
