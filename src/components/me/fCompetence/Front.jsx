import React from 'react'
import "../../../styles/me/fCompetence/Front.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faReact, faCss3, faJs} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Front() {
  return (
       <div className='widget-front'>
            <h3>Front-End</h3>
            <div className='front-desc'>
               <p>Je maîtrise principalement le front-end, avec une solide expérience en React
               et plusieurs de ses librairies et frameworks associés. Mon objectif actuel est de
               me former sur Vue.js afin d’élargir mes compétences et ma vision du développement front.</p>
            </div>
            <h4>Les languages</h4>
            <div className='front-langages-container'>
               <ul>
                    <li><FontAwesomeIcon icon={faHtml5}/>HTML</li>
                    <li><FontAwesomeIcon icon={faCss3}/>CSS</li>
                    <li><FontAwesomeIcon icon={faJs}/>JavaScript</li>
                    <li><FontAwesomeIcon icon={faCode}/>TypeSrcipt</li>
               </ul>
            </div>
            <h4>Les outils</h4>
            <div className='front-outils-container'>
               <div className='front-framework-container'>
                    <h5>Les Frameworks</h5>
               </div>
               <div className='front-buider-container'>
                    <h5>Les builders</h5>
               </div>
               <div className='front-libraryReact-container'>
                    <h5>Les librairies React</h5>
               </div>
               <div className='front-cms-container'>
                    <h5>Les CMS</h5>
               </div>
            </div>
       </div>
  )
}
