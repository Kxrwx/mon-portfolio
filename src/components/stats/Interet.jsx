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
    animate={{ opacity: 1, x: 0, color: "#333333" }} 
    style={{ color: "#333333" }} 
    whileHover={{ scale: 1.1, color: "#6366f1" }} 
>
            <FontAwesomeIcon icon={item.icon} style={{ marginRight: "0.5rem" }} />
            {item.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


