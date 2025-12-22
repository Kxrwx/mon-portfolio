import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/project/ProjectSelector.css";

export default function ProjetSelector({ projects = [], onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projects.length > 0 && onSelect) {
      onSelect(projects[currentIndex]);
    }
  }, [currentIndex, projects, onSelect]);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return "card-center";
    if (index === (currentIndex + 1) % projects.length) return "card-right";
    if (index === (currentIndex - 1 + projects.length) % projects.length) return "card-left";
    return "card-hidden";
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls">
        <button className="carousel-btn left" onClick={prevCard}>◀</button>

        <div className="carousel">
          {projects.map((proj, i) => (
            <div
              key={proj.key}
              className={`carousel-card ${getCardClass(i)}`}
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
