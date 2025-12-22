import React from "react";
import "../../../styles/project/ProjetComponent/Texte.css"

export default function Texte({texte}){
    return (
        <div className="container-texte">
            {texte.map((para, index) => (
                <div key={index}>
                    <h3>{para.title}</h3>
                    <p>{para.description}</p>
                </div>
            ))}
        </div>
    );
}