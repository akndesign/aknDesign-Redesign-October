import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Awards from "../Awards/Awards";
import RecentWork from "../RecentWork/RecentWork";
import Interstitial from "../Interstitial/Interstitial";
import "./IntroWebPage.css";

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
          <Interstitial></Interstitial>
          <About></About>
          <RecentWork
          recentWork={recentWorkRecentW}
          g_Misfits_30082019_Shot_7_403 = {g_Misfits_30082019_Shot_7_403}
          citymapper_Vancouver_Final_Highres = {citymapper_Vancouver_Final_Highres}
          misfitsIsANewSta ={misfitsIsANewSta}
          misfitsANewStacki = {misfitsANewStacki}
          circleNewGame = {image1}
          citymapperIsAPubl= {citymapperIsAPubl}
          citymapperVancouver = {citymapperVancouver}
          ></RecentWork>  
          <Awards></Awards>
          
          
             
      </div>
    </>
  );
}

export default IntroWebPage;
