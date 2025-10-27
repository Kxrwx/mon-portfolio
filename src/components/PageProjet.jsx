import React, { useState } from "react";
import "../styles/PageProjet.css";
import ProjetSelector from "../components/project/ProjetSelector"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faPython, faDocker } from "@fortawesome/free-brands-svg-icons";


function PageProjet({ setActiveComponent }) {
  // 🔹 Liste des projets
  const projets = [
    {
      key: "react",
      name: "Portfolio React",
      date: "2024-03",
      icon: faReact,
      desc: "Mon portfolio personnel développé avec React et animations CSS.",
    },
    {
      key: "node",
      name: "API Node.js",
      date: "2024-05",
      icon: faNodeJs,
      desc: "API RESTful réalisée en Node.js + Express avec gestion JWT.",
    },
    {
      key: "python",
      name: "Bot Python",
      date: "2024-07",
      icon: faPython,
      desc: "Bot Discord codé en Python utilisant discord.py et hébergé sur Docker.",
    },
    {
      key: "docker",
      name: "App Dockerisée",
      date: "2024-09",
      icon: faDocker,
      desc: "Application full-stack conteneurisée avec Docker et Nginx.",
    },
  ];

  // 🔹 Projet sélectionné par défaut
  const [selectedProject, setSelectedProject] = useState(projets[0]);

  // 🔹 Retourne le composant lié au projet sélectionné
  const renderProjectComponent = () => {
    switch (selectedProject.key) {
      case "react":
        return <p>Composant react</p>;
      case "node":
        return <p>Composant node</p>;
      case "python":
        return <p>Composant py</p>;
      case "docker":
        return <p>Composant docker</p>;
      default:
        return <p>Composant non défini pour ce projet.</p>;
    }
  };

  return (
    <section id="projet" className="projet-section">
      <h1>Mes Projets</h1>

      <article className="projet-placement">
        <ProjetSelector projects={projets} onSelect={setSelectedProject} />
      </article>
      <article className="projet-placement">
        {renderProjectComponent()}
      </article>
    </section>
  );
}

export default PageProjet;
