import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faFigma 
} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons"
import "../../styles/stats/ToolsWidget.css";

const tools = [
  { name: "GitHub", icon: faGithub, color: "#181717" },
  { name: "VS Code", icon: faCode, color: "#007ACC" },
  { name: "Figma", icon: faFigma, color: "#f24e1e" },
];

const ToolsWidget = () => {
  return (
    <div className="tools-widget">
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <FontAwesomeIcon icon={tool.icon} style={{ color: tool.color }} className="tool-icon" />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsWidget;
