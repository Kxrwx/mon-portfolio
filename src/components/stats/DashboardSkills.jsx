"use client";
import React, { useState } from "react";
import SkillsBarChart from "./SkillsBarChart";
import SkillsDetailWidget from "./SkillsDetailWidget";
import "../../styles/stats/DashboardSkills.css";

const data = [
  {
    category: "FrontEnd",
    technologies: 6,
    color: "#6366F1",
    details: ["HTML", "CSS", "JS", "React", "Tailwind", "Next.js"],
  },
  {
    category: "BackEnd",
    technologies: 4,
    color: "#10B981",
    details: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    category: "Réseau",
    technologies: 3,
    color: "#F59E0B",
    details: ["TCP/IP", "Cisco", "Wireshark"],
  },
];

export default function DashboardSkills() {
  const [selectedCategory, setSelectedCategory] = useState(data[0]);

  return (
    <div className="dashboard-skills">
      <SkillsBarChart
        data={data}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SkillsDetailWidget
        category={selectedCategory.category}
        details={selectedCategory.details}
      />
    </div>
  );
}
