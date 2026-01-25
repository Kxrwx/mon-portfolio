import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../../styles/certifs/CertifGrid.css";

const certifs = [
  {
    name: "ANSI",
    icon: faShield,
    date: "2024-11",
    desc: "Certication de base du MOOC",
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
