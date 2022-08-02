/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './cards.scss';
import gitcat from '../lottie/GitCat';
import Lottie from "react-lottie";
import {BsBoxArrowUpRight} from 'react-icons/bs';
export default function Card(props){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: gitcat,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return(
        <div className="cards">
            <a href={props.url} target="_blank" rel="noopener noreferrer" className="anchor">

          
            <h2>{props.name}</h2>
            
            <p id="desc">{props.desc}</p>
            <Lottie
            options={defaultOptions}
            height={180}
            width={180}
            />
            <BsBoxArrowUpRight id="open-link"></BsBoxArrowUpRight>
            </a>
           
        </div>
    );

}