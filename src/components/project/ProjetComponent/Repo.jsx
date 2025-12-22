import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/project/ProjetComponent/Repo.css";

export default function Repo({ repository }) { 
    
    // 1. Vérification corrigée : vérifier si c'est un tableau non vide.
    if (!repository || !Array.isArray(repository) || repository.length === 0) { 
        return <p>Aucun Repository GitHub associé.</p>;
    }
    
    // Supprimer la ligne 'const repoIcon = ...' car elle doit être dans le map
    // La définition de repoIcon est maintenant dans la boucle map, utilisant 'repo'

    return (
        <div className="repo-container">
            
            {repository.map((repo, index) => {

                return (
                    <a key={index}
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="repo-item"
                        title={repo.description}
                    >
                        <div>
                            <h5><FontAwesomeIcon 
                                className="repoIcon" 
                                icon={repo.icon}
                                style={{ color: repo.colorIcon }} 
                            /></h5> 
                        </div>
                        <div>
                            <h2>{repo.title}</h2> 
                            <p>{repo.description}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    ); 
}