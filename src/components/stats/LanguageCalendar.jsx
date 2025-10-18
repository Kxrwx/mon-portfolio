import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faPython,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stats/LanguageCalendar.css";

// Données : chaque année avec les langages appris (icône + nom)
const data = {
  2023: [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faPython, name: "Python" },
  ],
  2024: [
    { icon: faJs, name: "JavaScript" },
    { icon: faCode, name: "TypeScript" },
  ],
  2025: [
    { icon: faReact, name: "React" },
    { icon: faNodeJs, name: "Next.js" },
  ],
  2026: [
    { icon: faCode, name: "Vue.js" },
  ],
};

function LanguageCalendar() {
  // Trie les années pour l’ordre chronologique
  const sortedEntries = Object.entries(data).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );

  return (
    <div className="calendar-container">
      {sortedEntries.map(([year, languages]) => (
        <div key={year} className="year-card">
          <h2 className="year-title">{year}</h2>
          <ul className="language-list">
            {languages.map((lang, i) => (
              <li key={`${year}-${lang.name}-${i}`} className="language-item">
                <FontAwesomeIcon icon={lang.icon} className="language-icon" />
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LanguageCalendar;
