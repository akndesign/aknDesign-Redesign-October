import React from "react";
import "./EasterEgg.css";
import {useState, useEffect} from "react";
import ExternalArrow from "../SVG/ExternalArrow";
import lottie from "lottie-web";
import { HashLink as Link } from 'react-router-hash-link';
import Eyes from "./Eyes"


function EasterEgg(props) {

  const [expanded, setExpanded] = useState("");
  const [expandedText, setExpandedText] = useState("");

  const expandDiv = () => {
    setExpanded("expanded");
    setExpandedText("");
  }

  const collapseDiv = () => {
    setExpanded("");
    setExpandedText("expanded-text-transition");
  }

  return (

    //
   <>
    <div id="home" onMouseLeave={collapseDiv} className={`col-top`}>
      <div onClick={expandDiv} className="roobert-medium-vermilion-25px button-pill-easter-egg"><span>What's here?</span>
    <div className="googley-eyes">
    {/* <img className="cave" src="../img/cave-eyes-02.svg"></img> */}

    
    <Eyes></Eyes>

    </div>

    </div>  <div className={`${expanded} app_inner__tab`}> 

    <div className={`${expanded} expanded-text ${expandedText}`}>
 
        <div className="roobert-medium-vermilion-94px-light-blue">Nothin' but our love for you. 
        </div>
        <div style={{color: "azure"}} className="reckless-light-vermilion-36px">We like you're curious. You like to discover. <br></br>The little things that matter. 

        So we found a video just for you. </div>
        
        <a  style={{margin: "0 auto"}} href="https://www.youtube.com/watch?v=bzLaL0SVwwI" target="_blank" rel="noopener noreferrer"><div className="roobert-medium-vermilion-25px button-pill-light-blue button-large">See video <ExternalArrow style={{fill: "azure"}} className="external-link-arrow-smaller"></ExternalArrow></div></a>
      {/* <div className="reckless-light-blue-36px">I use React, JavaScript, and dabble in Python. I know Dijkstra's algorithmm, Big O Notation, and computational sorting</div> */}
      
    </div>

    
    
    
  </div></div>
   
    
      
       

    {/* <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <h4 id="home-programme-mirage-creative-title" className="horizontal-ticker-title">READY TO HIRE CALL NOW</h4>
          </div> */}
      </>
 );
}

export default EasterEgg;