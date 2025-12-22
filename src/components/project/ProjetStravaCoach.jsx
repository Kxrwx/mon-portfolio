import React from 'react'
import '../../styles/project/DetailProjet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStrava, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faCss } from '@fortawesome/free-brands-svg-icons'
import { faCode, faBookBookmark, faDatabase, faLeftRight, faChartPie, faTableList, faCommentDots, faBrush, faRoute, faAddressCard, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Techno from './ProjetComponent/Techno'
import Timeline from './ProjetComponent/Timeline'
import Repo from './ProjetComponent/Repo'
import Texte from './ProjetComponent/Texte'


export default function ProjetStravaCoach() {

    const technologies = [
        {
            icon: faHtml5,
            title: "HTML5",
            description: "Utilisé pour la structure sémantique et l'accessibilité de la page."
        },
        {
            icon: faCss3,
            title: "CSS3",
            description: "Mis en œuvre pour le design responsif et les animations légères."
        },
        {
            icon: faCode,
            title: "TypeScript",
            description: "Langage principal utilisé."
        },
        {
            icon: faCode,
            title: "Next.js",
            description: "Framework utilisé pour la structure du projet."
        },
        {
            icon: faStrava, 
            title: "API Strava",
            description: "Intégration de l'API Strava pour récupérer les données d'activité des utilisateurs."
        }, 
        {
            icon: faLeftRight,
            title: "Prisma", 
            description: "Utilisé comme ORM pour interagir avec la base de données. Utilisation de Prisma 7 pour plus de stabilité."
        }, 
        {
            icon: faChartPie,
            title: "Recharts",
            description: "Bibliothèque utilisée pour la visualisation des données sous forme de graphiques."
        },
        {
            icon: faFontAwesome,
            title: "Font Awesome",
            description: "Utilisé pour les icônes."
        }, 
        {
            icon: faTableList,
            title: "Zod",
            description: "Utilisé pour la validation des schémas de données."
        }, 
        {
            icon: faCommentDots,
            title: "Axios",
            description: "Utilisé pour les requêtes HTTP vers l'API Strava."
        }, 
        {
            icon: faCode,
            title: "Framer Motion",
            description: "Utilisé pour les animations et les transitions fluides."
        }, 
        {
            icon: faCss,
            title: "Tailwind CSS",
            description: "Utilisé pour le design."

        }, 
        {
            icon: faBrush,
            title: "React-Bits", 
            description: "Utilisation de templates ReactBits."
        }, 
        {
            icon: faRoute,
            title: "React Router",
            description: "Utilisé pour la gestion des routes côté client."
        }, 
        {
            icon: faAddressCard,
            title: "NextAuth",
            description: "Utilisé pour l'authentification des utilisateurs."
        }, 
        {
            icon: faGoogle,
            title: "SDK Google",
            description: "Utilisé pour l'authentification via Google."
        }, 
        {
            icon: faDatabase,
            title: "PostgreSQL",
            description: "Base de données relationnelle utilisée pour stocker les données des utilisateurs et des activités."
        }



    ];
    
    const timelineData = [
        {
            date: '10-09-2025', 
            title: 'Lancement du projet avec redaction du cahier des charges',
            description: 'Lancement du projet avec la rédaction du cahier des charges et la planification des étapes clés, ainsi que le referenciel des technologies a utiliser et de leur version.',
            icon: faBookBookmark,
        },
        {
            date: '25-09-2025',
            title: 'Mise en place de la DB et de Prisma 7',
            description: 'Mise en place de la base de données de dev sur SupaBase et intégration de Prisma 7 comme ORM pour une gestion efficace des données.',
            icon: faDatabase,
        }, 
        {
            date: '25-10-2025', 
            title: 'Syseme Sign-In et Sign-Up fonctionnel',
            description: 'Mise en place du système d\'inscription et de connexion des utilisateurs avec NextAuth',
            icon: faAddressCard,
        },
        {
            date: '30-10-2025', 
            title: 'Design des pages d\'authentification',
            description: 'Ajout du design aux pages d\'inscription et de connexion pour une meilleure expérience.',
            icon: faCss,
        },
        {
            date: '02-11-2025', 
            title: 'Integration du SDK Google',
            description: 'Ajout de l\'authentification via Google.',
            icon: faGoogle,
        },
        {
            date: 'En cours', 
            title: 'Projet toujours en cours de developpement',
            description: 'Le projet est toujours en cours de développement.',
            icon: faArrowRight,
        },
    ];
    
    
    const texteData = [
      {
        title: "Contexte du projet",
        description: "Le projet a pour but de developper mes competences personnelles avec differentes technologies en fesant un projet qui m'interesse. En tant que passionné de sport et d'analyse de données, j'ai décidé de créer une application web qui se connecte à l'API Strava pour récupérer et visualiser les données d'activité des utilisateurs. L'objectif principal est de fournir aux utilisateurs des insights détaillés sur leurs performances sportives, en utilisant des graphiques interactifs et des analyses approfondies. Ce projet me permet d'explorer diverses technologies telles que Next.js pour le développement front-end, Prisma pour la gestion de la base de données, et Recharts pour la visualisation des données. En outre, l'intégration de fonctionnalités d'authentification avec NextAuth et le SDK Google ajoute une couche de sécurité et de convivialité à l'application. Ce projet est non seulement une opportunité d'apprentissage, mais aussi une manière de combiner mes intérêts personnels avec mes compétences techniques."
    
      },
    ]


  return (
    <div className='project-content-main'>
        <h1>Mon App Web</h1>
        <Techno techno={technologies}/>
        <Timeline timelineData={timelineData} />
        <p>Ce repository GitHub est en privé</p>
        <Texte texte={texteData} />
    </div>
  )
}


