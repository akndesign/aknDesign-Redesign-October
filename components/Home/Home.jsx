import React from "react";
import "../IntroWebPage/IntroWebPage.css";
import {useState, useEffect} from "react";
import Splitting from "splitting";

function Home(props) {

    useEffect(()=>{
    const target = document.querySelectorAll(".hi-its-alexander-n-1");
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
    <div id="home" className="col-top"></div>
    <div className="introwebpage">
        <div className="col1"></div>
        <div className="col3">
          <div className="nav-container neuemontreal-medium-vermilion-25px">
          <div className="akndesign_logo_white_retina-01"><img src="../img/akndesign_logo_white_retina-01.svg" /></div>
            <div className="nav">
            <div className={`localtime ${twentyFourHoursEffect >= 0 && twentyFourHoursEffect <= 6  ? "nighttime" : ""}`}>{hoursEffect}<div className="tick">:</div>{minutesEffect}</div>
            <div className="boston-ma-usa">Boston, MA, USA</div>
            <div className="email-me wiggle">
              <div className="button-pill ">Email Me</div>
            </div>
            </div>
            </div>
          <div className="col2">
          <div className="hi-its-alexander-n grow-rotate">
            <div className="hi-its-alexander-n-1 neuemontreal-medium-vermilion-94px">Howdy, I'm Alexander</div>
            </div>
            <div className="i-design-code-and-u gtalpinatrial-light-vermilion-51px">I design, code and develop user interfaces. I use React, JavaScript, and dabble in Python.  I examine joy, play and discovery in my work.</div>
            <div className="recent-flower-group">
            <div className="recent-work">Recent Work</div>
              <div className="flower-group grow-rotate">
                <div className="flower breathing"><img src="../img/flower.svg"/></div>
              </div>
              
            </div>
          </div>
          {/*this div keeps the space-betwwen of col 3 equal*/}
          <div></div>
        </div>
      </div>
      </>
 );
}

export default Home;