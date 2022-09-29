import React from "react";
import { NavLink } from "react-router-dom";

import "../scss/navigation.scss";

const Navigation = () => {
    return (
      <div className="navigation">
        <div className="row navbar">
            <div className="col-md-8 nav-home">
                <NavLink className="nav-link" to="/">
                    Placement Portfolio 
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/">
                    1.0 Home
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/about">
                    2.0 About
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/projects">
                    3.0 Placement
                </NavLink>
            </div>
            <div className="col-md-1 nav-items">
                <NavLink className="nav-link" to="/contact">
                    4.0 Internship
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
  
  export default Navigation;