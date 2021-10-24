import React from "react";
import "./contact.scss";
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai';
import {SiLeetcode,SiCodechef} from 'react-icons/si';
function Contact(){
    return(
        <div className="contact" id="contact">
        <div className="sectionhead">Get in Touch</div> 
        <div className="form-container">
            <form className="form"   
            action="https://formspree.io/f/xnqlyodo"
            method="POST">
                <input type="email"
                placeholder="Your Email"
                name="_replyto"
                className="input-box email-box"
                autoComplete="off"></input>

                <textarea
                 placeholder="Send me a message :)"
                 name="message"
                type="text"
                className="input-box emailbody-box"></textarea>
              <button type="submit" className="submit-btn">Send</button>
            </form>
        </div>
        <div className="icon-container">
        <a href="https://www.linkedin.com/in/harsh-dubey11/"><AiFillLinkedin className="item"/></a>
        <a href="https://github.com/harshdubey11"><AiFillGithub className="item"/></a>
        <a href="https://instagram.com/_harshdubey"><AiFillInstagram className="item"/></a>
        <a href="https://leetcode.com/_harshdubey"><SiLeetcode className="item"/></a>
        <a href="https://www.codechef.com/users/harsh_dubey"><SiCodechef className="item"/></a>

        </div>
        <p className="copyright">© Harsh Dubey | 2021</p>
        </div>
    );
}

export default Contact;