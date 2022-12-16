import React from "react";
import "./About.css";
import {useState, useEffect} from "react";
import Splitting from "splitting";
import Buzzfeed from "../SVG/Buzzfeed/Buzzfeed";
import GlobeAndMail from "../SVG/GlobeandMail/GlobeandMail";
import ExternalArrow from "../SVG/ExternalArrow";
import { HashLink as Link } from 'react-router-hash-link';


function About(props) {

    const [aboutButtonText, setAboutButtonText] = useState('');
    const [expanded, setExpanded] = useState(false);


    const readMoreAndClose = () => {
        setExpanded(!expanded);
        setAboutButtonText("Close");
    }

    useEffect(()=>{
        const target = document.querySelectorAll(".wiggle-chars");
        const targetWords = document.querySelectorAll(".i-design-code-and-u");
        const splittingWords = Splitting({ target: targetWords, by: "words" });
        const splittingText = Splitting({ target: target, by: "chars" });      
      }, [])

      
return (
    <>
    <div id="about" className={`${!expanded ? "" : "expanded-about"} rectangle-2`}>
    <div className="col1"></div>
    <div id="about-text" className="col3">
        <div className="my-client-based-work roobert-medium-vermilion-94px-light-blue">My client-based work has received the attention of <a href="https://www.buzzfeednews.com/article/ryanmac/christopher-wylie-cambridge-analytica-scandal" target="_blank" rel="noopener noreferrer" id="blogh-external-link" className="wiggle-chars">Buzzfeed <Buzzfeed></Buzzfeed>
        </a>, the <br></br>
        <a href="https://www.theglobeandmail.com/politics/article-business-plan-hatched-by-christopher-wylie-sheds-light-on-whistle/" target="_blank" rel="noopener noreferrer" id="blogh-external-link" className="wiggle-chars"> Globe and Mail <GlobeAndMail></GlobeAndMail>
        </a>, and Wallpaper* Magazine.
        </div>
        <div style={{color: "#fff"}} className="reckless-light-vermilion-36px "> My freelance clients include  <a  href="https://en.wikipedia.org/wiki/Christopher_Wylie" target="_blank" rel="noopener noreferrer" className=" reckless-light-vermilion-36px external-link-white">Christopher Wylie<ExternalArrow className="external-link-arrow-smaller"></ExternalArrow></a> (Cambridge Analytica), <a href="https://en.wikipedia.org/wiki/Citymapper" target="_blank" rel="noopener noreferrer" className="external-link-white reckless-light-vermilion-36px">Citymapper<ExternalArrow className="external-link-arrow-smaller"></ExternalArrow></a>  , and UsTwo.</div>
        <br></br>
        <div className="about-button-group">
        <div
        onClick={() => readMoreAndClose()}
        className={`roobert-medium-vermilion-25px button-pill-light-blue button-large wiggle-chars`}>  
        <span>{!expanded ? "Read More" : "Close"}</span></div>
        </div>
        
        <div
      id="home"
      onMouseLeave={() => setExpanded(false)}
    >
        </div>
      

      <div className={`${!expanded ? "" : "expanded"} app_inner__tab`}>
        <div
        /* className={`${ !expanded ? "expanded-text-transition" : "expanded"}`}*/>
          <div
            style={{ color: "azure" }} className="reckless-light-vermilion-36px" >
            I've just completed a 6 month intensive coding bootcamp with General Assembly (November 2021, wrapping up May 28th, 2022). I'm proficient in React, Node.Js, ExpressJS, MongoDB, SQL (Postgres), Python, and Django. Whilst Ruby isn't on my list, I'm personally quite interested in further development.  

          </div>
          </div>
          </div>
          </div>
          </div>

    </>
)
}

export default About;
