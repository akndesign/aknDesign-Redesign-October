import React from "react";
import "../IntroWebPage/IntroWebPage.css";
import {useState, useEffect, useRef} from "react";
import Splitting from "splitting";
import Arrow from "../SVG/Arrow/Arrow";
import { HashLink as Link } from 'react-router-hash-link';
import dayjs from 'dayjs';
import SunCalc from 'SunCalc';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import lottie from "lottie-web";
import EasterEgg from "./EasterEgg";

function Home(props) {

    useEffect(()=>{
      const target = document.querySelectorAll(".wiggle-chars");
      const targetWords = document.querySelectorAll(".i-design-code-and-u");
      const splittingWords = Splitting({ target: targetWords, by: "words" });
      const splittingText = Splitting({ target: target, by: "chars" });
    }, [])


    const [hoursEffect, setHours ] = useState("");
    const [twentyFourHoursEffect, settwentyFourHours ] = useState('.');
    const [minutesEffect, setMinutes ] = useState("");
    const [setAttitudeEffect, setAttitude ] = useState('loading');
    const [buttonText, setButtonText] = useState('Ready to Hire');
    const [buttonAnimation, setbuttonAnimation] = useState('opacity');

    const dayOrNight = useRef(null); 

    useEffect(() => {
      
      setInterval(function(){ 
        
        let bostonDayorNight = (SunCalc.getPosition(new Date(), 42.3601, -71.0589).altitude*100);
        
          if (bostonDayorNight > -1) {
            setAttitude('sun');
          } else if (bostonDayorNight <= -1) {
            setAttitude('moon');
          } else {
            setAttitude('hide');
          }
        }, 1000), 
          
        dayjs.extend(utc);
        dayjs.extend(timezone)
        dayjs.extend(customParseFormat);
      
        let bostonTimeHours = dayjs().tz('America/New_York').format('h');
        let bostonTimeMinutes = dayjs().tz('America/New_York').format('mm A');
        let bostonTimeTwentyFourHours = dayjs().tz('America/New_York').format('HH');

        if (!bostonTimeHours) {
           throw new Error(
          `Unable to fetch time`
        );
      }

      settwentyFourHours(bostonTimeTwentyFourHours);
      setHours(`${bostonTimeHours}`);
      setMinutes(`${bostonTimeMinutes}`);

      }, []);


    const containerOne = useRef(null);
    const containerTwo = useRef(null);
    const containerThree = useRef(null);
  
    useEffect(() => {
      lottie.loadAnimation({
        name:"stars",
        container: containerOne.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../dist/img/illustrationofme_animated.json")

      }), lottie.loadAnimation({
        name:"stars-2",
        container: containerTwo.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../dist/img/email-copied-stars-white.json")

      }), lottie.loadAnimation({
        name:"Alexander",
        container: containerThree.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../dist/img/email-copied-stars-white-2.json")
      })
    },  []);

    copytoClipboard = (e) => {
      e.preventDefault();
      lottie.play("stars")
      navigator.clipboard.writeText('alexander@akndesign.com')
      console.log('User selected copy to clipboard');
      setButtonText("Email Copied!");
      setbuttonAnimation("")
      setTimeout(()=>{setButtonText('Ready to Hire'); setbuttonAnimation("hide")}, 2250)
    }


  return (

    
   <>
    <EasterEgg />
    {/* <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <h4 id="home-programme-mirage-creative-title" className="horizontal-ticker-title">READY TO HIRE CALL NOW</h4>
          </div> */}

    <div className="introwebpage">
        <div className="col1"></div>
        <div className="col3">
          <div className="nav-container roobert-medium-vermilion-25px">
          <div className="akndesign_logo_white_retina-01"><img src="../img/akndesign_logo_white_retina-01.svg" /></div>
          <div className="nav roobert-medium-vermilion-25px">
            <div className={`localtime ${twentyFourHoursEffect >= 0 && twentyFourHoursEffect <= 6  ? "nighttime" : ""}`}>{hoursEffect}<div className="tick">:</div>{minutesEffect} 
              <div className="sunOrMoonState" >
                   <img ref={dayOrNight} className={`${setAttitudeEffect}`} src={`../img/${setAttitudeEffect}.svg`}></img> 
                   {/* <img className="loading down-animation" src="../img/loading.svg"></img> */}
              </div>
            </div>
            <div className="boston-ma-us "> Boston, MA, USA </div>
            <div className="cta-hiring">
            <div className="roobert-medium-vermilion-25px button-pill-red wiggle-chars" onClick={copytoClipboard} onMouseUp={() => lottie.stop("stars")}>{buttonText}</div> 
            <div ref={containerTwo} className={`email ${buttonAnimation}`}></div>    
              </div>
              
              {/* <div className="email-me wiggle">
              <div className="button-pill ">Ready to Hire</div>
            </div> */}
            </div>
            </div>
          <div className="col2">
          <div ref={containerOne} className="illustration"></div> 
          {/* <img className="illustration" src={"../img/illustration of me-05.svg"}></img>    */}
          <div className="hi-its-alexander-n grow-rotate">
          <div className="hi-its-alexander-n-1 roobert-medium-vermilion-94px">I'm Alexander Neumann, <br></br>a designer and coder. </div>
         
        
          {/* <div className="hi-its-alexander-n-1 roobert-medium-vermilion-94px">I examine <span className="reckless-light-vermilion-36px">joy, play,</span>and<span className="reckless-light-vermilion-51px"> discovery</span> in my work.</div> */}
              
            </div>
            
            {/*<div className="recent-work about">Recent Work</div>*/}
            {/* <div className="flower-group grow-rotate">
              <div className="flower breathing"><img src="../img/flower-outline.svg"/></div>
            </div> */}
              
            </div>

            <div className="recent-flower-group">
            <div className="reckless-light-vermilion-36px">I examine joy, play and discovery in my work.</div>
       
             
              {/* <div className="flower breathing"><div className="roobert-medium-vermilion-25px wiggle-chars">Continue</div><img src="../img/flower-outline.svg"/></div> */}
            
            </div>
            <div className="arrow-button wiggle-chars ">
            <Link to="#recentwork" className="roobert-medium-vermilion-25px button-pill" style={{"z-index": "2"}} activeclass="true" spy="true" smooth="true" offset={-70} duration={500} >Recent Work</Link>
            <Arrow></Arrow>
            <div ref={containerThree} className="recent-work-button"></div> 
            
            </div>
            
          </div>
          {/*this div keeps the space-betwwen of col 3 equal*/}
          <div></div>
        </div>
      </>
 );
}

export default Home;