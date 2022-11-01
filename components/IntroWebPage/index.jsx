import React from "react";
import HiItsAlexanderN from "../HiItsAlexanderN";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Awards from "../Awards/Awards";
import "./IntroWebPage.css";
import axios from "axios";
import {useState, useEffect} from "react";

function IntroWebPage(props) {

  const {
    line1,
    iDesignCodeAndU,
    flower1,
    readyToHire,
    recentWork,
    line2,
    howdyImAlexander1,
    g_Misfits_30082019_Shot_7_403,
    citymapper_Vancouver_Final_Highres,
    path2,
    read,
    recentWorkRecentW,
    line3,
    flower2,
    image1,
    worksByAlexanderN,
    group3,
    fill11,
    fill12,
    howdyImAlexander2,
    misfitsIsANewSta,
    myClientBasedWork,
    misfitsANewStacki,
    citymapperIsAPubl,
    citymapperVancouver,
    itvStudiosHowTo,
    nowPlayThisAtSom,
    londonDesignFestiv1,
    londonDesignFestiv2,
    awardsAndPress,
    hiItsAlexanderNProps,
  } = props;

  return (
    <>
      <div className="container-center-horizontal">
          <NavBar></NavBar>
          <Home></Home>
          <About></About>
          <Awards></Awards>
          <div className="read">{read}</div>
        <div className="g_-misfits_30082019_-shot_7_403">
          <div className="rectangle-1"></div>
          <img
            className="g_-misfits_30082019_-shot_7_403-1"
            src={g_Misfits_30082019_Shot_7_403}
            alt="g_Misfits_30082019_Shot_7_403" />
        </div>
        <div className="citymapper_-vancouver_final_highres">
          <img
            className="citymapper_-vancouver_final_highres-1"
            src={citymapper_Vancouver_Final_Highres}
            alt="Citymapper_Vancouver_final_highres" />
        </div>
        <div className="citymapper_-vancouver_final_highres-2"></div>
        <h1 className="recent-work-recent-w">{recentWorkRecentW}</h1>
        <img className="line-2" src={line3} alt="Line" />
        <div className="flower-1" style={{ backgroundImage: `url(${flower2})` }}></div>
        <img className="image-1" src={image1} alt="Image 1" />
        <div className="rectangle-3"></div>
        <div className="group-3" style={{ backgroundImage: `url(${group3})` }}></div>
        <img className="fill-1" src={fill11} alt="Fill 1" />
        <img className="fill-1-1" src={fill12} alt="Fill 1" />
        <img className="line-3" src={line3} alt="Line" />
        <img className="line-3" src={line3} alt="Line" />
        <img className="line-3" src={line3} alt="Line" />
        <img className="line-3" src={line3} alt="Line" />
        <div className="misfits-is-a-new-sta gtalpinatrial-light-vermilion-51px">{misfitsIsANewSta}</div>
        <div className="misfits-a-new-stacki neuemontreal-medium-vermilion-94px">{misfitsANewStacki}</div>
        <div className="citymapper-is-a-publ gtalpinatrial-light-vermilion-51px">{citymapperIsAPubl}</div>
        <div className="citymapper-vancouver neuemontreal-medium-vermilion-94px">{citymapperVancouver}</div>
       
      </div>
    </>
  );
}

export default IntroWebPage;
