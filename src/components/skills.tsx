import React from "react";
import "../scss/skills.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';

import Lead1 from '../assets/leader2.png';
import Lead2 from '../assets/leader3.png';


const Skills = () => {
  return (
    <div className="container-fluid skills">
        <Socials/>
        <div className="row skillsrow">
            <div className="skills-header-container">
                <h3 className="about-number">02.</h3>
                <h1 className="about-me-header">Transferable Skills</h1>
                <div className="about-line"></div>
            </div>
            <div className="skills-1">
                <div className="skills-content-1">
                <h3 className="skills-content-1-header">Leadership</h3>
                  <p className="skills-me-content-text">
                  During my Cinefly internship, the technical lead overseeing the project had four weeks leave scheduled, 
                  which overlapped the placement.  In her absence, I was offered the opportunity to take lead over the 
                  placement project and act as supervisor to the other five placement interns. 
                  </p>
                  <p className="skills-me-content-text">
                  Leading the intern team required me to oversee the daily placement activates in order to ensure 
                  time frames where on track and met within the placement parameters.  Tasks included, scheduling 
                  weekly sprints, supporting interns in development of their code, reviewing code submissions and 
                  working closely with each intern to resubmit or recode errors.  The role also required liaising with 
                  directors regarding project progression and how the team was tracking. 
                  </p>
                  <p className="skills-me-content-text">
                  In order to transition smoothly into this leadership role, I liaised with our technical lead to discuss 
                  and plan for her absence.  This involved identifying all the remaining project requirements and 
                  finalising deadlines for each.  It also required discussion with the interns to redirect their 
                  communication channels and clarify how the project would proceed for the remainder of the placement.  
                  I scheduled morning and afternoon team meetings with our interns to discuss daily tasks and assess group progress.  
                  I also checked in with team members individually throughout the day to assess and discuss individual progress.  
                  This assisted in resolving any blockers team members encountered throughout the day and also ensured
                  constant communication and guidance was provided. 
                  </p>
                  <p className="skills-me-content-text">
                  The project outcome was positive and as a team we delivered the required outcomes to the 
                  directors of the company. The Directors deemed the project a success and it was launched to 
                  Cinefly’s clients. The project was definitely dependant on a collaborative team effort, 
                  and as such, I could see how the disruption in leadership part way through did temporarily 
                  affect continuity and output of work.  Had there been opportunity for a consistent approach to 
                  leadership for the entire project, delivery may have been faster.   
                  </p>
                  <p className="skills-me-content-text">
                  The minor disruptions in leadership at the end of the internship allowed me the opportunity to 
                  understand the importance and complexities of leadership in project management.  This experience 
                  will afford me a greater understanding of how to manage and lead a team of software developers to 
                  produce value for society through digital solutions. Having a diverse group of interns has taught me 
                  the importance of having an adaptive management and leadership style, particularly when striving to 
                  get the very best from each team member.  I’ve also come to appreciate the pressure associated 
                  with leadership and management in the ICT world, which is a step up from my experiences at university.  
                  Business directors require the production of projects that respect time constraints and budgets.  
                  </p>
                  <p className="skills-me-content-text">
                  Although the final month of the placement was stressful, it hasn’t tarnished my desire to pursue 
                  my career aspirations as a project manager.  Moving forward, this experience has been overwhelmingly 
                  positive and the skills I employed throughout are transferrable to any role I might find within the 
                  ICT industry.   
                  </p>
                </div>
                <div className="skills-img-wrapper">
                  <div className="skills-img-container">
                    <div className="overlay-img-container-skills"></div>
                    <img className="skills-img" src={Lead1} alt="skillsImg" />
                    <div className="border-image-skills"></div>
                  </div>
                  <div className="skills-img-container">
                    <div className="overlay-img-container-skills"></div>
                    <img className="skills-img" src={Lead2} alt="skillsImg" />
                    <div className="border-image-skills"></div>
                  </div>
                </div>
            </div>
        </div>
        <Email/>
      </div>
  );
}

export default Skills;