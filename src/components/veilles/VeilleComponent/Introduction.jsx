import React from "react";
import "../../../styles/veilles/VeilleComponent/Introduction.css"

export default function Introduction({intro}) {
    return (
        <div className="intro-container">
            <div>
                <h2>
                    {intro.title}
                </h2>
                <p>
                    {intro.desc}
                </p>
            </div>

        </div>
    ); 

}