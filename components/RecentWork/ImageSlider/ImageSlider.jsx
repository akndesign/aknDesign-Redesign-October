import React from "react";
import "./../RecentWork.css";
import { useState, useRef } from "react";

function ImageSlider(props) {
  const [imgSource, setImgSource] = useState(props.sliderImages[0]);
  const [count, setCount] = useState(1);
  const [coord, setCoord] = useState({ clientX: 0, clientY: 0 });

  const sliderCursor = useRef();

  let sliderNav = props.sliderImages.map((value,index) => <div key={value} className={index === (count-1) ? 'oval active' : 'oval'} onClick={() => handleOvalClick(index, props)}></div>)


  const handleOvalClick = (index, props) => {
    setCount(index+1);
    setImgSource(props.sliderImages[index]);

};
  const handleMouseMove = (e) => {
    
    setCoord({ clientX: e.pageX, clientY: e.pageY });

    sliderCursor.current.style.opacity = "1";
    sliderCursor.current.style.visibility = "visible";
    sliderCursor.current.style.left = e.pageX + 'px';
    sliderCursor.current.style.top = e.pageY + 'px';
    
  }  

  let imageSliderChange = (props) => {
        setCount((count) => count + 1);

    if (count < props.sliderImages.length) {
      setImgSource(props.sliderImages[count]);


    } else {
      setCount(1);
      setImgSource(props.sliderImages[0]);
    }
  };

  const handleMouseLeave = (e) => {
    
    setCoord({ clientX: 0, clientY: 0 });

    sliderCursor.current.style.opacity = "0";
    sliderCursor.current.style.left = e.pageX + 'px';
    sliderCursor.current.style.top = e.pageY + 'px';
    
  }  


  return (
    <>
      {/* <div style = {style} onClick = { e => { const newStyle =  setCoordinates(e.target.pageX, e.target.pageY); setStyle(newStyle); }}></div> */}
      <div className={`image-slider ${props.mainImageContainer}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => imageSliderChange(props)}>
        <div ref={sliderCursor} className="slider-cursor">{count}/{props.sliderImages.length}</div> 
        <img className={props.mainImageClassName} src={imgSource}  alt="text" id="image"
        ></img>
       
      </div>
      <div className="sliderNav">{sliderNav}</div>
    </>
  );


  }
//s


//   return (
//     <>
//       {/* <div style = {style} onClick = { e => { const newStyle =  setCoordinates(e.target.pageX, e.target.pageY); setStyle(newStyle); }}></div> */}
//       <div className="main" onMouseMove={handleMouseMove}>
//         <h1>
//           Mouse coordinates: {coord.clientX} {coord.clientY}
//         </h1>
//         <div className="slider-cursor" style={{
//             transform: `translate(${coord.clientX}px, ${coord.clientY}px`}}></div>
//         <img className={props.mainImageContainer} src={imgSource}  alt="text" id="image"  onClick={() => imageSliderChange(props)}
//         ></img>
//       </div> 
//     </>
//   );

//s
export default ImageSlider;
