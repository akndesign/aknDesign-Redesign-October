import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IntroWebPage from "./components/IntroWebPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|introwebpage)">
          <IntroWebPage {...introWebPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const hiItsAlexanderNData = {
    children: "Howdy! I'm Alexander.",
};

const introWebPageData = {
    rectangle: "../../img/intro-web-page-rectangle-C009163E-6575-4C73-A00A-4CC6F108724E.png",
    flower1: "../../img/flower.svg",
    readyToHire: <React.Fragment>Ready<br />to hire</React.Fragment>,
    recentWork: "Recent Work",
    line2: "../../img/intro-web-page-line-DEF0B2B3-C556-4E5F-843E-35321B1F7237.png",
    g_Misfits_30082019_Shot_7_403: "../../img/intro-web-page-gmisfits30082019shot7403-1E77168C-87E6-4849-8C9D-B5BC0FBAABC3.jpg",
    citymapper_Vancouver_Final_Highres: "../../img/intro-web-page-citymappervancouverfinalhighres-AF3821FD-4E2E-4C11-A732-12973ADBB209.png",
    path2: "../../img/intro-web-page-path-2-335B6967-03FD-4DF7-8B06-C80F683FC0F2.png",
    read: "Read",
    line3: "../../img/intro-web-page-line-30D15AAE-859C-43FF-9150-3A4FD556440E.png",
    flower2: "../../img/intro-web-page-flower-ECCB9B40-3DA8-42AE-9F0A-61DE32E09F81@2x.png",
    image1: "../../img/intro-web-page-image-1-13F2AC96-5201-443C-933B-82B1DB17BAFB@2x.png",
    worksByAlexanderN: "Works by Alexander Neumann",
    group3: "../../img/intro-web-page-group-3-00D24686-E76F-4AE9-9BE2-F27290393167@2x.png",
    fill11: "../../img/intro-web-page-fill-1-67BF4A13-05F4-4949-A93E-699D04D58693@2x.png",
    fill12: "../../img/intro-web-page-fill-1-13DAF6F8-E1EF-4204-A8E3-DF35ECB159EC@2x.png",
    line4: "../../img/intro-web-page-line-ECEBC1E8-E288-493A-8B74-99566E86442E.png",
    line5: "../../img/intro-web-page-line-D5C7E9D2-C697-4753-B650-06014532A09C.png",
    line6: "../../img/intro-web-page-line-D5C7E9D2-C697-4753-B650-06014532A09C.png",
    line7: "../../img/intro-web-page-line-D5C7E9D2-C697-4753-B650-06014532A09C.png",
    howdyImAlexander2: "Howdy, Im Alexander",
    misfitsIsANewSta: "Misfits is a new stacking game, primarily for adults. The game’s objective is to be first to stack ten blocks, without the tower falling.  No two stacks are the same. It’s nail-biting. Surprising. Delightful.",
    myClientBasedWork: <React.Fragment>My client-based work has got the attention of Buzzfeed, the Globe and Mail, and Wallpaper Magazine. <br /><br />My freelance clients include Christopher Wylie (Cambridge Analytica), Citymapper, and UsTwo.</React.Fragment>,
    misfitsANewStacki: <React.Fragment>Misfits:<br />A new stacking game</React.Fragment>,
    citymapperIsAPubl: "Citymapper is a public transit app and mapping service, widely used across London since 2011. The service has grown to fifty million users across eighty cities. I designed the city mascot for Vancouver.",
    citymapperVancouver: <React.Fragment>Citymapper<br />Vancouver Mascot</React.Fragment>,
    itvStudiosHowTo: "ITV Studios: How to Spend it Well",
    nowPlayThisAtSom: "Now Play This at Somerset House",
    londonDesignFestiv1: "London Design Festival 2017",
    londonDesignFestiv2: "London Design Festival 2017",
    awardsAndPress: "Awards and Press",
    hiItsAlexanderNProps: hiItsAlexanderNData,
};

