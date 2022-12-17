
import React from "react";
import "./../RecentWork.css";
import ImageSlider from "../ImageSlider/ImageSlider";

function FeaturedWork (props) {

  return (
    <>

<div style={{backgroundColor: props.backgroundColour}} className={`row-1`}>
<div className="col4"> 
  <div className="misfits-a-new-stacki blogh-red">{props.nameOfWork} <br></br><span className="roobert-medium-vermilion-41px">{props.subTitle}</span></div>

  <div className="featured-description  reckless-light-vermilion-36px ">{props.description}</div>
  <div className="reckless-light-vermilion-25px quotes">{props.quotes}</div><span className="reckless-regular-vermilion-25px">{props.quoteAuthor}</span>
  <div className="roobert-medium-vermilion-25px"></div>
  <div className="roobert-medium-vermilion-25px button-pill button-large wiggle-chars chars splitting">{props.buttonText}</div>



</div>
<div>
<ImageSlider
    mainImageContainer = {props.mainImageContainer}
    mainImageClassName={props.mainImageClassName}
    circleNewGam e= {props.circleNewGame}
    mainImage = {props.mainImage}
    sliderImages = {props.sliderImages}
    ></ImageSlider>

    
  {/* <img
    className={props.mainImageClassName}
    src={props.mainImage}
    alt="g_Misfits_30082019_Shot_7_403" />  */}
</div>
</div>
</>

)

}

export default FeaturedWork;