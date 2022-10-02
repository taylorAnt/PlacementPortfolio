import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';
import profileImg from '../assets/profile.jpg';
import rightIcon from '../assets/right.png';



const About = () => {
  return (
    <div className="container-fluid about">
      <Socials/>
        <div className="row aboutRow">
            <div className="about-header-container">
                <h3 className="about-number">01.</h3>
                <h1 className="about-me-header">About Me</h1>
                <div className="about-line"></div>
            </div>
            <div className="about-me-1">
                <div className="profile-content-1">
                  <p className="about-me-content-text">
                    My interest in ICT began decades ago, when technology available to the masses was limited and still in its infancy.  
                    As a child born in the 80’s I was fortunate enough to witness the evolution of technological feats 
                    such as the computer, mobile phone and of course, the internet.  It was witnessing this evolution that 
                    created a solid appreciation for technology as a whole, and a grounded respect for how technology 
                    can impact and enhance societies across the globe. 
                  </p>
                  <p className="about-me-content-text">
                    Having completed my Accounting Degree in 2003, I soon realised my 
                    desire for travel and embarked on a journey abroad.  During my travels I was fortunate enough 
                    to make use of my degree and start multiple companies throughout Europe’s leading ski destinations. 
                    Whilst living abroad I always kept pace with technology developing in my field and ensured our 
                    businesses employed a forward thinking approach to new technological innovations.  
                    It was this continued engagement with technology that prompted my return to Australia to pursue 
                    study and a career in the field I am truly passionate about, ICT. 
                  </p>
                  <p className="about-me-content-text">
                    Throughout my studies I have harnessed considerable skill sets and a broad understanding of 
                    ICT concepts.  I have consistently delivered a high standard of work, which has seen me receive 
                    Academic Excellence Awards each year for the duration of my degree. I have a particular interest 
                    in front end development, along with data science and cyber security.  These areas interest me 
                    as they require an analytical mindset to critically problem solve and develop workable digital 
                    solutions that positively impact society.  
                  </p>
                </div>
                <div className="profile-img-container">
                  <div className="overlay-img-container-about"></div>
                  <img className="profile-img" src={profileImg} alt="profileImg" />
                  <div className="border-image"></div>
                </div>
            </div>
            <div className="about-me-2">
                <div className="profile-content-2">
                  <p className="about-me-content-text">
                    Moving forward I aim to finish my degree and become a valued member of a dynamic team that share the same 
                    ambitious passion for progressing the ICT industry.  I would like to incorporate my business 
                    acumen with my ICT skills and project manage innovative ideas that push boundaries and explore 
                    untapped resources within our industry.  In addition to this, I would like to complete a Master’s 
                    Degree in Data Science or Cyber Security in an effort to continue my education and enhance my 
                    foundational skills. 
                  </p>
                  <p className="about-me-content-text">
                      Here are a few of the technologies I have recently been working with:
                  </p>
                  <ul className="technical-list">
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      React
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      React Native
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      Javascript
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      Typescript
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      C#
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      PHP & Laravel
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      node.js
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      SaSS
                    </li>
                    <li className="technical-list-text">
                      <img className="rightImg" src={rightIcon}  alt="" />
                      HTML & CSS
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      <Email/>
    </div>
  );
}

export default About;