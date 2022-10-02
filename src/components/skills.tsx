import React from "react";
import "../scss/skills.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';

import Lead1 from '../assets/leader2.png';
import Lead2 from '../assets/leader3.png';
import Render1 from '../assets/render.png';
import Render2 from '../assets/render4.png';


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
                <h3 className="skills-content-1-header">Front-End Development...</h3>
                  <p className="skills-me-content-text">
                  During the final semester of my degree, I accepted a placement with a media tech start-up specialising 
                  in user generated video content.  The placement was located on the Gold Coast and included 5 other 
                  participants from differing ICT courses at Griffith.  The placement was executed remotely, and 
                  involved the design and development of a new web based platform called <span className="highlight">Portal Video Rendering</span>. 
                  The placement required a minimum commitment of 2 days per week over a 12-week period. 
                  </p>
                  <p className="skills-me-content-text">
                  The placement with Cinefly required collaboration with other interns to develop a new feature within 
                  their web based platform. In order to develop the web based platform 
                  I was required to utilise Cinefly’s existing software framework, <span className="highlight">React Typescript</span>, <span className="highlight">React Redux</span>, <span className="highlight">HTML and Sass</span>.  
                  My specific tasks involved designing the overall look and structure of the new portal 
                  feature, along with implementing specific back end functionality including API service calls, and 
                  platform integration with Amazon servers.   
                  </p>
                  <p className="skills-me-content-text">
                  Being unfamiliar with the software frameworks and languages used by Cinefly, I prepared for the 
                  placement with self-paced learning through accessing online tutorials and articles relating to these 
                  frameworks.  After developing an introductory level of understanding I was able to commence 
                  contributing to the development of my tasks.  For the design elements, I worked closely with Cinefly’s 
                  UX/UI designers and collaboratively created <span className="highlight">Wireframes</span>, <span className="highlight">Storyboards</span> and <span className="highlight">Customer Journey Diagrams</span>.  
                  From these design tools I was able to transform the visual elements into code, providing a better 
                  understanding of how users would interact and view the platform. This included the implementation of 
                  media queries to insure the platform would be usable on tablet devices, as well as utilising the React 
                  framework, HTML and Sass to develop the overall structure and look.  Once the basic design of the 
                  platform had been approved by senior stakeholders, I moved forward with integrating the front end 
                  design with the necessary back end functionality.  This involved utilising the React Redux framework 
                  to develop <span className="highlight">Reduces</span>, <span className="highlight">Sagas</span>, <span className="highlight">Services</span> and <span className="highlight">Hooks</span>, required to make 
                  API service calls and connect to 
                  Amazon servers.      
                  </p>
                  <p className="skills-me-content-text">
                  Although the product is still in its final development stages, progress meetings and benchmarks 
                  have all been met with positive feedback from senior directors.  As we approached the project using 
                  an agile methodology, we had opportunity throughout to assess and identify issues in real time and 
                  make adjustments as the project progressed.  The project is currently on track for release in the 
                  coming weeks, which falls in line with the conclusion of the placement.  
                  </p>
                  <p className="skills-me-content-text">
                  Throughout my degree I have built a solid understanding of design and coding concepts along with
                   best practice principles.  Although my major has not involved learning Typescript, React or React 
                   Redux, I do feel my previous experience with JavaScript, Angular and HTML/CSS supported my ability 
                   to learn these new frameworks.  Additionally, understanding these new frameworks presented 
                   considerable learning outcomes directly linked to my major, specifically regarding programming for 
                   visualization.  Although I gathered a fundamental understanding of the frameworks utilised by Cinefly, 
                   I acknowledge there is further development required to truly master all the concepts relating to 
                   designing and developing applications with these frameworks. 
                  </p>
                  <p className="skills-me-content-text">
                  As React is the most widely used framework for building interactive and efficient user interfaces, 
                  I intend to further my knowledge and understanding of this development software throughout my career.  
                  I believe mastering React will open doors and make me a more well-rounded developer, which will 
                  increase my employability as I move forward with my career and aspirations. 
                  </p>
                </div>
                <div className="skills-img-wrapper">
                  <div className="skills-img-container-vert">
                    <div className="overlay-img-container-skills-vert"></div>
                    <img className="skills-img-vert" src={Render2} alt="skillsImgimageVert" />
                    <div className="border-image-skills-vert"></div>
                  </div>
                  <div className="skills-img-container">
                    <div className="overlay-img-container-skills"></div>
                    <img className="skills-img" src={Render1} alt="skillsImg" />
                    <div className="border-image-skills"></div>
                  </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="skills-1">
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
                <div className="skills-content-1">
                <h3 className="skills-content-1-header">Leading The Team...</h3>
                  <p className="skills-me-content-text">
                  During my Cinefly internship, the technical lead overseeing the project had four weeks leave 
                  scheduled, overlapping the placement.  In her absence, I was offered the opportunity to take lead 
                  over the project, acting as supervisor to the other placement interns.
                  </p>
                  <p className="skills-me-content-text">
                  Leading the intern team required I oversee the daily placement activates to ensure time frames 
                  where on track and met within the placement parameters.  Tasks included, scheduling weekly sprints, 
                  supporting interns in development of code, reviewing code submissions and working closely with each 
                  intern to resubmit or recode errors.  The role required liaising with directors regarding project 
                  progression and team tracking. 
                  </p>
                  <p className="skills-me-content-text">
                  In order to transition smoothly into this leadership role, I liaised with our technical lead to 
                  discuss and plan for her absence.  We identified all remaining project requirements and finalised 
                  deadlines for each.  We advised interns to redirect their communication channels and clarified how 
                  the project would proceed for the remainder of the placement.  I scheduled morning and afternoon 
                  team meetings with our interns to discuss daily tasks and assess group progress.  I also checked 
                  in with team members individually throughout the day to assess and discuss individual progress.  
                  This assisted in resolving any blockers team members encountered throughout the day and also ensured 
                  constant communication and guidance was provided.
                  </p>
                  <p className="skills-me-content-text">
                  The project outcome was positive and as a team we delivered the required outcomes to the directors. 
                  The project was deemed a success and it was launched to Cinefly’s clients. The project was definitely 
                  dependant on a collaborative team effort, and as such, I could see how the disruption in leadership 
                  did temporarily affect continuity and output of work.  Had there been opportunity for a consistent 
                  approach to leadership over the entire project, delivery may have been faster.  
                  </p>
                  <p className="skills-me-content-text">
                  The minor disruptions in leadership allowed me the opportunity to understand the importance and 
                  complexities of leadership in project management.  This experience will afford me a greater 
                  understanding of how to manage and lead a team of software developers to produce value for society 
                  through digital solutions. Having a diverse group of interns has taught me the importance of having
                   an adaptive management and leadership style, particularly when striving to get the very best from 
                   each team member.  I’ve also come to appreciate the pressure associated with leadership and management 
                   in the ICT world, which is a step up from my experiences at university.  Business directors require
                    the production of projects that respect time constraints and budgets.  
                  </p>
                  <p className="skills-me-content-text">
                  Although the final month of the placement was stressful, it hasn’t tarnished my desire to pursue 
                  my career aspirations as a project manager.  Moving forward, this experience has been overwhelmingly
                  positive and the skills I employed throughout are transferrable to any role I might find within the 
                  ICT industry.  
                  </p>
                </div>
            </div>
        </div>
        <Email/>
      </div>
  );
}

export default Skills;