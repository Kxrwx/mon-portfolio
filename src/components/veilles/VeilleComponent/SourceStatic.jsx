import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/veilles/VeilleComponent/SourceStatic.css"

export default function SourceStatic({CompoTitle, link}) {

    return (
        <div className="source-static-main">
            <div>
                <h2>{CompoTitle || "Sources"}</h2> 
                
                {link.length > 0 ? (
                    <ul className="source-list">
                        {link.map((linkItem, index) => (
                            <li key={index} className="source-item">
                                <a 
                                    href={linkItem.href} 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                >
                                   
                                    <div><h3><FontAwesomeIcon icon={linkItem.icon}/></h3> <h3>{linkItem.title}</h3></div>
                                    <div><p>{linkItem.desc}</p></div>
                                </a>
                                
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Liste de liens non disponible.</p>
                )}
            </div>
        </div>
    
    ); 

}