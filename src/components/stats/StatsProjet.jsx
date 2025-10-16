import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/stats/StatsProjet.css'

const data = [
  { name: 'App Web React', value: 2 },
  { name: 'HTML/CSS', value: 1 },
]

const COLORS = ['#4f46e5', '#0ea5e9'] // violet, bleu

function StatsProjet() {
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
              endAngle={0}
              innerRadius={60}
              outerRadius={120}
              paddingAngle={5}
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
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="legend-name">{entry.name} :</span>
            <span className="legend-value">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsProjet
