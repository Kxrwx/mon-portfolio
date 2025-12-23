import React from "react";
import "../../../styles/veilles/VeilleComponent/Image.css"

export default function Image ({ImageURL}) {
    return (
        <div className="image-container">
             <a href={ImageURL.href} target="_blank" rel="noopener noreferrer" ><img src={ImageURL.url} alt="Veille Image" className="image-veille" /><h3>{ImageURL.title}</h3><p>{ImageURL.desc}</p></a>
        </div>       
    ); 
}