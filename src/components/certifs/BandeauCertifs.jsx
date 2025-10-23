import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faGithub,
  faDocker,
  faFigma,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/certifs/BandeauCertifs.css";

const widgets = [
  { name: "React", desc: "UI dynamique", icon: faReact },
  { name: "Next.js", desc: "SSR & SEO", icon: faReact },
  { name: "Node.js", desc: "Backend JS", icon: faNodeJs },
  { name: "Python", desc: "Scripts & API", icon: faPython },
  { name: "TypeScript", desc: "Typage fort", icon: faJs },
  { name: "Figma", desc: "Design UI", icon: faFigma },
  { name: "GitHub", desc: "Versioning", icon: faGithub },
  { name: "Docker", desc: "Containers", icon: faDocker },
  { name: "HTML5", desc: "Structure web", icon: faHtml5 },
  { name: "CSS3", desc: "Style & layout", icon: faCss3Alt },
];

const BandeauCertifs = () => {
  return (
    <div className="bandeau-container">
      <div className="bandeau-scroll">
        {[...widgets, ...widgets].map((item, i) => (
          <div key={i} className="bandeau-widget">
            <FontAwesomeIcon icon={item.icon} className="bandeau-icon" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandeauCertifs;
