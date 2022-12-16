/**
 * References:
 * https://scotch.io/bar-talk/build-an-eye-tracking-alien-with-javascript-solution-to-code-challenge-4
 * https://youtu.be/Idxeo49szW0
 */

 import React from "react";
 import { useEventListener } from "./hooks";
 import "./EasterEgg.css";
 import { useState, useRef, useCallback} from "react";
 
 export default function App() {
   const [eyes, setEyes] = useState([]);
   const [mouseCoordinates, setMouseCoordinates] = useState({
     x: 0,
     y: 0
   });
 
   const handler = useCallback(
     ({ clientX, clientY }) => {
       setMouseCoordinates({ x: clientX, y: clientY });
     },
     [setMouseCoordinates]
   );
 
   const clickHandler = useCallback(
     ({ clientX, clientY }) => {
       setEyes(
         eyes.concat({
           left: `calc(${clientX}px - 50px)`,
           top: `calc(${clientY}px - 25px)`
         })
       );
     },
     [eyes]
   );
 
   useEventListener("mousemove", handler);
   useEventListener("mousedown", clickHandler);
 
   return (
         <Eyes mouseCoordinates={mouseCoordinates} />
   );
 }
 
 const Eyes = ({ mouseCoordinates, ...rest }) => {
   const eyesRef = useRef();
 
   const getEyeStyle = () => {
     if (eyesRef.current) {
       const left = eyesRef.current.getBoundingClientRect().left;
       const top = eyesRef.current.getBoundingClientRect().top;
 
       // distance from eyes to mouse pointer
       const mouseX = mouseCoordinates.x - left;
       const mouseY = mouseCoordinates.y - top;
 
       const rotationRadians = Math.atan2(mouseX, mouseY);
       const rotationDegrees = rotationRadians * (180 / Math.PI) * -1 + 180;
 
       return { transform: `rotate(${rotationDegrees}deg)` };
     }
   };
 
   return (
     <div ref={eyesRef} className="eyes" {...rest}>
       <div className="eye" style={getEyeStyle()} />
       <div className="eye" style={getEyeStyle()} />
     </div>
   );
 };
 



// FOR PAINTING BLOCS
 
//  import React from "react";
//  import { useEventListener } from "./hooks";
//  import "./EasterEgg.css";
 
//  export default function App() {
//    const [eyes, setEyes] = React.useState([ ]);
//    const [mouseCoordinates, setMouseCoordinates] = React.useState({
//      x: 0,
//      y: 0
//    });
 
//    const handler = React.useCallback(
//      ({ clientX, clientY }) => {
//        setMouseCoordinates({ x: clientX, y: clientY });
//      },
//      [setMouseCoordinates]
//    );
 
//    const clickHandler = React.useCallback(
//      ({ clientX, clientY }) => {
//        setEyes(
//          eyes.concat({
//            left: `calc(${clientX}px - 50px)`,
//            top: `calc(${clientY}px - 25px)`
//          })
//        );
//      },
//      [eyes]
//    );
 
//    useEventListener("mousemove", clickHandler);
 
//    return (
//      <div>
//        {eyes.map((eye, index) => (
//          <Eyes mouseCoordinates={mouseCoordinates} style={eye} key={index} />
//        ))}
//      </div>
//    );
//  }
 
//  const Eyes = ({ mouseCoordinates, ...rest }) => {
//    const eyesRef = React.useRef();
 
//    const getEyeStyle = () => {
//      if (eyesRef.current) {
//        const left = eyesRef.current.getBoundingClientRect().left;
//        const top = eyesRef.current.getBoundingClientRect().top;
 
//        // distance from eyes to mouse pointer
//        const mouseX = mouseCoordinates.x - left;
//        const mouseY = mouseCoordinates.y - top;
 
//        const rotationRadians = Math.atan2(mouseX, mouseY);
//        const rotationDegrees = rotationRadians * (180 / Math.PI) * -1 + 180;
 
//        return { transform: `rotate(${rotationDegrees}deg)` };
//      }
//    };
 
//    return (
//      <div ref={eyesRef} className="eyes" {...rest}>
//        <div className="eye" style={getEyeStyle()} />
//        <div className="eye" style={getEyeStyle()} />
//      </div>
//    );
//  };
 