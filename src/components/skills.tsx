import React from "react";
import "../scss/skills.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';


const Skills = () => {
  return (
    <div className="container-fluid skills">
        <Socials/>
        <div className="row skillsrow">
            <div className="skills-header-container">
                <h3 className="about-number">02.</h3>
                <h1 className="about-me-header">Skills</h1>
                <div className="about-line"></div>
            </div>
        </div>
        <Email/>
      </div>
  );
}

export default Skills;