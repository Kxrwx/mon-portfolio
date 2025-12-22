import React from 'react'
import '../../styles/project/DetailProjet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'
import { faMap, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { faLeanpub } from '@fortawesome/free-brands-svg-icons'
import Techno from './ProjetComponent/Techno'
import Timeline from './ProjetComponent/Timeline'
import Repo from './ProjetComponent/Repo'
import Texte from './ProjetComponent/Texte'



export default function ProjectPortfolio1() {
  const technologies = [
    {
        icon: faHtml5,
        title: "HTML5",
        description: "Utilisé pour la structure sémantique et l'accessibilité de la page."
    },
    {
        icon: faCss3,
        title: "CSS3",
        description: "Utilisation du CSS3 pour l'UI et pour les UX simples"
    },
    { 
        icon: faJs,
        title: "JavaScript",
        description: "Animation UX avec JavaScript notalement avec des bibliothèques comme GSAP."
    },

];

const timelineData = [
    {
        date: '15-09-2024', 
        title: 'Lancement de la creation du portfolio',
        description: 'Avoir la structure de base et les differentes sections.',
        icon: faMap,
    },
    {
        date: '30-10-2024', 
        title: 'Apprentissage des animations GSAP',
        description: 'Apprentissage et implémentation des animations avec GSAP.',
        icon: faLeanpub,
    },
    {
        date: '20-02-2025', 
        title: 'Finalisation du portfolio',
        description: 'Debuggage des bugs majeurs et approfondissement du contenu.',
        icon: faFlagCheckered,
    },
];



const texteData = [
  {
    title: "Contexte du projet",
    description: "Ce portfolio a été créé dans le cadre de ma premiere année de BTS SIO. L'objectif principal était de concevoir un site web personnel pour présenter mes compétences, projets et expériences professionnelles. J'ai choisi d'utiliser HTML, CSS et JS sans framework pour mieux comprendre les bases du développement web. L'objectif était d'apprendre de nouvelle chose et de pousser les possibilités avec ces technologies. Le projet avait plusieurs lacunes, il n'etait pas vraiment responsive et avait des bugs majeurs. C'est pour cela que j'ai décidé de le refaire en React plus tard."

  },
]
  return (
    <div className='project-content-main'>
        <h1>Mon portfolio HTML/CSS</h1>
        <Techno techno={technologies}/>
        <Timeline timelineData={timelineData} />
        <p>Pas de repository GitHub car ce portfolio à été archivé</p>
        <Texte texte={texteData} />
    </div>
  )
}


