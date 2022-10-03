import React from "react";
import "../scss/placement.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';

import Cinefly from '../assets/cinefly.png';
import Team1 from '../assets/leader3.png'
import Team from '../assets/team.png';

const Placement = () => {
  return (
    <div className="container-fluid placement">
        <Socials/>
        <div className="row placementrow">
            <div className="placement-header-container">
                <h3 className="placement-number">03.</h3>
                <h1 className="placement-header">Placement - Cinefly</h1>
                <div className="placement-line"></div>
            </div>
            <div className="placement-1">
                <div className="placement-content-1">
                  <p className="placement-content-text">
                  I feel the most insightful and surprising thing I have come to learn throughout my placement with 
                  Cinefly is how complex and demanding the ICT industry can be.  There isn’t a one size fits all 
                  tech based solution for solving complex problems.  Solutions are found through trial and error, 
                  and by capitalising on the skill sets of more than one individual.      
                  </p>
                  <p className="placement-content-text">
                  This links directly to the importance of team work and collaboration, which I also developed 
                  a greater respect for during my placement.  Throughout my degree there has been a considerable 
                  emphasis on group projects and assignments, of which I have shown reluctance to fully immerse myself in.  
                  This is due to the high expectations I have of myself and the standard of work I deliver.  However, 
                  throughout the placement I have definitely came to appreciate the value of team work and collaboration, 
                  and now understand that group dynamics and contribution can vastly improve deliverables and project outcomes.  
                  </p>
                  <p className="placement-content-text">
                  The placement experience was reminiscent of the early days of my degree.  Being a mature aged 
                  student in my late 30’s, I was born in an era where ICT concepts where still in their infancy.  
                  I commenced my degree with trepidation and concern about stepping into a world based on concepts 
                  and ideas that I was completely unfamiliar with.  I was reminded of this overwhelming apprehension 
                  when commencing my placement.  This was especially evident after I discovered the coding languages 
                  and software used by Cinefly were completely unfamiliar to me. In some ways, I felt I was back at 
                  the start of my degree, dipping my toe into a vast pond of water, and feeling an overwhelming sense 
                  of imposter syndrome.      
                  </p>
                  <p className="placement-content-text">
                  However, I reminded myself of the successes I have enjoyed over the course of my degree, in spite 
                  of my lack of experience at its commencement. I understood immediately and very clearly the 
                  commitment and perseverance required to learn these new concepts and apply them to the placement 
                  deliverables.  
                  </p>
                  <p className="placement-content-text">
                  Beyond the technical knowledge and skills I have added to my portfolio, I feel the placement
                  solidified and reminded me of my ability to adapt and learn in real time, whilst still making 
                  significant contribution to the project. It also became evident that the skills and knowledge 
                  captured throughout my degree are only a starting point to what is possible, and that building on
                  these foundational skills will be my life’s work and commitment to continued education. 
                  </p>
                  <p className="placement-content-text">
                  The most significant issue I encountered throughout the placement was my lack of foundational 
                  knowledge regarding the software frameworks utilised by Cinefly.  Although throughout my degree 
                  I had encountered some basic theoretical concepts surrounding React, Typescript and Redux, Until the
                  placement, I had not had the opportunity to learn or apply these to real world problems. 
                  </p>
                  <p className="placement-content-text">
                  Additional to the technical requirements of the placement, time constraints presented significant 
                  issue as well.  Having to juggling both the 2 day per week placement, the additional commitments to
                  other uni subjects, along with working commitments actually proved to be more pressure than a full 
                  study load. 
                  </p>
                  <p className="placement-content-text">
                  The extra leadership responsibilities I was given proved invaluable, but also extended my commitment 
                  to the placement and created instances where my contributions were delayed in lieu of prioritising 
                  the needs of other placement participants. 
                  </p>
                  <p className="placement-content-text">
                  It’s evident that the placement delivers a real world experience, and provides participants 
                  opportunity to experience life within the ICT world. The placement highlighted the volume of 
                  work and knowledge required, beyond my degree, to prepare and enter the workforce.    
                  Languages and concepts evolve daily and the importance of self-driven learning and evolved 
                  education has been highlighted throughout the placement. 
                  </p>
                  <p className="placement-content-text">
                  The placement showed me that the degree is a mere starting point to launch a career within the 
                  ICT industry.  Each company requires specific skill sets, or software knowledge and although I may 
                  not have learnt those specific skills required, the placement has shown that the knowledge I do have 
                  is foundational and an incredible building block to start from. 
                  </p>
                  <p className="placement-content-text">
                  Moving onto the next chapter of my ICT career, I am committed to seeking further opportunities 
                  that will expand my skill set and practical knowledge.  I intend to pursue further internships 
                  whilst also continuing my formal education with an Honours or Masters Degree.  This would further
                   enhance my skills and employability whilst also building beyond the foundation created throughout 
                   the degree and placement.  When pursing further study, I will seize opportunities to work within 
                   groups and build a great understanding of group dynamics.  I will also reach for opportunities 
                   to introduce new platforms and languages to my portfolio to enhance employability and provide 
                   advanced solutions to collaborations and projects. 
                  </p>
                </div>
                <div className="placement-img-wrapper">
                  <label className="feature-header-placement">Featured Artefact</label>
                  <label className="feature-content-placement">Cinefly Landing Page</label>
                  <div className="placement-img-container">
                    <div className="overlay-img-container-placement"></div>
                    <img className="placement-img" src={Cinefly} alt="placement" />
                    <div className="border-image-placement"></div>
                  </div>
                  <label className="feature-header-placement">Featured Artefact</label>
                  <label className="feature-content-placement">Team Meeting</label>
                  <div className="placement-img-container">
                    <div className="overlay-img-container-placement"></div>
                    <img className="placement-img" src={Team1} alt="placement" />
                    <div className="border-image-placement"></div>
                  </div>
                  <label className="feature-header-placement">Featured Artefact</label>
                  <label className="feature-content-placement">Cinefly Launch Day - Team Photo</label>
                  <div className="placement-img-container">
                    <div className="overlay-img-container-placement"></div>
                    <img className="placement-img" src={Team} alt="placement" />
                    <div className="border-image-placement"></div>
                  </div>
                </div>
            </div>
        </div>
        <Email/>
      </div>
  );
}

export default Placement;