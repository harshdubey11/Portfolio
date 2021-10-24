import React from "react";
import "./projects.scss";
import Card from "../cards/cards";
import projects from "./projectsData";
import {AiFillGithub} from 'react-icons/ai';
function Projects(props){
    return(
        <div className="projects" id="projects">
        <div className="sectionhead"><h1>Projects</h1></div>

        <div className="cardContainer">
          { projects.map(item =>{
           return (
          
          <Card
          name={item.name}
          url={item.url}
          image={item.image}
          description={item.description}
          techused={item.techused}
          />
          
       
    );
  })}
 
  </div>
 
 <div id="gitlogo"> 
 <a href="https://github.com/harshdubey11" ><AiFillGithub id="githublogo"/></a>
 <div className="caption">View Github Profile.</div>
 </div>

        </div>
    );
}

export default Projects;