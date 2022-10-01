import React from "react";
import "../scss/internships.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';
import Comp from '../assets/comp.png';
import Code from '../assets/complianceCode.png';


const Internships = () => {
  return (
    <div className="container-fluid internship">
        <Socials/>
        <div className="row internshiprow">
            <div className="internship-header-container">
                <h3 className="internship-number">04.</h3>
                <h1 className="internship-header">Internships</h1>
                <div className="internship-line"></div>
            </div>
            <div className="internship-1">
                <div className="internship-content-1">
                  <p className="internship-me-content-text">
                  As a second year student I was fortunate to create a connection within the ICT industry through 
                  a career expo, which led to an intern opportunity with IRE (Inspect Real Estate Pty Ltd).  
                  IRE are a software development company that create tech solutions within the real estate industry.  
                  The internship required me to work alongside a team of experienced developers, specifically to 
                  create a new product for real estate agents within a three-month period.   
                  </p>
                  <p className="internship-me-content-text">
                  The internship required our team develop software aimed at improving how real estate agents record 
                  and track compliance certifications relating to their listing.  This included pest and building 
                  reports, smoke alarm and gas certificates along with pool fencing compliance certificates.  
                  The project required software that allowed users to create, update and delete records whilst also 
                  allowing the attachment of files and certificates, schedule inspections and employ a reminder system 
                  for tasks pending or due.    
                  </p>
                  <p className="internship-me-content-text">
                  I commenced the project by participating in brainstorming sessions aimed to conceptualise the design. 
                  My personal tasks were to develop the user interface (UI), along with the back end functionality for 
                  users to create, update and delete records.  Unfamiliar with the software used by IRE, I engaged online 
                  tutorials specifically relating to C#, SQL and the ASP.net framework.  This improved my engagement 
                  and overall contributions to the project and allowed me to start developing my assigned tasks.  
                  Throughout the development lifecycle, I broke down tasks into small, but consumable increments, 
                  which allowed for constant evaluation and testing.  When confronted with challenges/blockers, 
                  I employed further self-education before seeking advice from fellow team members.  This allowed me to 
                  demonstrate my progression to the technical leads whilst also increased my interaction and 
                  collaboration within the group.   
                  </p>
                  <p className="internship-me-content-text">
                  The steps we undertook throughout the project produced a viable tech solution that met the design brief.  
                  The software was well received and garnered positive feedback from IRE directors. The brainstorming techniques, 
                  agile approach to task management and my commitment to self-learn all played pivotal roles in the success of 
                  the project.  However, had I had the opportunity to gain foundational skills relating to the software frameworks 
                  and programming languages prior to internship commencing, a higher standard of work may have been delivered, 
                  and may have positively impacted the project.  However, at the conclusion of the project I was offered a 
                  full time position with IRE as a result of the work I produced over the three-month period. 
                  </p>
                  <p className="internship-me-content-text">
                  Stepping into the ICT world, I am committed to continue to collaborate on projects. I wish to continue 
                  to develop my communication and leadership skills whilst working toward being a valued team member 
                  who can add to positive group dynamics. 
                  </p>
                </div>
                <div className="internship-img-wrapper">
                  <div className="internship-img-container">
                    <img className="internship-img" src={Comp} alt="internshipImg" />
                    <div className="border-image-internship"></div>
                  </div>
                  <div className="internship-img-container">
                    <img className="internship-img" src={Code} alt="internshipImg" />
                    <div className="border-image-internship"></div>
                  </div>
                </div>
            </div>
        </div>
        <Email/>
    </div>
  );
}

export default Internships;