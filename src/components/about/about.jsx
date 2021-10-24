/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./about.scss";



import {AiOutlineCoffee} from "react-icons/ai";


export default function About(){
    return(
        <div className="about" id="about">
        <h1>About Me</h1>
        <div className="aboutContent">
        <p>Hey there , I am <span id="name">Harsh Dubey</span> a Computer Science and Engineering Undergraduate. Somewhere around a few years back , I was introduced to programming and ever since , I love to learn and apply the learnings ,
        Over these years I've explored a lot in tech and have built various projects exploring Full Stack Web and desktop application development using Python.
        I like problem solving and taking part in competitive programming contests for fun.</p>
        </div>

        <div className="aboutIcons">
        <AiOutlineCoffee/>
        
            </div>

        </div>
    );
}