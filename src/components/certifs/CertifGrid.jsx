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
import { motion } from "framer-motion";
import "../../styles/certifs/CertifGrid.css";

const certifs = [
  {
    name: "React",
    icon: faReact,
    date: "2023-05",
    desc: "Certification en React : développement d’interfaces modernes et réactives.",
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    date: "2023-08",
    desc: "Certification en Node.js : création d’APIs et gestion de serveurs backend.",
  },
  {
    name: "Python",
    icon: faPython,
    date: "2024-01",
    desc: "Certification Python : automatisation, scripts et développement web.",
  },
  {
    name: "Docker",
    icon: faDocker,
    date: "2024-05",
    desc: "Certification Docker : conteneurisation et déploiement d’applications.",
  },
  {
    name: "TypeScript",
    icon: faJs,
    date: "2024-07",
    desc: "Certification TypeScript : typage fort et meilleures pratiques JS modernes.",
  },
  {
    name: "Figma",
    icon: faFigma,
    date: "2024-09",
    desc: "Certification Figma : conception d’interfaces UI/UX performantes.",
  },
];

export default function CertifGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="certif-grid-container">
      {certifs.map((certif, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div
            key={index}
            className="certif-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            {!isActive ? (
              <>
                <FontAwesomeIcon icon={certif.icon} className="certif-icon" />
                <h3>{certif.name}</h3>
                <p className="certif-date">{certif.date}</p>
                <button
                  className="certif-btn"
                  onClick={() => toggleDescription(index)}
                >
                  Voir description
                </button>
              </>
            ) : (
              <>
                <p className="certif-desc">{certif.desc}</p>
                <button
                  className="certif-btn"
                  onClick={() => toggleDescription(index)}
                >
                  Revenir
                </button>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
