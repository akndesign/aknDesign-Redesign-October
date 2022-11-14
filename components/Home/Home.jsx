import React from "react";
import "../IntroWebPage/IntroWebPage.css";
import {useState, useEffect} from "react";
import Splitting from "splitting";
import Arrow from "../Arrow/Arrow";

function Home(props) {

    useEffect(()=>{
      const target = document.querySelectorAll(".wiggle-chars");
      const targetWords = document.querySelectorAll(".i-design-code-and-u");
      const splittingWords = Splitting({ target: targetWords, by: "words" });
      const splittingText = Splitting({ target: target, by: "chars" });
    }, [])


    const [hoursEffect, setHours ] = useState("");
    const [twentyFourHoursEffect, settwentyFourHours ] = useState("");
    const [minutesEffect, setMinutes ] = useState("");
  
    useEffect(() => {
      const interval =  setInterval(() => {
        fetch(`http://worldclockapi.com/api/json/est/now`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((fileTimetoLocalTime) => {
  
           let unixTimeStamp = (fileTimetoLocalTime).currentDateTime;
           let localTime = unixTimeStamp.match(/\d\d:\d\d/)[0];
            //for debugging:
           //let localTime = "08:04";
           console.log(localTime);
        
           let [hours, minutes] = localTime.split(':');
           settwentyFourHours(hours);
  
           let hoursConverted = parseInt(hours, 10);
      
           if (hoursConverted === 0 ) {
            
            setHours(`${12}`);
            setMinutes(`${minutes} am`);
           
          } else if (hoursConverted >= 1 && hoursConverted <= 11) {
            
            setHours(`${hoursConverted}`);
            setMinutes(`${minutes} am`);
  
           } else if (hoursConverted === 12){
  
            setHours(`${hoursConverted}`);
            setMinutes(`${minutes} pm`);
  
           } else if (hoursConverted > 12){
  
            let hoursConverted12Hours = hours - 12
            setHours(`${hoursConverted12Hours}`);
            setMinutes(`${minutes} pm`);
  
           } 
           
  
        }).catch((err) => {
          console.log(err.message);
        });
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  

  return (
   <>
    <div id="home" className="col-top"><div className="hi-its-alexander-n-1 neuemontreal-medium-vermilion-94px">Hi, I'm Alexander Neumann.</div></div>
    {/* <div className="home-programme-item scroll-trigger scroll-visible visible is-in-view">
          <h4 id="home-programme-mirage-creative-title" className="home-programme-item-title">READY TO HIRE CALL NOW</h4>
          </div> */}

    <div className="introwebpage">
        <div className="col1"></div>
        <div className="col3">
          <div className="nav-container neuemontreal-medium-vermilion-25px">
          <div className="akndesign_logo_white_retina-01"><img src="../img/akndesign_logo_white_retina-01.svg" /></div>
          <div className="nav neuemontreal-medium-vermilion-25px">
            <div className={`localtime ${twentyFourHoursEffect >= 0 && twentyFourHoursEffect <= 6  ? "nighttime" : ""}`}>{hoursEffect}<div className="tick">:</div>{minutesEffect} •</div>
            <div className="boston-ma-usa">Boston, MA, USA •</div>
            
            <div className="flower-group">
                <img src="../img/oval.svg"></img>
               
              </div>
              {/* <div className="email-me wiggle">
              <div className="button-pill ">Ready to Hire</div>
            </div> */}
            </div>
            </div>
          <div className="col2">
          <div className="hi-its-alexander-n grow-rotate">
            
            <div className="hi-its-alexander-n-1 neuemontreal-medium-vermilion-94px">I examine joy, play and discovery in my work.</div>
            </div>
          
            
            {/*<div className="recent-work about">Recent Work</div>*/}
            {/* <div className="flower-group grow-rotate">
              <div className="flower breathing"><img src="../img/flower-outline.svg"/></div>
            </div> */}
              
            </div>

            <div className="recent-flower-group">
            <div className="arrow-button">
            <Arrow/>
              <div className="neuemontreal-medium-vermilion-25px wiggle-chars">Press Me</div>
            </div>
            <div className="arrow-button">
              <div className="neuemontreal-medium-vermilion-25px wiggle-chars">Recent Work</div><Arrow/>
            </div>
            </div>
          </div>
          {/*this div keeps the space-betwwen of col 3 equal*/}
          <div></div>
        </div>
      </>
 );
}

export default Home;