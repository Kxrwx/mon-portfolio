import React from 'react'
import '../../styles/Scolaire.css'

const schools = [
  { name: 'Lycée Jean Moulin', year: '2015-2018', description: 'Baccalauréat scientifique' },
  { name: 'Université Paris-Saclay', year: '2018-2021', description: 'Licence Informatique' },
  { name: 'Master Informatique', year: '2021-2023', description: 'Spécialisation Développement Web' },
  { name: 'Formation React', year: '2023', description: 'Formation courte développement web' }
]

function Scolaire() {
  return (
    <div className="timeline-horizontal-container">
      <div className="timeline-horizontal">
        {schools.map((school, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-card">
              <h3>{school.name}</h3>
              <span className="timeline-year">{school.year}</span>
              <p>{school.description}</p>
            </div>
            <div className="timeline-point"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scolaire
