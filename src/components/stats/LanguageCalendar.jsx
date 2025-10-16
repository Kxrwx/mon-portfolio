import React from 'react'
import '../../styles/stats/LanguageCalendar.css'

// Données : chaque année avec les langages appris
const data = {
  2023: ['HTML', 'CSS', 'Python'],
  2024: ['JavaScript', 'TypeScript'],
  2025: ['React', 'Next.js'],
  2026: ['Rust', 'Go'],
}

function LanguageCalendar() {
  return (
    <div className="calendar-container">
      {Object.entries(data).map(([year, languages]) => (
        <div key={year} className="year-card">
          <h2>{year}</h2>
          <ul>
            {languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default LanguageCalendar
