import React from "react";
import { NavLink } from "react-router-dom";

import "../scss/navigation.scss";

const Navigation = () => {
    return (
      <div className="navigation">
        <div className="row navbar">
            <div className="col-md-8 nav-home">
                <NavLink className="nav-link" to="/">
                    Portfolio 
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/projects">
                    Projects
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/contact">
                    Contacts
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
  
  export default Navigation;