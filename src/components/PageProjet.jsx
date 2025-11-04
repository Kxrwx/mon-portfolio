import React, { useState } from "react";
import "../styles/PageProjet.css";
import ProjetSelector from "../components/project/ProjetSelector";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import ProjetPortfolio1 from "../components/project/ProjetPortfolio1";
import ProjectPortfolio2 from "../components/project/ProjetPortfolio2";
import ProjetStravaCoach from "../components/project/ProjetStravaCoach";

function PageProjet() {
  const projets = [
    {
      key: "portfolio2",
      name: "Portfolio React",
      date: "2025-10",
      icon: faReact,
      desc: "Mon portfolio personnel développé avec React avec plusieurs biblio.",
    },
    {
      key: "appweb-strava",
      name: "Application Web",
      date: "2025-09",
      icon: faReact,
      desc: "Application web relié a Strava.",
    },
    {
      key: "portfolio1",
      name: "Portfolio HTML/CSS",
      date: "2024-10",
      icon: faHtml5,
      desc: "Mon premier portfolio en HTML/CSS.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projets[0]);

  const renderProjectComponent = () => {
    switch (selectedProject.key) {
      case "portfolio2":
        return <ProjectPortfolio2/>;
      case "appweb-strava":
        return <ProjetStravaCoach/>;
      case "portfolio1":
        return <ProjetPortfolio1/>;
      default:
        return <p>Aucun composant défini pour ce projet.</p>;
    }
  };

  return (
    <section id="projet" className="projet-section">
          <h1 className="certif-section-title">Mes Projets</h1>
        
          <article className="projet-placement">
            <ProjetSelector projects={projets} onSelect={setSelectedProject} />
          </article>
          <article className="projet-placement">{renderProjectComponent()}</article>
    </section>
  );
}

export default PageProjet;
