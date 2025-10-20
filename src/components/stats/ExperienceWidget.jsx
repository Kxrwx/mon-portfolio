import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/stats/ExperienceWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    title: "Stage Développeur PowerPlatform",
    company: "FehrGroup",
    date: "Juin - Aout 2025",
    desc: "Création d’applications métiers PowerApps et d’un intranet SharePoint avec automatisations PowerAutomate.",
  },
  {
    title: "Mon stage 2026 ",
    company: "None",
    date: "Janvier - Fevrier 2026",
    desc: "En attente de description.",
  },
];

const ExperienceWidget = () => {
  const [index, setIndex] = useState(0);

  // Navigation manuelle uniquement
  const next = () => setIndex((prev) => (prev + 1) % experiences.length);
  const prev = () => setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <div className="experience-widget">

      <div className="experience-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="experience-card"
          >
            <h4 className="experience-role">{experiences[index].title}</h4>
            <p className="experience-company">{experiences[index].company}</p>
            <p className="experience-date">{experiences[index].date}</p>
            <p className="experience-desc">{experiences[index].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="experience-controls">
        <button onClick={prev}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
        <button onClick={next}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default ExperienceWidget;
