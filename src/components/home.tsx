import React from "react";
import "../scss/home.scss";

import gitIcon from '../assets/git.png';
import instaIcon from '../assets/insta.png';
import linkIcon from '../assets/link.png';
import twitIcon from '../assets/twit.png';


const Home = () => {
  return (
    <div className="container-fluid home">
      	<div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>
        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>        
        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>       
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
        <div className="row socialWrapper">
            <div className="social-container">
                <img className="imgIcons" src={gitIcon} alt="GitHub" />
                <img className="imgIcons" src={instaIcon} alt="Instagram" />
                <img className="imgIcons" src={linkIcon} alt="Linkedin" />
                <img className="imgIcons" src={twitIcon} alt="Twitter" />
                <div className="line"></div>
            </div>
        </div>
        <div className="row homeRow">
            <div className="landingWrapper">
                <label className="home-small-header">Hi, my name is</label>
                <h2 className="home-big-header">Anthony Taylor.</h2>
                <h2 className="home-big-header-2">I build things for the web.</h2>
                  <p className="home-about-me">
                    I'm a front-end software developer specialising in building (and occasionally designing)
                    exceptional digital experiences.  Currently, I'm focused on completing my degree in intelligent
                    digital technologies, double majoring in IOT & Robitics and Programming for Visualisation & Entertainment.  
                  </p>
            </div>
        </div>
        <div className="row emailWrapper">
          <div className="email-container">
            <div className="email">anthony.taylor2@griffithuni.edu.au</div>
            <div className="line"></div>
          </div>
        </div>
    </div>
  );
}

export default Home;