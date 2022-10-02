import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/navigation.scss";

const Navigation = () => {
    return (
    <div className="container-fluid navigation">
        <div className="row navbar">
            <div className="col-md-1 nav-home">
                <NavLink className="nav-link logo" to="/">
                    <div className="nameLogo">AT</div>
                </NavLink>
            </div>
            <div className="col-md-7 nav-home">
                <NavLink className="nav-link" to="/">
                    <label className="navHeader">Placement Portfolio</label> 
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/about">
                    <label className="numberNav">01.</label>
                    <label className="linkText">About</label>
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/skills">
                    <label className="numberNav">02.</label>
                    <label className="linkText">Skills</label>
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/placement">
                    <label className="numberNav">03.</label>
                    <label className="linkText">Placement</label>
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/internships">
                    <label className="numberNav">04.</label>
                    <label className="linkText">Internships</label>
                </NavLink>
            </div>
        </div>
    </div>
    );
  }
  
  export default Navigation;