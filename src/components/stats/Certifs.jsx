import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/stats/Certifs.css'

// Données : nombre de certificats par domaine
const data = [
  { name: 'Certifs', value: 3 }
]

// Certificats détaillés avec dates
const certifsDetail = {
  Certifs: [
    { nom: 'React', date: '2023-05' },
    { nom: 'Node.js', date: '2023-08' },
    { nom: 'TypeScript', date: '2024-01' }
  ]
}

// Couleurs pour les domaines
const COLORS = ['#4f46e5'] // violet, bleu

function Certifs() {
  return (
    <div className="stats-container">
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={50}
              innerRadius={60}
              outerRadius={120}
              paddingAngle={3}
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="legend-wrapper">
        {Object.entries(certifsDetail).map(([domaine, certs], index) => (
          <div key={index} className="legend-item">
            <span className="legend-name">Certification : {certs.length}</span>
            <span className="legend-value">
              {certs.map(c => `${c.nom} (${c.date})`).join(', ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifs
