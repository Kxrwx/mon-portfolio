"use client";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import "../../styles/stats/SkillsBarChart.css";

export default function SkillsBarChart({ data, selectedCategory, setSelectedCategory }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Palette de 3 couleurs (tu peux les changer facilement ici)
  const colors = ["#6366F1", "#10B981", "#F59E0B"];

  return (
    <div className="skills-bar-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
          barCategoryGap="70%"
        >
          <XAxis
            dataKey="category"
            tick={{ fontSize: 14, fill: "#000" }}
            axisLine={false}
            tickLine={false}
          />

          <Bar
            dataKey="technologies"
            barSize={90}
            shape={(props) => {
              const { x, y, width, height, index } = props;
              const fill = colors[index % colors.length]; // Cycle des 3 couleurs
              const isHovered = hoveredIndex === index;

              return (
                <motion.rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  rx="12"
                  ry="12"
                  fill={fill}
                  initial={{ scaleY: 1 }}
                  animate={{
                    scaleY: isHovered ? [1, 1.15, 0.95, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{ originY: "bottom", cursor: "pointer" }}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setSelectedCategory(data[index]);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
