import React from "react";
import "../IntroWebPage/IntroWebPage.css";
import Arrow from "../SVG/Arrow/Arrow";
import "./Interstitial.css";

function Interstitial(props) {
return(
    <>
    <div className="interstitial">
    <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <div id="home-programme-mirage-creative-title"><span className="blogh">@akndesign </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>+236.969.3889 </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> aknDesign Help Desk </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>alexander@akndesign.com </span> </div>
          </div>
          <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <div id="home-programme-mirage-creative-title"><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>At your service </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> Advisors are online </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"> No purchase neccessary </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> Fun for the whole family</span></div>
          </div>
        </div>
      </>
 );
}

export default Interstitial;