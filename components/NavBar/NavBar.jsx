import React,  {useState, useEffect} from "react";
import "./NavBar.css";
import { HashLink as Link } from 'react-router-hash-link';
import Splitting from "splitting";

function NavBar(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    const target = document.querySelectorAll(".about, .i-design-code-and-u");
    const splittingText = Splitting({ target: target, by: "chars" });
  }, [])


  return (
        <div id="nav-bar">
        <div id="menu-drawer" className={`menu-drawer ${isOpen ? '' : 'hide-menu'}`}>
        <div className="menu cheee-jimbo-medium-vermilion-124px">MENU</div>
        <div className="thin-line" alt="Line" />
        <Link to="#home" className="neuemontreal-medium-vermilion-63px about" activeclass spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        Intro</Link>
        <div className="thin-line" alt="Line" />
        <Link to="#about" className="neuemontreal-medium-vermilion-63px about" activeclass spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        About</Link>
        <div className="thin-line" alt="Line" />
        <div to="#awards" className="about neuemontreal-medium-vermilion-63px" activeclass spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        Awards</div>
        <div className="thin-line" alt="Line" />
        <Link to="#recentwork" className="about neuemontreal-medium-vermilion-63px" activeclass spy="true" smooth="true" offset={-70} duration={500} data-splitting>Recent Work</Link>
        <div className="thin-line" alt="Line" />
              <a href="https://www.linkedin.com/in/akndesign/" target="_blank" rel="noopener noreferrer" className="external-link neuemontreal-medium-vermilion-41px">LinkedIn
              <img className="external-link-arrow" src="img/diagonal-arrow.svg" alt="Arrow for External Link" />
              </a>
          </div>
          <div id="vertical-nav">
              <div className="flex-col">
                <div className="hamburger" onClick={toggle}>
                    <img className="path" src="img/intro-web-page-path-0C1811B6-8D2F-416A-8957-5F015200B404@2x.png" alt="Path" />
                    <img className="path" src="img/intro-web-page-path-F8834B24-156F-4331-B564-7E376E187195@2x.png" alt="Path" />
                    <img className="path" src="img/intro-web-page-path-C1BF0764-1E16-4C35-A121-A34D51255276@2x.png" alt="Path"
                      />
                </div>
                <div className="group-6">
                    <div className="pacman-nav-group">
                      <div className="pacman"></div>
                      <Link to="#home" activeclass spy="true" smooth="true" offset={-70} duration={500}
                          >
                      <div className="oval"></div>
                      </Link>
                      <Link to="#about" activeclass spy="true" smooth="true" offset={-70} duration={500}>
                      <div className="oval"></div>
                      </Link>
                      <Link to="#awards" activeclass spy="true" smooth="true" offset={-70} duration={500}>
                      <div className="oval"></div>
                      </Link>
                      <div className="oval"></div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    );
  }

export default NavBar;