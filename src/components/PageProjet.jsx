    const projets = [
        {
            key: "portfolio2",
            name: "Portfolio React",
            date: "10-2025",
            icon: faReact,
            desc: "Mon portfolio personnel développé avec React avec plusieurs biblio.",
        },
        {
            key: "appweb-strava",
            name: "Application Web",
            date: "09-2025",
            icon: faReact,
            desc: "Application web relié a Strava.",
        },
        {
            key: "portfolio1",
            name: "Portfolio HTML/CSS",
            date: "10-2024",
            icon: faHtml5,
            desc: "Mon premier portfolio en HTML/CSS.",
        },
        {
            key: "API-Strava-Notion",
            name: "API Strava Notion",
            date: "11-2025",
            icon: faPython,
            desc: "API Python Flask pour relier Strava et Notion.",
        },
    ];


import React, { useState, useCallback } from "react"; 
import "../styles/PageProjet.css";
import ProjetSelector from "../components/project/ProjetSelector";
import { faReact, faHtml5, faPython } from "@fortawesome/free-brands-svg-icons";
import ProjetPortfolio1 from "../components/project/ProjetPortfolio1";
import ProjectPortfolio2 from "../components/project/ProjetPortfolio2";
import ProjetStravaCoach from "../components/project/ProjetStravaCoach";
import ApiStravaNotion from "../components/project/ApiStravaNotion";

function PageProjet() {


    const [selectedProject, setSelectedProject] = useState(projets[0]);

    const handleProjectSelect = useCallback((project) => {
        setSelectedProject(project);
    }, []);


    const renderProjectComponent = () => {

        if (!selectedProject) {
            return <p>Sélectionnez un projet.</p>;
        }

        switch (selectedProject.key) {
            case "portfolio2":
                return <ProjectPortfolio2/>;
            case "appweb-strava":
                return <ProjetStravaCoach/>;
            case "portfolio1":
                return <ProjetPortfolio1/>;
            case "API-Strava-Notion":
                return <ApiStravaNotion/>;
            default:
                return <p>Aucun composant défini pour ce projet ({selectedProject.name}).</p>;
        }
    };

    return (
        <section id="projet" className="projet-section">
            <h1 className="certif-section-title">MES PROJETS</h1>
            
            <article className="projet-placement">
                {/* ⬅️ 3. Passer la nouvelle fonction stable */}
                <ProjetSelector projects={projets} onSelect={handleProjectSelect} />
            </article>
            <article className="projet-placement">{renderProjectComponent()}</article>
        </section>
    );
}

export default PageProjet;