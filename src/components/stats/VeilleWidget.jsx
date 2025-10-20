import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "../../styles/stats/VeilleWidget.css";

const topics = [
  "Next.js",
  "Intelligence Artificielle",
  "Cybersécurité",
  "UX Design",
  "DevOps",
  "Automatisation",
  "Performance Web",
];

const VeilleWidget = () => {
  return (
    <div className="veille-widget">

      <div className="veille-tags-wrapper">
        <div className="veille-tags-scroll">
          {topics.map((topic, index) => (
            <span key={index} className="veille-tag">{topic}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VeilleWidget;
