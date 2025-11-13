import React from 'react'
import { useState } from 'react'
import "../../styles/me/Competence.css"
import Front from './fCompetence/Front'
import Back from './fCompetence/Back'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faDisplay } from '@fortawesome/free-solid-svg-icons'


export default function Competence() {
       const [activeComponentComp, setActiveComponentComp] = useState('front')
  return (
       <div className='container-comp'>
            <h2>Mes Competences</h2>
               <div className='widget-comp'>
               <div className='widget-container-button-comp'>
                    <button onClick={() => setActiveComponentComp('front')}>Front End <FontAwesomeIcon icon={faDisplay}/></button>
                    <button onClick={() => setActiveComponentComp('back')}>Back End <FontAwesomeIcon icon={faCodeBranch}/></button>
               </div>
               <div className='widget-container-comp'>
                    {activeComponentComp === 'front' && <Front/>}
                    {activeComponentComp === 'back' && <Back/>}
               </div>
            </div>
            

       </div>
  )
}
