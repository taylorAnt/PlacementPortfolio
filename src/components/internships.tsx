import React from "react";
import "../scss/internships.scss";
import "../scss/home.scss";
import Socials from './socials';
import Email from './email';


const Internships = () => {
  return (
    <div className="container-fluid internships">
        <Socials/>
        <div className="row internshipsrow">
            <div className="about-header-container">
                <h3 className="about-number">04.</h3>
                <h1 className="about-me-header">Internships</h1>
                <div className="about-line"></div>
            </div>
        </div>
        <Email/>
    </div>
  );
}

export default Internships;