import React from "react";
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
        <div className="left">
            <div className="introText">Hi,<br/>I'm Harsh , a</div></div>
        <div className="right">
        <span ref={textRef}></span>
        </div>
        </div>
    );
}

export default Intro;