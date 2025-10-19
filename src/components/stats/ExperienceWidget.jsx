import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  { name: "React", icon: faReact, color: "text-blue-500", img: "/images/react.png" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400", img: "/images/js.png" },
  { name: "HTML", icon: faHtml5, color: "text-red-500", img: "/images/html.png" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-600", img: "/images/css.png" },
];

const ExperienceWidget = () => {
  return (
    <div className="w-full max-w-[600px] min-w-[300px] bg-white rounded-xl shadow-md p-4 mx-auto">
      <h3 className="text-lg font-bold mb-3 text-center">Technologies vues durant mon stage</h3>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-2 bg-gray-50 rounded-lg shadow-sm"
          >
            {/* Image si tu as une image pour la techno */}
            <img src={tech.img} alt={tech.name} className="w-12 h-12 mb-2" />
            {/* Icône FontAwesome */}
            <FontAwesomeIcon icon={tech.icon} className={`text-2xl ${tech.color} mb-1`} />
            <span className="text-xs font-semibold text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWidget;
