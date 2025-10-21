import React, { useState, useEffect } from "react";
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
  const [itemsPerView, setItemsPerView] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  // Adapter le nombre de widgets visibles selon la largeur
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) setItemsPerView(2);
      else if (window.innerWidth < 768) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Défilement toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + itemsPerView >= widgets.length ? 0 : prev + itemsPerView
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  // Crée le bloc visible
  const visibleWidgets = widgets
    .concat(widgets) // pour boucle infinie
    .slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="bandeau-container">
      <div className="bandeau-row">
        {visibleWidgets.map((item, i) => (
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
