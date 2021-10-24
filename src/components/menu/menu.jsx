import React from "react";
import "./menu.scss";

export default function Menu(props){
    return(
        <div className={props.state?"menu active":"menu"}>
            <ul>
                <li onClick={()=>props.setState(false)}>
                <a href="#intro">Home</a>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a href="#about">About</a>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}