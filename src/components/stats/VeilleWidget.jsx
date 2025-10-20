import React from "react";
import { motion } from "framer-motion";
import "../../styles/stats/VeilleWidget.css";

const veilleData = {
  ligne1: ["Next.js", "IA", "Cybersécurité", "Cloud", "API REST"],
  ligne2: ["DevOps", "UI/UX", "Machine Learning", "Automatisation", "NoSQL"],
  ligne3: ["Docker", "Serverless", "Kubernetes", "TypeScript", "Performance Web"]
};

const Row = ({ tags, reverse = false, duration = 20 }) => (
  <div className="veille-row">
    <motion.div
      className="veille-scroll"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{
        x: { repeat: Infinity, repeatType: "loop", duration: duration, ease: "linear" }
      }}
    >
      {[...tags, ...tags].map((tag, i) => (
        <span key={i} className="veille-tag">{tag}</span>
      ))}
    </motion.div>
  </div>
);

export default function VeilleWidget() {
  return (
    <div className="veille-widget">
      <Row tags={veilleData.ligne1} duration={20} />
      <Row tags={veilleData.ligne2} reverse={true} duration={22} />
      <Row tags={veilleData.ligne3} duration={24} />
    </div>
  );
}
