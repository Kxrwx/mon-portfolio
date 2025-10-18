import React from "react";
import "../../styles/stats/SkillsDetailWidget.css";

export default function SkillsDetailWidget({ category, details }) {
  return (
    <div className="skills-detail-widget">
      <h3>{category} : Détails</h3>
      <ul>
        {details.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
