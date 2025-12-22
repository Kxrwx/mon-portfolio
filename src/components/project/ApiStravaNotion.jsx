import React from "react";
import "../../styles/project/DetailProjet.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faNotion, faStrava, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFlask, faLaptop, faFileCode, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Techno from './ProjetComponent/Techno'
import Timeline from './ProjetComponent/Timeline'
import Repo from './ProjetComponent/Repo'
import Texte from './ProjetComponent/Texte'

export default function ApiStravaNotion() {
      const technologies = [
        {
            icon: faPython,
            title: "Python",
            description: "Langage principal utilisé pour le développement de l'API Flask."
        },
        {
            icon: faNotion,
            title: "Notion API",
            description: "Utilisé pour interagir avec les bases de données Notion."
        }, 
        {
            icon: faStrava,
            title: "Strava API",
            description: "Utilisé pour récupérer les données d'activité des utilisateurs depuis Strava."
        }, 
        {
            icon: faFlask,
            title: "Flask",
            description: "Framework web léger utilisé pour créer l'API."
        }, 
        {
            icon: faLaptop,
            title: "Tkinter",
            description: "Utilisé pour créer l'interface graphique de la configuration de l'API."
        }

    ];
    
    const timelineData = [
        {
            date: '10-12-2025', 
            title: 'Création du projet',
            description: 'Creation du projet et mise en place de l\'environnement de développement. Et des differents fichiers.',
            icon: faFileCode,
        }, 
        {
            date: '12-12-2025', 
            title: 'Lien avec l\'API Notion',
            description: 'Insertion de données dans une DB Notion',
            icon: faNotion,
        }, 
        {
            date: '14-12-2025', 
            title: 'Lien avec l\'API Strava',
            description: 'Récuperation des tokens de l\'API Strava',
            icon: faStrava,
        }, 
        {
            date: '16-12-2025', 
            title: 'Creation de l\'interface',
            description: 'Création de l\'interface pour la configuration de l\'API grâce a Tkinter',
            icon: faLaptop,
        },
        {
            date: 'En cours', 
            title: 'Projet en cours de developpement',
            description: 'Le projet est toujours en cours de dévelopement',
            icon: faArrowRight,
        }


    ];
    
      const repositoryData = [
        { 
          title: "Repository GitHub du projet",
          description: "Accéder au code source complet du projet sur GitHub.",
          url: "https://github.com/Kxrwx/API_Strava-Notion", 
          icon: faGithub, 
          colorIcon: "#000",
        },

      ];
    
    const texteData = [
        {
            title: "Contexte du projet",
            description: "L'objectif est la création d'une API rapide et simple a mettre en place. A la base elle doit m'aider à prévoir et planifier mais entrainement grâce a Notion " 
        },
    ]
    return (
        <div className="project-content-main">
            <h1>API Strava Notion</h1>
            <Techno techno={technologies}/>
            <Timeline timelineData={timelineData} />
            <Repo repository={repositoryData} />
            <Texte texte={texteData} />
        </div>
    );
}