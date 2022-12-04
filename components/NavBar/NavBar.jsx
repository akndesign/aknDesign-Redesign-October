import React,  {useState, useEffect} from "react";
import "./NavBar.css";
import { HashLink as Link } from 'react-router-hash-link';
import Splitting from "splitting";


function NavBar(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    const target = document.querySelectorAll(".about, .i-design-code-and-u");
    const splittingText = Splitting({ target: target, by: "chars" });
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1200);
    });
  }, []);
 
  return (
        <div id="nav-bar">
        <div id="menu-drawer" className={`menu-drawer ${isOpen ? '' : 'hide-menu'}`}>
        <div className="menu blogh">MENU</div>
        <div>
        <div className="thin-line" alt="Line" />
        <Link to="#home" className="blogh about" activeclass="true" spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        Intro</Link>
        <div className="thin-line" alt="Line" />
        <Link to="#about" className="blogh about" activeclass="true" spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        About</Link>
        <div className="thin-line" alt="Line" />
        <Link to="#recentwork" className="about blogh" activeclass="true"  spy="true" smooth="true" offset={-70} duration={500} data-splitting>Recent Work</Link>
        <div className="thin-line" alt="Line" />
        <Link to="#awards" className="about blogh" activeclas="true" spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        Awards & Press</Link>
        <div className="thin-line" alt="Line" />
        </div>
              <a href="https://www.linkedin.com/in/akndesign/" target="_blank" rel="noopener noreferrer" className="external-link roobert-medium-vermilion-41px">LinkedIn
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
                      <Link to="#home" activeclass="true" spy="true" smooth="true" offset={-70} duration={500}
                          >
                      <div className="oval"></div>
                      </Link>
                      <Link to="#about" activeclass="true" spy="true" smooth="true" offset={-70} duration={500}>
                      <div className="oval"></div>
                      </Link>
                      <Link to="#recentwork" activeclass="true" spy="true" smooth="true" offset={-70} duration={500}>
                      <div className="oval"></div>
                      </Link>
                      <Link to="#awards" activeclass="true" spy="true" smooth="true" offset={-70} duration={500}> <div className="oval"></div> </Link>
                    </div>
                </div>
                <div></div>
                <Link to="#home" className={`${scroll ? "" : "hide"} ${isOpen ? 'add-border' : ''} breathing button-circle blogh-small wiggle-chars`} activeclass="true" spy="true" smooth="true" offset={-70} duration={500} data-splitting>
        Up</Link>
              </div>
          </div>
        </div>
    );
  }

export default NavBar;