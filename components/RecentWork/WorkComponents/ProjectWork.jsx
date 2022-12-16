import React from "react";
import "./../RecentWork.css";

function ProjectWork (props) {
    return (
        <>
        <div className="lessfeatured-title" style={{backgroundColor: props.projectBackgroundColour}}> 
        <div className="misfits-a-new-stacki blogh-smaller-title" style={{color: 'white'}}>{props.projectNameOfWork} <br></br><span className="roobert-medium-vermilion-41px">{props.subTitle}</span></div>
        </div>
        <div className="featured-description  reckless-light-vermilion-36px ">{props.description}</div>
        <div className="reckless-light-vermilion-25px quotes">{props.quotes}</div><span className="reckless-regular-vermilion-25px">{props.quoteAuthor}</span>
        <div className="roobert-medium-vermilion-25px"></div>
        <div className="roobert-medium-vermilion-25px button-pill button-large wiggle-chars chars splitting">{props.buttonText}</div>
         <img
    className={props.mainImageClassName}
    src={props.mainImage}
    alt="g_Misfits_30082019_Shot_7_403"></img>
    <img/> 

    </>
    //     <div> 
    //     <div className="misfits-a-new-stacki blogh-red">{props.nameOfWork} <br></br><span className="roobert-medium-vermilion-41px">{props.subTitle}</span></div>
    //     <div className="featured-description  reckless-light-vermilion-36px ">{props.description}</div>
            
    //         Misfits</div>
    //     <div className="lessfeatured-body">Misfits</div>
    //     </div>
    // 
    )
}

export default ProjectWork;