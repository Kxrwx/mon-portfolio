import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/stats/Certifs.css'

const data = [
  { name: 'Certifs', value: 3 }
]

const certifsDetail = {
  Certifs: [
    { nom: 'React', date: '2023-05' },
    { nom: 'Node.js', date: '2023-08' },
    { nom: 'TypeScript', date: '2024-01' }
  ]
}

function Certifs() {
  return (
    <div className="stats-container">
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <PieChart>
            <defs>
              <linearGradient id="gradCertifs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity={1}/>
                <stop offset="100%" stopColor="#a78bfa" stopOpacity={1}/>
              </linearGradient>
            </defs>

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
                  fill="url(#gradCertifs)" // ← utilise le gradient
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
