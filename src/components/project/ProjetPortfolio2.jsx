import React from 'react'
import '../../styles/project/DetailProjet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faFontAwesome, faGithub, faJs} from '@fortawesome/free-brands-svg-icons'
import { faPlay, faListCheck, faFileArrowUp,faFolderTree, faPieChart, faCode, faAlignJustify, faFile} from '@fortawesome/free-solid-svg-icons'
import Techno from './ProjetComponent/Techno'
import Timeline from './ProjetComponent/Timeline'
import Repo from './ProjetComponent/Repo'
import Texte from './ProjetComponent/Texte'


export default function ProjectPortfolio2() {

  const technologies = [
      {
          icon: faHtml5,
          title: "HTML5",
          description: "Utilisé pour la structure des elements web."
      },
      {
            icon: faCss3,
            title: "CSS3",
            description: "Mis en œuvre pour l'UX et l'UI de base."
      },
      {
          icon: faJs,
          title: "JavaScript",
          description: "Langage principal utilisé."
      },
      {
          icon: faReact,
          title: "React",
          description: "Utilisé pour construire des composants et les pages"
      }, 
      {
          icon: faPieChart,
          title: "Recharts",
          description: "Utilisé pour créer des graphiques."
      },
      {
          icon: faCode,
          title: "Motion Framer",
          description: "Utilisé pour créer des animations fluides et dynamiques."
      },
      {
          icon: faFontAwesome,
          title: "Font Awesome",
          description: "Utilisé pour ajouter des icônes vectorielles."
      }

  ];
  
  const timelineData = [
      {
          date: '10-10-2025', 
          title: 'Lancement du projet',
          description: 'Choix de refaire mon portfolio en React choix de la DA',
          icon: faPlay,
      },
      {
          date: '30-10-2025', 
          title: 'Fin du développement de la page principale',
          description: 'Développement de la page principale avec la première utilisation de Motion et Recharts ainsi que de Font Awesome en React.',
          icon: faListCheck,
      },
      {
          date: '1-11-2025', 
          title: 'Mise en place de GitHub Page',
          description: 'Déploiement sur GitHub Page pour la première fois.',
          icon: faFileArrowUp,
      },
      {
          date: '30-12-2025', 
          title: 'Fin du développement du portfolio',
          description: 'Fin du développement du portfolio avec une logique composant ainsi qu\'une simplification de la mise à jour du contenu grâce à des listes',
          icon: faFolderTree,
      },
      {
          date: '05-01-2026',
          title: 'Correction des bugs et améliorations du contenu',
          description: 'Correction des bugs mineurs et amélioration du contenu textuel et visuel du portfolio.',
          icon: faAlignJustify,
      }
  ];
  
  const repositoryData = [
    { 
      title: "Repository GitHub du projet",
      description: "Accéder au code source complet du projet sur GitHub.",
      url: "https://github.com/Kxrwx/mon-portfolio", 
      icon: faGithub, 
      colorIcon: "#000",
    },
    { 
      title: "Lien GitHub Page",
      description: "Voir le portfolio en ligne hébergé sur GitHub Pages.",
      url: "https://kxrwx.github.io/mon-portfolio/", 
      icon: faFile, 
      colorIcon: "#000",
    },
  ];
  
  const texteData = [
    {
      title: "Contexte du projet",
      description: "J'ai decider de faire le portfolio en React pour plusieurs raisons. Tout d'abord, React me permet de créer des composants réutilisables, ce qui facilite la maintenance et l'évolution du code. De plus, l'utilisation de bibliothèques comme Framer Motion pour les animations et Recharts pour les graphiques améliore considérablement l'expérience utilisateur. Enfin, héberger le projet sur GitHub Pages simplifie le déploiement et la mise à jour du site. Ce portfolio reflète non seulement mes compétences techniques, mais aussi ma capacité à concevoir une interface utilisateur attrayante et fonctionnelle."
  
    },
  ]

  return (
    <div className='project-content-main'>
        <h1>Mon portfolio React</h1>
        <Techno techno={technologies}/>
        <Timeline timelineData={timelineData} />
        <Repo repository={repositoryData} />
        <Texte texte={texteData} />
    </div>
  )
}


