import React, { useEffect, useState } from "react";
import "./projects.scss";
import Card from "../cards/cards";
import projects from "./projectsData";
import {AiFillGithub} from 'react-icons/ai';
import Lottie from "react-lottie";
import axios from 'axios';
import person from "../lottie/person";
import {Link} from 'react-router-dom'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}   



function Projects(props){

  let { height, width } = useWindowDimensions();
  let lottie_w=600,lottie_h=600;
  if(width<768){
    lottie_h=400;
    lottie_w=350;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: person,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    return(
        <div className="projects" id="projects">
        

        <div className="Container">
        <Lottie 
	    options={defaultOptions}
        height={lottie_h}
        width={lottie_w}
      />
<Link to="/projects"><button className="getRepos-btn">Check Out My Work.</button></Link>
 
  </div>
      
 

        </div>
    );
}

export default Projects;