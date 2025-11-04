
import "../../../styles/project/ProjetPortfolio1/TimelinePortfolio1.css";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectTimeline({ start = "01/03/2024", end = "06/04/2024" }) {
  return (
    <div className="timeline-h-container">
      <div className="timeline-h-label">
        <span>Début</span>
        <p>{start}</p>
      </div>

      <div className="timeline-h-bar">
        <motion.div
          className="timeline-h-arrow"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="timeline-h-head" />
        </motion.div>
      </div>

      <div className="timeline-h-label">
        <span>Fin</span>
        <p>{end}</p>
      </div>
    </div>
  );
}
