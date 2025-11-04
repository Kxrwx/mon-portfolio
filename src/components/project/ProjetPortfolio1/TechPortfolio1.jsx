
import "../../../styles/project/ProjetPortfolio1/TechPortfolio1.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faJs,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faCss3Alt,
  faNpm,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function TechPortfolio1() {
  const techs = [
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Python", icon: faPython },
    { name: "Docker", icon: faDocker },
    { name: "JavaScript", icon: faJs },
    { name: "Figma", icon: faFigma },
    { name: "Git", icon: faGitAlt },
    { name: "GitHub", icon: faGithub },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "NPM", icon: faNpm },
    { name: "AWS", icon: faAws },
  ];

  return (
    <div className="techgrid-wrapper">
      <h2 className="techgrid-title">Technologies utilisées</h2>
      <div className="techgrid-grid">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            className="techgrid-card"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <FontAwesomeIcon icon={tech.icon} className="techgrid-icon" />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
