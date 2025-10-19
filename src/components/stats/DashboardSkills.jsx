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
    details: ["Framework : React, Next.js", "Langages : CSS, HTML, JS , TS", "Outils: Vite", "Librairie : Zod, Axios, Recharts, Motion", "UI/UX : Figma", "CMS : WordPress"],
  },
  {
    category: "BackEnd",
    technologies: 4,
    color: "#10B981",
    details: ["Framework : Flask, Next.js", "Langages : Python, PHP, Java", "Base de données : PostgreSQL, MySQL", "DB Layers : Prisma"],
  },
  {
    category: "Réseau",
    technologies: 2,
    color: "#F59E0B",
    details: ["Outils/Commandes : ping, traceroute, ipconfig", "Protocoles : TCP/IP, HTTP/HTTPS", "Architecture & Topologies : LAN, WAN, VLAN, routing, switching"],
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
