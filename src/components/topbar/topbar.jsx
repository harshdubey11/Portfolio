import React from "react";
import "./topbar.scss";


function Topbar(props){
    return(
        <div className={props.state?"topbar active":"topbar"}>
        <div className="wrapper">
            <div className="left">
            <a href="#intro" className="logo">Harsh</a>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>
                    props.setState(!props.state)
                }>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
    
                </div>
            </div>
        </div>

        </div>
    );
}

export default Topbar;