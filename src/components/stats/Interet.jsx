"use client";
import React from "react";
import { motion } from "framer-motion";
import "../../styles/stats/Interet.css";
import { faDatabase, faTabletScreenButton, faDiagramProject, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const interets = [
  { icon: faDatabase, name: "DataAnalyste" },
  { icon: faTabletScreenButton, name: "WebApp Developpeur" },
  { icon: faDiagramProject, name: "Developpeur IA" },
  { icon: faCode, name: "FullStack Developpeur" }
];

export default function Interet() {
  return (
    <div className="interet-container">
      <ul className="interet-list">
        {interets.map((item, index) => (
          <motion.li
            key={item.name}
            className="interet-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.1, color: "#6366f1" }}
          >
            <FontAwesomeIcon icon={item.icon} style={{ marginRight: "8px" }} />
            {item.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


