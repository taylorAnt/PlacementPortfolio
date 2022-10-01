import React from "react";
import "../scss/home.scss";

import gitIcon from '../assets/git.png';
import instaIcon from '../assets/insta.png';
import linkIcon from '../assets/link.png';
import twitIcon from '../assets/twit.png';

export default class Socials extends React.Component {
    render(){
      return (
        <div className="row socialWrapper">
            <div className="social-container">
                <img className="imgIcons" src={gitIcon} alt="GitHub" />
                <img className="imgIcons" src={instaIcon} alt="Instagram" />
                <img className="imgIcons" src={linkIcon} alt="Linkedin" />
                <img className="imgIcons" src={twitIcon} alt="Twitter" />
                <div className="line"></div>
            </div>
        </div>
      );
    }
}