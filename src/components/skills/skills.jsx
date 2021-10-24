import React from "react";
import "./skills.scss";
import {AiFillHtml5,AiOutlineConsoleSql} from  "react-icons/ai";
import {DiCss3,DiJavascript1,DiMongodb,DiReact,DiNodejsSmall,DiGit,DiPython} from  "react-icons/di";
import {SiExpress,SiCplusplus} from  "react-icons/si";

function Skills(){
    return(
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skillIcons">
                
                <DiMongodb className="item"/>
                <SiExpress className="item"/>
                <DiReact className="item"/>
                <DiNodejsSmall className="item"/>
                
                
             
                <AiFillHtml5 className="item"/>
                <DiCss3 className="item"/>
                <DiJavascript1 className="item"/>
            
           

                <DiGit className="item"/>
                <DiPython className="item"/>
                <AiOutlineConsoleSql className="item"/>
                <SiCplusplus className="item"/>
            
                

            </div>
        </div>
    );
}

export default Skills;