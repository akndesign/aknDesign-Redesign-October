import React from "react";
import "./../RecentWork.css";

function RotatingCircle (props) {
  
      return (
            <div id="circle" className="blur">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="225px" height="225px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                  <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text>
                    <textPath xlinkHref="#circlePath">COMING SOON • A NEW GAME • FORTY BLOCKS•</textPath>
                  </text>
                </g>
              </svg>
            </div>
      );
    }

  export default RotatingCircle;
