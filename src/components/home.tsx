import React from "react";
import { NavLink } from "react-router-dom";
import Socials from './socials';
import Email from './email';
import "../scss/home.scss";

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
        <Socials/>
        <div className="row homeRow">
            <div className="landingWrapper">
                <label className="home-small-header">Hi, my name is</label>
                <h2 className="home-big-header">Anthony Taylor.</h2>
                <h2 className="home-big-header-2">I build things for the web.</h2>
                  <p className="home-about-me">
                    I'm a front-end software developer specialising in building (and occasionally designing)
                    exceptional digital experiences.  I'm currently focused on completing my degree in <span className="highlight">Intelligent Digital Technologies</span>, double majoring in IOT & Robitics and Programming for Visualisation & Entertainment.  
                  </p>
                  <NavLink className="nav-link learn-more" to="/about">
                    <button className="learn-more-btn">Learn More</button>
                  </NavLink>
            </div>
        </div>
        <Email/>
    </div>
  );
}

export default Home;