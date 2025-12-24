import React from "react";
import "../../styles/veilles/SubjectVeille.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faEarthEurope, faScaleBalanced, faUser, faVial, faFileCircleExclamation, faArrowDownShortWide, faHexagonNodes} from "@fortawesome/free-solid-svg-icons";
import Introduction from "./VeilleComponent/Introduction";
import SourceStatic from "./VeilleComponent/SourceStatic";
import Image from "./VeilleComponent/Image";
import ImageIAVeille from "../../assets/ImageIAVeille.jpg"
import ImageIAVeille2 from "../../assets/ImageIAVeille2.jpg"

export default function DeepFace() {

    const introData = {
        title : "Introduction",
        desc: "Voila une desc",
    }



    const linkData1 =[
        {
            title: "DeepFace", 
            href: "https://en.wikipedia.org/wiki/DeepFace",
            desc : "Source Wikipedia decrivant le Deepface",
            icon: faWikipediaW, 
        },
        {
            title: "Article",
            href:"https://paperswithcode.com/area/computer-vision" ,
            desc : "Base d'articles concernant les IA et algorithme Deepface",
            icon: faNewspaper, 
        }
    ]



    const linkData2 = [
        {
            title : "CNIL",
            href : "https://cnil.fr/fr/intelligence-artificielle",
            desc : "Article de CNIL sur l'IA",
            icon : faEarthEurope,
        }, 
        {
            title : "Article de l'UE sur l'IA",
            href : "https://ec.europa.eu/commission/presscorner/detail/fr/ip_25_1013", 
            desc : "Article de droit écrit par la commission Européenne sur l'IA", 
            icon : faScaleBalanced, 
        }
    ]

    

    const linkData3 = [
        {
            title : "Rapport de l'impacte social",
            href : "https://ainowinstitute.org/",
            desc: "Article sur l'impacte sociale qu'a l'IA sur la sociétée",
            icon: faUser,
        }, 
        {
            title : "Article sur l'ethique de l'IA Deepface",
            href:"https://technopolice.fr/",
            desc : "Article qui parle de l'ethique de l'IA sur la reconnaissance faciale", 
            icon : faVial,
        }
    ]



    const linkData4 = [
        {
            title : "Reseaux neuronnaux",
            href : "https://distill.pub/", 
            desc:"Fiches sur des reseaux neuronnaux de Deepface",
            icon : faFileCircleExclamation,
        }, 
        {
            title : "Classement des algos",
            href : "https://pages.nist.gov/frvt/html/frvt11.html", 
            desc : "Classement de differents algo du marché",
            icon : faArrowDownShortWide,

        }, 
        {
            title : "Page d'un model IA Deepface", 
            href : "https://docs.ultralytics.com/",
            desc : "Page d'un model IA Deepface", 
            icon : faHexagonNodes, 
        }, 
        {
            title : "Repository d'un model IA", 
            href : "https://github.com/serengil/deepface", 
            desc : "Repository D'un model IA",
            icon : faGithub, 
        }
    
    ]



    const ImageData1 = 

        {
            url : ImageIAVeille, 
            title : "Article sur les reseaux neuronnaux",
            href : "https://distill.pub/2021/multimodal-neurons/", 
            desc : "Voici un article qui concerne les reseaux neuronnaux des Deepface",
        
        }

    const ImageData2 = 

        {
            url : ImageIAVeille2, 
            title : "Article sur le Deepface",
            href : "https://www.cs.toronto.edu/~ranzato/publications/taigman_cvpr14.pdf", 
            desc : "Voici un article qui concerne le début Deepface",
        
        }

    
    




    return (
        <div className="veille-content-main">
            <h1 className="veille-content-main-title">IA DeepFace et Reconnaissance d'objet</h1>
            <Introduction intro={introData}/>
            <SourceStatic CompoTitle="Source d'introduction" link={linkData1}/>
            <Image ImageURL={ImageData1}/>
            <SourceStatic CompoTitle="Source juridique" link={linkData2}/>
            <SourceStatic CompoTitle="Impacte social et ethique" link={linkData3}/>
            <Image ImageURL={ImageData2}/>
            <SourceStatic CompoTitle="Articles techniques" link={linkData4}/>
        </div>
    );
}