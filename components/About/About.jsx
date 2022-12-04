import React from "react";
import "./About.css";
import {useState, useEffect} from "react";
import Splitting from "splitting";
import Buzzfeed from "../SVG/Buzzfeed/Buzzfeed";
import GlobeAndMail from "../SVG/GlobeandMail/GlobeandMail";
import ExternalArrow from "../SVG/ExternalArrow";
import { HashLink as Link } from 'react-router-hash-link';

function About(props) {

    useEffect(()=>{
        const target = document.querySelectorAll(".wiggle-chars");
        const targetWords = document.querySelectorAll(".i-design-code-and-u");
        const splittingWords = Splitting({ target: targetWords, by: "words" });
        const splittingText = Splitting({ target: target, by: "chars" });
      }, [])

return (
    <>
    <div id="about" className="rectangle-2">
    <div className="col1"></div>
    <div className="col3">
        <div className="my-client-based-work roobert-medium-vermilion-94px-light-blue">My client-based work has received the attention of <a href="https://www.buzzfeednews.com/article/ryanmac/christopher-wylie-cambridge-analytica-scandal" target="_blank" rel="noopener noreferrer" id="blogh-external-link" className="wiggle-chars">Buzzfeed <Buzzfeed></Buzzfeed>
        </a>, the <br></br>
        <a href="https://www.theglobeandmail.com/politics/article-business-plan-hatched-by-christopher-wylie-sheds-light-on-whistle/" target="_blank" rel="noopener noreferrer" id="blogh-external-link" className="wiggle-chars"> Globe and Mail <GlobeAndMail></GlobeAndMail>
        </a>, and Wallpaper* Magazine.
        </div>
        <div style={{color: "#fff"}} className="reckless-light-vermilion-36px "> My freelance clients include  <a  href="https://en.wikipedia.org/wiki/Christopher_Wylie" target="_blank" rel="noopener noreferrer" className=" reckless-light-vermilion-36px external-link-white">Christopher Wylie<ExternalArrow className="external-link-arrow-smaller"></ExternalArrow></a> (Cambridge Analytica), <a href="https://en.wikipedia.org/wiki/Citymapper" target="_blank" rel="noopener noreferrer" className="external-link-white reckless-light-vermilion-36px">Citymapper<ExternalArrow className="external-link-arrow-smaller"></ExternalArrow></a>  , and UsTwo.</div>
        <br></br>
        <div className="about-button-group">
        <div className="roobert-medium-vermilion-25px button-pill-light-blue button-large">Read more  +</div>
       </div> {/* <div className="reckless-light-blue-36px">I use React, JavaScript, and dabble in Python. I know Dijkstra's algorithmm, Big O Notation, and computational sorting</div> */}
      
    </div>
    </div>
    </>
)
}

export default About;
