import React from "react";

import "../scss/about.scss";
import aboutImage from '../assets/profile.jpg';


const About = () => {
  return (
    <div className="container-fluid about">
        <div className="row aboutrow">
            <div className="col-md-6 imgWrapper">
              <img
                className="img profileImg"
                src={aboutImage} 
                alt=""
              />
            </div>
            <div className="col-md-6 contentWrapper">
              <div className="aboutcontent"></div>
                <h1 className="headerBio">Brief Bio:</h1>
                <br></br>
                <p> Griffith University student, completing final year of Bachelor of Intelligent Digital Technologies.<br></br>
                    By maintaining a GPA of 7, I have been honoured to receive the Award of Academic Excellence<br></br>
                    in both 2020, 2021 and 2022. Beyond my current studies, I am an experienced Business owner and <br></br>
                    Retail Manager.  I am highly analytical and commercially astute with considerable financial acumen. <br></br>
                    I have a proven record in successfully developing strategies to build and motivate teams to achieve<br></br>
                    individual and group goals, whilst maintaining a high level of customer service and satisfaction.<br></br>
                     A true multitasker, with a diverse skill set that has strengthened throughout my studies.    
                  </p>
                  <br></br>
                  <h3 className="headerTechnical">Technical Skills:</h3>
                  <br></br>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>MySql</li>
                  </ul>
            </div>
        </div>
    </div>
  );
}

export default About;