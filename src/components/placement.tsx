import React from "react";
import "../scss/placement.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';


const Placement = () => {
  return (
    <div className="container-fluid placement">
        <Socials/>
        <div className="row placementrow">
            <div className="placement-header-container">
                <h3 className="about-number">03.</h3>
                <h1 className="about-me-header">Placement</h1>
                <div className="about-line"></div>
            </div>
        </div>
        <Email/>
      </div>
  );
}

export default Placement;