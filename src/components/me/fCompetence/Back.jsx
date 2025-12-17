import React from 'react'
import "../../../styles/me/fCompetence/Back.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faJs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDashboard, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

export default function Back() {
  return (
       <div className='widget-back'>
            <h1>Back-End</h1>
            <div className='back-desc'>
               <p>Je possède des compétences en développement back-end, avec une expérience
               dans la création d'API et la gestion de bases de données. J'ai travaillé avec
               plusieurs langages et frameworks pour construire des applications robustes et évolutives.</p>
            </div>
            
            <div className='back-langages-container'>
               <h2>Les languages</h2>
               <ul>
                    <li><FontAwesomeIcon icon={faPython}/> Python</li>
                    <li><FontAwesomeIcon icon={faPhp}/> PHP</li>
                    <li><FontAwesomeIcon icon={faJs}/> JavaScript</li>
                    <li><FontAwesomeIcon icon={faJava}/> JAVA</li>
                    <li><FontAwesomeIcon icon={faCode}/> TypeScript</li>
               </ul>
            </div>
            
            
               
               <div className='back-framework-container'>
                    <h2>Les Frameworks</h2>
                    <div>
                         <h3>Next.js</h3>
                         <p>
                         J’ai utilisé Next.js avec l’App Router, notamment pour configurer des API.
                         Pour la partie authentification, j’ai mis en place NextAuth, ce qui m’a permis de gérer l’inscription
                         et la connexion de manière classique.
                         </p>
                    </div>
                         
                    <div>
                         <h3>Flask</h3>
                    <p>
                         J’ai déjà étudié Flask, ce qui m’a permis de comprendre sa structure, 
                         son système de routing et la manière de construire des API avec ce micro-framework. 
                         Même si je ne l’ai pas encore utilisé dans un projet concret, 
                         j’en maîtrise les bases et son fonctionnement général.
                    </p>
                    </div>
                    

               </div>
               
               <div className='back-dblayer-container'>
                    <h2>Les DB Layers</h2>
                    <p>
                         J’ai déjà utilisé Prisma en tant que couche d’accès aux données, connecté à une base de données Supabase.
                         J’ai mis en place des opérations d’insertion et de sélection dans la base,
                         ce qui m’a permis de gérer efficacement la lecture et l’écriture des données.                         
                    </p>
               </div>
               <div className='back-db-container'>
               <h2>Les base de données</h2>
               <ul>
                    <li><FontAwesomeIcon icon={faDatabase}/> MySQL</li>
                    <li><FontAwesomeIcon icon={faServer}/> PostgreSQL</li>
               </ul>
               </div>
            </div>

  )
}
