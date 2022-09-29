import React from "react";
import { NavLink } from "react-router-dom";

import "../scss/projects.scss";
import mobileImg from '../assets/mobiledev.png';
import webImg from '../assets/webDev.jpg';
import gamesImg from '../assets/gamesDev.jpeg';

const Projects = () => {
  return (
    <div className="container-fluid projects">
        <div className ="row projectrow">
          <h1 className="projectMainHeader">Griffith University Projects</h1>
          <div className ="col-lg-4 mobile">
            <h3 className="projectHeader">Mobile Development</h3>
            <NavLink to="/mobiledev">
              <img
                  className="img projectImg primaryContentBorder"
                  src={mobileImg} 
                  alt=""
                />
            </NavLink>
          </div>
          <div className ="col-lg-4 web">
          <h3 className="projectHeader">Web Development</h3>
          <NavLink to="/webdev">
              <img
                  className="img projectImg primaryContentBorder"
                  src={webImg} 
                  alt=""
                />
          </NavLink>
          </div>
          <div className ="col-lg-4 games">
          <h3 className="projectHeader">Games Development</h3>
          <NavLink to="/gamesdev">
              <img
                  className="img projectImg primaryContentBorder"
                  src={gamesImg} 
                  alt=""
                />
          </NavLink>
          </div>
        </div>
      </div>
  );
}

export default Projects;