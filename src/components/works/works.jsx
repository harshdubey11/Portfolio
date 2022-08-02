import React, { useState } from "react";
import './works.scss';
import {BsCodeSquare,BsCodeSlash} from 'react-icons/bs';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiCodeCurly} from 'react-icons/bi';
import {SiPython} from 'react-icons/si';

export default function Works(){
const [currentSlide,SetcurrentSlide]=useState(0);
function handleClick(way){
way==="left"?SetcurrentSlide(currentSlide>0?currentSlide-1:2):
SetcurrentSlide(currentSlide<2?currentSlide+1:0);
}
    return (
        
        <div className="works" id="works">
        
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
              
                   <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                         <div className="imgContainer">
                         <BsCodeSlash/>
                            </div>
                            <h2>Web Development</h2>
                            <p>Have been working on Web projects for a while now , using the MERN stack.</p>
                            <span><a href="https://github.com/harshdubey11">Projects</a></span>
                    </div>
                </div>
                <div className="right">
                <BsCodeSquare className="icon"/>
                </div>
                </div>
                
            </div>
            <div className="container" >
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                         <div className="imgContainer">
                         <BiCodeCurly/>
                            </div>
                            <h2>Problem Solving</h2>
                            <p>Problem solving is something that I started way before development, have solved 400+ problems (and counting) on leetcode and have participated in a lot of programming contests.</p>
                            <span><a href="https://leetcode.com/_harshdubey">Profile</a></span>
                    </div>
                </div>
                <div className="right">
                <BiCodeCurly className="icon"/>
                </div>
                </div>
                
            </div>
            <div className="container" >
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                         <div className="imgContainer">
                         <SiPython/>
                            </div>
                            <h2>Python Development</h2>
                            <p>I have also explored some desktop application development using Python in the early phases of learning project development :)</p>
                            <span><a href="https://github.com/harshdubey11/PythonProjects">Projects</a></span>
                    </div>
                </div>
                <div className="right">
                <SiPython className="icon"/>
                </div>
                </div>
                
            </div>
                
            </div>
            <AiOutlineArrowLeft className="left arrow" onClick={()=>handleClick("left")}/>
            <AiOutlineArrowRight className="right arrow" onClick={()=>handleClick()}/>
        </div>
    );

}