import React from "react";
import "./RecentWork.css";
import FeaturedWork from './WorkComponents/FeaturedWork';
import ProjectWork from './WorkComponents/ProjectWork';
import RotatingCircle from "./WorkComponents/RotatingCircle";
import ImageSlider from "./ImageSlider/ImageSlider";


function RecentWork (props) {

  console.log(props);

  return (
    <>
    <div id="recentwork">
    <div className="interstitial">
    <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <div id="home-programme-mirage-creative-title"><span className="blogh">@akndesign </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>+236.969.3889 </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> aknDesign Help Desk </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>alexander@akndesign.com </span> </div>
          </div>
          <div className="horizontal-ticker scroll-trigger scroll-visible visible is-in-view">
          <div id="home-programme-mirage-creative-title"><span className="gtalpinatrial-medium-red-64px"><img className="phone" src="../../img/phone.svg"></img>Recent Work </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> Advisors are online </span><img className="star" src="../../img/star2-01.svg"></img><span className="gtalpinatrial-medium-red-64px"> No purchase neccessary </span><img className="star" src="../../img/star2-01.svg"></img><span className="blogh"> Fun for the whole family</span></div>
          </div>
        </div>

        <FeaturedWork 
        //backgroundColour="var(--vermilion)"
        backgroundColour="var(--neon-green)"
        nameOfWork="Misfits" 
        subTitle="A new stacking game" 
        description={props.misfitsIsANewSta}
        quotes="'Misfits takes simple geometry and translates it into
        an absorbing game that is both beautiful to look at
        and fun to play.'"
        quoteAuthor="- Anthony Burrill, renowned UK-based
        graphic artist, profiled by Apple"
        mainImage={props.g_Misfits_30082019_Shot_7_403}
        sliderImages={[props.g_Misfits_30082019_Shot_7_403, "https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE", "https://i.picsum.photos/id/466/536/354.jpg?hmac=COFTOU6K4rrBE2uslra_XfQzvIZTzo0IA9mX1UCh6IE", "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"]}
        mainImageContainer={'misfits-container'}
        mainImageClassName={'g_Misfits_30082019_Shot_7_403'}
        circleNewGame={<RotatingCircle></RotatingCircle>}
        buttonText= {"See Player Reactions"}
        ></FeaturedWork>
        
        <FeaturedWork 
        //backgroundColour="var(--vermilion)"
        backgroundColour="var(--pale-blue)"
        nameOfWork=  {'Citymapper: \n Vancouver Mascot'}
        subTitle="A mascot for 50 million user strong app" 
        description={"Citymapper is a public transit app and mapping service, widely used across London since 2011. We collaborated with their design team to create a 'dude' that illustrated the best attributes of this western Canadian city. The final design is now included in their app."}
        buttonText= {"On their website"}
        mainImage={props.citymapper_Vancouver_Final_Highres}
        mainImageContainer={'citymapper-container'}
        mainImageClassName={'citymapper_-vancouver_final_highres-1'}
        sliderImages={[props.citymapper_Vancouver_Final_Highres, "http://https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"]}
        ></FeaturedWork>

        <ProjectWork
        
        projectBackgroundColour="var(--vermilion)"
        projectNameOfWork=  {'Good Day Dashbooard'}
        subTitle="A mascot for 50 million user strong app" 
        description={"Citymapper is a public transit app and mapping service, widely used across London since 2011. We collaborated with their design team to create a 'dude' that illustrated the best attributes of this western Canadian city. The final design is now included in their app."}
        buttonText= {"On their website"}
        mainImage={props.citymapper_Vancouver_Final_Highres}
        mainImageContainer={'citymapper-container'}
        mainImageClassName={'citymapper_-vancouver_final_highres-1'}
        
        specialImage={props.g_Misfits_30082019_Shot_7_403}

        >
        </ProjectWork>
        <ProjectWork>
        </ProjectWork>
   </div>  
</>

)

}

export default RecentWork;
