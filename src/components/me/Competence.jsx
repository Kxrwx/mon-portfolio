import React from 'react'
import { useState } from 'react'
import "../../styles/me/Competence.css"
import Front from './fCompetence/Front'
import Back from './fCompetence/Back'
import Reseau from './fCompetence/Reseau'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faDisplay, faNetworkWired } from '@fortawesome/free-solid-svg-icons'


export default function Competence() {
       const [activeComponentComp, setActiveComponentComp] = useState('front')
  return (
       <div className='container-comp'>
            <h2>MES COMPETENCES</h2>
               <div className='widget-comp'>
               <div className='widget-container-button-comp'>
                    <button onClick={() => setActiveComponentComp('front')}><p><FontAwesomeIcon icon={faDisplay}/> Front-End</p></button>
                    <button onClick={() => setActiveComponentComp('back')}><p><FontAwesomeIcon icon={faCodeBranch}/> Back-End</p></button>
                    <button onClick={() => setActiveComponentComp('reseau')}><p><FontAwesomeIcon icon={faNetworkWired}/> Reseau</p></button>
               </div>
               <div className='widget-container-comp'>
                    {activeComponentComp === 'front' && <Front/>}
                    {activeComponentComp === 'back' && <Back/>}
                    {activeComponentComp === 'reseau' && <Reseau/>}
               </div>
            </div>
            

       </div>
  )
}
