import React from "react";
import "./RecentWork.css";

function RecentWork (props) {

  console.log(props);

  return (
    <>
    <div id="recentwork">
    <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <h4 className="home-programme-mirage-creative-title blogh">{props.recentWork}</h4>
          </div>
        <div className="row-1">
        <div className="col4"> 
          <div className="misfits-a-new-stacki blogh">Misfits
          <div className="roobert-medium-vermilion-41px">A new stacking game</div></div>

          <div className="misfits-is-a-new-sta reckless-light-vermilion-36px">{props.misfitsIsANewSta}      <strong>Anhtony Burrril said this and Damien said that</strong> </div>
          <div className="roobert-medium-vermilion-25px button-pill wiggle-chars chars splitting">Read more</div>
        </div>

        <div className="g_-misfits_30082019_-shot_7_403">
          <img className="image-1" src={props.circleNewGame} alt="Coming Soon a New Game" />
          <img
            className="g_-misfits_30082019_-shot_7_403-1"
            src={props.g_Misfits_30082019_Shot_7_403}
            alt="g_Misfits_30082019_Shot_7_403" />
            
        </div>
       
        </div>
        <div className="thin-line" alt="Line" />
        <div className="row-1">
        <div className="citymapper_-vancouver_final_highres">
          <img
            className="citymapper_-vancouver_final_highres-1"
            src={props.citymapper_Vancouver_Final_Highres}
            alt="Citymapper_Vancouver_final_highres" />
        </div>
        <div>
        <div className="citymapper-vancouver blogh">{props.citymapperVancouver}</div>
        <div className="citymapper-is-a-publ reckless-light-vermilion-36px">{props.citymapperIsAPubl}</div>
        </div>
        </div>
      </div>
        
         
      <div className="lessfeatured-title">Misfits
      </div>
        
      
</>

)

}

export default RecentWork;
