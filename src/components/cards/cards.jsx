/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './cards.scss';

export default function Card(props){
    
    return(
        <div className="cards">
            <h2>{props.name}</h2>
            <a href={props.url}><img src={props.image}></img></a>
            <p id="desc">{props.description}</p>
            <p id="techused">{props.techused}</p>
        </div>
    );

}