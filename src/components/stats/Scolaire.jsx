"use client";
import { motion } from "framer-motion";   
import { ResponsiveContainer, LineChart, Line } from "recharts";
import '../../styles/stats/Scolaire.css'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const data = [
  { year: "2023", school: "Seminaire de Walbourg", desc : "Bacalauréa Maths Informatique" },
  { year: "2024", school: "BUT GEII Haguenau", desc : "" },
  { year: "2026", school: "BTS SIO René Cassin", desc : "" },
];

export default function TimelineScolaire() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title"><FontAwesomeIcon icon={faUserGraduate}/>  Mon parcours scolaire</h2>

      <ResponsiveContainer width="90%" height={100}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey={() => 1}
            stroke="#5C40D8"
            strokeWidth={3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="timeline-points">
        {data.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.3, duration: 0.6, type: "spring" }}
            className="timeline-point-wrapper"
          >
            <motion.div whileHover={{ scale: 1.2 }} className="timeline-dot" />
            <p className="timeline-school">{item.school}</p>
            <p className="timeline-desc">{item.desc}</p>
            <p className="timeline-year">{item.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
