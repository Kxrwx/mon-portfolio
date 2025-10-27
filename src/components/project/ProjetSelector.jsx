// ProjetSelector.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/project/ProjectSelector.css";

const projects = [
  { name: "React", icon: faReact, date: "2023-05", key: "react" },
  { name: "Next.js", icon: faReact, date: "2023-06", key: "next" },
  { name: "Node.js", icon: faNodeJs, date: "2023-08", key: "node" },
  { name: "Python", icon: faPython, date: "2024-01", key: "python" },
  { name: "Docker", icon: faDocker, date: "2024-05", key: "docker" },
  { name: "TypeScript", icon: faJs, date: "2024-07", key: "typescript" },
  { name: "Figma", icon: faFigma, date: "2024-09", key: "figma" },
];

export default function ProjetSelector({ onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return "card-center";
    if (index === (currentIndex + 1) % projects.length) return "card-right";
    if (index === (currentIndex - 1 + projects.length) % projects.length) return "card-left";
    return "card-hidden";
  };

  const handleClick = (project) => {
    if (onSelect) onSelect(project);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls">
        <button className="carousel-btn left" onClick={prevCard}>◀</button>
        <div className="carousel">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`carousel-card ${getCardClass(i)}`}
              onClick={() => handleClick(proj)}
            >
              <FontAwesomeIcon icon={proj.icon} className="project-icon" />
              <h3>{proj.name}</h3>
              <p>{proj.date}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextCard}>▶</button>
      </div>
    </div>
  );
}
