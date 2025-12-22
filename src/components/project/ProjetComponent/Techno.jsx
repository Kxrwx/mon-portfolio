import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import "../../../styles/project/ProjetComponent/Techno.css";

export default function Techno({techno}) {
    if (!techno || !Array.isArray(techno)) {
        return null;
    }
    return (
        <div className="techno-container">
            {techno.map((technoItem, index) => (
            <div key={index}>
                <h5><FontAwesomeIcon icon={technoItem.icon}/></h5>
                <h2>{technoItem.title}</h2>
                <p>{technoItem.description}</p>
            </div>
            ))}
        </div>
    ); 
}