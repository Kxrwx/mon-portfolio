import React from 'react';
import '../../../styles/project/ProjetComponent/Timeline.css'; // Nouveau CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Composant générique pour une timeline verticale (frise chronologique de jalons).
 * @param {Array<object>} timelineData - Tableau d'objets : [{ date, title, description, icon }]
 */
export default function Timeline({ timelineData }) {

    if (!timelineData || timelineData.length === 0) {
        return <p className="timeline-placeholder">Aucun jalon de projet fourni.</p>;
    }

    return (
        <div className="timeline-vertical-container">
            <h3>Chronologie du Projet</h3>
            
            <div className="timeline-list-vertical">
                {timelineData.map((item, index) => (
                    <div key={index} className="timeline-milestone-vertical">
                        
                        <div className="milestone-icon-wrapper">
                            {item.icon && (
                                <FontAwesomeIcon icon={item.icon} className="milestone-icon" />
                            )}
                        </div>
                        
                        <div className="milestone-content-vertical">
                            <h4 className="milestone-date">{item.date}</h4>
                            <h5 className="milestone-title">{item.title}</h5>
                            <p className="milestone-description">{item.description}</p>
                            
                            {item.details && <p className="milestone-details">{item.details}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}