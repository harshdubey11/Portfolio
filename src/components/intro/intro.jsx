import React, { useState } from "react";
import "./intro.scss";
import {useRef,useEffect} from "react";
import {init} from "ityped";



  
  
function Intro(){
  
  


    const textRef  = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showcursor:false,
            backDelay:1500,
            backSpeed:60,
            strings:["Web Developer.","Competitive Programmer.","Tech Enthusiast."]

        });
    },[]);

    return(
        <div className="intro" id="intro">
           
           
            <div>Hi , I'm Harsh , a  <span ref={textRef}></span></div>
           
          
          
           
        </div>


    );
}

export default Intro;