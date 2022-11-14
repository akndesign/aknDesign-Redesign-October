import React from "react";
import "./RecentWork.css";

function RecentWork (props) {

  console.log(props);

  return (
    <>
    <div id="recentwork">
    <div class="home-programme-item scroll-trigger scroll-visible visible is-in-view">
          <h4 id="home-programme-mirage-creative-title" class="home-programme-item-title">{props.recentWork}</h4>
          </div>
        <div className="row-1">
        <div className="col4"> 
          <div className="misfits-a-new-stacki neuemontreal-medium-vermilion-94px">Misfits
          <div className="neuemontreal-medium-vermilion-41px">A new stacking game</div></div>

          <div className="misfits-is-a-new-sta gtalpinatrial-light-vermilion-51px">{props.misfitsIsANewSta}</div>
          <div className="neuemontreal-medium-vermilion-25px wiggle-chars words chars splitting">Read more</div>
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
        <div className="citymapper-vancouver neuemontreal-medium-vermilion-94px">{props.citymapperVancouver}</div>
        <div className="citymapper-is-a-publ gtalpinatrial-light-vermilion-51px">{props.citymapperIsAPubl}</div>
        </div>
        </div>
      </div>
        
         
      <div className="lessfeatured-title">Misfits
      </div>
        
      
</>

)

}

export default RecentWork;
